"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkshopFlipGrid } from "@/components/sections/WorkshopFlipGrid";
import Link from "next/link";

export default function WorkshopPage() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(".bs-text",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".bs-text",
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(".bs-image",
                { opacity: 0, scale: 1.05 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".bs-image",
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="border-t border-red-500 mt-40"></div>
            <div className="flex flex-col lg:flex-row min-h-[600px] overflow-hidden bg-white mb-20 mt-24" >

                <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                    <div className="bs-text opacity-0">
                        <div className="inline-block w-12 h-1 bg-primary mb-6" />
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
                            WorkShop
                        </h2>
                        <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">Our world-class workshop is equipped with the latest technology to handle any automotive challenge. We maintain a pristine, organized environment that reflects the quality of work we deliver. Whether it's a minor adjustment or a major overhaul, your car is in the safest hands.
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                    <div className="bs-image opacity-0 w-full h-full relative overflow-hidden group">
                        <div className="absolute inset-0 bg-neutral-200" />
                        <Image
                            src="/images/services/workshop.jpg"
                            alt="WorkShop"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
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
