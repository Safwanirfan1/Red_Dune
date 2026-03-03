"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PremiumWorkshop } from "@/components/sections/PremiumWorkshop";
import { Services } from "@/components/sections/Services";
import { Brands } from "@/components/sections/Brands";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });

        AOS.refresh();
      }, 100);
    }
  }, [isFinished]);

  return (
    <div className="animate-fadeIn">
      <Header />
      <Hero />
      <PremiumWorkshop />
      <Brands />
      <Services />
      <Stats />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
