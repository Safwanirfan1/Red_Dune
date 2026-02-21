"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Wrench,
  FileCheck,
  Clock,
  CheckCircle,
  Car,
  BadgeCheck,
  Wallet,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Contact } from "@/components/sections/Contact";

const WHY_CHOOSE_KEYS = [
  "standalone",
  "diagnosis",
  "parts",
  "approval",
  "recovery",
  "brands",
  "mileage",
] as const;
const WHY_CHOOSE_ICONS = [
  FileCheck,
  Wrench,
  ShieldCheck,
  Clock,
  Car,
  BadgeCheck,
  CheckCircle,
];

const HOW_HELPS_KEYS = ["costs", "safety", "save", "peace"] as const;
const HOW_HELPS_ICONS = [Wallet, ShieldCheck, Clock, ThumbsUp];

export default function ServiceContractPage() {
  const { t, direction } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = t("serviceContract.faq.items") as unknown as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <main
      className="min-h-screen bg-background text-white font-[family-name:var(--font-inter)] overflow-x-hidden selection:bg-primary selection:text-white"
      dir={direction}
    >
      <Header />

      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            label="Service Contract Banner"
            className="opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] font-bold text-primary leading-tight mb-6 drop-shadow-lg">
              {t("serviceContract.hero.title1")} <br />
              <span className="text-white">
                {t("serviceContract.hero.title2")}
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              {t("serviceContract.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button className="bg-primary text-white hover:bg-red-700 text-lg px-8 py-6 rounded-none font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(209,50,50,0.3)]">
                  {t("serviceContract.hero.getQuote")}
                </Button>
              </Link>
              <Link href="#benefits">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-none font-semibold tracking-wide transition-all duration-300"
                >
                  {t("serviceContract.hero.viewBenefits")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2️⃣ What Is Service Contract */}
      <section className="py-24 bg-background px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white">
                {t("serviceContract.whatIs.title1")} <br />
                <span className="text-primary">
                  {t("serviceContract.whatIs.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                {t("serviceContract.whatIs.description")}
              </p>
              <Link href="#contact">
                <span className="inline-flex items-center text-primary font-bold uppercase tracking-widest hover:text-red-400 transition-colors cursor-pointer group">
                  {t("serviceContract.whatIs.learnMore")}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            </div>
            <div className="lg:w-1/2 h-[400px] w-full relative group">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
              <PlaceholderImage
                label="Contract Explanation"
                className="relative z-10 border-primary/10 bg-neutral-900/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Contract */}
      <section className="py-24 bg-neutral-900/50 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-white mb-4">
              {t("serviceContract.whyChoose.title1")}{" "}
              <span className="text-primary">
                {t("serviceContract.whyChoose.title2")}
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_KEYS.map((key, idx) => {
              const Icon = WHY_CHOOSE_ICONS[idx];
              return (
                <div
                  key={idx}
                  className="bg-neutral-950 p-8 border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-playfair)]">
                    {t(`serviceContract.whyChoose.items.${key}.title`)}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 transition-colors">
                    {t(`serviceContract.whyChoose.items.${key}.desc`)}
                  </p>
                </div>
              );
            })}
            <div className="bg-neutral-950 p-0 border border-white/5 overflow-hidden group">
              <PlaceholderImage
                label="Benefits Grid"
                className="h-full w-full opacity-50 group-hover:opacity-70 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ How This Helps You */}
      <section className="py-24 bg-background px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4 text-white">
                {t("serviceContract.howHelps.title1")}{" "}
                <span className="text-primary">
                  {t("serviceContract.howHelps.title2")}
                </span>
              </h2>
              <div className="w-24 h-1 bg-primary" />

              <div className="space-y-6">
                {HOW_HELPS_KEYS.map((key, i) => {
                  const Icon = HOW_HELPS_ICONS[i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-white">
                          {t(`serviceContract.howHelps.items.${key}.title`)}
                        </h4>
                        <p className="text-gray-400">
                          {t(`serviceContract.howHelps.items.${key}.desc`)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2 h-[500px] w-full relative">
              <div className="absolute inset-0 transform -translate-x-4 translate-y-4 border border-primary/30" />
              <PlaceholderImage
                label="How It Helps"
                className="relative z-10 border-primary/10 bg-neutral-900/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Supported Car Brands (Grey Placeholders) */}
      <section className="py-24 bg-neutral-900/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary uppercase tracking-widest font-bold mb-10 text-sm">
            {t("serviceContract.supportedBrands")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Audi",
              "BMW",
              "Mercedes-Benz",
              "Porsche",
              "Ferrari",
              "Bentley",
              "Range Rover",
              "Rolls Royce",
              "Lamborghini",
              "Jaguar",
              "McLaren",
            ].map((brand, idx) => (
              <div
                key={idx}
                className="h-24 bg-neutral-950 border border-white/10 flex items-center justify-center hover:border-primary/50 hover:shadow-[0_0_15px_rgba(209,50,50,0.1)] transition-all group"
              >
                <span className="text-gray-600 font-bold group-hover:text-primary transition-colors uppercase tracking-wider">
                  {brand}
                </span>
              </div>
            ))}
            <div className="h-24 bg-neutral-950 border border-white/10 flex items-center justify-center hover:border-primary/50 transition-all group">
              <span className="text-gray-600 font-bold group-hover:text-primary transition-colors uppercase tracking-wider">
                {t("serviceContract.more")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background px-6 mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-center mb-16 text-white">
            {t("serviceContract.faq.title1")}{" "}
            <span className="text-primary">
              {t("serviceContract.faq.title2")}
            </span>
          </h2>

          <div className="space-y-4">
            {faqItems.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-6 flex justify-between items-center hover:text-primary transition-colors focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-300",
                        openFaq === index
                          ? "rotate-180 text-primary"
                          : "text-gray-500",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openFaq === index
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-gray-400 pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
