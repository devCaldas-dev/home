'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@cloudstrytech/ui-components/button'
import Card from '@cloudstrytech/ui-components/card'
import { List, ListItem } from '@cloudstrytech/ui-components/list'
import PageHero from '../components/m3/page-hero'
import SiteLayout from '../components/m3/site-layout'
import certificateCtmSena from '../public/images/certificate_ctm_sena.webp'
import fullStackCertificate from '../public/images/full_stack.webp'

const currentYear = new Date().getFullYear()

export default function HomePage() {
  const senaDialog = useRef(null)
  const platziDialog = useRef(null)

  const scrollToBio = () => {
    document.getElementById('bio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SiteLayout>
        <PageHero
          description={
            <>
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
            </>
          }
          eyebrow="Portfolio / Web development"
          media={
            <Image
              alt="Portrait of Armando Toro Cárdenas"
              height={400}
              src="https://pbs.twimg.com/profile_images/1652848752455999488/NOwlzFAI_400x400.jpg"
              unoptimized
              width={400}
            />
          }
          subtitle="Web Developer"
          title="Armando Toro Cárdenas"
        >
          <div className="hero-actions">
            <Button onClick={scrollToBio} type="button" variant="filled">
              Explore my story
            </Button>
            <Link className="text-link" href="/portfolio" prefetch={false}>
              View portfolio
            </Link>
          </div>
        </PageHero>

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
      </SiteLayout>

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
    </>
  )
}
