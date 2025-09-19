import Link from 'next/link';

export default function Page() {
  const diPlans = [
    {
      name: 'Own-Occupation DI',
      benefit: '$5,000/mo',
      elimination: '90 days',
      period: 'To age 65',
      riders: ['Residual/partial', 'COLA 3%', 'Future increase'],
      estPremium: '$78/mo',
    },
    {
      name: 'Any-Occupation DI',
      benefit: '$3,500/mo',
      elimination: '180 days',
      period: '5 years',
      riders: ['Partial disability'],
      estPremium: '$42/mo',
    },
    {
      name: 'Business Overhead Expense (BOE)',
      benefit: '$10,000/mo',
      elimination: '30 days',
      period: '12–24 months',
      riders: ['Carry-forward'],
      estPremium: '$61/mo',
    },
  ];

  const ltcIllustrations = [
    {
      type: 'Traditional LTC',
      pool: '$300,000',
      daily: '$200/day',
      benefitPeriod: '4 years',
      inflation: '3% compound',
      estPremium: '$124/mo',
    },
    {
      type: 'Hybrid Life + LTC',
      pool: '$200,000 (accel. death benefit)',
      daily: '$180/day',
      benefitPeriod: '3–4 years',
      inflation: 'No automatic inflation',
      estPremium: '$97/mo',
    },
    {
      type: 'Shared Care (2 lives)',
      pool: '$450,000 combined',
      daily: '$220/day',
      benefitPeriod: '6 years combined',
      inflation: '3% compound',
      estPremium: '$186/mo',
    },
  ];

  const scenarios = [
    {
      title: '34 • Software Engineer',
      need: 'Protect 60–70% of income; keep future raise options',
      approach: 'Own-occupation DI with future increase and partial disability riders',
      outcome: 'Target net replacement of $5,000/mo to age 65 with COLA 3%'
    },
    {
      title: '41 • Registered Nurse',
      need: 'Higher injury exposure, budget-sensitive',
      approach: 'Any-occupation DI with partial rider; elimination 180 days to lower premium',
      outcome: 'Core $3,500/mo for 5 years; revisit at annual review'
    },
    {
      title: '52 • Small Business Owner',
      need: 'Cover personal income and fixed business expenses',
      approach: 'Own-occupation DI for income + BOE policy for rent, utilities, payroll',
      outcome: '$4,000/mo personal DI + $10,000/mo BOE for 18 months'
    },
  ];

  const checklist = [
    'Two recent paystubs or last year’s W-2/1099',
    'Job duties and % field vs desk work',
    'Existing disability coverage (group or individual)',
    'Medical history overview and current prescriptions',
    'Monthly fixed expenses (for BOE)',
  ];

  return (
    <>
      {/* Hero with image */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="container-narrow grid lg:grid-cols-12 gap-10 items-center py-10 sm:py-14">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                <li aria-hidden="true"> / </li>
                <li><Link href="/personalized-insurance" className="hover:text-gray-700">Personalized Insurance</Link></li>
                <li aria-hidden="true"> / </li>
                <li className="text-gray-900 font-medium">Disability Insurance & Long‑Term Care</li>
              </ol>
            </nav>
            <h1 className="h mt-4">Disability Insurance & Long‑Term Care</h1>
            <p className="mt-3 text-gray-700 max-w-prose">
              Protect your income during illness or injury and plan ahead for extended care needs. We compare options and structure benefits so your plan stays affordable and effective.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/request-a-quote" className="btn btn-primary">Get My Quote</Link>
              <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50">Ask an Advisor</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1549842175-1a1173dd3b48?q=80&w=1200&auto=format&fit=crop"
              alt="Care planning discussion with advisor"
              className="w-full rounded-2xl object-cover aspect-[16/10] sm:aspect-[16/9]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      
      {/* Simple content */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container-narrow max-w-3xl">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at augue ut leo
            blandit volutpat. Suspendisse potenti. Integer posuere, nibh non efficitur
            convallis, nisi velit pretium elit, at ullamcorper ipsum neque id velit.
          </p>
          <p className="mt-4 text-gray-700">
            Praesent ac nunc non leo facilisis pharetra. Nam interdum, nisl ut suscipit
            imperdiet, tellus tortor dictum odio, sed iaculis quam justo at neque. Cras
            gravida, arcu nec interdum bibendum, ipsum sem mollis urna, at congue nunc
            mauris a nisl.
          </p>
          <p className="mt-4 text-gray-700">
            In posuere, orci vitae fringilla tincidunt, dolor nibh laoreet lectus, sed
            suscipit metus ipsum non libero. Maecenas euismod, dui vitae bibendum
            faucibus, lorem velit luctus justo, vel fermentum ex eros ut massa.
          </p>
          <p className="mt-4 text-gray-700">
            Integer aliquet, ex at ullamcorper vulputate, mauris erat malesuada urna, vel
            finibus ligula velit a lorem. Sed non leo dignissim, tincidunt velit at,
            molestie nulla. Pellentesque non lacus vitae arcu faucibus finibus sit amet ac
            sapien. Curabitur sit amet interdum lorem, non convallis nisi.
          </p>
          <p className="mt-4 text-gray-700">
            Aenean sit amet congue sem. Suspendisse id pharetra massa. Nam rhoncus nibh ut
            lectus tristique, at faucibus urna iaculis. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec et fermentum
            lectus, vitae tempus justo.
          </p>
          <p className="mt-4 text-gray-700">
            Morbi bibendum auctor leo, ac pulvinar justo dapibus at. Vestibulum aliquet
            sapien at erat blandit, vitae tristique libero gravida. Duis id tristique
            lorem. Sed ac neque non purus vulputate varius. Proin volutpat, risus id
            aliquet euismod, mauris velit ultrices mi, id tincidunt justo eros eget
            lectus.
          </p>
          <p className="mt-4 text-gray-700">
            Phasellus porta, neque id consequat sollicitudin, lorem tellus molestie lacus,
            vitae condimentum turpis orci nec nulla. Suspendisse potenti. Integer mattis
            risus arcu, et porttitor lacus bibendum nec. Nullam a pulvinar sem, eget
            suscipit mi.
          </p>
        </div>
      </section>
    </>
  );
}
