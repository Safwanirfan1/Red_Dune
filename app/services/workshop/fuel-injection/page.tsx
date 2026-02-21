"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Zap } from "lucide-react";

export default function FuelInjectionPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-red-600 selection:text-white">
            <Header />

            {/* ─── HERO SECTION ─── */}
            <section className="relative pt-40 pb-0 overflow-hidden bg-white">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row items-stretch gap-0 min-h-[580px]">

                        {/* Text */}
                        <div
                            className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 pb-16 lg:pb-0"
                            data-aos="fade-right"
                            data-aos-duration="900"
                        >
                            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-black mb-3">
                                Engine Performance Specialists
                                <span className="block w-12 h-[2px] bg-primary mt-2" />
                            </span>

                            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                                Fuel Injector Cleaning In Dubai &amp; Abu Dhabi
                            </h1>

                            <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                                Advanced fuel system diagnostics and precision injector cleaning to restore engine power, efficiency, and smooth performance.
                            </p>

                            <div>
                                <Link href="#contact">
                                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                                        Book Fuel System Check
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="w-full lg:w-1/2 relative min-h-[380px] lg:min-h-[580px]"
                            data-aos="fade-left"
                            data-aos-duration="900"
                        >
                            <Image
                                src="/images/fuel.jpg"
                                alt="Fuel Injector Cleaning Service"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent lg:block hidden pointer-events-none" />
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-200 mt-0" />
            </section>

            {/* ─── SECTION 1 – WHY US ─── */}
            <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="800">
                            <div>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                    <Zap size={14} />
                                    Section 01
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                    Why Get a Fuel Injection Service From Us?
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                                <p className="text-lg text-gray-600 leading-[1.7]">
                                    Our fuel system specialists use advanced diagnostic scanning and injector flow testing equipment to identify blockages, leaks, and pressure irregularities before they escalate into serious engine faults. We perform ultrasonic injector cleaning and full fuel rail inspections to restore peak engine performance.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Advanced diagnostic scanning",
                                    "Injector flow testing",
                                    "Ultrasonic injector cleaning",
                                    "Fuel rail inspection",
                                    "Pressure testing",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                {["Experienced technicians", "OEM-standard equipment", "Accurate fault detection", "Transparent pricing"].map(
                                    (item, i) => (
                                        <div
                                            key={i}
                                            className="border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                            <span className="font-semibold text-gray-800 text-sm">{item}</span>
                                        </div>
                                    )
                                )}
                            </div>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Schedule Inspection
                                </Button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div
                            className="w-full lg:w-1/2 relative min-h-[460px] lg:min-h-[580px]"
                            data-aos="fade-left"
                            data-aos-duration="800"
                        >
                            <Image
                                src="/images/engineering.jpg"
                                alt="Fuel Injection Diagnostics"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border-[6px] border-white/30 m-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2 – SYMPTOMS (CENTERED) ─── */}
            <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
                        <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
                            Warning Symptoms
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                            Symptoms of a Damaged Fuel Injection System
                        </h2>
                        <div className="w-12 h-[3px] bg-primary mx-auto mb-6" />
                        <p className="text-lg text-gray-600 leading-[1.7]">
                            Early detection prevents minor fuel system issues from developing into catastrophic engine damage. If you notice any of the following, arrange an inspection immediately.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {[
                            "Starting issues",
                            "Poor idle",
                            "Failed emissions",
                            "Poor engine performance",
                            "Engine not reaching full RPM",
                            "Increased fuel consumption",
                            "Rough engine operation",
                            "Surging or bucking under throttle",
                            "Smoke from tailpipe",
                            "Engine knock or detonation",
                            "Fuel odor inside or outside vehicle",
                            "Oil thinning / Hydro lock",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 bg-white border border-gray-200 px-6 py-5 hover:border-primary/40 transition-colors"
                            >
                                <span className="text-3xl font-black text-gray-100 select-none flex-shrink-0 leading-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-semibold text-gray-800 text-base leading-snug pt-1">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center max-w-2xl mx-auto space-y-8" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-gray-600 leading-[1.7] text-lg">
                            Do not delay if any of these symptoms are present. Fuel system faults worsen rapidly under the demanding heat conditions in the UAE and can lead to complete engine failure if left untreated.
                        </p>
                        <Link href="#contact" className="inline-block w-full sm:w-auto">
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                Check My Engine
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3 – WHAT WE INSPECT ─── */}
            <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left" data-aos-duration="800">
                            <div>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                    <Zap size={14} />
                                    Section 03
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                    Complete Fuel Injection System Inspection
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Fuel injectors",
                                    "Fuel pump performance",
                                    "Fuel pressure regulator",
                                    "Fuel rail",
                                    "Throttle body",
                                    "Engine control data",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors"
                                    >
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        <span className="font-semibold text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-lg text-gray-600 leading-[1.7]">
                                A precise fuel-to-air ratio is essential for proper combustion. Even a partially clogged injector can throw off this balance — reducing power, increasing emissions, and raising fuel costs. Our service restores correct delivery to every cylinder.
                            </p>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Book Service
                                </Button>
                            </Link>
                        </div>

                        {/* Image */}
                        <div
                            className="w-full lg:w-1/2 relative min-h-[460px] lg:min-h-[580px]"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <Image
                                src="/images/programming.jfif"
                                alt="Fuel System Inspection"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border-[6px] border-gray-200/60 m-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FINAL CTA ─── */}
            <section className="py-24 bg-black text-white" id="contact">
                <div className="container mx-auto max-w-[1200px] px-6 text-center">
                    <h2
                        className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
                        data-aos="fade-up"
                    >
                        Count On <span className="text-primary">German Experts</span>
                    </h2>
                    <p
                        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        We provide precise fuel system diagnostics and professional injector cleaning to maintain engine efficiency, power output, and long-term reliability in UAE driving conditions.
                    </p>
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/#contact">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-12 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.35)] transition-all"
                            >
                                Visit Our Workshop
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
