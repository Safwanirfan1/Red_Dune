"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";

export function Stats() {
  const { t, direction } = useLanguage();

  const stats = [
    {
      label: t("stats.experience.label"),
      value: t("stats.experience.value"),
      suffix: t("stats.experience.suffix"),
    },
    {
      label: t("stats.clients.label"),
      value: t("stats.clients.value"),
      suffix: t("stats.clients.suffix"),
    },
    {
      label: t("stats.crew.label"),
      value: t("stats.crew.value"),
      suffix: t("stats.crew.suffix"),
    },
    {
      label: t("stats.quality.label"),
      value: t("stats.quality.value"),
      suffix: t("stats.quality.suffix"),
    },
  ];

  return (
    <section
      className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden"
      dir={direction}
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="p-4">
              <div className="font-heading text-4xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
                <span className="text-2xl text-white">{stat.suffix}</span>
              </div>
              <div className="font-sans text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
