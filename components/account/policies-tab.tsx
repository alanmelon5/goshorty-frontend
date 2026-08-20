'use client'

import { useState } from 'react'
import { FileText } from 'lucide-react'
import { type Policy, formatDateTime, policies } from '@/lib/account-data'
import { PolicyDetail } from '@/components/account/policy-detail'

const statusBadge: Record<Policy['status'], string> = {
  active: 'border-mint text-mint-foreground',
  expired: 'border-navy/30 text-navy/60',
  scheduled: 'border-grad-blue text-grad-blue',
}

function PolicyRow({ policy }: { policy: Policy }) {
  const [open, setOpen] = useState(false)
  const start = formatDateTime(policy.start)
  const end = formatDateTime(policy.end)

  return (
    <div className="rounded-2xl bg-white p-5 text-navy shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md bg-navy px-2.5 py-1 font-mono text-base font-black tracking-wider text-white">
            {policy.reg}
          </span>
          <p className="mt-2 font-serif text-lg font-black">
            {policy.make} {policy.model}
          </p>
        </div>
        <span
          className={`rounded-full border-2 px-3 py-0.5 text-xs font-bold uppercase ${statusBadge[policy.status]}`}
        >
          {policy.status}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <div>
          <p className="text-navy/50">Duration</p>
          <p className="font-semibold">{policy.durationLabel}</p>
        </div>
        <div>
          <p className="text-navy/50">Amount paid</p>
          <p className="font-semibold">{policy.amountPaid}</p>
        </div>
        <div>
          <p className="text-navy/50">Start</p>
          <p className="font-semibold">
            {start.date}, {start.time}
          </p>
        </div>
        <div>
          <p className="text-navy/50">End</p>
          <p className="font-semibold">
            {end.date}, {end.time}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
      >
        <FileText className="size-4" />
        Full policy details
      </button>

      {open ? (
        <PolicyDetail policy={policy} mode="documents" onClose={() => setOpen(false)} />
      ) : null}
    </div>
  )
}

export function PoliciesTab() {
  return (
    <div className="px-5 pb-28 pt-6">
      <h1 className="font-serif text-3xl font-black text-white">Your Policies</h1>
      <p className="mt-1 text-sm text-white/60">
        All of your cover — active, scheduled and expired.
      </p>

      <div className="mt-5 space-y-4">
        {policies.map((policy) => (
          <PolicyRow key={policy.id} policy={policy} />
        ))}
      </div>
    </div>
  )
}
