'use client'

import { IoLogoGithub } from 'react-icons/io5'

export default function FooterM3() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a
          className="footer-brand"
          href="https://github.com/devCaldas-dev"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub aria-hidden="true" focusable="false" />
          Dev Caldas
        </a>
      </div>
    </footer>
  )
}
