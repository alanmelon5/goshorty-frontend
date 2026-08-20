import { ContentPage } from '@/components/content-page'

const groups = [
  'Drivers aged 17 to 78',
  'Full UK, EU and many international licences',
  'Provisional and learner drivers',
  'Cars, vans and borrowed vehicles',
  'Named drivers on someone else&rsquo;s car',
  'Drivers with a wide range of histories',
]

export default function WhoWeCoverPage() {
  return (
    <ContentPage
      title="Who We Cover"
      ctaTitle="A Wide Acceptance Criteria"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Thanks to our broad insurance panel, we&rsquo;re able to cover more drivers and
          more situations. Get a quote to see exactly what we can do for you.
        </p>
      }
    >
      <div className="space-y-8 text-lg leading-relaxed text-navy/90">
        <p>
          We work with a broad panel of trusted insurers so we can say yes to as many
          drivers as possible. Here&rsquo;s a snapshot of who we&rsquo;re typically able
          to cover:
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <li
              key={g}
              className="flex items-center rounded-2xl border border-navy/10 bg-white p-5 font-semibold text-navy shadow-sm"
              dangerouslySetInnerHTML={{ __html: g }}
            />
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}
