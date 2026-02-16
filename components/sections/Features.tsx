"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURES } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gridRef.current?.children;
            if (items) {
                gsap.fromTo(
                    items,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                            Why Choose <span className="text-primary">Red Dune?</span>
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                            We combine passion for automotive engineering with state-of-the-art technology to deliver services that exceed expectations.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">Certified Technicians</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">100% Genuine Parts</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">Transparent Pricing</span>
                            </li>
                        </ul>
                    </div>

                    {/* Grid Content */}
                    <div ref={gridRef} className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors">
                                <feature.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="font-sans text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
