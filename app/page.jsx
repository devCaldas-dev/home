'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@cloudstrytech/ui-components/button'
import Card from '@cloudstrytech/ui-components/card'
import { List, ListItem } from '@cloudstrytech/ui-components/list'
import certificateCtmSena from '../public/images/certificate_ctm_sena.webp'
import fullStackCertificate from '../public/images/full_stack.webp'

const profileImage =
  'https://pbs.twimg.com/profile_images/1652848752455999488/NOwlzFAI_400x400.jpg'
const currentYear = new Date().getFullYear()

export default function HomePage() {
  const senaDialog = useRef(null)
  const platziDialog = useRef(null)
  const aboutDialog = useRef(null)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-color-scheme')
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    const nextTheme = storedTheme || preferredTheme

    document.documentElement.dataset.theme = nextTheme
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

  const scrollToBio = () => {
    document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" href="/" scroll={false}>
            <span className="brand__name">De Caldas</span>
            <span className="brand__caption">Web Development</span>
          </Link>
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

      <main className="page-shell">
        <section aria-labelledby="page-title" className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / Web development</p>
            <h1 id="page-title">Armando Toro Cárdenas</h1>
            <p className="hero-role">Web Developer</p>
            <p className="intro-copy">
              Introducing an exceptional web developer. If you are looking for
              a valuable asset to any team in web development, you should check
              him out. Outside of work, he enjoys{' '}
              <a
                href="https://aite-website.devcaldas.workers.dev/"
                target="_blank"
                rel="noreferrer"
              >
                recording and singing rap music
              </a>
              .
            </p>
            <div className="hero-actions">
              <Button onClick={scrollToBio} type="button" variant="filled">
                Explore my story
              </Button>
              <Link className="text-link" href="/portfolio" prefetch={false}>
                View portfolio
              </Link>
            </div>
          </div>
          <div className="profile-frame">
            <Image
              alt="Portrait of Armando Toro Cárdenas"
              height={400}
              src={profileImage}
              unoptimized
              width={400}
            />
          </div>
        </section>

        <section aria-labelledby="bio-title" className="content-grid" id="bio">
          <Card className="bio-card" variant="outlined">
            <h2 id="bio-title">Bio</h2>
            <List className="timeline-list">
              <ListItem
                headline="1984"
                supportingText="Born in Caldas Antioquia Colombia"
              />
              <ListItem
                headline="2011"
                supportingText={
                  <>
                    He completed the{' '}
                    <button
                      className="inline-action"
                      onClick={() => senaDialog.current?.showModal()}
                      type="button"
                    >
                      Research Seed Program
                    </button>{' '}
                    at the CTM SENA Calatrava, Itagüí.
                  </>
                }
              />
              <ListItem
                headline="2023"
                supportingText={
                  <>
                    Also certificated as{' '}
                    <button
                      className="inline-action"
                      onClick={() => platziDialog.current?.showModal()}
                      type="button"
                    >
                      Full Stack Developer with JavaScript
                    </button>{' '}
                    by Platzi (online education platform).
                  </>
                }
              />
              <ListItem
                headline={currentYear}
                supportingText="Today debuting in the digital world..."
              />
            </List>
          </Card>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <a
            className="footer-brand"
            href="https://github.com/devCaldas-dev"
            target="_blank"
            rel="noreferrer"
          >
            Dev Caldas
          </a>
          <p>
            This website is built based on{' '}
            <button
              className="inline-action"
              onClick={() => aboutDialog.current?.showModal()}
              type="button"
            >
              Takuya Matsuyama&apos;s site
            </button>
            .
          </p>
        </div>
      </footer>

      <dialog aria-labelledby="sena-dialog-title" className="certificate-dialog" ref={senaDialog}>
        <div className="dialog-heading">
          <h2 id="sena-dialog-title">Ejecución de Proyectos Investigativos</h2>
          <Button
            onClick={() => senaDialog.current?.close()}
            type="button"
            variant="text"
          >
            Close
          </Button>
        </div>
        <Image
          alt="Certificate for research project execution from CTM SENA Calatrava"
          className="certificate-image"
          height={600}
          src={certificateCtmSena}
          unoptimized
          width={800}
        />
      </dialog>

      <dialog
        aria-labelledby="platzi-dialog-title"
        className="certificate-dialog"
        ref={platziDialog}
      >
        <div className="dialog-heading">
          <h2 id="platzi-dialog-title">
            Full Stack Developer with JavaScript
          </h2>
          <Button
            onClick={() => platziDialog.current?.close()}
            type="button"
            variant="text"
          >
            Close
          </Button>
        </div>
        <Image
          alt="Full Stack Developer with JavaScript certificate from Platzi"
          className="certificate-image"
          height={600}
          src={fullStackCertificate}
          unoptimized
          width={800}
        />
      </dialog>

      <dialog
        aria-labelledby="about-dialog-title"
        className="about-dialog"
        ref={aboutDialog}
      >
        <div className="dialog-heading">
          <h2 id="about-dialog-title">About this site</h2>
          <Button
            onClick={() => aboutDialog.current?.close()}
            type="button"
            variant="text"
          >
            Close
          </Button>
        </div>
        <p>
          This website began as a clone of Takuya Matsuyama&apos;s portfolio — a
          decision I made consciously and with purpose.
        </p>
        <p>
          Back then, I was just beginning to learn HTML, CSS, and JavaScript. I
          was eager to create something real and visible. Cloning was not about
          copying — it was my first hands-on project, my lab, my training
          ground.
        </p>
        <p>
          Since then, I&apos;ve expanded and transformed the site to reflect my
          own voice, projects, and identity as a developer. From mastering Git
          and GitHub to learning Next.js, React, and web components, this
          website has been my best teacher.
        </p>
        <p>
          I proudly keep the acknowledgment to Matsuyama in the footer, and I
          will continue to evolve this platform while staying true to my
          origin.
        </p>
        <p>
          Thanks to this project, I stepped into the world of web development —
          and I&apos;ve never looked back.
        </p>
        <a href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
          Visit Takuya Matsuyama&apos;s work
        </a>
      </dialog>
    </>
  )
}
