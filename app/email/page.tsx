'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { policies } from '@/lib/account-data'
import {
  policyToEmailData,
  renderPolicyConfirmationEmail,
} from '@/lib/policy-confirmation-email'

export default function EmailPreviewPage() {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    // Build on the client so image/link URLs are absolute and date
    // formatting matches the viewer's environment (avoids SSR mismatch).
    const active = policies.find((p) => p.status === 'active') ?? policies[0]
    const data = policyToEmailData(active, window.location.origin)
    setHtml(renderPolicyConfirmationEmail(data))
  }, [])

  return (
    <main className="min-h-screen bg-[#2b2b2f]">
      <div className="mx-auto flex max-w-[900px] items-center justify-between px-4 py-4">
        <Link
          href="/account"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to account
        </Link>
        <p className="text-sm font-medium text-white/50">
          Policy confirmation email — preview
        </p>
      </div>

      <div className="mx-auto max-w-[900px] px-4 pb-12">
        {html ? (
          <iframe
            title="Policy confirmation email preview"
            srcDoc={html}
            className="h-[1600px] w-full rounded-lg border-0 bg-white"
          />
        ) : (
          <div className="flex h-[600px] items-center justify-center text-white/50">
            Loading preview…
          </div>
        )}
      </div>
    </main>
  )
}
