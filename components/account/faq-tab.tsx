'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { accountFaqs } from '@/lib/account-data'

export function FaqTab() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="px-5 pb-28 pt-6">
      <h1 className="font-serif text-3xl font-black text-white">Help &amp; FAQ</h1>
      <p className="mt-1 text-sm text-white/60">Tap a question to see the answer.</p>

      <div className="mt-5 space-y-3">
        {accountFaqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl bg-white text-navy shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="font-serif text-base font-black">{faq.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-grad-purple transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={3}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-navy/80">{faq.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
