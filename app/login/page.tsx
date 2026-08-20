import Link from 'next/link'
import { CircleArrowRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-header text-header-foreground">
      {/* Light top utility bar */}
      <div className="border-b border-black/10 bg-[#e6e6e6]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-8 px-6 py-2.5 text-sm font-medium text-navy">
          <Link href="/about" className="underline-offset-2 hover:underline">
            About GoShorty
          </Link>
          <Link href="/faqs" className="underline-offset-2 hover:underline">
            FAQs
          </Link>
          <Link href="/blog" className="underline-offset-2 hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="underline-offset-2 hover:underline">
            Contact us
          </Link>
        </div>
      </div>

      {/* Logo bar */}
      <div className="border-b-2 border-navy bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-6">
          <Link href="/" className="inline-flex flex-col" aria-label="GoShorty home">
            <span className="font-serif text-4xl font-black leading-[0.9] tracking-tight text-navy">
              <span className="italic">your</span>
              <br />
              GoShorty
            </span>
            <span className="mt-1.5 flex w-44 items-center gap-1">
              {['bg-grad-green', 'bg-grad-green', 'bg-grad-blue', 'bg-grad-blue', 'bg-grad-purple', 'bg-grad-purple'].map(
                (color, i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${color}`} />
                ),
              )}
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="mb-8 text-balance text-center font-serif text-4xl font-black text-navy md:text-5xl">
          Login to view your quotes and policies
        </h1>

        <div className="rounded-3xl bg-navy p-6 text-white shadow-2xl md:p-10">
          <h2 className="mb-8 text-center font-serif text-2xl font-black md:text-3xl">
            Login details
          </h2>

          <form className="flex flex-col gap-6" action="#">
            <div className="flex flex-col gap-2">
              <label htmlFor="login-email" className="text-lg font-semibold">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="jo.bloggs@goshorty.co.uk"
                className="w-full rounded-xl bg-white px-5 py-4 text-lg text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-grad-blue"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="login-password" className="text-lg font-semibold">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl bg-white px-5 py-4 text-lg text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-grad-blue"
              />
            </div>

            <label className="mt-1 flex items-center justify-center gap-3 text-lg">
              <input type="checkbox" className="size-5 accent-mint" />
              Remember details for next time?
            </label>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-xl font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.01] active:scale-95"
            >
              Continue
              <CircleArrowRight className="size-6" strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
