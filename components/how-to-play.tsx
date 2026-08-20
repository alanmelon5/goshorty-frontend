import { ArrowRight, BadgeCheck, ClipboardList, Gamepad2, Star, Trophy } from 'lucide-react'

const steps = [
  {
    n: '1',
    numClass: 'text-grad-purple',
    icon: ClipboardList,
    text: 'Pick a gamertag & choose your runner',
  },
  {
    n: '2',
    numClass: 'text-grad-blue',
    icon: Gamepad2,
    text: 'Dash, dodge & chain combos through the city',
  },
  {
    n: '3',
    numClass: 'text-grad-green',
    icon: Trophy,
    text: 'Bank your score & climb the leaderboard!',
  },
]

export function HowToPlay() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Steps */}
        <div>
          <h2 className="text-balance font-serif text-4xl font-black leading-tight text-navy md:text-5xl">
            How to Start Playing
          </h2>

          <ul className="mt-10 space-y-6">
            {steps.map(({ n, numClass, icon: Icon, text }) => (
              <li key={n} className="flex items-center gap-4">
                <span className={`font-serif text-6xl font-black leading-none ${numClass}`}>
                  {n}
                </span>
                <div className="flex flex-1 items-center overflow-hidden rounded-2xl bg-navy">
                  <span className="flex size-20 shrink-0 items-center justify-center bg-gradient-to-br from-grad-green via-grad-blue to-grad-purple">
                    <Icon className="size-8 text-white" />
                  </span>
                  <p className="px-5 py-4 text-lg font-medium text-white">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="#play"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-mint px-8 py-4 text-lg font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            Play a Run Now
            <ArrowRight className="size-5" />
          </a>
        </div>

        {/* Community panel */}
        <div id="community" className="relative overflow-hidden rounded-3xl bg-navy p-8 md:p-10">
          <div className="absolute -right-16 top-10 size-64 rounded-full bg-grad-purple/30 blur-2xl" />
          <div className="absolute -left-10 bottom-0 size-56 rounded-full bg-grad-green/20 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <h3 className="text-balance font-serif text-3xl font-black leading-tight text-white md:text-4xl">
              Don&apos;t just take our word for it
            </h3>
            <span className="flex size-16 shrink-0 flex-col items-center justify-center rounded-full bg-gradient-to-br from-grad-green to-grad-blue text-center text-xs font-bold text-navy">
              10K
              <span className="text-[10px] font-medium">reviews</span>
            </span>
          </div>

          <div className="relative mt-8 rounded-2xl bg-white p-6 text-navy shadow-xl">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-grad-green text-grad-green" />
                ))}
              </span>
              Score 4.7 · 21,587 reviews
            </div>
            <hr className="my-4 border-navy/10" />
            <p className="text-sm text-navy/60">Showing our 4 &amp; 5 star reviews</p>
            <p className="mt-3 flex items-center gap-2 font-bold">
              Absolutely addictive
              <span className="inline-flex items-center gap-1 rounded-full bg-grad-green/15 px-2 py-0.5 text-xs font-semibold text-grad-green">
                <BadgeCheck className="size-3.5" />
                Verified
              </span>
            </p>
            <p className="mt-1 text-navy/80">
              &ldquo;One more run&rdquo; turned into two hours. The combo system is
              genuinely brilliant and it runs buttery smooth in the browser.
            </p>
            <p className="mt-4 text-sm font-semibold text-navy/60">Mulazem, 3 hours ago</p>
          </div>

          <a
            href="#community"
            className="relative mt-6 inline-block font-semibold text-mint underline underline-offset-4"
          >
            See all our reviews
          </a>
        </div>
      </div>
    </section>
  )
}
