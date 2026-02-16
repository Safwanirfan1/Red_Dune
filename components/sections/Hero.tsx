"use client";

import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text Fade In
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5,
                    ease: "power3.out",
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden flex items-center"
            id="home"
        >
            {/* Background with Modern Gradient */}
            <div ref={bgRef} className="absolute inset-0 z-0 bg-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-neutral-900 to-neutral-950" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-6 mx-auto pt-20">
                <div ref={textRef} className="max-w-3xl text-white space-y-8">
                    <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-md">
                        <span className="text-primary-foreground text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            #1 Auto Workshop in UAE
                        </span>
                    </div>
                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                        PREMIUM CAR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">EXPERTS.</span>
                    </h1>
                    <p className="font-sans text-lg md:text-2xl text-gray-300 leading-relaxed max-w-xl font-light">
                        We specialize in European luxury vehicle maintenance, repair, and performance tuning.
                        <span className="block mt-2 text-white font-medium">Precision. Passion. Perfection.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-wide shadow-xl shadow-primary/20">
                            Get A Free Quote
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-black rounded-full font-bold uppercase tracking-wide">
                            Our Services
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
}
