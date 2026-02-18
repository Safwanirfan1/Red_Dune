"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_DETAILS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { t, direction } = useLanguage();
  const product = PRODUCT_DETAILS.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      className="min-h-screen bg-background text-foreground"
      dir={direction}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1
            className="font-heading text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {product.title}
          </h1>
          <div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Description & Features */}
            <div className="lg:w-3/5 space-y-12">
              <div data-aos="fade-right" data-aos-duration="800">
                <h2 className="font-heading text-3xl font-bold text-secondary mb-6 uppercase tracking-tight">
                  {t("productDetail.overview")}
                </h2>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                {product.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check size={20} strokeWidth={3} />
                    </div>
                    <span className="font-heading text-secondary font-bold text-sm tracking-wide uppercase">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detailed Benefits Section */}
              {product.benefits && (
                <div
                  className="space-y-8"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <h3 className="font-heading text-2xl font-bold text-secondary uppercase tracking-tight relative inline-block">
                    {t("productDetail.whyChoose")}
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {product.benefits.map(
                      (
                        benefit: { title: string; description: string },
                        index: number,
                      ) => (
                        <div
                          key={index}
                          className="flex gap-4 items-start group"
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                          <div>
                            <h4 className="font-heading font-bold text-secondary text-lg mb-1 group-hover:text-primary transition-colors">
                              {benefit.title}
                            </h4>
                            <p className="font-sans text-muted-foreground text-base leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              <div className="pt-8" data-aos="fade-up" data-aos-delay="600">
                <Link href="/#contact">
                  <Button className="h-14 px-10 text-base font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform bg-primary hover:bg-primary/90">
                    {t("productDetail.requestQuote")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image / Sidebar */}
            <div
              className="lg:w-2/5 relative sticky top-32"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none">
                  <p className="font-heading font-bold text-xl mb-2">
                    {t("productDetail.needAdvice")}
                  </p>
                  <p className="font-sans text-white/80 text-sm">
                    {t("productDetail.adviceDesc")}
                  </p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
