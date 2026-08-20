import { ArrowRight, BadgeCheck, CheckCircle2, FileText, PoundSterling, Quote, Star } from 'lucide-react'

const steps = [
  {
    n: '1',
    numClass: 'text-grad-purple',
    icon: FileText,
    text: 'Fill out our quick online form',
    indent: 'lg:ml-0',
  },
  {
    n: '2',
    numClass: 'text-grad-blue',
    icon: PoundSterling,
    text: 'Get an online quote & choose your options',
    indent: 'lg:ml-16',
  },
  {
    n: '3',
    numClass: 'text-grad-green',
    icon: CheckCircle2,
    text: 'Just pay online & you are instantly insured!',
    indent: 'lg:ml-0',
  },
]

export function HowToPlay() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Steps */}
        <div>
          <h2 className="max-w-md text-balance font-serif text-4xl font-black leading-tight text-navy md:text-5xl">
            How to Get Instant Temporary Insurance
          </h2>

          <ul className="mt-12 space-y-10">
            {steps.map(({ n, numClass, icon: Icon, text, indent }) => (
              <li key={n} className={`flex items-center gap-4 ${indent}`}>
                <span className={`w-14 shrink-0 text-center font-serif text-8xl font-black leading-none ${numClass}`}>
                  {n}
                </span>
                <div className="relative flex min-h-[5.5rem] flex-1 items-center rounded-[1.75rem] bg-navy py-5 pl-24 pr-6">
                  <span className="absolute -left-7 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-grad-green via-grad-blue to-grad-purple shadow-lg">
                    <Icon className="size-9 text-white" strokeWidth={2} />
                  </span>
                  <p className="text-lg font-medium leading-snug text-white">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center lg:justify-start">
            <a
              href="#quote"
              className="inline-flex items-center gap-3 rounded-full bg-mint px-10 py-5 text-2xl font-black text-mint-foreground shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              Get a Quote Now
              <ArrowRight className="size-6" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Reviews panel */}
        <div
          id="reviews"
          className="relative overflow-hidden rounded-[2rem] bg-navy p-8 md:p-12"
        >
          {/* Decorative curved shapes */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-24 -top-24 size-72 rounded-full border-[3rem] border-grad-green/70" />
            <div className="absolute -left-40 top-24 size-96 rounded-full border-[3rem] border-grad-blue/40" />
            <div className="absolute -bottom-24 -right-16 size-80 rounded-full border-[3rem] border-grad-purple/60" />
            <div className="absolute -bottom-10 left-10 h-40 w-96 rounded-full bg-grad-green/40 blur-2xl" />
          </div>

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Quote className="mt-1 size-9 shrink-0 fill-grad-purple text-grad-purple" />
              <h3 className="text-balance font-serif text-3xl font-black leading-tight text-white md:text-4xl">
                Don&apos;t just take our word for it
              </h3>
            </div>
            <span className="flex size-16 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-br from-grad-green to-grad-blue text-center text-sm font-black text-navy">
              10K
              <span className="text-[10px] font-medium">reviews</span>
            </span>
          </div>

          <div className="relative mt-10 rounded-lg bg-white p-6 text-navy shadow-2xl">
            <div className="flex flex-col items-center gap-2">
              <span className="flex items-center gap-1.5 text-lg font-bold">
                <Star className="size-5 fill-grad-green text-grad-green" />
                Trustpilot
              </span>
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="flex size-8 items-center justify-center bg-grad-green">
                    <Star className="size-5 fill-white text-white" />
                  </span>
                ))}
              </span>
              <p className="mt-1 text-base font-semibold">
                TrustScore 4.7 &nbsp;|&nbsp;{' '}
                <span className="underline underline-offset-2">21,587 reviews</span>
              </p>
            </div>
            <hr className="my-5 border-navy/10" />
            <p className="text-sm text-navy/60">Showing our 3, 4 &amp; 5 star reviews</p>
            <p className="mt-4 flex items-center gap-2 text-lg font-bold">
              The Price is too high
              <span className="inline-flex items-center gap-1 rounded-full px-1 text-sm font-medium text-navy/50">
                <BadgeCheck className="size-4 fill-grad-blue text-white" />
                Verified
              </span>
            </p>
            <p className="mt-1 text-navy/80">The Price is too high</p>
            <p className="mt-6 text-sm font-bold text-navy/80">
              Mulazem, <span className="font-normal text-navy/50">3 hours ago</span>
            </p>
          </div>

          <div className="relative mt-6 text-right">
            <a
              href="#reviews"
              className="inline-block font-semibold text-mint underline underline-offset-4"
            >
              See all our reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
