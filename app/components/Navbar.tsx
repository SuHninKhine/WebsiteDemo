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
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="container-max flex items-center justify-between py-3 md:py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-semibold text-slate-900">
            ServiceHub
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${active ? "text-brand-600" : "hover:text-brand-700"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#" className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors">
            Sign in
          </Link>
          <Link
            href="#"
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            Post a job
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container-max flex flex-col gap-3 py-4 text-sm font-medium text-slate-800">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 transition-colors ${active ? "text-brand-600" : "hover:text-brand-700"}`}
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
                className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
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
