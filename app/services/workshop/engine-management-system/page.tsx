"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function EngineManagementSystemPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans">
            <Header />

            {/* HERO SECTION */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/engineering.jpg"
                        alt="Premium RED DUNE Workshop"
                        fill
                        className="object-cover opacity-40 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div
                        className="max-w-4xl mx-auto space-y-8"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-tight font-heading">
                            Red Dune <span className="text-primary block mt-2">Engine Management System</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
                            Engine • ECU • Gearbox • Radiator • Battery Specialists In Dubai
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                            <Link href="#contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-none uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.3)] hover:shadow-[0_0_30px_rgba(209,50,50,0.5)] transition-all">
                                    Book Appointment
                                </Button>
                            </Link>
                            <Link href="tel:+971500000000" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-12 py-6 rounded-none uppercase tracking-wider bg-transparent transition-all">
                                    Call Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* BODY CONTENT - ALTERNATING */}
            <div className="bg-white text-black">

                {/* SERVICE 1 - Engine Management System */}
                <section className="py-[100px] border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
                                <div className="inline-block w-16 h-1 bg-primary mb-2" />
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-heading">
                                    Car Engine Management System Repair
                                </h2>
                                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                                    Expert Engine Management System Repair In Dubai
                                </h3>
                                <p className="text-lg text-gray-600 leading-[1.7]">
                                    Your car's engine management system is the brain that controls performance, fuel efficiency, and emissions. When things go wrong, you need specialists who understand the intricate computing of all vehicles. We offer precision diagnosis and repair to get your engine running flawlessly.
                                </p>

                                <div className="pt-6">
                                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Why Pick Our Engine Management Repair Service?</h4>
                                    <ul className="space-y-4">
                                        {["Advanced diagnostics", "Certified technicians", "Genuine parts", "Accurate fault detection"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-lg text-gray-700 font-medium whitespace-nowrap lg:whitespace-normal">
                                                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-black text-white p-8 mt-8 border-l-4 border-primary">
                                    <h4 className="text-xl font-bold uppercase mb-2">Add Value To Your Vehicle</h4>
                                    <p className="text-gray-300 font-light">With Professional Engine Management Repair from certified mechanics.</p>
                                </div>

                                <div className="pt-4">
                                    <Link href="#contact" className="inline-block w-full sm:w-auto">
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all">
                                            Visit Red Dune german Experts Today
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] w-full" data-aos="fade-left">
                                <Image src="/images/engineering.jpg" alt="Engine Management System" fill className="object-cover" />
                                <div className="absolute inset-0 border-8 border-black/5 m-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE 2 - ECU */}
                <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                            <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
                                <div className="inline-block w-16 h-1 bg-primary mb-2" />
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-heading">
                                    Engine Control Unit (ECU) Repair
                                </h2>
                                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                                    ECU Repair In Dubai 
                                </h3>

                                <div className="pt-4">
                                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Symptoms Of a Damaged ECU</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {["Check engine light", "Engine misfire", "Poor fuel economy", "Starting problems"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 bg-white p-4 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Why Get ECU Repair From Us?</h4>
                                    <p className="text-lg text-gray-600 leading-[1.7] mb-6">
                                        We don't just clear codes; we find the root cause. Using dealer-level equipment, we can re-flash, program, or repair your ECU to ensure your vehicle communicates perfectly across all modules.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <Link href="#contact" className="inline-block w-full sm:w-auto">
                                        <Button className="bg-black hover:bg-neutral-800 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full transition-all">
                                            Count On Red Dune German Experts
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]" data-aos="fade-right">
                                <Image src="/images/programming.jfif" alt="ECU Repair" fill className="object-cover" />
                                <div className="absolute inset-0 border-8 border-white/20 m-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE 3 - Gearbox */}
                <section className="py-[100px] border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
                                <div className="inline-block w-16 h-1 bg-primary mb-2" />
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-heading">
                                    Car Gearbox Repair
                                </h2>
                                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                                    Gearbox Repair In Dubai 
                                </h3>

                                <div className="space-y-8 pt-4">
                                    <div>
                                        <h4 className="text-2xl font-bold mb-3 font-heading uppercase">How Can We Help With Your Transmission Problems?</h4>
                                        <p className="text-lg text-gray-600 leading-[1.7]">
                                            From rough shifting to complete transmission failure, our gearbox specialists rebuild, repair, and service all types of automatic and dual-clutch transmissions used in premium German cars.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold mb-3 font-heading uppercase">The Perfect Time For Transmission Repair</h4>
                                        <p className="text-lg text-gray-600 leading-[1.7]">
                                            Don't wait for total failure. If you experience slipping gears, delayed engagement, or fluid leaks, immediate attention can save you from costly replacements.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold mb-3 font-heading uppercase">How Often Do You Need This Service in the UAE?</h4>
                                        <p className="text-lg text-gray-600 leading-[1.7]">
                                            The harsh UAE climate demands more frequent transmission fluid changes. We recommend comprehensive checks every 40,000 to 60,000 kilometers depending on your driving style.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Link href="#contact" className="inline-block w-full sm:w-auto">
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all">
                                            Get In Touch
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]" data-aos="fade-left">
                                <Image src="/images/recovery.jpg" alt="Recovery Vehicle" fill className="object-cover object-bottom" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/95 backdrop-blur-sm p-6 border-l-4 border-primary text-white shadow-2xl">
                                    <h4 className="font-bold text-xl uppercase mb-2">24/7 Recovery Available</h4>
                                    <p className="text-gray-300 font-light">If your transmission fails, we'll pick up your car from anywhere in the UAE safely.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE 4 - Radiator */}
                <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                            <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-left">
                                <div className="inline-block w-16 h-1 bg-primary mb-2" />
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-heading">
                                    Radiator Service
                                </h2>
                                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                                    Radiator Services In Dubai 
                                    
                                </h3>

                                <div className="pt-4">
                                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Most Common Radiator Problems</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {["Coolant leaks", "Overheating", "Rust buildup", "Damaged radiator fan"].map((item, i) => (
                                            <div key={i} className="bg-white p-6 border border-gray-200 hover:border-primary transition-colors flex items-center gap-6">
                                                <span className="block text-4xl font-black text-gray-100 flex-shrink-0">0{i + 1}</span>
                                                <span className="font-bold text-lg leading-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <h4 className="text-2xl font-bold mb-4 font-heading uppercase">Why Pick Our Radiator Service?</h4>
                                    <p className="text-lg text-gray-600 leading-[1.7]">
                                        The UAE's extreme heat puts immense pressure on your car's cooling system. We provide high-pressure flushing, pressure testing, and premium coolant replacement to keep your engine running at the optimal temperature.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <Link href="#contact" className="inline-block w-full sm:w-auto">
                                        <Button className="bg-black hover:bg-neutral-800 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full transition-all">
                                            The Ideal Radiator Solutions At Red Dune German Experts
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]" data-aos="fade-right">
                                <Image src="/images/radiator.jpg" alt="Radiator Service" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE 5 - Battery */}
                <section className="py-[100px] border-b border-gray-100 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2 space-y-8" data-aos="fade-right">
                                <div className="inline-block w-16 h-1 bg-primary mb-2" />
                                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight font-heading">
                                    Car Battery Replacement
                                </h2>

                                <div className="space-y-8 pt-4">
                                    <div>
                                        <h4 className="text-2xl font-bold mb-3 font-heading uppercase">Why Use This Service?</h4>
                                        <p className="text-lg text-gray-600 leading-[1.7]">
                                            Modern German cars are highly dependent on battery health. A weak battery doesn't just prevent starting; it can cause a cascade of electrical gremlins and module failures. We provide exact OEM spec batteries properly coded to your car's power management system.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Benefits of Changing Your Battery</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                            {["Reliable cold starts", "Stable voltage", "Prevent breakdown", "Protect electronics"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                                    <span className="font-bold text-gray-800">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-gray-50 p-8 border border-gray-100 shadow-sm">
                                        <h4 className="text-2xl font-bold mb-6 font-heading uppercase">Why Pick Us?</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                            {["Warranty-backed batteries", "Fast installation", "Professional testing", "Trusted experts"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                                                    <span className="font-medium text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Link href="#contact" className="inline-block w-full sm:w-auto">
                                        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all shadow-xl hover:shadow-primary/30">
                                            Book Battery Service
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]" data-aos="fade-left">
                                <Image src="/images/2.jpg" alt="Battery Replacement" fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* CTA Get In Touch Section (Using design tokens) */}
            <section className="bg-black text-white py-24 border-t border-white/10" id="contact">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase font-heading mb-6" data-aos="flip-down">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="100">
                        Contact our experts today and experience unparalleled German automotive excellence.
                    </p>
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <Link href="/#contact">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-none font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.4)]">
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
