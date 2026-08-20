import { ContentPage } from '@/components/content-page'

const posts = [
  {
    title: 'When does temporary car insurance make sense?',
    excerpt: 'From borrowing a car for the weekend to test-driving a new purchase, here&rsquo;s when short-term cover beats an annual policy.',
  },
  {
    title: 'A guide to insurance for learner drivers',
    excerpt: 'How to practise in a family car while protecting their no-claims bonus, explained simply.',
  },
  {
    title: 'Everything you need to release an impounded vehicle',
    excerpt: 'The documents and cover required to get your car back quickly and without fuss.',
  },
]

export default function BlogPage() {
  return (
    <ContentPage
      title="The GoShorty Blog"
      ctaTitle="Tips, Guides & Updates"
      ctaBody={
        <p className="font-serif text-xl leading-relaxed text-white md:text-2xl">
          Our experts share advice on temporary cover, saving money and staying on the
          road. Check back regularly for the latest.
        </p>
      }
    >
      <div className="space-y-6 text-lg leading-relaxed text-navy/90">
        <p>Guides, news and advice from our team of temporary insurance experts.</p>
        <ul className="space-y-5">
          {posts.map((post) => (
            <li
              key={post.title}
              className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-black text-navy">{post.title}</h3>
              <p
                className="mt-2 text-navy/80"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </li>
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}
