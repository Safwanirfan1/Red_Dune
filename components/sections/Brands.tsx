"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/components/providers/LanguageProvider";

const BRANDS = [
  { key: "porsche", label: "Porsche" },
  { key: "ferrari", label: "Ferrari" },
  { key: "lamborghini", label: "Lamborghini" },
  { key: "audi", label: "Audi" },
  { key: "bmw", label: "BMW" },
  { key: "mercedes", label: "Mercedes-Benz" },
  { key: "bentley", label: "Bentley" },
  { key: "rollsRoyce", label: "Rolls Royce" },
  { key: "maserati", label: "Maserati" },
  { key: "mclaren", label: "McLaren" },
  { key: "astonMartin", label: "Aston Martin" },
  { key: "rangeRover", label: "Range Rover" },
  { key: "landRover", label: "Land Rover" },
  { key: "jaguar", label: "Jaguar" },
  { key: "volkswagen", label: "Volkswagen" },
  { key: "miniCooper", label: "Mini Cooper" },
];

export function Brands() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isMobile: "(max-width: 1023px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        // Clone content until width is enough
        while (slider.scrollWidth < window.innerWidth * 2) {
          slider.innerHTML += slider.innerHTML;
        }

        gsap.to(slider, {
          xPercent: -100,
          ease: "none",
          duration: isMobile ? 12 : 22, // Mobile faster, desktop slower
          repeat: -1,
        });

        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
            },
          },
        );
      },
    );

    return () => mm.revert();
  }, []);

  const brandsToDisplay = BRANDS;

  return (
    <section
      ref={containerRef}
      id="brands"
      className="py-16 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase">
          {t("brands.prefix")}{" "}
          <span className="text-primary">{t("brands.title")}</span>
        </h2>
        <p className="font-sans text-muted-foreground text-sm mt-2">
          {t("brands.subtitle")}
        </p>
      </div>

      <div className="relative w-full overflow-hidden border-y-4 border-black border-double">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          ref={sliderRef}
          className="flex gap-16 whitespace-nowrap items-center"
        >
          {brandsToDisplay.map((brand, i) => (
            <div
              key={i}
              className="font-heading text-2xl font-bold text-primary uppercase tracking-widest hover:text-primary/80 transition-colors cursor-default select-none"
            >
              {t(`brands.names.${brand.key}`)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
