import React from 'react'

const Footer = () => {
  return (
    <footer className="li-footer">
      <ul className="li-footer__list">
        <li className="li-footer__item">
          <span className="sr-only">LinkedIn</span>
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
            </button>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
