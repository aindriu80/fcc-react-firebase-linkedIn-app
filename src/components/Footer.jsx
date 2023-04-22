import React from 'react'
import { Container } from 'react-bootstrap'
import footer from '../Sass/Footer.scss'
import footerImage from '../assets/footerImage.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p className="footer-text">
          <img src={footerImage} alt="LinkedIn Footer Logo" />© 2023 User
          Agreement Privacy Policy Community Guidelines Cookie Policy Copyright
          Policy Send Feedback
        </p>
      </Container>
    </footer>
  )
}

export default Footer
