"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_DETAILS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Grid Items Animation
            const cards = gridRef.current?.children;
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Filter out services that might not have images or distinct pages if any, 
    // but SERVICE_DETAILS seems to have 6 main ones which is perfect for a grid.
    const displayServices = SERVICE_DETAILS;

    return (
        <section ref={sectionRef} id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={titleRef} className="text-center mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">What We Do</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-secondary uppercase">
                        Our Premium Services
                    </h2>
                    <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        We offer a complete range of automotive solutions, delivering German engineering precision for your vehicle.
                    </p>
                </div>

                {/* Services Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayServices.map((service) => (
                        <div key={service.id} className="group relative h-[420px] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                            {/* Image Container */}
                            <div className="h-1/2 w-full relative overflow-hidden">
                                <Link href={service.link || "#contact"}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                </Link>
                                {/* Category Tag */}
                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                    Service
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="h-1/2 p-8 flex flex-col relative">
                                {/* Title with underline effect */}
                                <Link href={service.link || "#contact"} className="inline-block relative w-fit mb-3">
                                    <h3 className="font-heading text-xl font-bold text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>

                                <p className="font-sans text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Read More Button */}
                                <Link href={service.link || "#contact"} className="mt-auto">
                                    <div className="flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wide group/btn">
                                        Read More
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                                            <ArrowRight size={14} className="-ml-0.5" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <Link href="/services">
                        <Button className="rounded-full px-10 h-14 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                            View All Services
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
