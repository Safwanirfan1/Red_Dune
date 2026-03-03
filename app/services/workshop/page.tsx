"use client";

import { WORKSHOP_PAGE_CONFIG } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import Image from "next/image";
import { WorkshopFlipGrid } from "@/components/sections/WorkshopFlipGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function WorkshopPage() {
  const { t, direction } = useLanguage();

  return (
    <main
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      dir={direction}
    >
      <Header />
      <div className="border-t border-primary mt-40"></div>

      <div className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden bg-white mb-20 mt-24">
        {/* Left: Content Area */}
        <div
          className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="inline-block w-12 h-1 bg-primary mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
            {t(WORKSHOP_PAGE_CONFIG.hero.title)}
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            {t(WORKSHOP_PAGE_CONFIG.hero.description)}
          </p>
        </div>

        {/* Right: Image Area */}
        <div
          className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="absolute inset-0 overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-200" />
            <Image
              src={WORKSHOP_PAGE_CONFIG.hero.image}
              alt="WorkShop"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
          </div>
        </div>
      </div>

      <div className="pt-24">
        <WorkshopFlipGrid />
      </div>
      <Footer />
    </main>
  );
}
