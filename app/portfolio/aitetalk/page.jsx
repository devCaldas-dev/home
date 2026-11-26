import PortfolioProject from '../../../components/m3/portfolio-project'

export const metadata = {
  title: 'AiTe TALK | Portfolio',
  description: 'Interactive English tutor with voice and GPT-3.5.'
}

export default function AiTeTalkPage() {
  return (
    <PortfolioProject
      description="Innovative SaaS platform that combines voice recognition, speech synthesis, and advanced language models (GPT-3.5-turbo) to create a conversational English tutor. Users can practice pronunciation, grammar, and conversation in real-time, with modes tailored to their level (A1–B2)."
      iframeTitle="AiTe TALK interactive English tutor"
      platformLabel="https://ai-te-talk.vercel.app/"
      platformUrl="https://ai-te-talk.vercel.app/"
      stack="APIs in production environments, Complex SaaS system (auth, DB, payment), Web Speech API."
      title="AiTe TALK – Interactive English Tutor with Voice and GPT-3.5"
      year="2025-"
    />
  )
}
