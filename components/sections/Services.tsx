"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICE_DETAILS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const displayServices = SERVICE_DETAILS.map(service => ({
        ...service,
        title: t(service.title),
        description: t(service.description),
    }));

    return (
        <section
            ref={sectionRef}
            id="services"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-32 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div
                    className="text-center mb-20 space-y-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold uppercase tracking-widest text-sm">
                            {t("services.subtitle")}
                        </span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-secondary uppercase">
                        {t("services.title")}
                    </h2>

                    <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        {t("services.description")}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayServices.map((service, index) => (
                        <Link
                            key={service.id}
                            href={service.link || "/contact"}
                            className="group relative block h-[480px] bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                        >
                            {/* Image Section */}
                            <div className="h-[45%] w-full relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                    Service
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="h-[55%] p-6 flex flex-col">
                                <div className="inline-block relative w-fit mb-3">
                                    <h3 className="font-heading text-xl font-bold text-secondary uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                </div>

                                {/* FULL DESCRIPTION (Scrollable if long) */}
                                <div className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/40 scrollbar-track-transparent">
                                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div
                    className="mt-16 text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <Link href="/services">
                        <Button className="rounded-full px-10 h-14 text-base font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                            {t("services.viewAll")}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}