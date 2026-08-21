import type { Policy } from '@/lib/account-data'

export type PolicyEmailData = {
  /** Recipient first name, e.g. "Rosana" */
  firstName: string
  /** Vehicle description shown in the intro, e.g. "CITROEN C1 RHYTHM" */
  vehicle: string
  registration: string
  policyNumber: string
  startDate: string
  startTime: string
  policyTerm: string
  totalPaid: string
  insurer: string
  clientRef: string
  premium: string
  adminFee: string
  ipt: string
  /** Absolute origin used to build image + link URLs (email clients need absolute URLs). */
  baseUrl: string
}

/** DD/MM/YYYY */
function fmtDate(iso: string) {
  const d = new Date(iso)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}/${mm}/${d.getFullYear()}`
}

/** HH:mm (24h) */
function fmtTime(iso: string) {
  const d = new Date(iso)
  const hh = String(d.getHours()).padStart(2, '0')
  const mn = String(d.getMinutes()).padStart(2, '0')
  return `${hh}:${mn}`
}

/**
 * Map a Policy record + template extras into the flat data the email needs.
 * The insurer / reference / breakdown fields aren't on the Policy model yet,
 * so they default here and can be wired to real data later.
 */
export function policyToEmailData(
  policy: Policy,
  baseUrl: string,
  overrides: Partial<PolicyEmailData> = {},
): PolicyEmailData {
  return {
    firstName: policy.driver.split(' ')[0] || 'there',
    vehicle: `${policy.make} ${policy.model}`.toUpperCase(),
    registration: policy.reg,
    policyNumber: policy.policyNumber,
    startDate: fmtDate(policy.start),
    startTime: fmtTime(policy.start),
    policyTerm: policy.durationLabel,
    totalPaid: policy.amountPaid,
    insurer: 'Allianz',
    clientRef: '17067438/001',
    premium: '12.19',
    adminFee: '£14.30',
    ipt: '£1.46',
    baseUrl,
    ...overrides,
  }
}

/* ---- palette (kept inline everywhere for email-client safety) ---- */
const OUTER = '#2b2b2f'
const PANEL = '#565a73' // slate-purple container
const HERO = '#2f2f35' // dark hero / card interior
const CARD = '#5e627b' // policy details card
const BORDER = '#71748d'
const GREEN = '#8fd694' // value + accent green
const GREEN_LINK = '#8fd694'
const WHITE = '#ffffff'
const MUTED = '#d7d8e0'
const DIM = '#b9bac6'

/** The gradient dash underline under the GoShorty wordmark, built from cells. */
function dashRow(): string {
  const colors = ['#4ade80', '#4ade80', '#38bdf8', '#38bdf8', '#a855f7', '#c084fc']
  const cells = colors
    .map(
      (c) =>
        `<td height="4" style="background-color:${c};border-radius:2px;font-size:0;line-height:0;">&nbsp;</td><td width="4" style="font-size:0;line-height:0;">&nbsp;</td>`,
    )
    .join('')
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:180px;margin-top:8px;"><tr>${cells}</tr></table>`
}

function wordmark(fontSize: number): string {
  return `
    <span style="font-family:Georgia,'Times New Roman',serif;font-size:${fontSize}px;font-weight:bold;color:${WHITE};letter-spacing:-0.5px;">GoShorty</span>
    ${dashRow()}
  `
}

function socialIcons(baseUrl: string): string {
  const icon = (file: string, alt: string) =>
    `<td style="padding:0 8px;"><img src="${baseUrl}/email/${file}" width="46" height="46" alt="${alt}" style="display:block;border:0;outline:none;text-decoration:none;width:46px;height:46px;" /></td>`
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>${icon(
    'icon-mail.png',
    'Email us',
  )}${icon('icon-facebook.png', 'Facebook')}${icon('icon-instagram.png', 'Instagram')}</tr></table>`
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:17px;color:${MUTED};" align="left">${label}</td>
      <td style="padding:8px 0;font-family:Arial,Helvetica,sans-serif;font-size:19px;font-weight:bold;color:${GREEN};" align="right">${value}</td>
    </tr>`
}

