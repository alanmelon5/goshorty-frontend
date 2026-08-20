import { ContentPage } from '@/components/content-page'

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact Us"
      ctaTitle="We&rsquo;re Here to Help"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Our friendly customer service team, based near Stockport, is just a phone call
          or email away and always happy to help.
        </p>
      }
    >
      <div className="space-y-8 text-lg leading-relaxed text-navy/90">
        <p>
          Got a question about a quote or an existing policy? Reach out and our team will
          respond promptly.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-black text-navy">By Email</h3>
            <p className="mt-2 text-navy/80">hello@goshorty.co.uk</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-black text-navy">By Phone</h3>
            <p className="mt-2 text-navy/80">Mon&ndash;Fri, 9am&ndash;6pm</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-black text-navy">Live Chat</h3>
            <p className="mt-2 text-navy/80">Available during office hours</p>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl font-black text-navy">Post</h3>
            <p className="mt-2 text-navy/80">GoShorty, Stockport, UK</p>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
