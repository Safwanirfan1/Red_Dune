"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function BrakeSystemPage() {
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
                                Brake &amp; Safety Specialists
                                <span className="block w-12 h-[2px] bg-primary mt-2" />
                            </span>

                            <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                                Brake System &amp; ABS Repair Services
                            </h1>

                            <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                                Complete brake diagnostics, ABS repair, and precision maintenance to ensure maximum safety and stopping performance.
                            </p>

                            <div>
                                <Link href="#contact">
                                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                                        Book Brake Inspection
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
                                src="/images/engineering.jpg"
                                alt="Brake System Inspection"
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

            {/* ─── SECTION 1 – BRAKE SYSTEM SERVICE ─── */}
            <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="800">
                            <div>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                    <ShieldAlert size={14} />
                                    Section 01
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                    Brake System Service In Dubai
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                                <p className="text-lg text-gray-600 leading-[1.7]">
                                    Our certified technicians carry out a full-spectrum brake service to keep your stopping power precise and reliable. We handle everything from routine pad changes to in-depth system overhauls — all using genuine, manufacturer-approved components.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Brake pad replacement",
                                    "Brake disc resurfacing or replacement",
                                    "Brake fluid inspection & replacement",
                                    "Caliper servicing",
                                    "Complete brake system diagnostics",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                                        <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Schedule Brake Service
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
                                src="/images/s2.jpg"
                                alt="Brake Disc Service"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border-[6px] border-white/30 m-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2 – ABS REPAIR ─── */}
            <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left" data-aos-duration="800">
                            <div>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                    <ShieldAlert size={14} />
                                    Section 02
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                    Anti-Lock Braking System (ABS) Repair
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                                <p className="text-lg text-gray-600 leading-[1.7]">
                                    The ABS is a critical safety system that prevents wheel lock-up during emergency braking. In UAE road conditions — high-speed motorways and sudden stops — a faulty ABS can be dangerous. We diagnose, repair, and recalibrate your system using OEM-level software.
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "ABS module diagnostics",
                                    "ABS sensor replacement",
                                    "Warning light troubleshooting",
                                    "Brake control module programming",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-600 leading-[1.7]">
                                Never ignore an ABS warning light. In the UAE&apos;s high-speed driving environment, a malfunctioning ABS system reduces your vehicle&apos;s ability to stop safely in emergencies. Early intervention saves money and, more importantly, lives.
                            </p>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Check ABS System
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
                                src="/images/radar.jfif"
                                alt="ABS Diagnostics"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border-[6px] border-gray-200/60 m-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 3 – WHY US ─── */}
            <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="800">
                            <div>
                                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                                    <ShieldAlert size={14} />
                                    Section 03
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                                    Why Get a Brake Service From Us?
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                            </div>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Advanced diagnostic equipment",
                                    "Certified technicians",
                                    "Genuine brake components",
                                    "Precision calibration",
                                    "Transparent pricing",
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
                                We don&apos;t guess — we diagnose. Every brake service is backed by proper equipment and verified results before your vehicle leaves our workshop. Your safety is not a service item; it&apos;s our standard.
                            </p>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Book Appointment
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
                                src="/images/services1.jpg"
                                alt="Brake Service Professional"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 4 – WHEN DO YOU NEED SERVICE (CENTERED) ─── */}
            <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
                        <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
                            Warning Signs
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                            When Do You Need a Brake System Service?
                        </h2>
                        <div className="w-12 h-[3px] bg-primary mx-auto" />
                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {[
                            "Squeaking or grinding noise",
                            "Brake pedal vibration",
                            "Car pulling to one side",
                            "Increased stopping distance",
                            "ABS warning light",
                            "Soft or spongy brake pedal",
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
                        <p className="text-lg text-gray-600 leading-[1.7]">
                            If you notice any of these symptoms, do not delay. Brake system faults deteriorate rapidly, especially in high-temperature conditions. Book an inspection immediately — your safety and the safety of others on the road depends on it.
                        </p>
                        <Link href="#contact" className="inline-block w-full sm:w-auto">
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                Get Brake Check Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 5 – WE OFFER PERFECTION ─── */}
            <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Text */}
                        <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right" data-aos-duration="800">
                            <div>
                                <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
                                    Our Standard
                                    <span className="block w-12 h-[2px] bg-primary mt-2" />
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mt-4 mb-4">
                                    We Offer Perfection
                                </h2>
                                <div className="w-12 h-[3px] bg-primary mb-6" />
                                <p className="text-lg text-gray-600 leading-[1.7]">
                                    At our workshop, we focus on precision, safety, and long-term reliability. Every brake inspection and repair is performed using professional-grade tools and tested thoroughly before delivery. We do not cut corners where your safety is concerned.
                                </p>
                            </div>

                            <div className="bg-black text-white p-8 border-l-4 border-primary">
                                <p className="text-gray-300 font-light leading-[1.7] italic">
                                    &ldquo;A brake system performing at 100% is not a luxury — it is the minimum standard every driver deserves.&rdquo;
                                </p>
                            </div>

                            <Link href="#contact" className="inline-block w-full sm:w-auto">
                                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                                    Visit Our Workshop
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
                                src="/images/services.jpg"
                                alt="Workshop Perfection"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 border-[6px] border-white/20 m-5 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── GET IN TOUCH CTA ─── */}
            <section className="py-24 bg-black text-white" id="contact">
                <div className="container mx-auto max-w-[1200px] px-6 text-center">
                    <h2
                        className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
                        data-aos="fade-up"
                    >
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p
                        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Don&apos;t compromise your safety. Contact our brake specialists today for a professional inspection and transparent quote.
                    </p>
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/#contact">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-12 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.35)] transition-all"
                            >
                                Contact Us Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
