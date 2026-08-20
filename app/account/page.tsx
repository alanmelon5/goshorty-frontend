'use client'

import { useState } from 'react'
import { type AccountTab, BottomNav } from '@/components/account/bottom-nav'
import { HomeTab } from '@/components/account/home-tab'
import { PoliciesTab } from '@/components/account/policies-tab'
import { ProfileTab } from '@/components/account/profile-tab'
import { FaqTab } from '@/components/account/faq-tab'

export default function AccountPage() {
  const [tab, setTab] = useState<AccountTab>('home')

  return (
    <main className="min-h-screen bg-navy">
      <div className="mx-auto min-h-screen max-w-md bg-navy">
        {tab === 'home' ? <HomeTab /> : null}
        {tab === 'policies' ? <PoliciesTab /> : null}
        {tab === 'profile' ? <ProfileTab /> : null}
        {tab === 'faq' ? <FaqTab /> : null}
      </div>
      <BottomNav active={tab} onChange={setTab} />
    </main>
  )
}
