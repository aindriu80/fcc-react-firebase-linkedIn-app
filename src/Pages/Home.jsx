import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import discover from '../assets/discover.svg'
import people from '../assets/people.svg'
import learning from '../assets/learning.svg'
import jobs from '../assets/jobs.svg'

import { Link } from 'react-router-dom'

function NavScrollExample() {
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: white;
      text=black;

      color: white;
    }

     
    `}
      </style>

      <Navbar bg="white" expand="lg" fixed="top" variant="light">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={LinkedInLogo}
              width="140"
              height="40"
              className=""
              alt="LinkedIn Logo"
            />
          </Navbar.Brand>

          <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>

          <Form className="d-flex">
            <Navbar.Toggle aria-controls="navbarScroll" />
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
          </Form>

          <Button variant="outline-success">
            <Link to="/login">Sign in</Link>
          </Button>
        </Container>
      </Navbar>
      <h1>Welcome to your professional community</h1>
    </>
  )
}

export default NavScrollExample
