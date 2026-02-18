"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Battery,
  Zap,
  Clock,
  RotateCcw,
  Settings,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const WARRANTY_KEYS = [
  "certified",
  "battery",
  "leak",
  "fast",
  "longTerm",
  "dealer",
] as const;
const WARRANTY_ICONS = [ShieldCheck, Battery, Zap, Clock, RotateCcw, Settings];

const SOLUTION_KEYS = [
  "mechanical",
  "electrical",
  "battery",
  "restoration",
] as const;
const SOLUTION_IMG_LABELS = [
  "Engine Components",
  "Electrical Wiring",
  "Battery Replacement",
  "Engine Repair",
];

const WHY_KEYS = ["specialists", "equipment", "inventory", "facility"] as const;

export default function SparePartsPage() {
  const { t, direction } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = t("spareParts.faq.items") as unknown as Array<{
    question: string;
    answer: string;
  }>;
  const processSteps = t("spareParts.process.steps") as unknown as Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  const aboutItems = t("spareParts.about.items") as unknown as string[];

  return (
    <main
      className="min-h-screen bg-background text-foreground font-[family-name:var(--font-inter)] overflow-x-hidden selection:bg-primary selection:text-white"
      dir={direction}
    >
      <Header />

      {/* 1️⃣ Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            label="Hero Banner (Luxury Workshop)"
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-20">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] font-bold text-white leading-tight mb-6">
              {t("spareParts.hero.title1")} <br />
              <span className="text-primary">
                {t("spareParts.hero.title2")}
              </span>
            </h1>
            <p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {t("spareParts.hero.description")}
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <Link href="#contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-none font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/20">
                  {t("spareParts.hero.inquireNow")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2️⃣ About Spare Parts Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div
              className="lg:w-1/2 space-y-8"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-4">
                {t("spareParts.about.title1")} <br />
                <span className="text-primary">
                  {t("spareParts.about.title2")}
                </span>
              </h2>
              <div className="w-20 h-1 bg-primary" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("spareParts.about.description")}
              </p>
              <ul className="space-y-4">
                {aboutItems.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <CheckCircle className="text-primary" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 mt-4"
                >
                  {t("spareParts.about.talkToExpert")}
                </Button>
              </Link>
            </div>
            <div
              className="lg:w-1/2 h-[500px] w-full relative"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-primary/30" />
              <PlaceholderImage
                label="Spare Parts Close-up"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Warranty Benefits Section (Cards) */}
      <section className="py-24 bg-muted/30 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("spareParts.warranty.title1")}{" "}
            <span className="text-primary">
              {t("spareParts.warranty.title2")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WARRANTY_KEYS.map((key, idx) => {
              const Icon = WARRANTY_ICONS[idx];
              return (
                <div
                  key={idx}
                  className="group bg-card p-8 border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  data-aos-duration="800"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-playfair)]">
                    {t(`spareParts.warranty.items.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`spareParts.warranty.items.${key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4️⃣ Spare Parts Options */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("spareParts.solutions.title1")}{" "}
            <span className="text-primary">
              {t("spareParts.solutions.title2")}
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SOLUTION_KEYS.map((key, idx) => {
              const items = t(
                `spareParts.solutions.${key}.items`,
              ) as unknown as string[];
              return (
                <div
                  key={idx}
                  className="bg-card border border-border overflow-hidden group hover:border-primary/50 transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  data-aos-duration="800"
                >
                  <div className="h-64 overflow-hidden relative">
                    <PlaceholderImage label={SOLUTION_IMG_LABELS[idx]} />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-primary mb-4">
                      {t(`spareParts.solutions.${key}.title`)}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {items.map((item: string) => (
                        <span
                          key={item}
                          className="text-xs uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-sm text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors group/link"
                    >
                      {t("spareParts.solutions.bookService")}
                      <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5️⃣ Our Process (Timeline) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("spareParts.process.title1")}{" "}
            <span className="text-primary">
              {t("spareParts.process.title2")}
            </span>
          </h2>

          <div className="relative">
            {/* Line */}
            <div
              className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-border"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map(
                (
                  process: { step: string; title: string; desc: string },
                  i: number,
                ) => (
                  <div
                    key={i}
                    className="relative z-10 flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay={i * 200}
                    data-aos-duration="800"
                  >
                    <div className="w-24 h-24 bg-background border-2 border-primary rounded-full flex flex-col items-center justify-center mb-6 shadow-lg shadow-primary/10 transition-transform hover:scale-110 duration-300">
                      <span className="text-primary font-bold text-xl">
                        {process.step}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                    <p className="text-muted-foreground text-sm max-w-[200px]">
                      {process.desc}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div
              className="lg:w-1/2"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold mb-8">
                {t("spareParts.whyRedDune.title1")}{" "}
                <span className="text-primary">
                  {t("spareParts.whyRedDune.title2")}
                </span>
              </h2>
              <div className="space-y-6">
                {WHY_KEYS.map((key, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        {t(`spareParts.whyRedDune.items.${key}.title`)}
                      </h4>
                      <p className="text-muted-foreground">
                        {t(`spareParts.whyRedDune.items.${key}.desc`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="lg:w-1/2 h-[500px] w-full"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <PlaceholderImage
                label="Workshop Section Area"
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Supported Brands */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p
            className="text-primary uppercase tracking-widest font-bold mb-8 text-sm"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("spareParts.weSpecialize")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
              "Volkswagen",
            ].map((brand, idx) => (
              <div
                key={brand}
                className="h-24 bg-card border border-border flex items-center justify-center hover:border-primary hover:shadow-sm transition-all group"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                data-aos-duration="800"
              >
                <span className="text-muted-foreground font-bold group-hover:text-primary transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ FAQ */}
      <section className="py-24 bg-background mb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2
            className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {t("spareParts.faq.title1")}{" "}
            <span className="text-primary">{t("spareParts.faq.title2")}</span>
          </h2>

          <div className="space-y-4">
            {faqItems.map(
              (faq: { question: string; answer: string }, index: number) => (
                <div
                  key={index}
                  className="border-b border-border"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-6 flex justify-between items-center hover:text-primary transition-colors focus:outline-none"
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "transition-transform duration-300",
                        openFaq === index
                          ? "rotate-180 text-primary"
                          : "text-muted-foreground",
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
                    <p className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
