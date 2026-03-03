"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceList } from "@/components/sections/ServiceList";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Services Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0 bg-neutral-900 z-0 ">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="relative z-10 text-center px-6 space-y-6 ">
          <h1
            className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {t("servicesPage.title")}
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            {t("servicesPage.description")}
          </p>
          <div className="pt-4" data-aos="zoom-in" data-aos-delay="400">
            {/* <Link href="#contact">
                            <Button className="rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(209,50,50,0.5)] hover:scale-105 transition-transform duration-300">
                                Book Appointment
                            </Button>
                        </Link> */}
          </div>
        </div>
      </section>
      <ServiceList />
      v
      <Footer />
    </main>
  );
}
