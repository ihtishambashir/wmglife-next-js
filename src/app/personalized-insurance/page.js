/* app/personalized-insurance/page.tsx */
'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { Metadata } from 'next';
import clsx from 'clsx';
const Icons = {
  shield: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2 20 6v5c0 5.5-3.8 9.8-8 11-4.2-1.2-8-5.5-8-11V6l8-4Z" />
    </svg>
  ),
  briefcase: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M3 12h18" />
    </svg>
  ),
  clipboard: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="7" y="6" width="10" height="14" rx="2" />
      <path d="M9.5 6h5A1.5 1.5 0 0 0 16 4.5 1.5 1.5 0 0 0 14.5 3h-5A1.5 1.5 0 0 0 8 4.5 1.5 1.5 0 0 0 9.5 6Z" />
      <path d="M10 11h6M10 15h6" />
    </svg>
  ),
  user: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
};

/** Optional (App Router): export metadata for SEO */
// export const metadata: Metadata = {
//   title: 'Personalized Insurance | Wealth Management Group',
//   description:
//     'Explore disability & long-term care, business insurance, new & existing coverage reviews, and senior life insurance tailored to your needs.',
//   openGraph: {
//     title: 'Personalized Insurance | Wealth Management Group',
//     description:
//       'Explore disability & long-term care, business insurance, new & existing coverage reviews, and senior life insurance tailored to your needs.',
//     url: 'https://your-domain.com/personalized-insurance',
//     type: 'website',
//   },
// };

const items = [
  {
    href: '/personalized-insurance/disability-insurance-and-long-term-care',
    title: 'Disability Insurance & Long-Term Care',
    desc: 'Safeguard income and plan ahead for extended care.',
    icon: 'shield',
  },
  {
    href: '/personalized-insurance/insurance-for-business-needs',
    title: 'Insurance for Business Needs',
    desc: 'Protect key people, partners, and continuity.',
    icon: 'briefcase',
  },
  {
    href: '/personalized-insurance/new-and-exsisting-coverage',
    title: 'New & Existing Coverage',
    desc: 'Review current policies or start fresh with competitive options.',
    icon: 'clipboard',
  },
  {
    href: '/personalized-insurance/senior-life-insurance',
    title: 'Senior Life Insurance',
    desc: 'Affordable, straightforward coverage designed for peace of mind.',
    icon: 'user',
  },
];

export default function PersonalizedInsurancePage() {
  // JSON-LD for breadcrumbs + list of offerings
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://your-domain.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Personalized Insurance',
              item: 'https://your-domain.com/personalized-insurance',
            },
          ],
        },
        {
          '@type': 'ItemList',
          name: 'Personalized Insurance Offerings',
          itemListElement: items.map((i, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            url: `https://your-domain.com${i.href}`,
            name: i.title,
          })),
        },
      ],
    }),
    []
  );

  return (
    <>
      {/* SEO: Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand/5 to-transparent">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.08),transparent_35%)]"
        />
        <div className="container-narrow max-w-6xl py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand/30 rounded">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Personalized Insurance</li>
            </ol>
          </nav>

          <div className="mt-6 md:mt-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Personalized Insurance
            </h1>
            <p className="mt-3 max-w-2xl text-base md:text-lg text-white/80">
              Explore focused solutions tailored to your stage of life and goals. Whether
              you’re reviewing existing policies or planning for future needs, we’ll help
              you choose with confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/request-a-quote" className="btn btn-primary font-bold">
                Request a Quote
              </Link>
              <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section aria-label="Why choose us" className="border-y border-gray-100 bg-white">
        <div className="container-narrow max-w-6xl py-6 md:py-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Tailored guidance', 'Plans aligned with your goals'],
              ['Transparent options', 'Clear comparisons—no jargon'],
              ['Trusted carriers', 'Competitive rates & strong ratings'],
              ['Ongoing support', 'We review and optimize over time'],
            ].map(([title, sub]) => (
              <li key={title} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">✓</span>
                <div>
                  <div className="font-semibold text-gray-900">{title}</div>
                  <div className="text-sm text-gray-600">{sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GRID CARDS */}
      <section className="bg-white">
        <div className="container-narrow max-w-6xl py-12 md:py-14">
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={clsx(
                  'group card relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand/30'
                )}
              >
                <div className="flex items-start gap-4">
                  {(() => {
                    const Icon = Icons[i.icon] || Icons.shield;
                    return <Icon className="mt-0.5 h-8 w-8 text-brand" />;
                  })()}
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand">
                      {i.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">{i.desc}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-brand">
                      View details
                      <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* subtle gradient accent */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand/10 blur-2xl transition-opacity group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="container-narrow max-w-3xl py-12 md:py-14">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            <details className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer list-none font-medium text-gray-900 focus:outline-none">
                How do I know which coverage is right for me?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                We’ll review your goals, budget, and current policies, then compare options
                side-by-side so you can decide confidently.
              </p>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer list-none font-medium text-gray-900 focus:outline-none">
                Can you evaluate my existing policy?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                Yes—our “New & Existing Coverage” review highlights gaps, overlaps, and potential savings.
              </p>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer list-none font-medium text-gray-900 focus:outline-none">
                Do you work with multiple carriers?
              </summary>
              <p className="mt-2 text-sm text-gray-700">
                We compare from a range of reputable providers to match benefits and pricing to your needs.
              </p>
            </details>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/request-a-quote" className="btn btn-primary">
              Get My Quote
            </Link>
            <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-white">
        <div className="container-narrow max-w-6xl py-10 md:py-12">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-gradient-to-r from-brand/5 to-emerald-50 p-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Ready to personalize your coverage?</h3>
              <p className="mt-1 text-sm text-gray-700">
                Talk to an advisor or request a quote in minutes—no obligation.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="tel:18008904525" className="btn border border-gray-300 hover:bg-white">
                Call (800) 890-4525
              </a>
              <Link href="/request-a-quote" className="btn btn-primary">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
