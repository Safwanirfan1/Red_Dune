"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Phone, Clock, Shield, CheckCircle2, MapPin, Truck, HelpCircle, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const RecoveryServices = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white selection:bg-red-600 selection:text-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden bg-white">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 min-h-[500px] lg:min-h-[600px]">
            {/* Text Content */}
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 pb-8 lg:pb-0 text-center lg:text-left items-center lg:items-start"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 mb-6 w-fit">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-widest">{t("recovery.hero.premium")}</span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] text-black mb-6 md:mb-8">
                {t("recovery.hero.title")}
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mb-8 md:mb-10">
                {t("recovery.hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-7 text-base uppercase tracking-wider w-full shadow-lg shadow-red-200">
                    {t("recovery.hero.bookNow")}
                  </Button>
                </Link>
                <Link href="tel:0501116000" className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors w-full sm:w-auto">
                  <Phone className="w-5 h-5 text-primary" />
                  {t("recovery.hero.callNow")}
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div
              className="w-full lg:w-1/2 relative min-h-[300px] md:min-h-[400px] lg:min-h-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src="/images/recovery/nop 1.jfif"
                alt="Car Recovery Service Dubai"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" />

              {/* Floating Status */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:bottom-10 lg:right-auto bg-black p-4 md:p-6 text-white max-w-sm">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{t("recovery.status.label")}</span>
                </div>
                <p className="font-bold text-base md:text-lg uppercase tracking-tight">{t("recovery.status.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="bg-neutral-50 border-y border-gray-100 py-10">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { label: "Response", value: "30-45m", icon: Clock },
              { label: "Availability", value: "24/7", icon: Shield },
              { label: "Fleet size", value: "25+ Units", icon: Truck },
              { label: "Rating", value: "4.9/5", icon: Star },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-up" data-aos-delay={i * 100}>
                <stat.icon className="w-5 h-5 text-primary mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</span>
                <span className="text-xl font-black text-black uppercase tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FLATBED SERVICE ─── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div
              className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] md:h-[500px]"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                src="/images/recovery/ser (2).jpg"
                alt="Flatbed Towing Dubai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-10 md:border-20 border-white m-4 md:m-8 pointer-events-none" />
            </div>

            <div
              className="w-full lg:w-1/2 px-0 lg:px-10 text-center lg:text-left items-center lg:items-start flex flex-col"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
                {t("recovery.flatbed.title")}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                {t("recovery.flatbed.description")}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-8 w-full">
                {(t("recovery.flatbed.items") as unknown as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-black font-bold uppercase text-xs md:text-sm tracking-wide">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-neutral-950 text-white italic text-xs md:text-sm border-l-4 border-primary w-full">
                "{t("recovery.flatbed.disclaimer")}"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DUBAI RECOVERY ─── */}
      <section className="py-16 md:py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div
              className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] md:h-[500px]"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Image
                src="/images/recovery/ser (1).jpg"
                alt="Reliable Car Recovery Dubai"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-10 md:border-20 border-white/50 m-4 md:m-8 pointer-events-none" />
            </div>

            <div
              className="w-full lg:w-1/2 px-0 lg:px-10 text-center lg:text-left items-center lg:items-start flex flex-col"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-black mb-6 md:mb-8 leading-[1.1]">
                {t("recovery.dubai.title")}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                {t("recovery.dubai.description")}
              </p>

              <div className="bg-white p-6 md:p-8 border border-gray-200 gap-y-4 md:gap-y-6 flex flex-col mb-10 shadow-sm w-full">
                {(t("recovery.dubai.items") as unknown as string[]).map((item, i) => (
                  <div key={i} className="flex items-center gap-4 lg:gap-5 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay={i * 100}>
                    <span className="text-primary font-black text-xl md:text-2xl select-none">0{i + 1}</span>
                    <p className="text-black font-bold uppercase text-xs md:text-sm tracking-wider">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 font-medium text-xs md:text-sm border-l-2 border-primary pl-4 uppercase tracking-widest text-left" data-aos="fade-up">
                {t("recovery.dubai.disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE SECTION ─── */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden" id="why-choose-us">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none lg:block hidden">
          <Truck className="w-full h-full text-white" />
        </div>

        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="mb-12 md:mb-20 text-center lg:text-left" data-aos="fade-up">
            <h2 className="font-heading text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6">
              {t("recovery.whyChoose.title")}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t("recovery.whyChoose.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-neutral-800 border border-neutral-800">
            {Object.entries({
              available: { icon: Clock, title: "recovery.whyChoose.items.available.title", desc: "recovery.whyChoose.items.available.desc" },
              protect: { icon: Shield, title: "recovery.whyChoose.items.protect.title", desc: "recovery.whyChoose.items.protect.desc" },
              brands: { icon: Truck, title: "recovery.whyChoose.items.brands.title", desc: "recovery.whyChoose.items.brands.desc" },
              pricing: { icon: Shield, title: "recovery.whyChoose.items.pricing.title", desc: "recovery.whyChoose.items.pricing.desc" },
              personal: { icon: Phone, title: "recovery.whyChoose.items.personal.title", desc: "recovery.whyChoose.items.personal.desc" },
            }).map(([key, config], i) => (
              <div key={i} className="bg-black p-8 md:p-10 hover:bg-neutral-900 transition-colors group flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-[2px] bg-primary mb-6 md:mb-8 group-hover:w-20 transition-all" />
                <config.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-black text-lg md:text-xl uppercase tracking-tight mb-4">{t(config.title as any)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(config.desc as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── VEHICLE TYPES ─── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6 text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
            {t("recovery.vehicles.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t("recovery.vehicles.description")}
          </p>
        </div>

        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: "luxury", img: "/images/recovery/car.jpg" },
              { key: "suv", img: "/images/recovery/car (2).jpg" },
              { key: "ev", img: "/images/recovery/car (3).jpg" },
              { key: "commercial", img: "/images/recovery/car (1).jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative h-[350px] overflow-hidden bg-black flex flex-col justify-end p-8"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                data-aos-duration="1000"
              >
                <Image
                  src={item.img}
                  alt={t(`recovery.vehicles.items.${item.key}.title` as any)}
                  fill
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2">{t(`recovery.vehicles.items.${item.key}.title` as any)}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">{t(`recovery.vehicles.items.${item.key}.models` as any)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── PROCESS STEPS ─── */}
      <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
              {t("recovery.support.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {(t("recovery.support.steps") as unknown as any[]).map((step, i) => (
              <div key={i} className="relative group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-8xl font-black text-gray-50 absolute -top-10 -left-6 group-hover:text-red-50 transition-colors z-0">
                  {step.step}
                </div>
                <div className="relative z-10 pt-4 pl-4 border-l-2 border-red-100 group-hover:border-primary transition-colors">
                  <h3 className="font-black text-xl uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-24 bg-neutral-50 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="w-full lg:w-1/3" data-aos="fade-right">
              <div className="sticky top-32">
                <div className="w-16 h-16 bg-primary flex items-center justify-center text-white mb-8">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-black mb-6 leading-none">
                  {t("recovery.faq.title")}
                </h2>
                <p className="text-gray-600 mb-8">
                  Everything you need to know about our premium recovery service in the UAE.
                </p>
                <div className="p-6 bg-white border border-gray-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Still have questions?</p>
                  <p className="font-bold text-black uppercase text-sm mb-4">Our dispatch team is available 24/7</p>
                  <Button variant="outline" className="w-full rounded-none border-black text-black hover:bg-black hover:text-white font-bold uppercase text-xs tracking-widest py-6">
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 space-y-4" data-aos="fade-left">
              {(t("recovery.faq.items") as unknown as any[]).map((faq, i) => (
                <details key={i} className="group bg-white border border-gray-200 open:border-primary transition-all duration-300">
                  <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                    <span className="font-bold uppercase tracking-tight text-lg pr-10">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-open:bg-primary group-open:border-primary group-open:rotate-90 transition-all">
                      <ChevronRight className="w-4 h-4 text-gray-400 group-open:text-white" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-gray-600 leading-relaxed max-w-2xl">
                    {faq.a || faq.i}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LAST CTA (REPEAT) ─── */}
      <section className="py-24 bg-neutral-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5 animate-pulse" />
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10" data-aos="zoom-in">
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-none">
            {t("recovery.finalCta.title1")} <span className="text-primary italic"> {t("recovery.finalCta.titleHighlight")}</span> {t("recovery.finalCta.title2")}
          </h2>
        </div>
      </section>
    </div>
  );
};
