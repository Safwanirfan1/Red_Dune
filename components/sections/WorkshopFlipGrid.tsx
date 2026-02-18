"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { WORKSHOP_SERVICES } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function WorkshopFlipGrid() {
  const { t, direction } = useLanguage();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Grid Cards
      gsap.fromTo(
        ".flip-card-container",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-20 bg-gray-50 border-t border-gray-100"
      dir={direction}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-secondary uppercase">
            {t("workshopFlipGrid.title")}
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            {t("workshopFlipGrid.description")}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WORKSHOP_SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="flip-card-container group h-[400px] w-full [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 h-full w-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    <span className="absolute top-6 left-6 text-4xl font-black text-gray-100 select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                      <IconComponent size={32} />
                    </div>

                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-4 text-secondary">
                      {service.title}
                    </h3>

                    <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 h-full w-full bg-secondary rounded-xl shadow-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-secondary/80 z-10" />
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-white p-8 text-center space-y-6">
                      <IconComponent size={48} className="text-primary" />
                      <h3 className="font-heading text-2xl font-bold uppercase">
                        {service.title}
                      </h3>
                      <Link href="#contact">
                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-[0_0_20px_rgba(209,50,50,0.4)] hover:scale-110 transition-all duration-300">
                          {t("workshopFlipGrid.readMore")}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
