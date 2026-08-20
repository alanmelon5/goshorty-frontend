import { ChevronDown, Star, User } from 'lucide-react'
import { LoginButton } from '@/components/login-button'

export function SiteHeader() {
  return (
    <header>
      {/* Top utility bar */}
      <div className="bg-[#08080a] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold underline underline-offset-2">Excellent</span>
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="flex size-4 items-center justify-center bg-mint"
                >
                  <Star className="size-3 fill-white text-white" />
                </span>
              ))}
            </span>
            <span className="font-semibold">Trustpilot</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Secondary">
            <a href="#about" className="font-medium underline underline-offset-4 hover:text-mint">
              About GoShorty
            </a>
            <a href="#download" className="font-medium underline underline-offset-4 hover:text-mint">
              Download Our App For Our Best Prices
            </a>
            <a href="#contact" className="font-medium underline underline-offset-4 hover:text-mint">
              Contact
            </a>
            <a href="#blog" className="font-medium underline underline-offset-4 hover:text-mint">
              Blog
            </a>
            <a href="#cover" className="font-medium underline underline-offset-4 hover:text-mint">
              Who We Cover
            </a>
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-navy/10 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-4 py-5 md:grid-cols-3">
          <button className="flex items-center gap-1 text-lg font-bold text-navy transition-colors hover:text-navy/70">
            What We Cover
            <ChevronDown className="size-5 text-grad-purple" />
          </button>

          <a href="/" className="hidden flex-col items-center md:flex">
            <span className="font-serif text-[2.75rem] font-black leading-none tracking-tight text-navy">
              GoShorty
            </span>
            <span className="mt-1.5 flex w-44 items-center gap-1">
              {['bg-grad-green', 'bg-grad-green', 'bg-grad-blue', 'bg-grad-blue', 'bg-grad-purple', 'bg-grad-purple'].map(
                (color, i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${color}`} />
                ),
              )}
            </span>
          </a>

          <div className="flex items-center justify-end gap-6">
            <a
              href="#help"
              className="hidden text-lg font-bold text-navy sm:inline"
            >
              Help
            </a>
            <LoginButton
              className="flex items-center gap-2 rounded-full border-2 border-grad-blue px-7 py-2.5 text-lg font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              aria-label="Sign in"
            >
              Sign In
              <User className="size-4" />
            </LoginButton>
          </div>
        </div>
      </div>
    </header>
  )
}
