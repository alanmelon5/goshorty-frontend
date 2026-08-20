import { ContentPage } from '@/components/content-page'

const perks = [
  'Get temporary insurance even faster',
  'Earn points every time you buy',
  'Manage all your policies in one place',
  'Exclusive app-only prices',
]

export default function DownloadPage() {
  return (
    <ContentPage
      title="Download Our App"
      ctaTitle="Best Prices, In Your Pocket"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Get our best prices, earn points and buy cover in seconds &ndash; all from the
          GoShorty app, available on iOS and Android.
        </p>
      }
    >
      <div className="space-y-8 text-lg leading-relaxed text-navy/90">
        <p>
          Download the app to unlock our best prices and the quickest way to get
          temporary cover.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {perks.map((perk) => (
            <li
              key={perk}
              className="flex items-center rounded-2xl border border-navy/10 bg-white p-5 font-semibold text-navy shadow-sm"
            >
              {perk}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center rounded-xl bg-navy px-6 py-4 font-bold text-white">
            Download on the App Store
          </span>
          <span className="inline-flex items-center rounded-xl bg-navy px-6 py-4 font-bold text-white">
            Get it on Google Play
          </span>
        </div>
      </div>
    </ContentPage>
  )
}
