'use client'

import { useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import IconButton from '@cloudstrytech/ui-components/iconbutton'
import Branding from './branding'

const themeChangeEvent = 'portfolio-theme-change'

function getThemeSnapshot() {
  return document.documentElement.dataset.theme || 'light'
}

function subscribeToTheme(onChange) {
  window.addEventListener(themeChangeEvent, onChange)
  return () => window.removeEventListener(themeChangeEvent, onChange)
}

function getServerThemeSnapshot() {
  return 'light'
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  window.dispatchEvent(new Event(themeChangeEvent))
}

export default function SiteHeader() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  )

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-color-scheme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    const nextTheme = storedTheme || preferredTheme
    applyTheme(nextTheme)
  }, [])

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
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
          <IconButton
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className="theme-toggle-button"
            onClick={toggleTheme}
          >
            <span aria-hidden="true" className="material-symbols-outlined">
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </IconButton>
        </nav>
      </div>
    </header>
  )
}
