"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Wrench } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ComfortSystemPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-red-600 selection:text-white">
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-40 pb-0 overflow-hidden bg-white">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-0 min-h-[600px]">
            {/* Text side */}
            <div
              className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 pb-16 lg:pb-0"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-black mb-3">
                {t("workshopPages.comfortSystem.hero.specialists")}
                <span className="block w-12 h-[2px] bg-primary mt-2" />
              </span>

              <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-black mt-4 mb-6">
                {t("workshopPages.comfortSystem.hero.title")}
              </h1>

              <p className="text-lg text-gray-600 leading-[1.7] max-w-xl mb-10">
                {t("workshopPages.comfortSystem.hero.description")}
              </p>

              <div>
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-10 py-6 text-base uppercase tracking-wider w-full sm:w-auto transition-all">
                    {t("workshopPages.comfortSystem.hero.button")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div
              className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]"
              data-aos="fade-left"
              data-aos-duration="900"
            >
              <Image
                src="/images/workshop/hero.jfif.jpeg"
                alt="Professional Workshop"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent lg:block hidden" />
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-b border-gray-200 mt-0" />
      </section>

      {/* ─── SERVICE 1: COMFORT SYSTEM / AC ─── */}
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
                  <Wrench size={14} />
                  {t("workshopPages.common.section01")}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.comfortSystem.ac.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.comfortSystem.ac.description")}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-black mb-5">
                  {t("workshopPages.comfortSystem.ac.partsTitle")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {(t("workshopPages.comfortSystem.ac.parts") as unknown as string[]).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border border-gray-200 px-5 py-4 hover:border-primary/40 transition-colors"
                    >
                      <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold text-gray-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-[1.7]">
                {t("workshopPages.comfortSystem.ac.disclaimer")}
              </p>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.comfortSystem.ac.button")}
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div
              className="w-full lg:w-1/2 relative min-h-[480px] lg:min-h-[620px]"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <Image
                src="/images/workshop/ac.jfif.jpeg"
                alt="Comfort System AC Repair"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Accent frame */}
              <div className="absolute inset-0 border-[6px] border-white/30 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE 2: SUSPENSION ─── */}
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
                  <Wrench size={14} />
                  {t("workshopPages.common.section02")}
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
                  {t("workshopPages.comfortSystem.suspension.title")}
                </h2>
                <div className="w-12 h-[3px] bg-primary mb-6" />
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.comfortSystem.suspension.description")}
                </p>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold uppercase text-black mb-5">
                  {t("workshopPages.comfortSystem.suspension.whyUsTitle")}
                </h3>
                <ul className="space-y-4">
                  {(t("workshopPages.comfortSystem.suspension.benefits") as unknown as string[]).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-gray-700 font-medium"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none font-bold px-8 py-5 uppercase tracking-wider w-full sm:w-auto transition-all">
                  {t("workshopPages.comfortSystem.suspension.button")}
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div
              className="w-full lg:w-1/2 relative min-h-[480px] lg:min-h-[620px]"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <Image
                src="/images/workshop/suspension.jfif.jpeg"
                alt="Suspension System Repair"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[6px] border-gray-200/60 m-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPANSION-READY ADDITIONAL SERVICE SLOTS ─── */}
      {/* These are placeholder blocks ready for Engine Management, ECU, Gearbox, Radiator, Battery */}
      {/* <section className="py-[100px] bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-primary mb-3">
              More Workshop Services
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
              Our Full Repair Capabilities
            </h2>
            <div className="w-12 h-[3px] bg-primary mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-[1.7]">
              In addition to comfort and suspension systems, our workshop covers
              the full spectrum of German automotive repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Engine Management System",
                desc: "Advanced ECU diagnostics, sensor calibration, and full engine management repair by certified technicians.",
                href: "/services/workshop/engine-management-system",
              },
              {
                title: "ECU Repair",
                desc: "Dealer-level ECU programming, re-flashing, and repair to resolve every electronic management fault.",
                href: "/services/workshop/engine-management-system#ecu",
              },
              {
                title: "Gearbox Repair",
                desc: "Automatic and dual-clutch transmission rebuild, fluid replacement, and fault resolution.",
                href: "/services/workshop/engine-management-system#gearbox",
              },
              {
                title: "Radiator Service",
                desc: "High-pressure coolant flushing, leak repair, and radiator replacement using OEM-spec components.",
                href: "/services/workshop/engine-management-system#radiator",
              },
              {
                title: "Battery Replacement",
                desc: "OEM-coded battery installation with full electrical-system health check and warranty.",
                href: "/services/workshop/engine-management-system#battery",
              },
              {
                title: "Brake System",
                desc: "Complete brake inspection, pad & rotor replacement, and brake fluid service for total stopping confidence.",
                href: "/contact",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="border border-gray-200 p-8 hover:border-primary/40 transition-colors"
                data-aos="fade-up"
                data-aos-delay={String(i * 60)}
              >
                <span className="text-4xl font-black text-gray-100 block mb-4 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-bold uppercase text-black mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-[1.7] mb-6">
                  {s.desc}
                </p>
                <Link href={s.href}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-none text-sm font-bold uppercase tracking-wider px-6 py-3 transition-all w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── GET IN TOUCH ─── */}
      <section className="py-24 bg-black text-white" id="contact">
        <div className="container mx-auto max-w-[1200px] px-6 text-center">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6"
            data-aos="fade-up"
          >

          </h2>
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-[1.7]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our expert team is ready to assist you. Book an appointment or call
            us directly for a free consultation.
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link href="/contact">
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
      <Contact />
      <Footer />
    </main>
  );
}
