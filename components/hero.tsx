import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="signin" className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="/insurance-hero.png"
          alt="A couple sitting in the boot of their car"
          className="size-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-navy/30" />
      </div>

      {/* Green organic shape */}
      <div className="absolute -left-24 top-0 hidden size-[30rem] rounded-full bg-mint/60 blur-2xl lg:block" />

      <div className="relative mx-auto flex max-w-7xl justify-center px-4 py-14 lg:justify-center lg:py-20">
        <div className="w-full max-w-2xl rounded-3xl bg-navy/95 p-8 text-white shadow-2xl backdrop-blur-sm md:p-12">
          <h1 className="text-balance text-center font-serif text-4xl font-black leading-tight md:text-5xl">
            Get Temporary Car Insurance in Under 2 Minutes
          </h1>
          <p className="mt-5 text-center font-serif text-2xl font-bold text-white md:text-3xl">
            Short term cover for cars, vans &amp; learners
          </p>
          <p className="mt-4 text-center leading-relaxed text-white/80">
            Flexible comprehensive cover from 1 hour to 28 days &ndash; true
            pay-as-you-go flexibility without the annual commitment.
          </p>

          <div className="my-6 flex items-center gap-4 text-sm text-white/80">
            <span className="h-px flex-1 bg-white/15" />
            <span className="whitespace-nowrap">
              Cover from <span className="font-bold text-white">1 hour to 28 days</span> in an instant
            </span>
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <form className="flex flex-col gap-3 sm:flex-row" action="#quote">
            <label className="sr-only" htmlFor="reg">
              Enter your registration
            </label>
            <div className="flex flex-1 items-center overflow-hidden rounded-xl bg-white ring-2 ring-navy/20">
              <span className="flex h-full flex-col items-center justify-center bg-grad-blue px-2 py-2 text-white">
                <span className="text-xs font-black leading-none">UK</span>
              </span>
              <input
                id="reg"
                type="text"
                placeholder="ENTER REG"
                className="w-full bg-white px-4 py-4 text-xl font-black tracking-widest text-navy/40 placeholder:text-navy/40 focus:text-navy focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-lg font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
            >
              Get A Quote
              <ArrowRight className="size-5" />
            </button>
          </form>
          <p className="mt-3 text-center text-sm text-white/80">
            Don&apos;t know the reg?{' '}
            <a href="#quote" className="underline underline-offset-2 hover:text-mint">
              Click here.
            </a>
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 text-sm">
            <span className="font-bold">Excellent</span>
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="flex size-4 items-center justify-center bg-mint">
                  <Star className="size-3 fill-white text-white" />
                </span>
              ))}
            </span>
            <a href="#reviews" className="font-semibold underline underline-offset-2">
              21,587 reviews on
            </a>
            <span className="font-semibold">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Trustpilot green bar */}
      <div className="relative bg-mint">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3 text-mint-foreground">
          <span className="font-bold">Excellent</span>
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="flex size-5 items-center justify-center bg-navy">
                <Star className="size-3.5 fill-white text-white" />
              </span>
            ))}
          </span>
          <a href="#reviews" className="font-semibold underline underline-offset-2">
            21,587 reviews on
          </a>
          <span className="font-semibold">Trustpilot</span>
        </div>
      </div>
    </section>
  )
}
