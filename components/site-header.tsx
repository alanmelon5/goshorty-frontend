import { ChevronDown, Star, User } from 'lucide-react'

export function SiteHeader() {
  return (
    <header>
      {/* Top utility bar */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rated Excellent</span>
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-mint text-mint" />
              ))}
            </span>
            <span className="text-white/60">by 21,587 players</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Secondary">
            <a href="#about" className="underline-offset-4 hover:underline">
              About Go-Shorty
            </a>
            <a href="#download" className="underline-offset-4 hover:underline">
              Download The Game
            </a>
            <a href="#community" className="underline-offset-4 hover:underline">
              Community
            </a>
            <a href="#devlog" className="underline-offset-4 hover:underline">
              Devlog
            </a>
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-navy/10 bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <button className="flex items-center gap-1 font-semibold text-navy transition-colors hover:text-navy/70">
            What&apos;s Inside
            <ChevronDown className="size-4" />
          </button>

          <a href="/" className="group flex flex-col items-center">
            <span className="font-serif text-3xl font-black tracking-tight text-navy md:text-4xl">
              Go<span className="text-navy">Shorty</span>
            </span>
            <span className="mt-1 h-1 w-32 rounded-full bg-gradient-to-r from-grad-green via-grad-blue to-grad-purple" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="#faq"
              className="hidden font-semibold text-navy underline-offset-4 hover:underline sm:inline"
            >
              Help
            </a>
            <a
              href="#play"
              className="flex items-center gap-2 rounded-full border-2 border-grad-blue px-5 py-2.5 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Sign In
              <User className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
