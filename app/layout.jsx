import '@cloudstrytech/ui-components/styles.css'
import './globals.css'

const description =
  'Portfolio of Armando Toro Cárdenas, web developer with solid knowledge of the JavaScript ecosystem.'
const favicon =
  'https://pbs.twimg.com/media/FlFT-KJWIAADq21?format=webp&name=tiny'
const socialImage =
  'https://github.com/deCaldas/home/blob/main/pages/opengraph-imalogo.png?raw=true'

export const metadata = {
  title: "Armando's Homepage",
  description,
  icons: {
    icon: favicon
  },
  openGraph: {
    siteName: 'Armando Toro Cárdenas',
    title: 'Armando Toro Cárdenas',
    type: 'website',
    images: [socialImage]
  },
  twitter: {
    title: 'Armando Toro Cárdenas',
    card: 'summary_large_image',
    site: '@d_caldasCaridad',
    creator: '@d_caldasCaridad',
    images: [socialImage]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
