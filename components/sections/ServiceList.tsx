"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SERVICE_DETAILS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function ServiceList() {
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section, index) => {
                const isEven = index % 2 === 0;
                const text = section.querySelector(".service-text");
                const image = section.querySelector(".service-image");

                // Animate Image (Slide in)
                gsap.fromTo(
                    image,
                    { x: isEven ? 100 : -100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                        },
                    }
                );

                // Animate Text (Fade Up)
                gsap.fromTo(
                    text,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div className="flex flex-col">
            {SERVICE_DETAILS.map((service, index) => {
                const isEven = index % 2 === 0; // Even: Image Right, Text Left. Odd: Image Left, Text Right.

                return (
                    <div
                        key={service.id}
                        ref={addToRefs}
                        id={service.id}
                        className={cn(
                            "flex flex-col lg:flex-row min-h-[600px] overflow-hidden border-b border-gray-100 last:border-0",
                            isEven ? "bg-white" : "bg-gray-50/50"
                        )}
                    >
                        {/* Text Side */}
                        <div
                            className={cn(
                                "w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center order-2",
                                isEven ? "lg:order-1" : "lg:order-2"
                            )}
                        >
                            <div className="service-text opacity-0">
                                <div className="inline-block w-12 h-1 bg-primary mb-6" />
                                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
                                    {service.title}
                                </h2>
                                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                                    {service.description}
                                </p>
                                <Link href={service.link || "#contact"}>
                                    <Button className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div
                            className={cn(
                                "w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1",
                                isEven ? "lg:order-2" : "lg:order-1"
                            )}
                        >
                            <div className="service-image opacity-0 w-full h-full relative overflow-hidden group">
                                <div className="absolute inset-0 bg-neutral-200" />
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
