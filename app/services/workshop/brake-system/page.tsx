"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldAlert, ShieldCheck, Wrench } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function BrakeSystemPage() {
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
                {t("workshopPages.brakeSystem.hero.specialists")}
                <span className="block w-12 h-[2px] bg-primary mt-2" />
              </span>

              <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                {t("workshopPages.brakeSystem.hero.title")}
              </h1>

              <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                {t("workshopPages.brakeSystem.hero.description")}
              </p>

              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                    {t("workshopPages.brakeSystem.hero.button")}
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
                src="/images/brake/hero.jpg.jpeg"
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
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={14} />
                  {t("workshopPages.common.section01")}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.brakeSystem.service.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.brakeSystem.service.description")}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {(t("workshopPages.brakeSystem.service.list") as unknown as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.brakeSystem.service.button")}
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
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <ShieldAlert size={14} />
                  {t("workshopPages.common.section02")}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.brakeSystem.abs.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.brakeSystem.abs.description")}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {(t("workshopPages.brakeSystem.abs.list") as unknown as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 leading-[1.7]">
                {t("workshopPages.brakeSystem.abs.disclaimer")}
              </p>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.brakeSystem.abs.button")}
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
                src="/images/brake/abs.jfif.jpeg"
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
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={14} />
                  {t("workshopPages.common.section03")}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.brakeSystem.whyUs.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {(t("workshopPages.brakeSystem.whyUs.list") as unknown as string[]).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-600 leading-[1.7]">
                {t("workshopPages.brakeSystem.whyUs.description")}
              </p>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.brakeSystem.whyUs.button")}
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
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
              {t("workshopPages.common.symptoms")}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
              {t("workshopPages.brakeSystem.signs.title")}
            </h2>
            <div className="w-12 h-[3px] bg-primary mx-auto" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {(t("workshopPages.brakeSystem.signs.list") as unknown as string[]).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-200 px-6 py-5 hover:border-primary/40 transition-colors"
                data-aos="fade-up"
                data-aos-delay={Math.floor(i / 3) * 60}
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
              {t("workshopPages.brakeSystem.signs.description")}
            </p>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                {t("workshopPages.brakeSystem.signs.button")}
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
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div>
                <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
                  Our Standard
                  <span className="block w-12 h-[2px] bg-primary mt-2" />
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mt-4 mb-4">
                  {t("workshopPages.brakeSystem.standard.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.brakeSystem.standard.description")}
                </p>
              </div>

              <div className="bg-black text-white p-8 border-l-4 border-primary">
                <p className="text-gray-300 font-light leading-[1.7] italic">
                  &ldquo;{t("workshopPages.brakeSystem.standard.quote")}&rdquo;
                </p>
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.brakeSystem.standard.button")}
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
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("workshopPages.brakeSystem.finalCta.description")}
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-12 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.35)] transition-all"
              >
                {t("workshopPages.brakeSystem.finalCta.button")}
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
