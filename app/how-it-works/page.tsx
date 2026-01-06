"use client";

import { Badge } from "../components/Badge";
import { SectionHeading } from "../components/SectionHeading";
import { howItWorksSteps } from "../data/mockData";

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="border-b border-sand-200 bg-sand-50/70">
        <div className="container-max grid gap-10 py-14 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <Badge label="Guided flow" />
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">How it works</h1>
            <p className="text-lg text-slate-600">
              Post your project once. We surface vetted professionals, help you compare options, and make hiring feel effortless.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-sand-200">No spam, ever</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-sand-200">Transparent reviews</span>
              <span className="rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-sand-200">Local specialists</span>
            </div>
          </div>
          <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-card">
            <div className="space-y-4">
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
            <div className="mt-5 rounded-2xl bg-sand-50 p-4">
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
              className="flex flex-col gap-3 rounded-2xl border border-sand-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
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
            <div key={item.title} className="rounded-2xl border border-sand-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max">
        <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 p-10 shadow-card">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Get started</p>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Describe your project once—let us do the matching</h3>
            <p className="max-w-2xl text-white/90">
              We line up vetted pros and help you compare quotes quickly so you can book with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-sand-100">
                Post a job
              </button>
              <button className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/15">
                Talk to support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
