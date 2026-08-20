import Link from 'next/link'
import { ContentPage } from '@/components/content-page'

const link = 'font-semibold text-grad-blue hover:underline'

const topics = [
  'Getting a quote and buying a policy',
  'Managing an existing policy',
  'Making a change or a claim',
  'Documents and proof of cover',
]

export default function HelpPage() {
  return (
    <ContentPage
      title="Help Centre"
      ctaTitle="Still Need a Hand?"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Can&rsquo;t find what you&rsquo;re looking for? Our team is happy to help &ndash;
          get in touch and we&rsquo;ll sort it quickly.
        </p>
      }
    >
      <div className="space-y-8 text-lg leading-relaxed text-navy/90">
        <p>
          Find quick answers to common questions below, or head over to our{' '}
          <Link href="/faqs" className={link}>
            FAQs
          </Link>{' '}
          for more detail. You can also{' '}
          <Link href="/contact" className={link}>
            contact us
          </Link>{' '}
          directly.
        </p>
        <ul className="space-y-4">
          {topics.map((t) => (
            <li
              key={t}
              className="rounded-2xl border border-navy/10 bg-white p-5 font-semibold text-navy shadow-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}
