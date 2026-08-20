import type { ReactNode } from 'react'
import Link from 'next/link'
import { CircleArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { TrustBar } from '@/components/trust-bar'
import { SiteFooter } from '@/components/site-footer'

/** The gradient dash divider used under headings across the site. */
export function DashDivider({ className = '' }: { className?: string }) {
  return (
    <span className={`mx-auto flex w-56 items-center gap-[3px] ${className}`}>
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
  )
}

type ContentPageProps = {
  /** Heading shown in the navy hero with the gradient swoosh behind it. */
  title: string
  /** Main body — rendered on a white background. */
  children: ReactNode
  /** Heading for the closing navy call-to-action band. */
  ctaTitle?: string
  /** Paragraph shown inside the closing call-to-action band. */
  ctaBody?: ReactNode
}

export function ContentPage({
  title,
  children,
  ctaTitle = 'Our Customers Come First',
  ctaBody,
}: ContentPageProps) {
  return (
    <main className="min-h-screen bg-header text-header-foreground">
      <SiteHeader />

      {/* Navy hero with gradient swoosh */}
      <section className="relative overflow-hidden bg-navy">
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-90"
          viewBox="0 0 1200 300"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="swoosh" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--grad-green)" />
              <stop offset="0.5" stopColor="var(--grad-blue)" />
              <stop offset="1" stopColor="var(--grad-purple)" />
            </linearGradient>
          </defs>
          <path
            d="M240 -60 L600 300 L960 -60"
            stroke="url(#swoosh)"
            strokeWidth="120"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <h1 className="text-balance font-serif text-4xl font-black text-white md:text-6xl">
            {title}
          </h1>
        </div>
      </section>

      {/* White body */}
      <section className="bg-white text-navy">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">{children}</div>
      </section>

      <TrustBar />

      {/* Navy closing CTA band */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="text-balance font-serif text-3xl font-black md:text-4xl">
            {ctaTitle}
          </h2>
          <DashDivider className="mt-6" />
          {ctaBody ? (
            <div className="mt-10 space-y-6 leading-relaxed text-white/85">{ctaBody}</div>
          ) : null}
          <div className="mt-12 flex justify-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-3 rounded-full bg-mint px-10 py-5 text-2xl font-black text-mint-foreground shadow-[0_10px_25px_-8px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              Get a Quote Now
              <CircleArrowRight className="size-7" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
