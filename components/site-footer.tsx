import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'

const legalLinks = [
  { label: 'Privacy Policy', href: '/help' },
  { label: 'Cookie Policy', href: '/help' },
  { label: 'Terms of Business', href: '/faqs' },
  { label: 'Terms of Use', href: '/faqs' },
]

const paymentLogos = [
  { slug: 'apple-pay', label: 'Apple Pay' },
  { slug: 'google-pay', label: 'Google Pay' },
  { slug: 'visa', label: 'Visa Electron' },
  { slug: 'american-express', label: 'American Express' },
  { slug: null, label: 'worldpay', text: 'worldpay' },
  { slug: 'visa', label: 'Visa' },
  { slug: 'mastercard', label: 'Mastercard' },
  { slug: 'mastercard', label: 'Mastercard' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[280px_1fr_auto]">
          {/* Left: logo + CTA */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-4xl font-black leading-none tracking-tight text-white">
                GoShorty
              </span>
              <span className="mt-2 flex w-44 items-center gap-[3px]">
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
            </div>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-8 py-3 text-lg font-bold text-mint-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              Get a Quote
              <ArrowRight className="size-5" />
            </Link>
          </div>

          {/* Middle: links + legal text */}
          <div className="border-t border-white/15 pt-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold underline underline-offset-4 hover:text-mint"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
              <p>
                We are a UK based insurance broker and we are authorised and regulated
                by the Financial Conduct Authority under reference number 751221.
              </p>
              <p>
                GoShorty is a registered trademark. GoShorty is a trading style of
                Complex to Clear Group Limited registered in England and Wales.
              </p>
              <p>
                Company Registration Number 05044963. Data Protection Registration
                ZA456686.
              </p>
            </div>
          </div>

          {/* Right: secure + payment icons */}
          <div className="border-t border-white/15 pt-6">
            <div className="mb-4 flex items-center gap-2 font-bold tracking-wide">
              <Lock className="size-4" />
              100% Secure
            </div>
            <div className="grid grid-cols-4 gap-2">
              {paymentLogos.map((logo, i) => (
                <span
                  key={`${logo.label}-${i}`}
                  className="flex h-11 w-16 items-center justify-center rounded-md bg-white px-2"
                >
                  {logo.slug ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`https://thesvg.org/icons/${logo.slug}/default.svg`}
                      alt={logo.label}
                      className="max-h-6 max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-[11px] font-bold italic text-[#c8102e]">
                      {logo.text}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
