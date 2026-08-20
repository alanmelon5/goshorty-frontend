import { ContentPage } from '@/components/content-page'

const faqs = [
  {
    q: 'How quickly can I be covered?',
    a: 'Most policies can be set up in under two minutes, with cover starting from the time you choose.',
  },
  {
    q: 'How long can a policy last?',
    a: 'You can choose cover from 1 hour up to 28 days, with true pay-as-you-go flexibility.',
  },
  {
    q: 'Can I insure a car I don&rsquo;t own?',
    a: 'Yes &ndash; short-term cover is ideal for borrowing a friend or family member&rsquo;s vehicle.',
  },
  {
    q: 'Will it affect the owner&rsquo;s no-claims bonus?',
    a: 'Our policies are designed to sit alongside the owner&rsquo;s cover, helping protect their bonus.',
  },
]

export default function FaqsPage() {
  return (
    <ContentPage
      title="Frequently Asked Questions"
      ctaTitle="Still Have a Question?"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          If your question isn&rsquo;t answered here, our friendly team is only a message
          away and always happy to help.
        </p>
      }
    >
      <div className="space-y-5 text-lg leading-relaxed text-navy/90">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
          >
            <h3
              className="font-serif text-xl font-black text-navy"
              dangerouslySetInnerHTML={{ __html: faq.q }}
            />
            <p
              className="mt-2 text-navy/80"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </div>
        ))}
      </div>
    </ContentPage>
  )
}
