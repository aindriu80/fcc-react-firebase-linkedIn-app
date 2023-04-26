import React from 'react'
import { Container } from 'react-bootstrap'
import footer from '../Sass/Footer.scss'
import footerImage from '../assets/footerImage.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul className="footer-text">
          <img src={footerImage} alt="LinkedIn Footer Logo" />© 2023{''}
          {/* <a href="/">About</a>
          <a href="/">Accessibility </a>
          <a href="/">User Agreement </a>
          <a href="/">Privacy Policy</a>
          <a href="/">Community </a>
          <a href="/"> Guidelines</a>
          <a href="/">Cookie Policy </a>
          <a href="/">Copyright Policy</a>
          <a href="/">Community Guidelines</a>
          <a href="/">Language</a> */}
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
