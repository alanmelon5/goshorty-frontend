'use client'

import { X } from 'lucide-react'
import { type Policy, formatDateTime } from '@/lib/account-data'

type Mode = 'documents' | 'certificate'

const statusStyles: Record<Policy['status'], string> = {
  active: 'border-mint text-mint',
  expired: 'border-white/40 text-white/70',
  scheduled: 'border-grad-blue text-grad-blue',
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-0">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-right text-sm font-semibold text-white">{value}</span>
    </div>
  )
}

export function PolicyDetail({
  policy,
  mode,
  onClose,
}: {
  policy: Policy
  mode: Mode
  onClose: () => void
}) {
  const start = formatDateTime(policy.start)
  const end = formatDateTime(policy.end)

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-navy p-6 text-white shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-white/50">
              {mode === 'documents' ? 'Policy Documents' : 'Certificate of Insurance'}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-black">
              {policy.make} {policy.model}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-md bg-white px-3 py-1 font-mono text-lg font-black tracking-wider text-navy">
            {policy.reg}
          </span>
          <span
            className={`rounded-full border px-3 py-0.5 text-xs font-bold uppercase ${statusStyles[policy.status]}`}
          >
            {policy.status}
          </span>
        </div>

        {mode === 'documents' ? (
          <div className="rounded-2xl bg-white/5 px-5 py-2">
            <Row label="Policy number" value={policy.policyNumber} />
            <Row label="Cover type" value={policy.coverType} />
            <Row label="Duration" value={policy.durationLabel} />
            <Row label="Vehicle" value={`${policy.make} ${policy.model}`} />
            <Row label="Registration" value={policy.reg} />
            <Row label="Policyholder" value={policy.driver} />
            <Row label="Start" value={`${start.date}, ${start.time}`} />
            <Row label="End" value={`${end.date}, ${end.time}`} />
            <Row label="Amount paid" value={policy.amountPaid} />
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-white/25 bg-white/5 p-6 text-center">
            <p className="font-serif text-xl font-black">Certificate of Motor Insurance</p>
            <div className="mt-4 space-y-1 text-sm text-white/80">
              <p className="font-semibold text-white">{policy.driver}</p>
              <p>
                {policy.make} {policy.model} &middot; {policy.reg}
              </p>
              <p>Policy no. {policy.policyNumber}</p>
              <p>
                Valid {start.date} {start.time} &ndash; {end.date} {end.time}
              </p>
            </div>
            <p className="mt-4 text-xs text-white/50">
              GoShorty is a trading style of Complex to Clear Group Limited, authorised
              and regulated by the Financial Conduct Authority.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
