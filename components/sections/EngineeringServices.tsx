"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../providers/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { ENGINEERING_SERVICES, SERVICE_DETAILS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function EngineeringServices() {
  const { t, direction } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const engineeringSectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Red Line
      gsap.fromTo(
        ".red-separator-eng",
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

      // Animate Engineering Section
      const engText = engineeringSectionRef.current?.querySelector(".eng-text");
      const engImage =
        engineeringSectionRef.current?.querySelector(".eng-image");

      if (engText && engImage) {
        gsap.fromTo(
          engText,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: engineeringSectionRef.current,
              start: "top 70%",
            },
          },
        );
        gsap.fromTo(
          engImage,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: engineeringSectionRef.current,
              start: "top 70%",
            },
          },
        );
      }

      // Animate Grid Cards
      gsap.fromTo(
        ".flip-card-eng",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Get Engineering Data (Index 3 from SERVICE_DETAILS)
  const engineeringData = SERVICE_DETAILS[3];

  return (
    <div ref={containerRef} className="flex flex-col w-full" dir={direction}>
      {/* STEP 1: RED SEPARATOR LINE */}
      <div className="w-full h-[1px] bg-gray-100 relative mt-20 mb-20 overflow-hidden">
        <div className="red-separator-eng absolute top-0 left-0 h-[3px] bg-primary w-full" />
      </div>

      {/* STEP 2: ENGINEERING SECTION */}
      <div
        ref={engineeringSectionRef}
        className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden bg-white mb-20"
      >
        {/* Text Side (Left) */}
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
          <div className="eng-text opacity-0">
            <div className="inline-block w-12 h-1 bg-primary mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
              {engineeringData.title}
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              {engineeringData.description}
            </p>
            <Button className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
              Read More
            </Button>
          </div>
        </div>

        {/* Image Side (Right) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <div className="eng-image opacity-0 w-full h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-neutral-200" />
            <Image
              src={engineeringData.image}
              alt={engineeringData.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
          </div>
        </div>
      </div>

      {/* STEP 3: 5 SERVICE FLIP CARDS */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-secondary uppercase">
              Our Specialized Engineering & Programming Services
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Advanced technical solutions for modern vehicle systems.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ENGINEERING_SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="flip-card-eng group h-[400px] w-full [perspective:1000px]"
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
                        <Link href={service.href || "#contact"}>
                          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8 shadow-[0_0_20px_rgba(209,50,50,0.4)] hover:scale-110 transition-all duration-300">
                            Read More
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
    </div>
  );
}
