"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Droplets } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function OilChangePage() {
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
                {t("workshopPages.oilChange.hero.specialists")}
                <span className="block w-12 h-[2px] bg-primary mt-2" />
              </span>

              <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                {t("workshopPages.oilChange.hero.title")}
              </h1>

              <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                {t("workshopPages.oilChange.hero.description")}
              </p>

              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                    {t("workshopPages.oilChange.hero.button")}
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
                src="/images/oil/oil1.jfif.jpeg"
                alt="Engine Oil Change Service"
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

      {/* ─── SECTION 1 – FAST & RELIABLE ─── */}
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
                  <Droplets size={14} />
                  Section 01
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.oilChange.service.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.oilChange.service.description")}
                </p>
              </div>

              <ul className="space-y-4">
                {(t("workshopPages.oilChange.service.list") as unknown as string[]).map((item, i) => (
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
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.oilChange.service.button")}
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
                src="/images/oil/oil2.jfif.jpeg"
                alt="Oil Change Workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-white/30 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 – SIGNS (CENTERED) ─── */}
      <section className="py-[100px] bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
              Warning Signs
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
              {t("workshopPages.oilChange.signs.title")}
            </h2>
            <div className="w-12 h-[3px] bg-primary mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-[1.7]">
              {t("workshopPages.oilChange.signs.description")}
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {(t("workshopPages.oilChange.signs.list") as unknown as string[]).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-gray-200 px-6 py-5 hover:border-primary/40 transition-colors"
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
            <p className="text-gray-600 leading-[1.7] text-lg">
              {t("workshopPages.oilChange.signs.disclaimer")}
            </p>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-10 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                {t("workshopPages.oilChange.signs.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3 – WHAT TO EXPECT ─── */}
      <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
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
                  <Droplets size={14} />
                  Section 03
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.oilChange.expect.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
              </div>

              <ul className="space-y-4">
                {(t("workshopPages.oilChange.expect.list") as unknown as string[]).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.oilChange.expect.button")}
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
                src="/images/services.jpg"
                alt="Engine Oil Service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-gray-200/60 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 – TYPES OF OIL ─── */}
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
                  <Droplets size={14} />
                  Section 04
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.oilChange.oils.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.oilChange.oils.description")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t("workshopPages.oilChange.oils.items") as unknown as any[]).map((item, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 p-5 hover:border-primary/40 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay={String(i * 60)}
                  >
                    <h4 className="font-bold text-black mb-2 text-sm uppercase tracking-wide">
                      {item.label}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.oilChange.oils.button")}
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
                src="/images/oil/oil3.jfif.jpeg"
                alt="Engine Oil Types"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 – WHY RED DUNE ─── */}
      <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
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
                  <Droplets size={14} />
                  Section 05
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.oilChange.whyUs.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(t("workshopPages.oilChange.whyUs.list") as unknown as string[]).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.oilChange.whyUs.button")}
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
                alt="Red Dune Workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-white/20 m-5 pointer-events-none" />
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
            {t("workshopPages.oilChange.finalCta.title")}
          </h2>
          <p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("workshopPages.oilChange.finalCta.description")}
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-sm font-bold px-12 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.35)] transition-all"
              >
                {t("workshopPages.oilChange.finalCta.button")}
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
