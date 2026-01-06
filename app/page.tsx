"use client";

import { Badge } from "./components/Badge";
import { SectionHeading } from "./components/SectionHeading";
import { featuredProfessionals, howItWorksSteps, services, testimonials } from "./data/mockData";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden border-b border-border bg-[#fffbf7]">
        <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#f6efe8] opacity-60 blur-3xl" aria-hidden />
        <div className="absolute right-[-120px] top-10 h-[420px] w-[420px] rounded-full bg-[#ede9fe] opacity-35 blur-2xl" aria-hidden />
        <div className="container-max relative z-10 grid gap-12 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="space-y-6">
            <Badge label="Marketplace demo" />
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Find <span className="underline-scribble">trusted pros</span> for any project
            </h1>
            <p className="text-lg text-slate-600 md:text-xl leading-[1.7]">
              Compare top-rated pros, see upfront details, and get quotes in minutes. Built for speed and peace of mind.
            </p>
            <div className="relative rounded-3xl border border-border bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  placeholder="What service do you need?"
                  className="w-full rounded-full border border-border px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none"
                />
                <input
                  placeholder="Your location"
                  className="w-full rounded-full border border-border px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none md:max-w-[180px]"
                />
                <button className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 md:w-auto">
                  Get started
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">UI only — no data is submitted.</p>
              <svg
                className="pointer-events-none absolute -right-6 -bottom-10 h-28 w-28 rotate-6 opacity-60"
                viewBox="0 0 120 120"
                fill="none"
                aria-hidden
              >
                <path
                  d="M10 80 C50 60 80 60 105 25"
                  stroke="#fca5a5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">
                <span className="text-brand-600">★</span> 4.9 average rating
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">
                <span className="text-brand-600">⚡</span> Quotes in under an hour
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-border">
                <span className="text-brand-600">🛡️</span> Verified local pros
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-[#fbbf24] opacity-20 blur-3xl" aria-hidden />
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-brand-600">Trending</p>
                    <p className="text-lg font-semibold text-slate-900">Popular this week</p>
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Local</span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {services.slice(0, 6).map((service) => (
                    <div
                      key={service.id}
                      className="rounded-2xl border border-border bg-surface px-4 py-3 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl">{service.icon}</span>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-slate-900">{service.name}</p>
                          <p className="text-xs text-slate-500">Great for quick starts</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max space-y-8">
        <SectionHeading
          eyebrow="Popular services"
          title="Book faster with our most-requested categories"
          description="Jump straight into the projects people near you are booking right now."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => (
            <div
              key={service.id}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl">{service.icon}</div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max space-y-8">
        <SectionHeading
          eyebrow="Featured pros"
          title="Top professionals ready to take your project"
          description="Profiles are vetted for licensing, reviews, and responsiveness."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProfessionals.map((pro) => (
            <div
              key={pro.id}
              className="rounded-3xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-slate-900">{pro.name}</h3>
                  <p className="text-sm text-slate-600">{pro.service} • {pro.location}</p>
                </div>
                <div className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Verified</div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  <span className="font-semibold">{pro.rating}</span>
                  <span className="text-slate-500">({pro.reviewCount} reviews)</span>
                </div>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-slate-700">
                  From {pro.startingPrice}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {pro.badges.map((badge) => (
                  <Badge key={badge} label={badge} />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm text-slate-600">24h response • Direct scheduling</div>
                <button className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-200 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">
                  View profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max space-y-8">
        <SectionHeading
          eyebrow="Simple steps"
          title="How ServiceHub works"
          description="Post once, review options, and feel confident booking the right pro."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-xl">{step.icon}</div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max space-y-8">
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by homeowners and property managers"
          description="Real feedback from people who booked through ServiceHub."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-lg font-semibold text-brand-700">
                  {testimonial.name.slice(0, 1)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.service}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-max">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-10 shadow-sm">
          <div className="relative space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Ready to start?</p>
            <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">
              Post a job and get free quotes from trusted professionals
            </h3>
            <p className="max-w-2xl text-slate-600">
              Share the details once. We&apos;ll line up vetted pros so you can compare options without the back-and-forth.
            </p>
            <button className="rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300">
              Post a job
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
