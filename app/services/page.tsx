"use client";

import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/mockData";

export default function ServicesPage() {
  return (
    <div className="container-max space-y-10 pb-16 pt-12">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">Browse</p>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">Explore Services</h1>
        <p className="mx-auto max-w-2xl text-slate-600 md:text-lg">
          Pick the category that fits your project. Each listing is curated to surface pros who specialize in that work.r
        </p>
      </div>

      <SectionHeading
        title="All categories"
        description="Popular local services available for fast quotes."
        align="left"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl">
                {service.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm font-semibold text-brand-700">
              <span>View pros</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
