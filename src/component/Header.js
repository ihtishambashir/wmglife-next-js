'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const SUB_ITEMS = [
  { href: '/personalized-insurance/disability-insurance-and-long-term-care', label: 'Disability Insurance and Long Term Care' },
  { href: '/personalized-insurance/insurance-for-business-needs', label: 'Insurance for Business Needs' },
  { href: '/personalized-insurance/new-and-exsisting-coverage', label: 'New and Exsisting Coverage' },
  { href: '/personalized-insurance/senior-life-insurance', label: 'Senior Life Insurance' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);       // mobile menu
  const [piOpen, setPiOpen] = useState(false);   // mobile accordion
  const [hoverOpen, setHoverOpen] = useState(false); // desktop dropdown

  // In browsers, setTimeout returns a number. Keep it simple in JS:
  const hoverTimer = useRef(null); // number | null

  useEffect(() => {
    setOpen(false);
    setPiOpen(false);
    setHoverOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const showDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setHoverOpen(true);
  };

  const hideDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setHoverOpen(false), 80);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-narrow flex items-center justify-between py-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand/30 rounded-lg"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-600 to-brand-400 shadow-inner" />
          <span className="text-xl font-semibold tracking-tight text-brand">
            Wealth Management Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/" className={clsx('nav-link', isActive('/') && 'text-brand font-semibold')}>
            Home
          </Link>

          <Link
            href="/request-a-quote"
            className={clsx('nav-link', isActive('/request-a-quote') && 'text-brand font-semibold')}
          >
            Request a Quote
          </Link>

          {/* Personalized Insurance dropdown */}
          <div
            className="relative"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Link
              href="/personalized-insurance"
              aria-haspopup="menu"
              aria-expanded={hoverOpen}
              className={clsx(
                'nav-link inline-flex items-center gap-1',
                (hoverOpen || SUB_ITEMS.some((s) => isActive(s.href))) && 'text-brand font-semibold'
              )}
              onClick={(e) => {
                // If user holds Ctrl/Cmd, allow normal navigation to /personalized-insurance
                if (e.metaKey || e.ctrlKey) return;
                // Otherwise, toggle the dropdown instead of navigating
                // e.preventDefault();
                setHoverOpen((v) => !v);
              }}
              onFocus={showDropdown}
            >
              Personalized Insurance
              <svg
                className={clsx('h-4 w-4 transition-transform', hoverOpen && 'rotate-180')}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .92 1.18l-4.25 3.38a.75.75 0 0 1-.92 0L5.21 8.41a.75.75 0 0 1 .02-1.2z" />
              </svg>
            </Link>

            {/* Dropdown panel */}
            <div
              className={clsx(
                'absolute left-1/2 top-full z-50 mt-2 w-[22rem] -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-2 shadow-lg transition-all duration-200',
                hoverOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-1'
              )}
              role="menu"
            >
              <ul className="py-1">
                {SUB_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={clsx(
                        'block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none',
                        isActive(item.href) ? 'text-brand font-semibold' : 'text-gray-700'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <Link href="/contact" className={clsx('nav-link', isActive('/contact') && 'text-brand font-semibold')}>
            Contact
          </Link>

          <a href="tel:18008904525" className="btn btn-primary">Call (800) 890-4525</a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center size-10 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand/30"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-6">
            <span className={clsx('absolute left-0 top-0 h-0.5 w-6 bg-gray-800 transition-transform', open && 'translate-y-1.5 rotate-45')} />
            <span className={clsx('absolute left-0 top-1.5 h-0.5 w-6 bg-gray-800 transition-opacity', open ? 'opacity-0' : 'opacity-100')} />
            <span className={clsx('absolute left-0 top-3 h-0.5 w-6 bg-gray-800 transition-transform', open && '-translate-y-1.5 -rotate-45')} />
          </div>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-gray-200">
          <div className="container-narrow py-3 flex flex-col gap-2">
            <Link href="/" className={clsx('nav-link', isActive('/') && 'text-brand font-semibold')} onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link
              href="/request-a-quote"
              className={clsx('nav-link', isActive('/request-a-quote') && 'text-brand font-semibold')}
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>

            {/* Mobile accordion for submenu */}
            <div className="w-full">
              <button
                className="w-full rounded-lg py-2 text-left nav-link flex items-center justify-between"
                onClick={() => setPiOpen((v) => !v)}
                aria-expanded={piOpen}
                aria-controls="pi-accordion"
              >
                <span className={clsx(SUB_ITEMS.some((s) => isActive(s.href)) && 'text-brand font-semibold')}>
                  Personalized Insurance
                </span>
                <svg className={clsx('h-4 w-4 transition-transform', piOpen && 'rotate-180')} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .92 1.18l-4.25 3.38a.75.75 0 0 1-.92 0L5.21 8.41a.75.75 0 0 1 .02-1.2z" />
                </svg>
              </button>

              {piOpen && (
                <ul id="pi-accordion" className="ml-3 border-l border-gray-200 pl-3 space-y-1 pb-2">
                  {SUB_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx('block py-1.5 text-sm', isActive(item.href) ? 'text-brand font-semibold' : 'text-gray-700')}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href="/contact" className={clsx('nav-link', isActive('/contact') && 'text-brand font-semibold')} onClick={() => setOpen(false)}>
              Contact
            </Link>

            <a href="tel:18008904525" className="btn btn-primary mt-2">Call (800) 890-4525</a>
          </div>
        </div>
      )}
    </header>
  );
}
