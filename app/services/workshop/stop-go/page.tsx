"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Settings } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function StopGoPage() {
  const { t } = useLanguage();
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
                {t("workshopPages.stopGo.hero.specialists")}
                <span className="block w-12 h-[2px] bg-primary mt-2" />
              </span>

              <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                {t("workshopPages.stopGo.hero.title")}
              </h1>

              <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                {t("workshopPages.stopGo.hero.description")}
              </p>

              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                    {t("workshopPages.stopGo.hero.button")}
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
                src="/images/wheel/car.jfif.jpeg"
                alt="Stop & Go Complete Car Service"
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

      {/* ─── SECTION 1 – COMPREHENSIVE CARE ─── */}
      <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <Settings size={14} />
                  Section 01
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.stopGo.care.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.stopGo.care.description")}
                </p>
              </div>

              <div className="bg-black text-white p-8 border-l-4 border-primary">
                <p className="text-white font-bold text-xl uppercase leading-snug">
                  {t("workshopPages.stopGo.care.banner")}
                </p>
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.stopGo.care.button")}
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
                src="/images/wheel/stop.jfif.jpeg"
                alt="Comprehensive Car Care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-white/30 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 – WHY US ─── */}
      <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Text */}
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <Settings size={14} />
                  Section 02
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.stopGo.whyUs.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.stopGo.whyUs.description")}
                </p>
              </div>

              <ul className="space-y-4">
                {(t("workshopPages.stopGo.whyUs.list") as unknown as string[]).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.stopGo.whyUs.button")}
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
                src="/images/services1.jpg"
                alt="Expert Technicians"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-gray-200/60 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 – WHAT'S INCLUDED (CENTERED GRID) ─── */}
      <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Full Package
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
              {t("workshopPages.stopGo.included.title")}
            </h2>
            <div className="w-12 h-[3px] bg-primary mx-auto" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {(t("workshopPages.stopGo.included.list") as unknown as string[]).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border border-gray-200 px-6 py-5 hover:border-primary/40 transition-colors"
                data-aos="fade-up"
                data-aos-delay={String(Math.floor(i / 3) * 60)}
              >
                <span className="text-3xl font-black text-gray-100 select-none flex-shrink-0 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-gray-800 text-base leading-snug pt-1">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            className="text-center max-w-2xl mx-auto space-y-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p className="text-lg text-gray-600 leading-[1.7]">
              {t("workshopPages.stopGo.included.description")}
            </p>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                {t("workshopPages.stopGo.included.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 – IDEAL REPAIR & MAINTENANCE ─── */}
      <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Text */}
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <Settings size={14} />
                  Section 04
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.stopGo.maintenance.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.stopGo.maintenance.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t("workshopPages.stopGo.maintenance.items") as unknown as any[]).map((item, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 p-5 hover:border-primary/40 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={String(i * 60)}
                  >
                    <h4 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">
                      {item.label}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.stopGo.maintenance.button")}
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div
              className="w-full lg:w-1/2 relative min-h-[480px] lg:min-h-[600px]"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Image
                src="/images/services.jpg"
                alt="Ideal Repair and Maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 – WE OFFER PERFECTION (CENTERED) ─── */}
      <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6 text-center">
          <div
            className="max-w-3xl mx-auto space-y-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Our Commitment
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black">
              {t("workshopPages.stopGo.perfection.title")}
            </h2>
            <div className="w-12 h-[3px] bg-primary mx-auto" />
            <p className="text-lg text-gray-600 leading-[1.7]">
              {t("workshopPages.stopGo.perfection.description")}
            </p>
            <div className="bg-black text-white p-8 border-l-4 border-primary text-left">
              <p className="font-bold text-white text-xl uppercase">
                {t("workshopPages.stopGo.perfection.banner")}
              </p>
            </div>
            <div>
              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-12 py-6 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.stopGo.perfection.button")}
                </Button>
              </Link>
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
            {t("workshopPages.stopGo.finalCta.title")}
          </h2>
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("workshopPages.stopGo.finalCta.description")}
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-12 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.35)] transition-all"
              >
                {t("workshopPages.stopGo.finalCta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
