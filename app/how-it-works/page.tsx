"use client";

import { Badge } from "../components/Badge";
import { SectionHeading } from "../components/SectionHeading";
import { howItWorksSteps } from "../data/mockData";

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden border-b border-border bg-[#fffbf7]">
        <div className="absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-[#f6efe8] opacity-60 blur-3xl" aria-hidden />
        <div className="absolute right-[-80px] top-24 h-[360px] w-[360px] rounded-full bg-[#e0f2fe] opacity-30 blur-2xl" aria-hidden />
        <div className="container-max relative z-10 grid gap-10 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <Badge label="Guided flow" />
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">How it works</h1>
            <p className="text-lg text-slate-600">
              Post your project once. We surface vetted professionals, help you compare options, and make hiring feel effortless.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">No spam, ever</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">Transparent reviews</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">Local specialists</span>
            </div>
          </div>
          <div className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="absolute -right-6 -top-10 h-32 w-32 rounded-full bg-[#fca5a5] opacity-20 blur-2xl" aria-hidden />
            <div className="space-y-4 relative z-10">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-base font-semibold text-brand-700">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-surface p-4">
              <p className="text-sm font-semibold text-slate-900">No commitment to explore</p>
              <p className="text-sm text-slate-600">Share details, compare pros, and book only when you&apos;re ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max space-y-8">
        <SectionHeading
          eyebrow="Step by step"
          title="From idea to done"
          description="A transparent path so you always know what happens next."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl">{step.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max space-y-6">
        <SectionHeading
          eyebrow="Trust & safety"
          title="Confidence is built-in"
          description="Safety checks and transparency are built into every step of the process."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Verified pros",
              text: "Licensing and identity checks, plus real customer reviews."
            },
            {
              title: "Secure payments",
              text: "Clear pricing and simple invoicing keep surprises away."
            },
            {
              title: "Transparent reviews",
              text: "See ratings, response times, and recent work before you book."
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max">
        <div className="rounded-3xl border border-border bg-white p-10 shadow-sm">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Get started</p>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">Describe your project once—let us do the matching</h3>
            <p className="max-w-2xl text-slate-600">
              We line up vetted pros and help you compare quotes quickly so you can book with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">
                Post a job
              </button>
              <button className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">
                Talk to support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
