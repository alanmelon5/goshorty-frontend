import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="play" className="relative overflow-hidden">
      {/* Background game art */}
      <div className="absolute inset-0">
        <img
          src="/game-hero.png"
          alt="Go-Shorty character sprinting through a neon city"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/40" />
      </div>

      {/* Decorative blob */}
      <div className="absolute -left-24 top-1/2 hidden size-[28rem] -translate-y-1/2 rounded-full bg-mint/25 blur-3xl lg:block" />

      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-16 lg:justify-end lg:py-24">
        <div className="w-full max-w-xl rounded-3xl bg-navy/95 p-8 text-white shadow-2xl backdrop-blur-sm md:p-10">
          <h1 className="text-balance font-serif text-4xl font-black leading-tight md:text-5xl">
            Sprint Into Go-Shorty in Under 2 Minutes
          </h1>
          <p className="mt-4 text-xl font-medium text-white/90">
            A fast-paced neon endless runner for browser &amp; mobile.
          </p>
          <p className="mt-3 leading-relaxed text-white/70">
            Dash through collapsing cities, chain combos and outrun the glitch —
            true pick-up-and-play arcade action with no downloads required.
          </p>

          <div className="my-6 flex items-center gap-4 text-sm text-white/70">
            <span className="h-px flex-1 bg-white/15" />
            Jump in from <span className="font-semibold text-white">1 run to endless</span> in an instant
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="gamertag">
              Choose your gamertag
            </label>
            <div className="flex flex-1 items-center overflow-hidden rounded-full bg-white">
              <span className="flex h-full items-center bg-gradient-to-b from-grad-blue to-grad-purple px-3 py-3 text-xs font-bold text-white">
                TAG
              </span>
              <input
                id="gamertag"
                type="text"
                placeholder="ENTER GAMERTAG"
                className="w-full bg-white px-4 py-3 font-semibold tracking-wide text-navy placeholder:text-navy/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
            >
              Play Now
              <ArrowRight className="size-5" />
            </button>
          </form>
          <p className="mt-3 text-center text-sm text-white/60 sm:text-left">
            No account yet?{' '}
            <a href="#play" className="text-mint underline-offset-2 hover:underline">
              Play as guest.
            </a>
          </p>

          <div className="mt-7 flex items-center gap-2 text-sm">
            <span className="font-semibold">Excellent</span>
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-mint text-mint" />
              ))}
            </span>
            <span className="text-white/70">21,587 player reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
