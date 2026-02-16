"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Wallet, Trophy, Ruler } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        icon: Clock,
        title: "10 Years Of Experience",
        description: "Our experience assures the ideal outcomes!"
    },
    {
        icon: Wallet,
        title: "Good Prices",
        description: "We value your needs and wants with competitive prices."
    },
    {
        icon: Trophy,
        title: "Best Crew",
        description: "Count on our team of certified professionals to meet all your needs."
    },
    {
        icon: Ruler,
        title: "Perfection",
        description: "Perfection is what we strive for!"
    }
];

export function PremiumWorkshop() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
            {/* German Flag Decorative Element */}
            <div className="absolute top-20 left-0 flex flex-col gap-0 opacity-20 z-0">
                <div className="w-32 h-6 bg-black -skew-x-12 -translate-x-8" />
                <div className="w-32 h-6 bg-[#DD0000] -skew-x-12 -translate-x-4" />
                <div className="w-32 h-6 bg-[#FFCC00] -skew-x-12" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={contentRef} className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 relative space-y-6" data-aos="fade-right" data-aos-duration="800">
                        {/* Huge "01" Watermark */}
                        <div className="absolute -top-32 left-0 text-[180px] font-black text-gray-50 opacity-50 select-none -z-10 leading-none">
                            01
                        </div>

                        <div className="relative">
                            <h2 className="font-heading text-4xl md:text-5xl font-black text-secondary uppercase leading-tight">
                                Premium Car Repair & <br />
                                Service Workshop in the <br />
                                <span className="text-primary">UAE</span>
                            </h2>
                        </div>

                        <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-xl">
                            RED DUNE Car Maintenance was inaugurated in 2015 in The Emirates Of Abu Dhabi as a European Car Service Center. We provide a wide range of high-tech services using advanced tools and methods to help you get the highest possible results in no time.
                        </p>
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="space-y-3 group" data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                                <div className="flex items-center gap-3">
                                    <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                                        <feature.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-secondary relative">
                                        {feature.title}
                                        <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                    </h3>
                                </div>
                                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
