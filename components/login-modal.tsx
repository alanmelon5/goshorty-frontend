'use client'

import { ArrowRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function LoginModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setOpen(true)
    window.addEventListener('open-login', handleOpen)
    return () => window.removeEventListener('open-login', handleOpen)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Login"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-black leading-none tracking-tight text-white">
              <span className="italic">your</span> GoShorty
            </span>
            <span className="mt-1.5 flex w-40 items-center gap-1">
              {['bg-grad-green', 'bg-grad-green', 'bg-grad-blue', 'bg-grad-blue', 'bg-grad-purple', 'bg-grad-purple'].map(
                (color, i) => (
                  <span key={i} className={`h-1 flex-1 rounded-full ${color}`} />
                ),
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close login"
          >
            <X className="size-5" />
          </button>
        </div>

        <h2 className="mb-6 text-balance text-center font-serif text-3xl font-black text-white md:text-4xl">
          Login to view your quotes and policies
        </h2>

        {/* Form card */}
        <div className="rounded-3xl bg-navy p-6 text-white shadow-2xl md:p-10">
          <h3 className="mb-6 text-center font-serif text-2xl font-black">
            Login details
          </h3>

          <form
            className="flex flex-col gap-5"
            action="#"
            onSubmit={(e) => {
              e.preventDefault()
              setOpen(false)
            }}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="login-email" className="text-lg font-semibold">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="jo.bloggs@goshorty.co.uk"
                className="w-full rounded-xl bg-white px-4 py-4 text-lg text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-grad-blue"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="login-password" className="text-lg font-semibold">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl bg-white px-4 py-4 text-lg text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-grad-blue"
              />
            </div>

            <label className="mt-1 flex items-center justify-center gap-3 text-lg">
              <input
                type="checkbox"
                className="size-5 accent-mint"
              />
              Remember details for next time?
            </label>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-xl font-bold text-mint-foreground shadow-lg transition-transform hover:scale-[1.01] active:scale-95"
            >
              Continue
              <ArrowRight className="size-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
