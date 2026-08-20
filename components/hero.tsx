import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="signin" className="relative overflow-hidden">
      {/* Gradient headband stripe */}
      <div className="h-2 w-full bg-gradient-to-r from-grad-green via-grad-blue to-grad-purple" />

      <div className="relative">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/insurance-hero.png"
            alt="A couple sitting in the boot of their car"
            className="size-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/20" />
        </div>

        {/* Green organic shapes */}
        <div className="absolute left-0 top-10 hidden size-[26rem] -translate-x-1/3 rounded-full bg-mint/70 lg:block" />
        <div className="absolute -bottom-16 left-0 hidden h-40 w-[36rem] rounded-full bg-mint/70 lg:block" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-14 lg:py-20">
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

            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-full bg-mint px-10 py-4 text-lg font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
              >
                Get A Quote
                <ArrowRight className="size-5" />
              </button>
            </div>

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

          {/* Awards badge */}
          <div className="absolute bottom-10 right-4 hidden max-w-xs bg-navy/90 p-5 text-white xl:block">
            <div className="flex gap-6">
              <div>
                <p className="font-serif text-lg font-black leading-none">
                  Insurance Times
                </p>
                <p className="font-serif text-2xl font-black leading-none">
                  awards<span className="align-super text-sm">2023</span>
                </p>
                <p className="mt-3 text-sm font-black text-mint">GOLD WINNER</p>
                <p className="text-xs text-white/70">Personal Lines Broker of the Year</p>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">
                  National Insurance Awards 2024
                </p>
                <p className="mt-3 text-sm font-black text-grad-blue">DOUBLE WINNER</p>
                <p className="text-xs text-white/70">
                  Personal Lines Broker of the Year
                </p>
                <p className="text-xs text-white/70">Innovative Product Award</p>
              </div>
            </div>
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
