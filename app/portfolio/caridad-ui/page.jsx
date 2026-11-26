import PortfolioProject from '../../../components/m3/portfolio-project'

export const metadata = {
  title: 'Caridad UI | Portfolio',
  description: 'Design Systems from Web Components.'
}

export default function CaridadUIPage() {
  return (
    <PortfolioProject
      description="Design Systems from Web Components."
      iframeTitle="Caridad UI"
      platformLabel="https://caridad-ui.js.org/"
      platformUrl="https://caridad-ui.js.org/"
      stack="Custom Elements, Shadow DOM, HTML Templates, ES Modules"
      title="Caridad UI"
      year="2025-"
    />
  )
}
