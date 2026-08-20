'use client'

import { useEffect, useState } from 'react'
import { FileCheck2, FileText, LogOut, ShieldCheck } from 'lucide-react'
import {
  type Policy,
  customerName,
  formatDateTime,
  policies,
} from '@/lib/account-data'
import { PolicyDetail } from '@/components/account/policy-detail'

function useCountdown(endIso: string) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  return new Date(endIso).getTime() - now
}

function formatRemaining(ms: number) {
  if (ms <= 0) return 'Expired'
  const minutes = Math.floor(ms / 60000)
  const days = Math.floor(minutes / (60 * 24))
  const hours = Math.floor((minutes % (60 * 24)) / 60)
  const mins = minutes % 60
  if (days >= 1) return `${days}d ${hours}h remaining`
  if (hours >= 1) return `${hours}h ${mins}m remaining`
  return `${mins}m remaining`
}

function ActivePolicyCard({ policy }: { policy: Policy }) {
  const [detail, setDetail] = useState<null | 'documents' | 'certificate'>(null)
  const remaining = useCountdown(policy.end)

  const startMs = new Date(policy.start).getTime()
  const endMs = new Date(policy.end).getTime()
  const elapsed = Math.min(Math.max(Date.now() - startMs, 0), endMs - startMs)
  const pct = Math.round((elapsed / (endMs - startMs)) * 100)

  const start = formatDateTime(policy.start)
  const end = formatDateTime(policy.end)

  return (
    <div className="rounded-3xl bg-white p-6 text-navy shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md bg-navy px-3 py-1 font-mono text-lg font-black tracking-wider text-white">
            {policy.reg}
          </span>
          <p className="mt-2 font-serif text-xl font-black">
            {policy.make} {policy.model}
          </p>
        </div>
        <span className="rounded-full border-2 border-mint px-3 py-1 text-xs font-bold uppercase text-mint-foreground">
          Active
        </span>
      </div>

      <p className="mt-4 text-sm">
        <span className="text-navy/60">Start:</span>{' '}
        <span className="font-bold">{policy.durationLabel}</span>
      </p>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-navy/5 px-3 py-2">
          <p className="text-navy/60">Start</p>
          <p className="font-semibold">{start.date}</p>
          <p className="text-navy/70">{start.time}</p>
        </div>
        <div className="rounded-xl bg-navy/5 px-3 py-2">
          <p className="text-navy/60">End</p>
          <p className="font-semibold">{end.date}</p>
          <p className="text-navy/70">{end.time}</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="h-3 w-full overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-grad-green via-grad-blue to-grad-purple transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-navy/60">{pct}% elapsed</span>
          <span className="font-bold text-navy">{formatRemaining(remaining)}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setDetail('documents')}
          className="flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 font-bold text-mint-foreground transition-transform hover:scale-[1.01] active:scale-95"
        >
          <FileText className="size-5" />
          View Policy Documents
        </button>
        <button
          type="button"
          onClick={() => setDetail('certificate')}
          className="flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <FileCheck2 className="size-5" />
          View Certificate
        </button>
      </div>

      {detail ? (
        <PolicyDetail policy={policy} mode={detail} onClose={() => setDetail(null)} />
      ) : null}
    </div>
  )
}

export function HomeTab() {
  const active = policies.find((p) => p.status === 'active')

  return (
    <div className="px-5 pb-28 pt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/60">Welcome back</p>
          <h1 className="font-serif text-3xl font-black text-white">
            Hello, {customerName}
          </h1>
        </div>
        <button
          type="button"
          aria-label="Log out"
          className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-white/80">
        <ShieldCheck className="size-5 text-mint" />
        <h2 className="font-serif text-lg font-black">Your cover</h2>
      </div>

      <div className="mt-3">
        {active ? (
          <ActivePolicyCard policy={active} />
        ) : (
          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 text-center text-white/70">
            <p className="font-serif text-lg font-black text-white">No active policies.</p>
            <p className="mt-1 text-sm">
              When you buy cover it will appear here with a live countdown.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
