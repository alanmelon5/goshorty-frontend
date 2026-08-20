import { Apple, Play } from 'lucide-react'

export function DownloadBar() {
  return (
    <section id="download" className="bg-navy-soft">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 text-white md:flex-row">
        <p className="text-center text-lg md:text-left">
          <span className="font-bold">Download the app:</span> Earn XP &amp; sprint
          into new levels faster
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-3 rounded-xl border border-white/20 bg-navy px-5 py-3 transition-colors hover:bg-white/10"
          >
            <Apple className="size-7" />
            <span className="flex flex-col leading-tight">
              <span className="text-xs text-white/60">Download on the</span>
              <span className="font-semibold">App Store</span>
            </span>
          </a>
          <a
            href="#download"
            className="flex items-center gap-3 rounded-xl border border-white/20 bg-navy px-5 py-3 transition-colors hover:bg-white/10"
          >
            <Play className="size-7" />
            <span className="flex flex-col leading-tight">
              <span className="text-xs text-white/60">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
