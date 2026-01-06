"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/90 backdrop-blur">
      <div className="container-max flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-semibold text-slate-900">
            ServiceHub
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${active ? "text-brand-700" : "hover:text-brand-600"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors">
            Sign in
          </Link>
          <Link
            href="#"
            className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
          >
            Post a job
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md border border-sand-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-sand-200 bg-white md:hidden">
          <div className="container-max flex flex-col gap-3 py-4 text-sm font-medium text-slate-800">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 transition-colors ${active ? "text-brand-700" : "hover:text-brand-600"}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <Link href="#" className="text-slate-700 hover:text-brand-700 transition-colors">
                Sign in
              </Link>
              <Link
                href="#"
                className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-brand-700"
              >
                Post a job
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