export function renderPolicyConfirmationEmail(d: PolicyEmailData): string {
  const quoteUrl = `${d.baseUrl}/login`
  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Your GoShorty policy is confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:${OUTER};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">You're covered, be on your way! Your GoShorty policy for ${d.registration} is confirmed.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${OUTER};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <!-- container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${PANEL};border-radius:10px;">

          <!-- header -->
          <tr>
            <td style="padding:24px 28px 8px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">${wordmark(30)}</td>
                  <td align="right" valign="middle" style="font-family:Arial,Helvetica,sans-serif;font-size:15px;">
                    <a href="${quoteUrl}" style="color:${GREEN_LINK};text-decoration:underline;font-weight:bold;">Get A Quote</a>
                    <span style="color:${MUTED};">&nbsp;&nbsp;</span>
                    <a href="${quoteUrl}" style="color:${WHITE};text-decoration:underline;">Login</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- hero -->
          <tr>
            <td style="padding:12px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${HERO};border-radius:10px;">
                <tr>
                  <td style="padding:34px 34px 28px 34px;">
                    <h1 style="margin:0 0 22px 0;font-family:Georgia,'Times New Roman',serif;font-size:40px;line-height:1.05;font-weight:bold;color:${WHITE};">You're covered, be on your way!</h1>
                    <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">Hey there, ${d.firstName},</p>
                    <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">Great news! Your GoShorty policy purchase is officially confirmed on <strong style="color:${WHITE};">${d.vehicle}</strong> with registration <strong style="color:${WHITE};">${d.registration}</strong>.</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">We're thrilled you've chosen <a href="${d.baseUrl}" style="color:${GREEN_LINK};text-decoration:underline;">GoShorty</a> for your temporary insurance needs.</p>

                    <!-- policy details card -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:26px;background-color:${CARD};border:1px solid ${BORDER};border-radius:10px;">
                      <tr>
                        <td style="padding:26px 30px;">
                          <h2 style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:bold;color:${WHITE};" align="center">Policy Details</h2>
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                            ${detailRow('Registration:', d.registration)}
                            ${detailRow('Policy No:', d.policyNumber)}
                            ${detailRow('Start Date:', d.startDate)}
                            ${detailRow('Start Time:', d.startTime)}
                            ${detailRow('Policy Term:', d.policyTerm)}
                            ${detailRow('Total Paid:', d.totalPaid)}
                          </table>

                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
                            <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:${MUTED};padding:4px 0;">Insurance Provider: <strong style="color:${WHITE};">${d.insurer}</strong></td></tr>
                            <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:${MUTED};padding:4px 0;">Client Reference No: <strong style="color:${WHITE};">${d.clientRef}</strong></td></tr>
                            <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:${DIM};padding:8px 0 0 0;">Payment Breakdown - Insurance Premium: <strong style="color:${WHITE};">${d.premium}</strong><br/>Administration Fee: <strong style="color:${WHITE};">${d.adminFee}</strong> IPT (Insurance Premium Tax): <strong style="color:${WHITE};">${d.ipt}</strong></td></tr>
                          </table>

                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;">
                            <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;font-size:19px;font-weight:bold;line-height:1.35;color:${GREEN};">Need more cover? Get another quote<br/>in the new GoShorty App:</td></tr>
                            <tr>
                              <td align="center" style="padding-top:18px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td align="center" style="background-color:#1e7d32;border:2px solid #2ecc57;border-radius:28px;">
                                      <a href="${quoteUrl}" style="display:inline-block;padding:14px 30px;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:${WHITE};text-decoration:none;">Get a New Quote &nbsp;&rarr;</a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <!-- /policy details card -->
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- closing copy -->
          <tr>
            <td style="padding:8px 34px 0 34px;">
              <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">Remember you can always visit our website at <a href="${d.baseUrl}" style="color:${GREEN_LINK};text-decoration:underline;">GoShorty.co.uk</a> to explore your next journey and get a <a href="${quoteUrl}" style="color:${GREEN_LINK};text-decoration:underline;">quick quote.</a></p>
              <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">Seize the wheel and make that quote your next unforgettable adventure!</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:1.5;color:${MUTED};">The GoShorty Crew</p>
            </td>
          </tr>

          <!-- logo + social -->
          <tr>
            <td style="padding:28px 34px 8px 34px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="left" valign="middle">${wordmark(38)}</td>
                  <td align="right" valign="middle">${socialIcons(d.baseUrl)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- footer text -->
          <tr>
            <td style="padding:18px 34px 34px 34px;">
              <p style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:${MUTED};">Questions or concerns? Get in touch with us at <a href="mailto:info@goshorty.co.uk" style="color:${GREEN_LINK};text-decoration:underline;">info@goshorty.co.uk</a> or visit our <a href="${d.baseUrl}/help" style="color:${GREEN_LINK};text-decoration:underline;">Help Center.</a><br/>Never miss a beat! Follow us on <a href="${d.baseUrl}" style="color:${GREEN_LINK};text-decoration:underline;">Facebook</a> and <a href="${d.baseUrl}" style="color:${GREEN_LINK};text-decoration:underline;">Instagram.</a></p>
              <p style="margin:0 0 18px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:${DIM};">We are a UK based insurance broker and we are authorised and regulated by the Financial Conduct Authority under reference number 751221. <a href="${d.baseUrl}" style="color:${GREEN_LINK};text-decoration:underline;">GoShorty.co.uk</a> is a trading style of Complex to Clear Group Limited registered in England and Wales. Company Registration Number 05044963. Data Protection Registration ZA456686.</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:${DIM};">The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</p>
            </td>
          </tr>

        </table>
        <!-- /container -->
      </td>
    </tr>
  </table>
</body>
</html>`
}
