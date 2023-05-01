import React from 'react'
// import { Container } from 'react-bootstrap'
// import footer from '../Sass/Footer.scss'
// import footerImage from '../assets/footerImage.svg'

const Footer = () => {
  return (
    <footer className="li-footer">
      <ul className="li-footer__list">
        <li className="li-footer__item">
          <span className="sr-only">LinkedIn</span>
          {/* <icon className="li-footer__copy-logo lazy-loaded" aria-hidden="true">
            <svg
              viewBox="0 0 56 14"
              preserveAspectRatio="xMinYMin meet"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              fill="CurrentColor"
              focusable="false"
              className="lazy-loaded"></svg>
          </icon> */}
          <span className="li-footer__copy-text">© 2023</span>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            About
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Accessibility
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            User Agreement
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Privacy Policy
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Cookie Policy
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Copyright Policy
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Brand Policy
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Guest Controls
          </a>
        </li>
        <li className="li-footer__item">
          <a href="/" className="li-footer__item-link">
            Community Guidelines
          </a>
        </li>
        <li className="li-footer__item">
          <div className="collapsible-dropdown language-selector collapsible-dropdown--footer language-selector--footer collapsible-dropdown--up language-selector--up">
            <ul
              className="collapsible-dropdown__list language-selector__list hidden sf-hidden"
              role="menu"
              tabIndex="-1"></ul>
            <button
              className="language-selector__button"
              aria-expanded="false"
              data-tracking-control-name="footer-lang-dropdown_trigger">
              <span className="language-selector__label-text">Language</span>
              {/* <icon
                className="language-selector__label-chevron lazy-loaded"
                aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  preserveAspectRatio="xMinYMin meet"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  className="lazy-loaded"></svg>
              </icon> */}
            </button>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
