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
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Hero />
      <PremiumWorkshop />
      <Brands />
      <Services />
      <Stats />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
