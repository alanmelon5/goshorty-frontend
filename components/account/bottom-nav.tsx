'use client'

import { CircleHelp, FileText, House, User } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type AccountTab = 'home' | 'policies' | 'profile' | 'faq'

const tabs: { id: AccountTab; label: string; icon: LucideIcon }[] = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'policies', label: 'Policies', icon: FileText },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'faq', label: 'FAQ', icon: CircleHelp },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: AccountTab
  onChange: (tab: AccountTab) => void
}) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-white/10 bg-navy/95 backdrop-blur-sm"
      aria-label="Account sections"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => onChange(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full flex-col items-center gap-1 py-3 text-xs font-semibold transition-colors ${
                  isActive ? 'text-mint' : 'text-white/60 hover:text-white'
                }`}
              >
                <Icon className="size-6" strokeWidth={isActive ? 2.5 : 2} />
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
