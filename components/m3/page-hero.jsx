'use client'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  media,
  children,
  className = 'hero-grid'
}) {
  return (
    <section aria-label={title} className={className}>
      <div className="hero-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="hero-role">{subtitle}</p>}
        {description && <div className="intro-copy">{description}</div>}
        {children}
      </div>
      {media && <div className="profile-frame">{media}</div>}
    </section>
  )
}
