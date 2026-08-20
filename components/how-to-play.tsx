import { ArrowRight, BadgeCheck, CheckCircle2, FileText, PoundSterling, Star } from 'lucide-react'

const steps = [
  {
    n: '1',
    numClass: 'text-grad-purple',
    icon: FileText,
    text: 'Fill out our quick online form',
  },
  {
    n: '2',
    numClass: 'text-grad-blue',
    icon: PoundSterling,
    text: 'Get an online quote & choose your options',
  },
  {
    n: '3',
    numClass: 'text-grad-green',
    icon: CheckCircle2,
    text: 'Just pay online & you are instantly insured!',
  },
]

export function HowToPlay() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Steps */}
        <div>
          <h2 className="text-balance font-serif text-4xl font-black leading-tight text-navy md:text-5xl">
            How to Get Instant Temporary Insurance
          </h2>

          <ul className="mt-10 space-y-8">
            {steps.map(({ n, numClass, icon: Icon, text }) => (
              <li key={n} className="flex items-center gap-5">
                <span className={`font-serif text-7xl font-black leading-none ${numClass}`}>
                  {n}
                </span>
                <div className="flex flex-1 items-center overflow-hidden rounded-2xl bg-navy">
                  <span className="flex size-20 shrink-0 items-center justify-center rounded-r-2xl bg-gradient-to-br from-grad-green via-grad-blue to-grad-purple">
                    <Icon className="size-8 text-white" />
                  </span>
                  <p className="px-5 py-4 text-lg font-medium text-white">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#quote"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-mint px-8 py-4 text-xl font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            Get a Quote Now
            <ArrowRight className="size-5" />
          </a>
        </div>

        {/* Reviews panel */}
        <div id="reviews" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10">
          <div className="absolute -left-16 top-0 size-72 rounded-full bg-grad-green/30 blur-2xl" />
          <div className="absolute -right-10 bottom-10 size-56 rounded-full bg-grad-purple/30 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <h3 className="text-balance font-serif text-3xl font-black leading-tight text-white md:text-4xl">
              Don&apos;t just take our word for it
            </h3>
            <span className="flex size-16 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-br from-grad-green to-grad-blue text-center text-sm font-black text-navy">
              10K
              <span className="text-[10px] font-medium">reviews</span>
            </span>
          </div>

          <div className="relative mt-8 rounded-2xl bg-white p-6 text-navy shadow-xl">
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold">Trustpilot</span>
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="flex size-7 items-center justify-center bg-grad-green">
                    <Star className="size-4 fill-white text-white" />
                  </span>
                ))}
              </span>
              <p className="text-sm font-semibold">
                TrustScore 4.7 &nbsp;|&nbsp;{' '}
                <span className="underline underline-offset-2">21,587 reviews</span>
              </p>
            </div>
            <hr className="my-4 border-navy/10" />
            <p className="text-sm text-navy/60">Showing our 3, 4 &amp; 5 star reviews</p>
            <p className="mt-3 flex items-center gap-2 font-bold">
              The Price is too high
              <span className="inline-flex items-center gap-1 rounded-full bg-grad-green/15 px-2 py-0.5 text-xs font-semibold text-grad-green">
                <BadgeCheck className="size-3.5" />
                Verified
              </span>
            </p>
            <p className="mt-1 text-navy/80">The Price is too high</p>
            <p className="mt-4 text-sm font-semibold text-navy/60">Mulazem, 3 hours ago</p>
          </div>

          <a
            href="#reviews"
            className="relative mt-6 inline-block font-semibold text-mint underline underline-offset-4"
          >
            See all our reviews
          </a>
        </div>
      </div>
    </section>
  )
}
