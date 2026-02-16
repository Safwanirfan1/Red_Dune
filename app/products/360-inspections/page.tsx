"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
    ScanEye, FileText, UserCheck, Banknote, ShieldCheck,
    BarChart3, Gauge, UploadCloud
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InspectionsPage() {
    return (
        <main className="min-h-screen bg-background text-white font-[family-name:var(--font-inter)] overflow-x-hidden selection:bg-primary selection:text-white">
            <Header />

            {/* 1️⃣ Hero & Lead-In */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <PlaceholderImage label="360 Inspections Hero" className="opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                            360 <span className="text-primary">Inspection</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            Despite our wide range of car repairing services, we provide the highest-tech pre-purchase inspection — a complete 360° view that helps you buy only the best car in Dubai and Abu Dhabi.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#booking">
                                <Button className="bg-primary text-white hover:bg-red-700 text-xl px-10 py-6 rounded-none font-bold tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(209,50,50,0.4)]">
                                    BOOK NOW
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Pre-Purchase Inspection Description */}
            <section className="py-24 bg-background px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white leading-tight">
                                Pre-Purchase <span className="text-primary">Inspection Process</span> in Dubai & Abu Dhabi
                            </h2>
                            <div className="w-24 h-1 bg-primary" />
                            <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                One of the most important factors affecting vehicle performance and safety is its overall condition. At German Experts, our team conducts a long and detailed process while inspecting a used car. Using advanced tools such as laser scanners and precision diagnostics, we deliver a full inspection report detailing the car’s condition and pricing.
                            </p>
                        </div>
                        <div className="lg:w-1/2 h-[400px] w-full relative group">
                            <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                            <PlaceholderImage label="Detailed Inspection Process" className="relative z-10 border-primary/10 bg-neutral-900/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Pick Us? */}
            <section className="py-24 bg-neutral-900/30 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white">
                                Why <span className="text-primary">Pick Us?</span>
                            </h2>
                            <div className="w-24 h-1 bg-primary" />
                            <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                Because we care for your safety first and always aim to deliver only what you need. We ensure that you buy a car that suits your needs and lifestyle with complete confidence and minimal surprises. Our reputation is built on transparency and technical excellence.
                            </p>
                        </div>
                        <div className="lg:w-1/2 h-[400px] w-full relative group">
                            <div className="absolute inset-0 transform -translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
                            <PlaceholderImage label="Expert Team & High-Tech Tools" className="relative z-10 border-primary/10 bg-neutral-900/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Inspection Benefits / Highlights */}
            <section className="py-24 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
                            Inspection <span className="text-primary">Highlights</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Thorough Inspection", icon: ScanEye, desc: "Detailed check of all major components." },
                            { title: "Clear Reports", icon: FileText, desc: "Easy-to-understand inspection findings." },
                            { title: "Certified Experts", icon: UserCheck, desc: "Experienced and certified technicians." },
                            { title: "Competitive Pricing", icon: Banknote, desc: "Review pricing for the best value." },
                            { title: "12-Page Report", icon: BarChart3, desc: "Comprehensive detailed inspection report." },
                            { title: "Free Estimation", icon: FileText, desc: "Detailed repair estimation if required." },
                            { title: "GE Warranty", icon: ShieldCheck, desc: "Certified for German Experts Warranty." },
                            { title: "Mileage & Compression", icon: Gauge, desc: "Verification of mileage and engine health." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-neutral-950 p-8 border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-playfair)]">{item.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ How Do We Inspect? */}
            <section className="py-24 bg-neutral-900/30 px-6 border-y border-white/5">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white">
                                How Do We <span className="text-primary">Inspect?</span>
                            </h2>
                            <div className="w-24 h-1 bg-primary" />
                            <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                When it comes to purchasing a vehicle, we ensure you get what’s best without extra charges. We use our expertise and advanced tools to inspect the tiniest details and diagnose every current issue — helping you save significant money on your car purchase.
                            </p>
                        </div>
                        <div className="lg:w-1/2 h-[400px] w-full relative group">
                            <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                            <PlaceholderImage label="Inspection Workflow" className="relative z-10 border-primary/10 bg-neutral-900/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Buy The Best Car */}
            <section className="py-24 bg-background px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white">
                                Buy The <span className="text-primary">Best Car</span>
                            </h2>
                            <div className="w-24 h-1 bg-primary" />
                            <p className="text-gray-400 text-lg leading-relaxed text-justify">
                                One of the most significant factors determining a vehicle’s quality is its true performance — not just how it looks. German Experts uses top-tier diagnostic tools and expertise to ensure your future car performs exactly as expected, giving you peace of mind on every journey.
                            </p>
                        </div>
                        <div className="lg:w-1/2 h-[400px] w-full relative group">
                            <div className="absolute inset-0 transform -translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
                            <PlaceholderImage label="Best Car Assurance" className="relative z-10 border-primary/10 bg-neutral-900/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Appointment Booking Section */}
            <section id="booking" className="py-24 bg-neutral-900/50 px-6 relative">
                <div className="absolute inset-0 overflow-hidden">
                    <PlaceholderImage label="Booking Form Background" className="opacity-5 scale-110 blur-sm" />
                </div>
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <div className="bg-neutral-950 border border-white/10 p-8 md:p-12 shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-bold text-center mb-8 text-white">
                            Book Your <span className="text-primary">Inspection</span>
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Your Name</label>
                                    <Input placeholder="John Doe" className="bg-background border-white/10 text-white h-12 focus:border-primary/50 rounded-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Phone Number</label>
                                    <Input placeholder="+971 50 123 4567" className="bg-background border-white/10 text-white h-12 focus:border-primary/50 rounded-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Vehicle Type</label>
                                    <select className="w-full bg-background border border-white/10 text-white h-12 px-3 focus:outline-none focus:border-primary/50 text-sm">
                                        <option>Sedan</option>
                                        <option>SUV</option>
                                        <option>Coupe</option>
                                        <option>Convertible</option>
                                        <option>Hatchback</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Car Brand</label>
                                    <Input placeholder="e.g. BMW" className="bg-background border-white/10 text-white h-12 focus:border-primary/50 rounded-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Car Model</label>
                                    <Input placeholder="e.g. X5 M Competition" className="bg-background border-white/10 text-white h-12 focus:border-primary/50 rounded-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wide">Service Type</label>
                                    <Input value="360 Inspection" readOnly className="bg-white/5 border-white/10 text-gray-400 h-12 focus:border-primary/50 rounded-none cursor-not-allowed" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="border border-dashed border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-white/5 transition-colors cursor-pointer group">
                                    <UploadCloud className="mb-3 text-gray-500 group-hover:text-primary transition-colors" />
                                    <span className="text-sm text-gray-400 group-hover:text-white">Upload Front License</span>
                                </div>
                                <div className="border border-dashed border-white/20 p-6 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-white/5 transition-colors cursor-pointer group">
                                    <UploadCloud className="mb-3 text-gray-500 group-hover:text-primary transition-colors" />
                                    <span className="text-sm text-gray-400 group-hover:text-white">Upload Back License</span>
                                </div>
                            </div>

                            <Button className="w-full bg-primary text-white hover:bg-red-700 h-14 text-lg font-bold tracking-widest mt-6 rounded-none shadow-[0_4px_20px_rgba(209,50,50,0.3)] hover:shadow-[0_4px_30px_rgba(209,50,50,0.5)] transition-all">
                                BOOK APPOINTMENT
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Brands We Serve */}
            <section className="py-24 bg-background border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-primary uppercase tracking-widest font-bold mb-10 text-sm">Brands We Serve</p>
                    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
                        {[
                            "Audi", "BMW", "Mercedes", "Bentley", "Ferrari", "Jaguar",
                            "Lamborghini", "Maserati", "Maybach", "McLaren", "Porsche", "Range Rover",
                            "Rolls Royce", "Smart", "VW", "Alfa Romeo", "Aston Martin", "More..."
                        ].map((brand, idx) => (
                            <div key={idx} className="h-20 bg-neutral-950 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-all group">
                                <span className="text-xs md:text-sm text-gray-600 font-bold group-hover:text-primary transition-colors uppercase tracking-wider">{brand}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-xs mt-8">* Logos are placeholders and not official partnerships.</p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
