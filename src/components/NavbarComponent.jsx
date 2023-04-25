import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import discover from '../assets/discover.svg'
import people from '../assets/people.svg'
import learning from '../assets/learning.svg'
import jobs from '../assets/jobs.svg'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import '../Sass/NavbarComponent.scss'

function NavbarComponent() {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              src={LinkedInLogo}
              width="140"
              height="40"
              alt="LinkedIn Logo"
            />
          </Link>
        </Navbar.Brand>

        <Form className="d-flex">
          <Nav className="" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center">
              <div>
                <img src={discover} width="24px" height="24px" />
              </div>
              <div>Discover</div>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center">
              <div>
                <img src={people} width="24px" height="24px" />
              </div>
              People
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center">
              <div>
                <img src={learning} width="24px" height="24px" />
              </div>
              Learning
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center">
              <div>
                <img src={jobs} width="24px" height="24px" />
              </div>
              Jobs
            </Nav.Link>
          </Nav>
          <Button variant="flat">
            <Link to="/register">Join now</Link>
          </Button>

          <Button variant="header-sign-in">
            <Link to="/login">Sign in</Link>
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
