'use client';

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function EngineManagementSystemPage() {
  const { t } = useLanguage();

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
              {t("workshopPages.engineManagement.hero.titlePrefix")}{" "}
              <span className="text-primary block mt-2">
                {t("workshopPages.engineManagement.hero.titleSuffix")}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto">
              {t("workshopPages.engineManagement.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-none uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.3)] hover:shadow-[0_0_30px_rgba(209,50,50,0.5)] transition-all"
                >
                  {t("workshopPages.engineManagement.hero.bookButton")}
                </Button>
              </Link>
              <Link href="tel:+971500000000" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-12 py-6 rounded-none uppercase tracking-wider bg-transparent transition-all"
                >
                  {t("workshopPages.engineManagement.hero.callButton")}
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
                  {t("workshopPages.engineManagement.engine.title")}
                </h2>
                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                  {t("workshopPages.engineManagement.engine.subtitle")}
                </h3>
                <p className="text-lg text-gray-600 leading-[1.7]">
                  {t("workshopPages.engineManagement.engine.description")}
                </p>

                <div className="pt-6">
                  <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                    {t("workshopPages.engineManagement.engine.whyUsTitle")}
                  </h4>
                  <ul className="space-y-4">
                    {(t("workshopPages.engineManagement.engine.benefits") as unknown as string[]).map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-lg text-gray-700 font-medium whitespace-nowrap lg:whitespace-normal"
                      >
                        <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black text-white p-8 mt-8 border-l-4 border-primary">
                  <h4 className="text-xl font-bold uppercase mb-2">
                    {t("workshopPages.engineManagement.engine.bannerTitle")}
                  </h4>
                  <p className="text-gray-300 font-light">
                    {t("workshopPages.engineManagement.engine.bannerText")}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all">
                      {t("workshopPages.engineManagement.engine.button")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]"
                data-aos="fade-left"
              >
                <Image
                  src="/images/engin/engin.jfif.jpeg"
                  alt="Engine Management System"
                  fill
                  className="object-cover"
                />
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
                  {t("workshopPages.engineManagement.ecu.title")}
                </h2>
                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                  {t("workshopPages.engineManagement.ecu.subtitle")}
                </h3>

                <div className="pt-4">
                  <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                    {t("workshopPages.engineManagement.ecu.symptomsTitle")}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(t("workshopPages.engineManagement.ecu.symptoms") as unknown as string[]).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white p-4 shadow-sm border border-gray-100 hover:border-primary/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                    {t("workshopPages.engineManagement.ecu.whyUsTitle")}
                  </h4>
                  <p className="text-lg text-gray-600 leading-[1.7] mb-6">
                    {t("workshopPages.engineManagement.ecu.description")}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-black hover:bg-neutral-800 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full transition-all">
                      {t("workshopPages.engineManagement.ecu.button")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]"
                data-aos="fade-right"
              >
                <Image
                  src="/images/engin/ecu.png"
                  alt="ECU Repair"
                  fill
                  className="object-cover"
                />
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
                  {t("workshopPages.engineManagement.gearbox.title")}
                </h2>
                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                  {t("workshopPages.engineManagement.gearbox.subtitle")}
                </h3>

                <div className="space-y-8 pt-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-heading uppercase">
                      {t("workshopPages.engineManagement.gearbox.helpTitle")}
                    </h4>
                    <p className="text-lg text-gray-600 leading-[1.7]">
                      {t("workshopPages.engineManagement.gearbox.helpText")}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-heading uppercase">
                      {t("workshopPages.engineManagement.gearbox.timeTitle")}
                    </h4>
                    <p className="text-lg text-gray-600 leading-[1.7]">
                      {t("workshopPages.engineManagement.gearbox.timeText")}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-heading uppercase">
                      {t("workshopPages.engineManagement.gearbox.frequencyTitle")}
                    </h4>
                    <p className="text-lg text-gray-600 leading-[1.7]">
                      {t("workshopPages.engineManagement.gearbox.frequencyText")}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all">
                      {t("workshopPages.engineManagement.gearbox.button")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]"
                data-aos="fade-left"
              >
                <Image
                  src="/images/engin/gear box.jfif.jpeg"
                  alt="Recovery Vehicle"
                  fill
                  className="object-cover object-bottom"
                />
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
                  {t("workshopPages.engineManagement.radiator.title")}
                </h2>
                <h3 className="text-xl text-primary font-bold uppercase tracking-wider">
                  {t("workshopPages.engineManagement.radiator.subtitle")}
                </h3>

                <div className="pt-4">
                  <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                    {t("workshopPages.engineManagement.radiator.problemsTitle")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(t("workshopPages.engineManagement.radiator.problems") as unknown as string[]).map((item, i) => (
                      <div
                        key={i}
                        className="bg-white p-6 border border-gray-200 hover:border-primary transition-colors flex items-center gap-6"
                      >
                        <span className="block text-4xl font-black text-gray-100 flex-shrink-0">
                          0{i + 1}
                        </span>
                        <span className="font-bold text-lg leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-2xl font-bold mb-4 font-heading uppercase">
                    {t("workshopPages.engineManagement.radiator.whyUsTitle")}
                  </h4>
                  <p className="text-lg text-gray-600 leading-[1.7]">
                    {t("workshopPages.engineManagement.radiator.description")}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-black hover:bg-neutral-800 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full transition-all">
                      {t("workshopPages.engineManagement.radiator.button")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]"
                data-aos="fade-right"
              >
                <Image
                  src="/images/engin/radiator.jfif.jpeg"
                  alt="Radiator Service"
                  fill
                  className="object-cover"
                />
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
                  {t("workshopPages.engineManagement.battery.title")}
                </h2>

                <div className="space-y-8 pt-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-heading uppercase">
                      {t("workshopPages.engineManagement.battery.whyServiceTitle")}
                    </h4>
                    <p className="text-lg text-gray-600 leading-[1.7]">
                      {t("workshopPages.engineManagement.battery.whyServiceText")}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                      {t("workshopPages.engineManagement.battery.benefitsTitle")}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {(t("workshopPages.engineManagement.battery.benefits") as unknown as string[]).map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                          <span className="font-bold text-gray-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-8 border border-gray-100 shadow-sm">
                    <h4 className="text-2xl font-bold mb-6 font-heading uppercase">
                      {t("workshopPages.engineManagement.battery.whyUsTitle")}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {(t("workshopPages.engineManagement.battery.whyUs") as unknown as string[]).map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
                          <span className="font-medium text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none px-8 py-6 uppercase tracking-wider w-full sm:w-auto transition-all shadow-xl hover:shadow-primary/30">
                      {t("workshopPages.engineManagement.battery.button")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]"
                data-aos="fade-left"
              >
                <Image
                  src="/images/engin/battery.jfif.jpeg"
                  alt="Battery Replacement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Get In Touch Section (Using design tokens) */}
      <section
        className="bg-black text-white py-24 border-t border-white/10"
        id="contact"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold uppercase font-heading mb-6"
            data-aos="flip-down"
          >
            {t("workshopPages.engineManagement.finalCta.title")}
          </h2>
          <p
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("workshopPages.engineManagement.finalCta.description")}
          </p>
          <div data-aos="zoom-in" data-aos-delay="200">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-none font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(209,50,50,0.4)]"
              >
                {t("workshopPages.engineManagement.finalCta.button")}
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
