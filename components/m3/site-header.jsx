'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Button from '@cloudstrytech/ui-components/button'
import Branding from './branding'

export default function SiteHeader() {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-color-scheme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    document.documentElement.dataset.theme = storedTheme || preferredTheme
  }, [])

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('portfolio-color-scheme', nextTheme)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Branding />
        <nav aria-label="Primary navigation" className="site-nav">
          <Link href="/portfolio" prefetch={false}>
            Portfolio
          </Link>
          <a
            href="https://web-developer-blog.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Blog <span aria-hidden="true">↗</span>
          </a>
          <Button
            aria-label="Toggle light and dark color theme"
            onClick={toggleTheme}
            type="button"
            variant="text"
          >
            Toggle theme
          </Button>
        </nav>
      </div>
    </header>
  )
}
