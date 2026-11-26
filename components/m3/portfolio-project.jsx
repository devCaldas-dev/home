'use client'

import Link from 'next/link'
import Card from '@cloudstrytech/ui-components/card'
import { List, ListItem } from '@cloudstrytech/ui-components/list'
import PageHero from './page-hero'
import SiteLayout from './site-layout'

export default function PortfolioProject({
  title,
  year,
  description,
  platformLabel,
  platformUrl,
  stack,
  iframeTitle
}) {
  return (
    <SiteLayout>
      <PageHero
        className="project-hero"
        eyebrow="Portfolio project"
        subtitle={year}
        title={title}
      />
      <section aria-label={`${title} details`} className="project-details">
        <Card className="project-detail-card" variant="outlined">
          <p>{description}</p>
          <List className="project-meta-list">
            <ListItem
              headline="Platform"
              supportingText={
                <a href={platformUrl} target="_blank" rel="noreferrer">
                  {platformLabel} <span aria-hidden="true">↗</span>
                </a>
              }
            />
            <ListItem headline="Stack" supportingText={stack} />
          </List>
          <div className="project-embed">
            <iframe
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={platformUrl}
              title={iframeTitle}
            />
          </div>
          <Link className="text-link project-back-link" href="/portfolio">
            Back to portfolio
          </Link>
        </Card>
      </section>
    </SiteLayout>
  )
}
