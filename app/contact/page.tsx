"use client";
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Contact } from '@/components/sections/Contact'
import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home, ShieldCheck, Settings, Zap } from 'lucide-react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { CONTACT_DATA } from '@/lib/data'

const ContactPage = () => {
    const { t } = useLanguage();
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Header />

            <main>
                <h1 className='text-center text-4xl font-bold text-white mb-6 mt-32 bg-black pt-10 pb-10'>CONTACT US</h1>

                {/* Trust Features Section */}
                <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: t("features.certified"),
                                    desc: t("features.cards.germanExperts.description")
                                },
                                {
                                    icon: Settings,
                                    title: t("features.genuine"),
                                    desc: t("features.cards.parts.description")
                                },
                                {
                                    icon: Zap,
                                    title: "Fast Turnaround",
                                    desc: "Quick diagnostics and efficient repairs to get you back on the road."
                                },
                                {
                                    icon: Home,
                                    title: "Premium Facility",
                                    desc: "Comfortable lounge and state-of-the-art climate-controlled workshop."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-500">
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-gray-50/50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="w-full lg:w-1/3" data-aos="fade-right">
                                <div className="sticky top-32">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-6 leading-none">
                                        COMMON <span className="text-primary italic">QUESTIONS</span>
                                    </h2>
                                    <p className="text-gray-600 mb-8 max-w-sm">
                                        Find quick answers to the most frequently asked questions about our services and process.
                                    </p>
                                    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Need more help?</p>
                                        <p className="font-bold text-secondary uppercase text-sm mb-6">Our experts are just a message away</p>
                                        <Link
                                            href={`https://wa.me/${CONTACT_DATA.phone.replace(/\s+/g, '')}`}
                                            target="_blank"
                                            className="inline-flex items-center justify-center w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-6 rounded-xl transition-all"
                                        >
                                            CHAT ON WHATSAPP
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3 space-y-4" data-aos="fade-left">
                                {[
                                    { q: "spareParts.faq.items.0.question", a: "spareParts.faq.items.0.answer" },
                                    { q: "spareParts.faq.items.4.question", a: "spareParts.faq.items.4.answer" },
                                    { q: "spareParts.faq.items.5.question", a: "spareParts.faq.items.5.answer" },
                                    { q: "serviceContract.faq.items.1.question", a: "serviceContract.faq.items.1.answer" },
                                ].map((faq, i) => (
                                    <details key={i} className="group bg-white border border-gray-100 rounded-2xl open:border-primary/20 transition-all duration-300 shadow-sm">
                                        <summary className="flex items-center justify-between p-7 cursor-pointer list-none">
                                            <span className="font-bold uppercase tracking-tight text-gray-800 pr-10">{t(faq.q as any)}</span>
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-open:bg-primary group-open:rotate-90 transition-all">
                                                <ChevronRight className="w-4 h-4 text-gray-400 group-open:text-white" />
                                            </div>
                                        </summary>
                                        <div className="px-7 pb-7 text-gray-500 leading-relaxed text-sm max-w-2xl border-t border-gray-50 pt-5">
                                            {t(faq.a as any)}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Support Banner */}
                <section className="py-20 bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-[400px] h-full bg-primary/20 skew-x-[-20deg] translate-x-1/2" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="text-center md:text-left">
                                <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
                                    EMERGENCY <span className="text-primary">ASSISTANCE?</span>
                                </h2>
                                <p className="text-white/60 text-lg font-light">
                                    Our recovery team is available 24/7 for premium car towing in Dubai.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link
                                    href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, '')}`}
                                    className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-none uppercase tracking-widest text-sm transition-all text-center"
                                >
                                    CALL NOW: {CONTACT_DATA.phoneDisplay}
                                </Link>
                                <Link
                                    href="/services/recovery"
                                    className="bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-10 rounded-none uppercase tracking-widest text-sm transition-all text-center border border-white/20"
                                >
                                    RECOVERY SERVICES
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        {/* Breadcrumbs */}
                        <div className="max-w-3xl" data-aos="fade-up">
                            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase">
                                GET IN <span className="text-primary">TOUCH</span>
                            </h1>
                            <p className="font-sans text-xl text-white/70 leading-relaxed font-light">
                                Have questions about our services or need to schedule an appointment?
                                Our team of German automotive experts is ready to assist you with precision care.
                            </p>
                            <nav className="flex items-center gap-2 text-white/60 text-sm font-medium animate-fade-in -mb-12 mt-8" aria-label="Breadcrumb">
                                <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors group">
                                    <Home size={14} className="group-hover:scale-110 transition-transform" />
                                    Home
                                </Link>
                                <ChevronRight size={14} className="opacity-40" />
                                <span className="text-white font-bold uppercase tracking-wider text-xs">Contact Us</span>
                            </nav>
                        </div>
                    </div>
                </section>

            </main>

            <Contact />
            <Footer />
        </div>
    )
}

export default ContactPage