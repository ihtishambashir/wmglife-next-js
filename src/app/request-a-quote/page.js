// app/request-a-quote/page.js
'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

// export const metadata = {
//   title: 'Request a Quote',
//   description:
//     'Tell us a bit about yourself and the coverage you’re considering. We’ll follow up quickly with competitive options.',
// }

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
]

const CA_PROVINCES = [
  'Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Nova Scotia','Northwest Territories','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon',
]

// Matches the reference site taxonomy
const INSURANCE_TYPES = [
  'Personalized Insurance',
  'Sell Your Life Insurance Policy',
  'Disability Insurance and Long Term Care',
  'Insurance for Business Needs',
  'New and Exsisting Coverage',
  'Senior Life Insurance',
]

export default function RequestAQuotePage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [country, setCountry] = useState('United States')
  const regions = useMemo(
    () => (country === 'Canada' ? CA_PROVINCES : US_STATES),
    [country]
  )

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const f = e.currentTarget
    // Honeypot
    if (f.company?.value) {
      setError('Submission blocked. Please try again.')
      setLoading(false)
      return
    }

    const payload = {
      name: f.name.value.trim(),
      phone: f.phone.value.trim(),
      email: f.email.value.trim(),
      address: f.address.value.trim(),
      city: f.city.value.trim(),
      country,
      region: f.region.value,
      postal: f.postal.value.trim(),
      insuranceFor: f.insFor.value,
      insuranceType: f.insType.value,
      message: f.message.value.trim(),
      consent: f.consent.checked,
    }

    try {
      // TODO: replace with your API route (e.g., /api/quote) or SMTP handler
      // await fetch('/api/quote', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      await new Promise((r) => setTimeout(r, 700)) // demo latency
      setSent(true)
      f.reset()
    } catch {
      setError('Sorry, something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-brand-700">Request a Quote</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
                Tell us about your coverage needs
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Share a few details and we’ll follow up with competitive options from
                top-rated carriers. Prefer to call?{' '}
                <a className="text-brand-700 font-medium" href="tel:18008904525">
                  (800) 890-4525
                </a>
                .
              </p>
              <div className="mt-6">
                <Link
                  href="/personalized-insurance"
                  className="inline-flex items-center rounded-xl border border-brand-600 px-4 py-2 text-brand-700 hover:bg-brand-50"
                >
                  Explore coverage types
                </Link>
              </div>
            </div>

            {/* Office card (from site) */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <div className="text-lg font-semibold">Office & Hours</div>
                <dl className="mt-4 space-y-3 text-sm text-gray-700">
                  <div>
                    <dt className="font-medium text-gray-900">Address</dt>
                    <dd>1101 Brickell Ave Suite 800<br/>Miami, FL 33131</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Phone</dt>
                    <dd>(800) 890-4525</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd>info@wmglife.com</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Hours</dt>
                    <dd>Mon–Fri: 8:00 AM–5:00 PM • Sat–Sun: Closed</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-gray-500">
                  Details as listed on the current site.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-semibold">Your information</h2>
            <p className="mt-1 text-sm text-gray-600">
              We’ll use this to prepare a tailored quote and reach out with next steps.
            </p>

            {sent ? (
              <div
                role="status"
                className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-900"
              >
                Thanks—your request was submitted. We’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 grid gap-5" noValidate>
                {/* Honeypot */}
                <input name="company" type="text" tabIndex={-1} className="hidden" autoComplete="off" />

                {/* Personal */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Full name *</label>
                    <input id="name" name="name" required minLength={2}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                    <input id="phone" name="phone" type="tel" inputMode="tel" pattern="[0-9()+\\-\\s]*"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="(800) 890-4525" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">Email *</label>
                    <input id="email" name="email" type="email" required
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium">Address</label>
                    <input id="address" name="address"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="Street address" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-4 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium">City/Town</label>
                    <input id="city" name="city"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="City" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Country</label>
                    <select value={country} onChange={(e)=>setCountry(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600">
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium">
                      State / Province
                    </label>
                    <select id="region" name="region"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600">
                      <option value="">Select</option>
                      {regions.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="postal" className="block text-sm font-medium">Zip / Postal Code</label>
                    <input id="postal" name="postal"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="ZIP / Postal" />
                  </div>

                  <div>
                    <label htmlFor="insFor" className="block text-sm font-medium">Insurance For</label>
                    <select id="insFor" name="insFor"
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600">
                      <option value="">Select Option</option>
                      <option>Personalized Insurance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="insType" className="block text-sm font-medium">Insurance Type</label>
                    <select id="insType" name="insType" defaultValue=""
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600">
                      <option value="">Select Option</option>
                      {INSURANCE_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Enter your inquiry</label>
                  <textarea id="message" name="message" rows={6}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                    placeholder="Share any details or questions..." />
                </div>

                {error && (
                  <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900">
                    {error}
                  </div>
                )}

                <div className="flex items-start gap-2">
                  <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4" />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to be contacted about my request.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 font-medium text-black shadow-sm hover:bg-brand-700 disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send request'}
                </button>

                <p className="text-xs text-gray-500">
                  We respect your privacy. You can update your preferences anytime.
                </p>
              </form>
            )}
          </div>

          {/* Helpful links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-us" className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
              Contact details
            </Link>
            <Link href="/personalized-insurance" className="rounded-xl border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
              Insurance overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
