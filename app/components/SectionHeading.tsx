"use client";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">{title}</h2>
      {description && <p className="max-w-2xl text-slate-600 md:text-lg">{description}</p>}
    </div>
  );
}
