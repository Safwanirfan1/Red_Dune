"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { SERVICE_DETAILS } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function WorkshopServices() {
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const workshopSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Red Line
      gsap.fromTo(
        ".red-separator",
        { width: "0%", opacity: 0 },
        {
          width: "100%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );

      // Animate Workshop Section
      const workshopText =
        workshopSectionRef.current?.querySelector(".workshop-text");
      const workshopImage =
        workshopSectionRef.current?.querySelector(".workshop-image");

      if (workshopText && workshopImage) {
        gsap.fromTo(
          workshopText,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: workshopSectionRef.current,
              start: "top 70%",
            },
          },
        );
        gsap.fromTo(
          workshopImage,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: workshopSectionRef.current,
              start: "top 70%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Get Workshop Data (Index 1 from SERVICE_DETAILS)
  const workshopData = SERVICE_DETAILS[1];

  return (
    <div ref={containerRef} className="flex flex-col w-full" dir={direction}>
      {/* STEP 1: RED SEPARATOR LINE */}
      <div className="w-full h-[1px] bg-gray-100 relative mt-20 mb-20 overflow-hidden">
        <div className="red-separator absolute top-0 left-0 h-[3px] bg-primary w-full" />
      </div>

      {/* STEP 2: WORKSHOP SECTION */}
      <div
        ref={workshopSectionRef}
        className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden bg-white mb-20"
      >
        {/* Text Side (Left) */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <div className="workshop-text opacity-0">
            <div className="inline-block w-12 h-1 bg-primary mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
              {workshopData.title}
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              {workshopData.description}
            </p>
            <Link href="/services/workshop">
              <Button className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                {t("workshopSection.readMore")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Side (Right) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <div className="workshop-image opacity-0 w-full h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-200" />
            <Image
              src={workshopData.image}
              alt={workshopData.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
