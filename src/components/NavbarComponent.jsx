import Button from 'react-bootstrap/Button'
import LinkedInLogo from '../assets/LinkedInLogo.svg'
import discover from '../assets/discover.svg'
import people from '../assets/people.svg'
import learning from '../assets/learning.svg'
import jobs from '../assets/jobs.svg'
import { Link } from 'react-router-dom'
import '../Sass/NavbarComponent.scss'

function NavbarComponent() {
  return (
    <div className="Navbar">
      <div className="Navbar__Link Navbar__Link-brand">
        <Link to="/">
          <img src={LinkedInLogo} width="140" height="40" alt="LinkedIn Logo" />
        </Link>
      </div>
      <div className="Navbar__Link Navbar__Link-toggle">
        <i className="fas fa-bars"></i>
      </div>
      <nav className="Navbar__Items Navbar__Items--right">
        <div className="Navbar__Link">
          <img src={discover} width="24px" height="24px" />
          <div className="Navbar__Text">Discover</div>
        </div>
        <div className="Navbar__Link">
          <img src={people} width="24px" height="24px" />
          <div className="Navbar__Text">People</div>
        </div>
        <div className="Navbar__Link">
          <img src={learning} width="24px" height="24px" />

          <div className="Navbar__Text">Learning</div>
        </div>
        <div className="Navbar__Link">
          <img src={jobs} width="24px" height="24px" />
          <div className="Navbar__Text">Jobs</div>
        </div>
        <div className="Navbar__Link">
          <Button className="btn-md btn-primary-no-emphasis">
            <Link to="/register">Join now</Link>
          </Button>
        </div>
        <div className="Navbar__Link">
          <Button className="btn-md btn-secondary-emphasis ">
            <Link to="/login">Sign in</Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}

export default NavbarComponent
