'use client'

import { profile } from '@/lib/account-data'

const fields: { label: string; value: string }[] = [
  { label: 'First name', value: profile.firstName },
  { label: 'Surname', value: profile.surname },
  { label: 'Email', value: profile.email },
  { label: 'Phone', value: profile.phone },
  { label: 'Date of birth', value: profile.dateOfBirth },
  { label: 'Address line 1', value: profile.addressLine1 },
  { label: 'Town', value: profile.town },
  { label: 'Postcode', value: profile.postcode },
]

export function ProfileTab() {
  return (
    <div className="px-5 pb-28 pt-6">
      <h1 className="font-serif text-3xl font-black text-white">Your Profile</h1>
      <p className="mt-1 text-sm text-white/60">Your personal information.</p>

      <div className="mt-5 rounded-3xl bg-white p-6 text-navy shadow-lg">
        <h2 className="font-serif text-xl font-black">Personal information</h2>
        <div className="mt-4 flex flex-col gap-4">
          {fields.map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-navy/60">{field.label}</span>
              <div className="rounded-xl border border-navy/10 bg-navy/5 px-4 py-3 text-navy">
                {field.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
