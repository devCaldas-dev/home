'use client'

import SiteHeader from './site-header'
import FooterM3 from './footer-m3'

export default function SiteLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">{children}</main>
      <FooterM3 />
    </>
  )
}
