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
      <div className="bg-header text-header-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-6 md:grid-cols-3">
          <button className="flex items-center gap-2 text-xl font-bold text-header-foreground transition-colors hover:text-header-foreground/70">
            What We Cover
            <ChevronDown className="size-6 text-grad-purple" strokeWidth={3} />
          </button>

          <a href="/" className="hidden flex-col items-center md:flex">
            <span className="font-serif text-5xl font-black leading-none tracking-tight text-header-foreground">
              GoShorty
            </span>
            <span className="mt-2 flex w-[13.5rem] items-center gap-[3px]">
              {[
                'bg-grad-green',
                'bg-grad-green',
                'bg-grad-green',
                'bg-grad-blue',
                'bg-grad-blue',
                'bg-grad-blue',
                'bg-grad-purple',
                'bg-grad-purple',
                'bg-grad-purple',
              ].map((color, i) => (
                <span key={i} className={`h-[3px] flex-1 rounded-full ${color}`} />
              ))}
            </span>
          </a>

          <div className="flex items-center justify-end gap-8">
            <a
              href="#help"
              className="hidden text-xl font-bold text-header-foreground sm:inline"
            >
              Help
            </a>
            <LoginButton
              className="flex items-center gap-2 rounded-full border-2 border-grad-blue px-8 py-3 text-xl font-bold text-header-foreground transition-colors hover:bg-grad-blue/5"
              aria-label="Sign in"
            >
              Sign In
              <User className="size-5" strokeWidth={2.5} />
            </LoginButton>
          </div>
        </div>
      </div>
    </header>
  )
}
