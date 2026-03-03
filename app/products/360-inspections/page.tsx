"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  ScanEye,
  FileText,
  UserCheck,
  Banknote,
  ShieldCheck,
  BarChart3,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Contact } from "@/components/sections/Contact";

export default function InspectionsPage() {
  const { t, direction } = useLanguage();

  const highlightItems = [
    { key: "thorough", icon: ScanEye },
    { key: "reports", icon: FileText },
    { key: "experts", icon: UserCheck },
    { key: "pricing", icon: Banknote },
    { key: "report12", icon: BarChart3 },
    { key: "estimation", icon: FileText },
    { key: "warranty", icon: ShieldCheck },
    { key: "mileage", icon: Gauge },
  ];

  return (
    <main
      className="min-h-screen bg-background text-black font-[family-name:var(--font-inter)] overflow-x-hidden selection:bg-primary selection:text-black"
      dir={direction}
    >
      <Header />

      {/* 1️⃣ Hero & Lead-In */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/360/ins1.jpeg"
            alt="Hero Background"
            fill
            className="opacity-30 mix-blend-overlay object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-playfair)] font-bold text-black mb-6 drop-shadow-lg tracking-tight">
              {t("inspections.hero.title1")}{" "}
              <span className="text-primary">
                {t("inspections.hero.title2")}
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              {t("inspections.hero.description")}
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="bg-primary text-black hover:bg-red-700 text-xl px-10 py-6 rounded-none font-bold tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(209,50,50,0.4)]">
                  {t("inspections.hero.bookNow")}
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
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-black leading-tight">
                {t("inspections.prePurchase.title1")}{" "}
                <span className="text-primary">
                  {t("inspections.prePurchase.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                {t("inspections.prePurchase.description")}
              </p>
            </div>
            <div className="lg:w-1/2 h-[400px] w-full relative group">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/360/ins2.jpeg"
                  alt="Detailed Inspection Process"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Why Pick Us? */}
      <section className="py-24 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-black">
                {t("inspections.whyPickUs.title1")}{" "}
                <span className="text-primary">
                  {t("inspections.whyPickUs.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                {t("inspections.whyPickUs.description")}
              </p>
            </div>
            <div className="lg:w-1/2 h-[400px] w-full relative group">
              <div className="absolute inset-0 transform -translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/360/ins3.jpeg"
                  alt="Expert Team & High-Tech Tools"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Inspection Benefits / Highlights */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-black mb-4">
              {t("inspections.highlights.title1")}{" "}
              <span className="text-primary">
                {t("inspections.highlights.title2")}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 p-8 border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black font-[family-name:var(--font-playfair)]">
                  {t(`inspections.highlights.items.${item.key}.title`)}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                  {t(`inspections.highlights.items.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ How Do We Inspect? */}
      <section className="py-24  px-6 border-y border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-black">
                {t("inspections.howInspect.title1")}{" "}
                <span className="text-primary">
                  {t("inspections.howInspect.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                {t("inspections.howInspect.description")}
              </p>
            </div>
            <div className="lg:w-1/2 h-[400px] w-full relative group">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/360/ins4.png"
                  alt="Inspection Workflow"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Buy The Best Car */}
      <section className="py-24 bg-background px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-black">
                {t("inspections.buyBest.title1")}{" "}
                <span className="text-primary">
                  {t("inspections.buyBest.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                {t("inspections.buyBest.description")}
              </p>
            </div>
            <div className="lg:w-1/2 h-[400px] w-full relative group">
              <div className="absolute inset-0 transform -translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/360/vir360-img-3.png"
                  alt="Best Car Assurance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
