
import Link from 'next/link';

export default function Page() {
  const products = [
    { name: 'Final Expense (Whole Life)', coverage: '$5,000 – $40,000', features: 'Locked premiums; builds small cash value; lifetime coverage' },
    { name: 'Guaranteed Issue', coverage: '$5,000 – $25,000', features: 'No health questions; graded death benefit in first 2–3 years' },
    { name: 'Term for Seniors', coverage: '$50,000 – $500,000', features: 'Level premium for 10–20 years; often convertible' },
    { name: 'GUL (Guaranteed Universal)', coverage: '$50,000 – $1,000,000', features: 'Lifetime guarantee to set age (90–121); minimal cash value' },
  ];

  const sampleQuotes = [
    { plan: 'Final Expense', face: '$10,000', insured: 'Age 68 • F • Non‑smoker', est: '$32/mo' },
    { plan: 'Final Expense', face: '$20,000', insured: 'Age 72 • M • Non‑smoker', est: '$67/mo' },
    { plan: 'Guaranteed Issue', face: '$15,000', insured: 'Age 70 • F', est: '$59/mo' },
    { plan: 'Term 15 (convertible)', face: '$150,000', insured: 'Age 65 • M • Non‑smoker', est: '$71/mo' },
    { plan: 'GUL to age 100', face: '$200,000', insured: 'Age 69 • F • Non‑smoker', est: '$189/mo' },
  ];

  const checklist = [
    'Desired purpose (final expenses, legacy, income replacement)',
    'Budget range and payment mode',
    'Health history and prescriptions',
    'Existing policies and beneficiaries',
    'Preferred coverage length (term vs lifetime)',
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
                <li className="text-gray-900 font-medium">Senior Life Insurance</li>
              </ol>
            </nav>
            <h1 className="h mt-4">Senior Life Insurance</h1>
            <p className="mt-3 text-gray-700 max-w-prose">
              Simple, flexible coverage focused on predictability. We’ll match your goals and budget to options that are easy to understand and easy to keep.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/request-a-quote" className="btn btn-primary">See My Options</Link>
              <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50 text-gray-900">Talk to an Advisor</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Happy seniors planning together"
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
