'use client'

import { useEffect, useState } from 'react'
import { Forward } from 'lucide-react'
import { type Policy, policies, profile } from '@/lib/account-data'

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
  const total = Math.floor(ms / 1000)
  const d = Math.floor(total / 86400)
  const h = Math.floor((total % 86400) / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (d >= 1) return `${d}d ${h}h`
  if (h >= 1) return `${h}h ${m}m`
  return `${m}m ${s}s`
}

/** e.g. { time: '6:17', ampm: 'PM' } */
function formatClock(iso: string) {
  const raw = new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
  const [time, ampm] = raw.split(' ')
  return { time, ampm }
}

/** e.g. 'SAT 15/08' */
function formatDayDate(iso: string) {
  const d = new Date(iso)
  const weekday = d
    .toLocaleDateString('en-GB', { weekday: 'short' })
    .toUpperCase()
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return `${weekday} ${day}/${month}`
}

function RegPlate({ reg }: { reg: string }) {
  return (
    <div className="inline-flex overflow-hidden rounded-md ring-1 ring-black/15">
      <div className="flex flex-col items-center justify-center bg-[#0b3fae] px-2 py-1 text-white">
        <span className="text-[10px] font-black leading-none tracking-tight">UK</span>
      </div>
      <div className="bg-[#ffd400] px-4 py-2">
        <span className="font-mono text-2xl font-black uppercase tracking-widest text-black">
          {reg.replace(/\s+/g, '')}
        </span>
      </div>
    </div>
  )
}

function ActivePolicyCard({ policy }: { policy: Policy }) {
  const remaining = useCountdown(policy.end)

  const startMs = new Date(policy.start).getTime()
  const endMs = new Date(policy.end).getTime()
  const pct = Math.min(
    Math.max(((Date.now() - startMs) / (endMs - startMs)) * 100, 0),
    100,
  )

  const start = formatClock(policy.start)
  const end = formatClock(policy.end)

  return (
    <div className="relative z-10 rounded-[2rem] bg-white p-6 text-navy shadow-2xl">
      {/* Reg plate + share */}
      <div className="flex items-start justify-between gap-3">
        <RegPlate reg={policy.reg} />
        <button
          type="button"
          aria-label="Share policy"
          className="flex size-11 items-center justify-center rounded-xl bg-navy text-white transition-transform active:scale-95"
        >
          <Forward className="size-5" />
        </button>
      </div>

      {/* Vehicle name (no make logo) */}
      <p className="mt-6 text-center font-serif text-2xl font-black uppercase tracking-tight">
        {policy.make} {policy.model}
      </p>

      {/* Active pill */}
      <div className="mt-6 flex justify-center">
        <span className="rounded-full border-2 border-mint px-8 py-1.5 font-serif text-lg font-bold text-mint-foreground">
          Active
        </span>
      </div>

      {/* Timeline box */}
      <div className="mt-4 rounded-[1.5rem] bg-mint/20 px-5 py-6">
        <div className="flex items-center justify-center gap-1.5 text-navy">
          <span className="shrink-0 font-semibold">Start</span>
          <span className="size-1.5 shrink-0 rounded-full bg-navy/50" />
          <span className="h-px flex-1 border-t border-dashed border-navy/40" />
          <span className="shrink-0 whitespace-nowrap rounded-full bg-mint px-4 py-1.5 font-bold text-mint-foreground">
            {policy.durationLabel}
          </span>
          <span className="h-px flex-1 border-t border-dashed border-navy/40" />
          <span className="size-1.5 shrink-0 rounded-full bg-navy/50" />
          <span className="shrink-0 font-semibold">End</span>
        </div>

        <div className="mt-5 flex items-stretch justify-center">
          <div className="flex-1 text-center">
            <p className="font-serif text-3xl font-black leading-none">
              {start.time}
              <span className="align-baseline text-base font-bold">{start.ampm}</span>
            </p>
            <p className="mt-2 text-sm font-medium text-navy/70">
              {formatDayDate(policy.start)}
            </p>
          </div>
          <div className="w-px bg-navy/15" />
          <div className="flex-1 text-center">
            <p className="font-serif text-3xl font-black leading-none">
              {end.time}
              <span className="align-baseline text-base font-bold">{end.ampm}</span>
            </p>
            <p className="mt-2 text-sm font-medium text-navy/70">
              {formatDayDate(policy.end)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-navy/70">
          Policy ends in{' '}
          <span className="font-black text-navy">{formatRemaining(remaining)}</span>
        </p>

        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-navy/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-grad-green via-grad-blue to-grad-purple transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export function HomeTab() {
  const active = policies.find((p) => p.status === 'active')
  const weekday = new Date().toLocaleDateString('en-GB', { weekday: 'long' })

  return (
    <div className="px-5 pb-28 pt-8">
      <div>
        <h1 className="font-serif text-3xl font-black text-white">
          Hello {profile.firstName}!
        </h1>
        <p className="mt-1 text-lg text-white/70">Happy {weekday}</p>
      </div>

      <div className="relative mt-16">
        {/* Decorative background shapes */}
        <div
          aria-hidden
          className="absolute -left-8 top-10 h-44 w-24 rounded-full bg-grad-green/60 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -right-8 top-24 h-52 w-24 rounded-full bg-grad-purple/60 blur-2xl"
        />

        {active ? (
          <ActivePolicyCard policy={active} />
        ) : (
          <div className="relative z-10 rounded-[2rem] border border-white/15 bg-white/5 p-8 text-center text-white/70">
            <p className="font-serif text-lg font-black text-white">
              No active policies.
            </p>
            <p className="mt-1 text-sm">
              When you buy cover it will appear here with a live countdown.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
