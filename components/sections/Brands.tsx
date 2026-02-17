"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useLanguage } from "@/components/providers/LanguageProvider";

const BRANDS = [
    "Porsche", "Ferrari", "Lamborghini", "Audi", "BMW", "Mercedes-Benz",
    "Bentley", "Rolls Royce", "Maserati", "McLaren", "Aston Martin",
    "Range Rover", "Land Rover", "Jaguar", "Volkswagen", "Mini Cooper"
];

export function Brands() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        // Infinite Marquee Effect using GSAP
        const slider = sliderRef.current;
        if (!slider) return;

        // Clone child for seamless loop
        const content = slider.innerHTML;
        slider.innerHTML = content + content;

        const ctx = gsap.context(() => {
            gsap.to(slider, {
                xPercent: -50,
                ease: "none",
                duration: 30,
                repeat: -1,
            });

            // Fade in container
            gsap.fromTo(containerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 5,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="brands" className="py-16 bg-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase">
                    {t("brands.prefix")} <span className="text-primary">{t("brands.title")}</span>
                </h2>
                <p className="font-sans text-muted-foreground text-sm mt-2">{t("brands.subtitle")}</p>
            </div>

            <div className="relative w-full overflow-hidden border-y-4 border-black border-double">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                <div ref={sliderRef} className="flex gap-16 whitespace-nowrap pl-6 items-center">
                    {BRANDS.map((brand, i) => (
                        <div key={i} className="font-heading text-2xl font-bold text-primary uppercase tracking-widest hover:text-primary/80 transition-colors cursor-default select-none">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
