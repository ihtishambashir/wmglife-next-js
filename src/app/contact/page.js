// app/contact-us/page.js
'use client'

import { useState } from 'react'

// export const metadata = {
//   title: 'Contact Us',
//   description:
//     'Get in touch for quotes, coverage questions, and policy reviews. Our team is here Monday–Friday to help.',
// }

export default function ContactUsPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simple honeypot anti-bot
    const hp = e.currentTarget.elements.namedItem('company')?.value
    if (hp) {
      setError('Submission blocked. Please try again.')
      setLoading(false)
      return
    }

    // Gather form data — replace with your API route or email service
    const payload = {
      name: e.currentTarget.name.value.trim(),
      phone: e.currentTarget.phone.value.trim(),
      email: e.currentTarget.email.value.trim(),
      message: e.currentTarget.message.value.trim(),
      source: 'contact-page',
    }

    try {
      // TODO: POST to /api/contact or your SMTP/Mail provider
      // await fetch('/api/contact', { method:'POST', body: JSON.stringify(payload) })
      await new Promise((r) => setTimeout(r, 700)) // demo latency
      setSent(true)
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-brand-700">
                Insurance & Retirement Guidance
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                Contact Wealth Management Group
              </h1>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Ask about quotes, coverage options, pricing, and policy reviews.
                We’ll respond quickly—usually the same business day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:18008904525"
                  className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2 text-black hover:bg-brand-700 shadow-sm"
                >
                  Call (800) 890-4525
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center rounded-xl border border-brand-600 px-4 py-2 text-brand-700 hover:bg-brand-50"
                >
                  Message Us
                </a>
              </div>
            </div>

            {/* Quick contact card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="text-lg font-semibold">Office & Hours</h2>
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
                    <dd>Mon–Fri: 8:00 AM–5:00 PM<br/>Sat & Sun: Closed</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-gray-500">
                  Info as listed on the current site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form + Map */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <h2 id="contact-form" className="text-xl font-semibold">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We’ll reach out to you with next steps.
              </p>

              {sent ? (
                <div
                  role="status"
                  className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-900"
                >
                  Thanks—your message was sent. We’ll get back to you soon.
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="company"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        pattern="[0-9()+\\-\\s]*"
                        className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                        placeholder="(800) 890-4525"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      minLength={10}
                      className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-600"
                      placeholder="How can we help?"
                    />
                  </div>

                  {error && (
                    <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-900">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 font-medium text-black shadow-sm hover:bg-brand-700 disabled:opacity-60"
                  >
                    {loading ? 'Sending…' : 'Send message'}
                  </button>

                  <p className="text-xs text-gray-500">
                    By submitting, you consent to being contacted about your request.
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-80 sm:h-full min-h-[20rem] rounded-2xl overflowa-hidden border border-gray-200 shadow-sm">
              {/* Replace with your preferred map/embed provider */}
              <iframe
                title="Office location"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1101%20Brickell%20Ave%20Suite%20800%2C%20Miami%2C%20FL%2033131&output=embed"
              />
            </div>

            {/* Alternative contact methods */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <a
                href="tel:18008904525"
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow"
              >
                <div className="text-sm font-semibold text-gray-900">Call</div>
                <div className="mt-1 text-sm text-gray-600">(800) 890-4525</div>
              </a>
              <a
                href="mailto:info@wmglife.com"
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow"
              >
                <div className="text-sm font-semibold text-gray-900">Email</div>
                <div className="mt-1 text-sm text-gray-600">info@wmglife.com</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / “What to expect” */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">What happens after you reach out?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['We listen first', 'We’ll ask about goals, budget, and timeline.'],
              ['Clear options', 'We translate policy types and trade-offs.'],
              ['Competitive quotes', 'We compare carriers and pricing.'],
              ['Ongoing support', 'Annual reviews to keep coverage aligned.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="font-medium text-gray-900">{title}</div>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
