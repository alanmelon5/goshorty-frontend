export type Policy = {
  id: string
  reg: string
  make: string
  model: string
  /** The original fixed duration label — never changes over time. */
  durationLabel: string
  /** ISO start/end timestamps. */
  start: string
  end: string
  status: 'active' | 'expired' | 'scheduled'
  amountPaid: string
  coverType: string
  driver: string
  policyNumber: string
}

const now = Date.now()
const DAY = 24 * 60 * 60 * 1000

/**
 * Sample data. The active policy's dates are anchored around "now" so the
 * progress bar and countdown show something meaningful in the preview.
 * This will be swapped for real data later.
 */
export const customerName = 'Jo Bloggs'

export const policies: Policy[] = [
  {
    id: 'p1',
    reg: 'AB12 CDE',
    make: 'Toyota',
    model: 'Corolla',
    durationLabel: '30 Day Policy',
    start: new Date(now - 8 * DAY).toISOString(),
    end: new Date(now + 22 * DAY).toISOString(),
    status: 'active',
    amountPaid: '£64.20',
    coverType: 'Comprehensive',
    driver: 'Jo Bloggs',
    policyNumber: 'GS-2026-004812',
  },
  {
    id: 'p2',
    reg: 'LM19 XYZ',
    make: 'Ford',
    model: 'Fiesta',
    durationLabel: '7 Day Policy',
    start: new Date(now - 40 * DAY).toISOString(),
    end: new Date(now - 33 * DAY).toISOString(),
    status: 'expired',
    amountPaid: '£28.95',
    coverType: 'Comprehensive',
    driver: 'Jo Bloggs',
    policyNumber: 'GS-2026-003190',
  },
  {
    id: 'p3',
    reg: 'VN71 GHK',
    make: 'Volkswagen',
    model: 'Golf',
    durationLabel: '3 Day Policy',
    start: new Date(now + 5 * DAY).toISOString(),
    end: new Date(now + 8 * DAY).toISOString(),
    status: 'scheduled',
    amountPaid: '£19.50',
    coverType: 'Comprehensive',
    driver: 'Jo Bloggs',
    policyNumber: 'GS-2026-005277',
  },
]

export const profile = {
  firstName: 'Jo',
  surname: 'Bloggs',
  email: 'jo.bloggs@goshorty.co.uk',
  phone: '07700 900123',
  dateOfBirth: '14 / 06 / 1992',
  addressLine1: '42 Example Street',
  town: 'Stockport',
  postcode: 'SK1 2AB',
}

export const accountFaqs = [
  {
    q: 'How do I extend my current policy?',
    a: 'Open your active policy from the Home tab and choose “Extend cover” before it expires. You can add anything from 1 hour up to 28 days.',
  },
  {
    q: 'Where can I find my certificate?',
    a: 'Your certificate is available on the Home tab under your active policy, and inside each policy on the Policies tab.',
  },
  {
    q: 'Can I change the vehicle on a policy?',
    a: 'Cover is tied to the vehicle you selected at purchase, so you’ll need to buy a new short-term policy for a different vehicle.',
  },
  {
    q: 'How do I get a receipt for my payment?',
    a: 'Each policy on the Policies tab shows the amount paid. A full receipt is included in your policy documents.',
  },
]

export function formatDateTime(iso: string) {
  const d = new Date(iso)
  const date = d.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const time = d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return { date, time }
}
