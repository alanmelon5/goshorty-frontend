import Link from 'next/link'
import { ContentPage } from '@/components/content-page'

const link = 'font-semibold text-grad-blue hover:underline'

export default function AboutPage() {
  return (
    <ContentPage
      title="Get to Know GoShorty"
      ctaTitle="Our Customers Come First"
      ctaBody={
        <>
          <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
            From day one, we&rsquo;ve put customers at the heart of everything we do.
            We&rsquo;re focused on making the process of buying temporary insurance
            quick, simple, and stress-free. You can purchase a policy with us in under
            two minutes, thanks to our easy online quote and purchase process &ndash; if
            you&rsquo;re a returning customer, it&rsquo;s even quicker. Our team works
            hard to give you flexible cover options that work around you, as quickly and
            easily as possible.
          </p>
          <p>
            We pride ourselves on offering fair, accessible short-term cover to suit as
            many drivers and situations as possible. Thanks to our broad insurance panel,
            we have a{' '}
            <Link href="/who-we-cover" className={link}>
              wide acceptance criteria
            </Link>
            , and are able to provide a wide range of temporary insurance products.
          </p>
          <p>
            Got questions? Our friendly customer service team based near Stockport is just
            a phone call away, and we respond promptly to email enquiries, ensuring your
            GoShorty insurance experience is always a positive one. Our commitment to
            honesty, transparency and customer care is why so many of our customers keep
            coming back. But don&rsquo;t just take our word for it&hellip;
          </p>
        </>
      }
    >
      <div className="space-y-6 text-lg leading-relaxed text-navy/90">
        <p>
          We are temporary insurance experts, providing a range of short-term vehicle
          insurance options in the UK. Led by a senior team of insurance specialists, we
          bring together decades of combined industry experience to deliver flexible,
          affordable{' '}
          <Link href="/what-we-cover" className={link}>
            temporary insurance for cars
          </Link>
          ,{' '}
          <Link href="/what-we-cover" className={link}>
            vans
          </Link>{' '}
          and{' '}
          <Link href="/what-we-cover" className={link}>
            learner drivers
          </Link>
          , because we know drivers need alternatives to regular annual policies.
        </p>
        <p>
          Since our launch, we&rsquo;ve{' '}
          <Link href="/who-we-cover" className={link}>
            partnered with major insurers
          </Link>{' '}
          and grown our expert team to become one of the UK&rsquo;s leading temporary
          vehicle insurance providers. Our regulators include the Financial Conduct
          Authority, we&rsquo;re registered with the Information Commissioner&rsquo;s
          Office, and we&rsquo;re proud members of the British Insurance Brokers
          Association. Plus, we&rsquo;ve also{' '}
          <Link href="/about" className={link}>
            won a few awards
          </Link>
          , and our experts are regularly{' '}
          <Link href="/blog" className={link}>
            featured in the press
          </Link>
          .
        </p>
      </div>
    </ContentPage>
  )
}
