import { ContentPage } from '@/components/content-page'

const products = [
  {
    name: 'Temporary Car Insurance',
    body: 'Flexible comprehensive cover for your own car or someone else&rsquo;s, from 1 hour to 28 days.',
  },
  {
    name: 'Temporary Van Insurance',
    body: 'Short-term cover for moving, borrowing or lending a van, without the annual commitment.',
  },
  {
    name: 'Learner Driver Insurance',
    body: 'Practise in a family or friend&rsquo;s car with your own policy that protects their no-claims bonus.',
  },
  {
    name: 'Impounded Car Insurance',
    body: 'The cover you need to release a vehicle that has been seized, sorted quickly and simply.',
  },
]

export default function WhatWeCoverPage() {
  return (
    <ContentPage
      title="What We Cover"
      ctaTitle="Cover That Works Around You"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Whatever you drive and whyever you need it, we have a flexible short-term
          policy to suit. Choose your dates, get an instant quote, and you could be
          covered in minutes.
        </p>
      }
    >
      <div className="space-y-8 text-lg leading-relaxed text-navy/90">
        <p>
          We provide a range of short-term vehicle insurance products designed to fit
          around real life. Pick the cover that suits your situation below.
        </p>
        <ul className="space-y-5">
          {products.map((p) => (
            <li
              key={p.name}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-black text-navy">{p.name}</h3>
              <p
                className="mt-2 text-navy/80"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}
