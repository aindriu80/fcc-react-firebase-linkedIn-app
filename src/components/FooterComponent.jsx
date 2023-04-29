import React from 'react'
import { Container } from 'react-bootstrap'
import footer from '../Sass/Footer.scss'
import footerImage from '../assets/footerImage.svg'

const Footer = () => {
  return (
    <footer class="li-footer">
      <ul class="li-footer__list">
        <li class="li-footer__item">
          <span class="sr-only">LinkedIn</span>
          <icon class="li-footer__copy-logo lazy-loaded" aria-hidden="true">
            <svg
              viewBox="0 0 56 14"
              preserveAspectRatio="xMinYMin meet"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              fill="CurrentColor"
              focusable="false"
              class="lazy-loaded"></svg>
          </icon>
          <span class="li-footer__copy-text">© 2023</span>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            About
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Accessibility
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            User Agreement
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Privacy Policy
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Cookie Policy
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Copyright Policy
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Brand Policy
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Guest Controls
          </a>
        </li>
        <li class="li-footer__item">
          <a href="/" class="li-footer__item-link">
            Community Guidelines
          </a>
        </li>
        <li class="li-footer__item">
          <div class="collapsible-dropdown language-selector collapsible-dropdown--footer language-selector--footer collapsible-dropdown--up language-selector--up">
            <ul
              class="collapsible-dropdown__list language-selector__list hidden sf-hidden"
              role="menu"
              tabindex="-1"></ul>
            <button
              class="language-selector__button"
              aria-expanded="false"
              data-tracking-control-name="footer-lang-dropdown_trigger">
              <span class="language-selector__label-text">Language</span>
              <icon
                class="language-selector__label-chevron lazy-loaded"
                aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  preserveAspectRatio="xMinYMin meet"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  class="lazy-loaded"></svg>
              </icon>
            </button>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
