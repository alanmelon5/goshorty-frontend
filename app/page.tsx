import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowToPlay } from '@/components/how-to-play'
import { DownloadBar } from '@/components/download-bar'
import { LoginModal } from '@/components/login-modal'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <HowToPlay />
      <DownloadBar />
      <LoginModal />
    </main>
  )
}
