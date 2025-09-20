
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const solutions = [
    { name: 'Key‑Person Life', use: 'Protects against loss of a revenue‑critical employee or founder', structures: 'Term or permanent life' },
    { name: 'Buy‑Sell Funding', use: 'Ensures smooth transfer of ownership at death or disability', structures: 'Cross‑purchase, entity, wait‑and‑see' },
    { name: 'Disability Buy‑Out', use: 'Funds shareholder buyout if long‑term disability occurs', structures: 'Lump sum or installment' },
    { name: 'Overhead Expense (BOE)', use: 'Covers rent, utilities, and payroll during disability', structures: '12–24 month benefit period' },
    { name: 'Executive Bonus (162)', use: 'Reward/retain key talent with employer‑paid personal coverage', structures: 'Section 162 bonus plan' },
  ];

  const sampleCases = [
    {
      title: 'SaaS Start‑Up • Series A',
      profile: '12 employees; two technical founders',
      design: 'Key‑person term: $2M on CTO and $2M on CEO (10‑yr term)',
      premium: '$86/mo total (illustrative)',
    },
    {
      title: 'Dental Practice • 3 Partners',
      profile: 'Equal ownership; revenue stable',
      design: 'Buy‑sell funding: $1.2M each; cross‑purchase using 15‑yr term',
      premium: '$312/mo combined (illustrative)',
    },
    {
      title: 'Manufacturing • Owner‑Operated',
      profile: 'Owner handles sales; fixed costs high',
      design: 'Key‑person $1M term + BOE $25k/mo for 18 months',
      premium: '$189/mo (illustrative)',
    },
  ];

  const docs = [
    'Cap table or ownership percentages',
    'Role descriptions and revenue dependencies',
    'Latest P&L and balance sheet',
    'Payroll and fixed expense summary (for BOE)',
    'Buy‑sell agreement draft (if available)',
  ];

  const quotes = [
    { plan: 'Key‑Person Term (10‑yr)', face: '$1,000,000', insured: 'Age 35 • M • NS', est: '$42/mo' },
    { plan: 'Key‑Person Term (15‑yr)', face: '$2,000,000', insured: 'Age 44 • F • NS', est: '$118/mo' },
    { plan: 'Buy‑Sell Term (15‑yr)', face: '$1,200,000', insured: 'Age 40 • M • NS', est: '$71/mo' },
    { plan: 'Disability Buy‑Out', face: '$600,000 (lump sum)', insured: 'Age 47 • F • Non‑smoker', est: '$136/mo' },
    { plan: 'BOE', face: '$25,000/mo (18 mo)', insured: 'Age 52 • M • Non‑smoker', est: '$93/mo' },
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
                <li className="text-gray-900 font-medium">Insurance for Business Needs</li>
              </ol>
            </nav>
            <h1 className="h mt-4">Insurance for Business Needs</h1>
            <p className="mt-3 text-gray-700 max-w-prose">
              Align coverage with your operating risks and growth plans. We help you quantify exposure, structure policies, and compare pricing so your business stays resilient.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/request-a-quote" className="btn btn-primary">Get Business Quote</Link>
              <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-50 text-gray-900">Talk to a Specialist</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
              alt="Team in strategy meeting"
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
