import { Star } from 'lucide-react'

export function TrustBar() {
  return (
    <div className="relative bg-mint">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3 text-mint-foreground">
        <span className="font-bold">Excellent</span>
        <span className="flex items-center gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="flex size-5 items-center justify-center bg-navy">
              <Star className="size-3.5 fill-white text-white" />
            </span>
          ))}
        </span>
        <a href="#reviews" className="font-semibold underline underline-offset-2">
          21,587 reviews on
        </a>
        <span className="font-semibold">Trustpilot</span>
      </div>
    </div>
  )
}
