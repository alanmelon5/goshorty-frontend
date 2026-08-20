'use client'

import { X, Printer } from 'lucide-react'
import {
  type Policy,
  certificateNumber,
  formatCertDateTime,
} from '@/lib/account-data'

/**
 * GoShorty-branded Certificate of Motor Insurance.
 *
 * Keeps the standard statutory field layout, sizing and spacing of a UK
 * certificate across two pages. All issuer branding, watermark and the
 * signatory are GoShorty's own — populated dynamically from the policy.
 */
export function Certificate({
  policy,
  onClose,
}: {
  policy: Policy
  onClose: () => void
}) {
  const certNo = certificateNumber(policy)
  const from = formatCertDateTime(policy.start)
  const to = formatCertDateTime(policy.end)

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-0 sm:p-6 print:static print:overflow-visible print:bg-white print:p-0"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-3xl print:max-w-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar — hidden when printing */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-navy px-5 py-3 text-white sm:rounded-t-2xl print:hidden">
          <p className="text-sm font-semibold">Policy Summary (Specimen)</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-mint-foreground transition-transform hover:scale-[1.02]"
            >
              <Printer className="size-4" />
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="cert-root bg-white text-[#1a1a1a]">
          {/* ============ PAGE 1 ============ */}
          <div className="cert-page relative mx-auto flex flex-col px-10 py-9">
            {/* Watermark */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center print:!flex"
            >
              <span className="rotate-[-30deg] font-serif text-[6.5rem] font-black uppercase tracking-widest text-[#141b2d]/[0.06]">
                Specimen
              </span>
            </span>

            <div className="relative flex flex-1 flex-col">
              {/* Specimen banner */}
              <div className="mb-4 rounded-md border border-dashed border-[#141b2d]/25 bg-[#141b2d]/[0.04] px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-[#141b2d]/60">
                Specimen · Policy summary — not a certificate of insurance
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-6 border-b border-[#141b2d]/15 pb-4">
                <div>
                  <span className="font-serif text-3xl font-black tracking-tight text-[#141b2d]">
                    GoShorty
                  </span>
                  <span className="mt-1 flex w-32 items-center gap-[2px]">
                    {[
                      'bg-grad-green',
                      'bg-grad-green',
                      'bg-grad-blue',
                      'bg-grad-blue',
                      'bg-grad-purple',
                      'bg-grad-purple',
                    ].map((c, i) => (
                      <span key={i} className={`h-[3px] flex-1 rounded-full ${c}`} />
                    ))}
                  </span>
                </div>
                <p className="max-w-[16rem] text-right text-[10px] leading-snug text-[#1a1a1a]/60">
                  goshorty.co.uk
                  <br />
                  For full details of the insurance cover reference should be made to the
                  policy documents.
                </p>
              </div>

              {/* Title + cert number */}
              <div className="mt-5 flex items-end justify-between gap-6">
                <h1 className="font-serif text-2xl font-black uppercase tracking-wide text-[#141b2d]">
                  Policy Summary
                </h1>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-wide text-[#1a1a1a]/50">
                    Reference No.
                  </p>
                  <p className="font-mono text-sm font-bold">{certNo}</p>
                </div>
              </div>

              <p className="mt-3 max-w-2xl text-[11px] leading-relaxed text-[#1a1a1a]/70">
                This is a plain-language summary of the cover recorded against your policy.
                It is provided for your information only and is not a certificate of motor
                insurance. Full terms are set out in your policy documents.
              </p>

              {/* Numbered fields */}
              <dl className="mt-5 space-y-3 text-[12.5px] leading-relaxed">
                <Field n="1" label="Registration mark of vehicle">
                  <span className="font-bold tracking-wider">{policy.reg}</span>
                </Field>
                <Field n="2" label="Insured">
                  {policy.driver}
                </Field>
                <Field n="3" label="Period from">
                  {from}
                </Field>
                <Field n="4" label="Expiry">
                  {to}
                </Field>
                <Field n="5" label="Persons or classes of persons entitled to drive">
                  The Insured only. Provided that the person driving holds a licence to
                  drive the vehicle or has held and is not disqualified from holding or
                  obtaining such a licence.
                </Field>
                <Field n="6" label="Limitations as to use">
                  Use for Social Domestic and Pleasure Purposes and by the Insured in
                  person in connection with his/her business or profession, excluding
                  commercial travelling or the carriage of goods or samples in connection
                  with any trade or business, use for hiring, the letting on hire, the
                  carriage of passengers or goods for hire or reward, racing, pacemaking,
                  use on any track, test circuit or off road activity, use in any contest,
                  reliability or speed trial, or use in connection with the Motor Trade.
                  Excluding use to secure the release of any motor vehicle which has been
                  confiscated, seized or impounded by, or on behalf of, any Government or
                  public authority.
                </Field>
              </dl>

              {/* Summary statement + issuer */}
              <div className="mt-auto pt-6">
                <p className="text-[11px] leading-relaxed text-[#1a1a1a]/80">
                  This document is a summary of the cover recorded for the policy above and
                  is provided for your information only. It is <strong>not</strong> a
                  certificate of motor insurance and must not be relied on as evidence that
                  the requirements of any road-traffic law have been met. Your legal
                  certificate, where applicable, is issued by the underwriting insurer.
                </p>
                <div className="mt-4 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-semibold">Issued by</p>
                    <p className="font-serif text-base font-black text-[#141b2d]">
                      GoShorty
                    </p>
                    <p className="text-[10px] text-[#1a1a1a]/60">
                      goshorty.co.uk · for illustration only
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold">Reference</p>
                    <p className="font-mono text-sm font-bold text-[#141b2d]">{certNo}</p>
                  </div>
                </div>
                <p className="mt-3 border-t border-[#141b2d]/10 pt-2 text-[9px] leading-snug text-[#1a1a1a]/50">
                  Specimen document generated by the GoShorty demo app. GoShorty is a
                  fictional brand used for this project and this summary confers no
                  insurance cover of any kind.
                </p>
              </div>
            </div>
          </div>

          {/* ============ PAGE 2 ============ */}
          <div className="cert-page cert-page-2 relative mx-auto flex flex-col px-10 py-9">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center print:!flex"
            >
              <span className="rotate-[-30deg] font-serif text-[6.5rem] font-black uppercase tracking-widest text-[#141b2d]/[0.06]">
                Specimen
              </span>
            </span>

            <div className="relative flex flex-1 flex-col">
              {/* Specimen banner */}
              <div className="mb-4 rounded-md border border-dashed border-[#141b2d]/25 bg-[#141b2d]/[0.04] px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-[#141b2d]/60">
                Specimen · Policy summary — not a certificate of insurance
              </div>

              <h2 className="font-serif text-lg font-black uppercase tracking-wide text-[#141b2d]">
                International Cover (information)
              </h2>
              <p className="mt-3 max-w-2xl text-[11px] leading-relaxed text-[#1a1a1a]/70">
                The wording below summarises where cover of this type would typically
                apply. It is provided for information only and does not itself act as an
                international Motor Insurance Card (Green Card) or confer any cover.
              </p>

              <div className="mt-5 space-y-3 text-[11px] leading-relaxed text-[#1a1a1a]/85">
                <p>
                  This insurance applies in respect of accidents or losses occurring in all
                  member countries of the European Union, Andorra, Bosnia and Herzegovina,
                  Iceland, Liechtenstein, Montenegro, Norway, Serbia, and Switzerland.
                </p>
                <p className="text-[#1a1a1a]/70">
                  Diese Versicherung gilt für Unfälle oder Schäden, die in allen
                  Mitgliedsländern der Europäischen Union, Andorra, Bosnien und Herzegowina,
                  Island, Liechtenstein, Montenegro, Norwegen, Serbien und der Schweiz
                  auftreten.
                </p>
                <p className="text-[#1a1a1a]/70">
                  Este seguro se aplica respecto de accidentes o pérdidas ocurridos en todos
                  los países miembros de la Unión Europea, Andorra, Bosnia y Herzegovina,
                  Islandia, Liechtenstein, Montenegro, Noruega, Serbia y Suiza.
                </p>
                <p className="text-[#1a1a1a]/70">
                  Questa assicurazione si applica a incidenti o perdite che si verificano in
                  tutti i paesi membri dell&apos;Unione Europea, Andorra, Bosnia ed
                  Erzegovina, Islanda, Liechtenstein, Montenegro, Norvegia, Serbia e
                  Svizzera.
                </p>
                <p className="text-[#1a1a1a]/70">
                  Cette assurance s&apos;applique pour les accidents ou sinistres survenant
                  dans tous les pays membres de l&apos;Union européenne, Andorre,
                  Bosnie-Herzégovine, Islande, Liechtenstein, Monténégro, Norvège, Serbie et
                  Suisse.
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-[#141b2d]/[0.04] p-4 text-[11px] leading-relaxed text-[#1a1a1a]/80">
                <p className="font-semibold">Important</p>
                <p className="mt-1">
                  All accidents and losses must be reported immediately to our Contact
                  Centre. Don&apos;t make life easier for thieves — always remove the keys
                  from your vehicle and lock it when you leave it, even temporarily. Not to
                  do so may invalidate your cover.
                </p>
              </div>

              {/* Footer meta */}
              <div className="mt-auto grid grid-cols-2 gap-x-8 gap-y-1 border-t border-[#141b2d]/10 pt-4 text-[10px] text-[#1a1a1a]/60">
                <Meta label="Policy underwritten by" value="GoShorty" />
                <Meta label="Cover type" value={policy.coverType} />
                <Meta label="Policy number" value={policy.policyNumber} />
                <Meta label="Duration" value={policy.durationLabel} />
                <Meta label="Vehicle" value={`${policy.make} ${policy.model}`} />
                <Meta label="Certificate no." value={certNo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  n,
  label,
  children,
}: {
  n: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-[1px] flex size-5 shrink-0 items-center justify-center rounded-full bg-[#141b2d] text-[10px] font-bold text-white">
        {n}
      </span>
      <div className="flex-1">
        <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#1a1a1a]/55">
          {label}
        </dt>
        <dd className="mt-0.5 text-[#1a1a1a]">{children}</dd>
      </div>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-[#1a1a1a]/50">{label}</span>
      <span className="text-right font-semibold text-[#1a1a1a]/80">{value}</span>
    </div>
  )
}
