import Image from "next/image"
import Link from "next/link"
import Reveal from "@/component/motion/Reveal"
import Counter from "@/component/motion/Counter"

const stats = [
  { k: "Since", v: "1991" },
  { k: "Carriers", v: "75+" },
  { k: "Focus", v: "Tax Strategies" },
  { k: "Team", v: "Certified Pros" },
]

const services = [
  {
    title: "Life Insurance",
    desc:
      "Protect your family’s future with term and permanent options tailored to your goals.",
    href: "/personalized-insurance/senior-life-insurance",
  },
  {
    title: "Disability Insurance",
    desc:
      "Safeguard income if illness or injury keeps you from work—short and long-term options.",
    href: "/personalized-insurance/disability-insurance-and-long-term-care",
  },
  {
    title: "Long-Term Care",
    desc:
      "Plan for extended care needs and preserve assets while maintaining independence.",
    href: "/personalized-insurance/disability-insurance-and-long-term-care",
  },
  {
    title: "Business Insurance",
    desc:
      "Key-person coverage, buy-sell funding, and continuity planning for owners and partners.",
    href: "/personalized-insurance/insurance-for-business-needs",
  },
]

const pillars = [
  ["Independent advice", "Recommendations aligned to your needs and budget."],
  ["Clear explanations", "We translate complex options into plain language."],
  ["Competitive quotes", "We compare top-rated carriers side-by-side."],
  ["Ongoing support", "Annual reviews as your life and goals evolve."],
]

export default function Home() {
  function renderStatValue(v) {
    const str = String(v)
    const m = str.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/)
    if (!m) return str
    const [, prefix, num, suffix] = m
    const to = parseFloat(num)
    return (
      <>
        {prefix}
        <Counter to={to} duration={900} />
        {suffix}
      </>
    )
  }
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.07),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(129,140,248,0.06),transparent_35%)]"
        />
        <div className="container-narrow">
          <div className="py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-12 items-center">
            <Reveal from="left" className="lg:col-span-7">
              <p className="text-xs uppercase tracking-widest text-brand-700">
                Insurance • Retirement • Estate
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
                Live for today, <span className="text-brand-700">plan for tomorrow</span>.
              </h1>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Straightforward guidance and competitive policies from top-rated carriers—
                so you can move forward with confidence.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/request-a-quote"
                  className="btn btn-primary"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/personalized-insurance"
                  className="btn btn-outline"
                >
                  Explore Insurance
                </Link>
              </div>

              {/* quick phone */}
              <div className="mt-4 text-sm text-gray-600">
                Prefer to talk?{" "}
                <a className="text-brand-700 font-medium" href="tel:18008904525">
                  (800) 890-4525
                </a>
              </div>
            </Reveal>

            <Reveal from="right" className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Dollarimage.jpg"
                  alt="Family financial planning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="container-narrow">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.k}
                from={i % 2 === 0 ? 'left' : 'right'}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm hover-lift"
              >
                <div className="text-2xl font-semibold text-gray-900">{renderStatValue(s.v)}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                  {s.k}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / MISSION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-gray-100">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <Reveal from="left" className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Guidance that puts clarity first
              </h2>
              <p className="mt-4 text-gray-700">
                We help you understand the fundamentals of insurance, retirement planning,
                and estate strategies—then tailor solutions to your goals and budget.
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {pillars.map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="font-medium text-gray-900">{title}</div>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact CTA */}
          <Reveal from="right" className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-xl font-semibold">Questions about coverage?</div>
                <p className="mt-3 text-base text-gray-600">
                  Get quick, independent guidance from our team.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Our experts are available to assist you with any inquiries you may have about our insurance plans and services.
                </p>
              </div>
              <div className="mt-5">
                <p className="text-sm text-gray-600">
                  We are committed to providing you with the best service possible. Don't hesitate to reach out!
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:18008904525"
                  className="btn btn-primary text-lg"
                >
                  Call (800) 890-4525
                </a>
                <Link
                  href="/contact"
                  className="btn btn-outline text-lg"
                >
                  Message Us
                </Link>
              </div>
              
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            A complete range of insurance plans
          </h2>
          <p className="mt-3 text-center text-gray-700">
            We compare leading carriers to match coverage with your needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} from={i % 2 === 0 ? 'left' : 'right'} className="h-full">
                <Link
                  href={s.href}
                  className="group block h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition hover-lift"
                >
                  <div className="text-lg font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  <div className="mt-4 text-sm text-brand-700">
                    Learn more <span aria-hidden>→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/personalized-insurance"
              className="btn btn-primary"
            >
              Explore all options
            </Link>
          </div>
        </div>
      </section>

      {/* “HOW WE WORK” / PROCESS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-gray-100">
        <div className="container-narrow">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            What to expect
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["1. Listen", "We start with your goals, budget, and timeline."],
              ["2. Compare", "We source competitive options from leading carriers."],
              ["3. Explain", "Clear trade-offs so you can choose confidently."],
              ["4. Support", "We review coverage with you over time."],
            ].map(([t, d], i) => (
              <Reveal key={t} from={i % 2 === 0 ? 'left' : 'right'} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover-lift">
                <div className="font-medium text-gray-900">{t}</div>
                <p className="mt-1 text-sm text-gray-600">{d}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/request-a-quote"
              className="btn btn-outline"
            >
              Request a free quote
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-3 text-gray-700">
            Get the best coverage at the best price—backed by independent advice.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="btn btn-primary"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
