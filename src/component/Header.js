'use client';
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Home" },
  { href: "/request-a-quote", label: "Request a Quote" },
  { href: "/personalized-insurance", label: "Personalized Insurance" },
  { href: "/contact", label: "Contact" },
];

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-200">
      <div className="container-narrow flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-brand" />
          <span className="text-xl font-semibold tracking-tight text-brand">Wealth Management Group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n)=>(
            <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>
          ))}
          <a href="tel:18008904525" className="btn btn-primary">Call (800) 890-4525</a>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center size-10 rounded-xl border">
          <span className="sr-only">Toggle menu</span>
          <div className={clsx("h-0.5 w-6 bg-gray-800 transition-all", open && "rotate-45 translate-y-1")} />
          <div className={clsx("h-0.5 w-6 bg-gray-800 my-1", open && "opacity-0")} />
          <div className={clsx("h-0.5 w-6 bg-gray-800", open && "-rotate-45 -translate-y-1")} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container-narrow py-3 flex flex-col gap-3">
            {nav.map((n)=>(
              <Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="nav-link">{n.label}</Link>
            ))}
            <a href="tel:18008904525" className="btn btn-primary mt-2">Call (800) 890-4525</a>
          </div>
        </div>
      )}
    </header>
  );
}
