
import Link from 'next/link';

export default function Page() {
  const reviewChecklist = [
    'Policy type and issue year',
    'Coverage amount and beneficiaries',
    'Premiums paid, payment mode, and grace status',
    'Cash value / surrender value (if any)',
    'Riders and loan balances',
    'In‑force illustration or annual statement',
  ];

  const currentPolicy = {
    owner: 'J. Doe',
    type: 'Term 20',
    issueYear: 2018,
    face: '$750,000',
    premium: '$46/mo',
    remaining: '13 years',
    riders: ['Accelerated DB', 'Waiver of Premium'],
  };

  const options = [
    { label: 'Keep as‑is', detail: 'Premium is competitive; coverage matches income needs' },
    { label: 'Layer new term', detail: 'Add $250k for mortgage; align to payoff timeline' },
    { label: '1035 exchange', detail: 'Move cash value (if any) to a more efficient policy' },
    { label: 'Reduce coverage', detail: 'If needs decreased; lowers premium' },
    { label: 'Replace', detail: 'If healthier now or rates improved; subject to underwriting' },
  ];

  const newQuotes = [
    { plan: 'Term 20', face: '$250,000', age: 'Age 34 • F • NS', est: '$13/mo' },
    { plan: 'Term 30', face: '$500,000', age: 'Age 37 • M • NS', est: '$31/mo' },
    { plan: 'Whole Life', face: '$100,000', age: 'Age 42 • F • NS', est: '$136/mo' },
    { plan: 'Guaranteed Universal (GUL)', face: '$300,000 (to age 90)', age: 'Age 45 • M • NS', est: '$98/mo' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="container-narrow grid lg:grid-cols-12 gap-10 items-center py-10 sm:py-14">
          <div className="lg:col-span-6">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
                <li aria-hidden="true"> / </li>
                <li><Link href="/personalized-insurance" className="hover:text-gray-700">Personalized Insurance</Link></li>
                <li aria-hidden="true"> / </li>
                <li className="text-gray-900 font-medium">New & Existing Coverage</li>
              </ol>
            </nav>
            <h1 className="h mt-4">New & Existing Coverage</h1>
            <p className="mt-3 text-gray-700 max-w-prose">
              Get a clear, unbiased review of your current policies and fresh quotes for new coverage. We’ll show pros, cons, and pricing side‑by‑side so you can decide with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/request-a-quote" className="btn btn-primary">Start My Review</Link>
              <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50">Talk to an Advisor</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
              alt="Reviewing coverage and documents"
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
