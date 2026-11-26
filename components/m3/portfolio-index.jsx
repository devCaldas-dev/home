'use client'

import Image from 'next/image'
import Link from 'next/link'
import Card from '@cloudstrytech/ui-components/card'
import MatrixRain from './matrix-rain'
import PageHero from './page-hero'
import SiteLayout from './site-layout'
import aitetalk from '../../public/images/aitetalk.webp'
import screenshot80sMusicGallery from '../../public/images/screenshot_80smusicgallery.webp'
import coverCaridadUI from '../../public/images/cover_caridadui.webp'

const projects = [
  {
    id: 'caridad-ui',
    title: 'Caridad UI',
    description:
      'Built with native Web Components, focused on reusability, accessibility, and performance.',
    thumbnail: coverCaridadUI
  },
  {
    id: 'aitetalk',
    title: 'AiTe TALK',
    description:
      'AI-powered conversational tutor for learning English, built with React and OpenAI API. Ideal project for english learners looking to practice realistic conversations without pressure.',
    thumbnail: aitetalk
  },
  {
    id: 'musicgallery',
    title: "80's Music Gallery",
    description:
      'A dynamic web gallery that allows you to interactively browse, search, and filter songs using JavaScript.',
    thumbnail: screenshot80sMusicGallery
  }
]

function ProjectCard({ project }) {
  return (
    <Card className="portfolio-project-card" variant="outlined">
      <Link
        aria-label={`View ${project.title} project`}
        className="portfolio-project-link"
        href={`/portfolio/${project.id}`}
        prefetch={false}
      >
        <Image
          alt=""
          className="portfolio-project-image"
          src={project.thumbnail}
          unoptimized
        />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </Link>
    </Card>
  )
}

export default function PortfolioIndex() {
  return (
    <SiteLayout>
      <PageHero
        className="portfolio-hero"
        eyebrow="Armando Toro Cárdenas"
        title="Hello World!"
      />
      <Card className="matrix-card" variant="outlined">
        <MatrixRain />
      </Card>
      <section aria-labelledby="projects-title" className="portfolio-projects">
        <h2 id="projects-title">Projects</h2>
        <div className="portfolio-project-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
