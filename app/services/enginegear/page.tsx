"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ENGINE_GEARBOX_DATA } from "@/lib/data";

export default function EngineGearboxPage() {
  const { t, direction } = useLanguage();

  return (
    <div className="bg-white text-black font-sans mt-16 overflow-x-hidden" dir={direction}>
      <Header />
      {/* SECTION 1: Top Hero Split Layout */}
      <section className="py-20 px-6 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 items-center gap-2">
          {/* LEFT SIDE */}
          <div
            className="flex flex-col items-start space-y-6"
            data-aos="fade-right"
          >
            <span className="text-[#E10600] font-bold tracking-widest uppercase text-sm">
              {t(ENGINE_GEARBOX_DATA.hero.subtitle)}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              {t(ENGINE_GEARBOX_DATA.hero.title)}
            </h1>
            <div className="w-16 h-1 bg-[#E10600]"></div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
              {(t(ENGINE_GEARBOX_DATA.hero.description) as unknown as string[]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
            >
              {t(ENGINE_GEARBOX_DATA.hero.cta)}
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="relative h-[500px] w-full"
            data-aos="fade-left"
          >
            <Image
              src={ENGINE_GEARBOX_DATA.hero.image}
              alt="Technician working on gearbox"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Image Left – Text Right */}
      <section className="py-20 px-6 lg:px-20 container mx-auto bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image */}
          <div
            className="relative h-[600px] w-full"
            data-aos="fade-right"
          >
            <Image
              src={ENGINE_GEARBOX_DATA.overhaulDubai.image}
              alt="Mechanic working on engine"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT: Text */}
          <div
            className="flex flex-col items-start space-y-6"
            data-aos="fade-left"
          >
            <span className="text-[#E10600] font-bold tracking-widest uppercase text-sm">
              {t(ENGINE_GEARBOX_DATA.overhaulDubai.subtitle)}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {t(ENGINE_GEARBOX_DATA.overhaulDubai.title)}
            </h2>
            <div className="w-16 h-1 bg-[#E10600]"></div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
              {(t(ENGINE_GEARBOX_DATA.overhaulDubai.description) as unknown as string[]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
            >
              {t(ENGINE_GEARBOX_DATA.overhaulDubai.cta)}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Text Left – Image Right */}
      <section className="py-20 px-6 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div
            className="flex flex-col items-start space-y-6"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {t(ENGINE_GEARBOX_DATA.whyChooseUs.title)}
            </h2>
            <div className="w-16 h-1 bg-[#E10600]"></div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
              {(t(ENGINE_GEARBOX_DATA.whyChooseUs.description) as unknown as string[]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
            >
              {t(ENGINE_GEARBOX_DATA.whyChooseUs.cta)}
            </Link>
          </div>

          {/* RIGHT: Image */}
          <div
            className="relative h-[500px] w-full"
            data-aos="fade-left"
          >
            <Image
              src={ENGINE_GEARBOX_DATA.whyChooseUs.image}
              alt="Close-up of gearbox part"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      <section className="py-20 px-6 lg:px-20 container mx-auto bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="flex flex-col items-start space-y-6"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {t(ENGINE_GEARBOX_DATA.whenToGet.title)}
            </h2>
            <div className="w-16 h-1 bg-[#E10600]"></div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
              <p>{t(ENGINE_GEARBOX_DATA.whenToGet.description)}</p>

              <ul className="space-y-2 mt-2">
                {(t(ENGINE_GEARBOX_DATA.whenToGet.signsKey) as unknown as string[]).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <span className="w-2 h-2 bg-[#E10600] rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>{t(ENGINE_GEARBOX_DATA.whenToGet.signsFooter)}</p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
            >
              {t(ENGINE_GEARBOX_DATA.whenToGet.cta)}
            </Link>
          </div>

          {/* RIGHT: Image */}
          <div
            className="relative h-[600px] w-full"
            data-aos="zoom-in"
          >
            <Image
              src={ENGINE_GEARBOX_DATA.whenToGet.image}
              alt="Red mechanical engine stands"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Final Content Block (Text Left, Image Right) */}
      <section className="pt-20 pb-10 px-6 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <div
            className="flex flex-col items-start space-y-6"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
              {t(ENGINE_GEARBOX_DATA.atRedDune.title)}
            </h2>
            <div className="w-16 h-1 bg-[#E10600]"></div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
              {(t(ENGINE_GEARBOX_DATA.atRedDune.description) as unknown as string[]).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
            >
              {t(ENGINE_GEARBOX_DATA.atRedDune.cta)}
            </Link>
          </div>

          {/* RIGHT: Image */}
          <div
            className="relative h-[500px] w-full"
            data-aos="fade-left"
          >
            <Image
              src={ENGINE_GEARBOX_DATA.atRedDune.image}
              alt="Transmission gearbox"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FINAL SECTION (CONTACT AREA) */}
      <section className="pt-10 pb-20 px-6 lg:px-20 bg-gray-100">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
