"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const { t, direction } = useLanguage();

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      id="home"
      dir={direction}
    >
      {/* Background with Diagonal Split */}
      <div className="absolute inset-0 z-0">
        {/* Left Side - Pink to Red */}
        <div
          className="absolute inset-0 bg-linear-to-b from-[#dfabab] via-[#cf1a1a] to-[#5e1717]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Right Side - Dark Blue with Engine Image */}
        <div
          className="absolute inset-0 bg-linear-to-b from-[#ff0404] via-[#000000] to-[#000000]"
          style={{
            clipPath: "polygon(55% 0, 100% 0, 100% 100%, 35% 100%)",
          }}
        >
          <div className="absolute inset-0 shadow-2xs shadow-red-500 -mr-80">
            <Image
              src="/BG.png"
              alt="Engine Background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          {/* Red Glow Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] bg-linear-to-tl from-[#b1122b]/40 via-[#7a0f1f]/20 to-transparent blur-3xl pointer-events-none" />
        </div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* Main Flex Container: column-reverse on mobile (car on top, text below), row on md+ */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center min-h-screen w-full">
        {/* Left Part - Text Content (goes to bottom on mobile) */}
        <div
          className="relative mb-38 z-20 w-full md:w-1/2 flex items-center
                    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
                    py-8 md:py-0 md:min-h-screen
                "
        >
          <div
            ref={textRef}
            className={`
                            w-full text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                            max-w-[90%] xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl
                            ${direction === "rtl"
                ? "mr-0 sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16"
                : "ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16"
              }
                        `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Badge */}
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/20 border border-primary/50 rounded-full backdrop-blur-md">
              <span className="text-primary-foreground text-[10px] xs:text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main Heading - Responsive Sizes */}
            <h1
              className="
                            font-heading font-bold leading-[0.9] tracking-tighter
                            text-3xl
                            xs:text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            xl:text-8xl
                            2xl:text-[7rem]
                        "
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-black to-white">
                RED
              </span>{" "}
              DUNE German
              <span className="text-transparent bg-clip-text bg-linear-to-r from-black via-black to-white">
                {" "}
                EXPERTS.
              </span>
            </h1>

            {/* Description - Responsive Sizes */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p
                className="
                                font-sans leading-relaxed font-light
                                max-w-[95%] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
                                text-sm text-gray-300
                                xs:text-base
                                sm:text-lg
                                md:text-xl
                                lg:text-2xl
                            "
              >
                {t("hero.description")}
              </p>
              <p
                className="
                                text-white font-medium
                                text-base
                                xs:text-lg
                                sm:text-xl
                                md:text-2xl
                                lg:text-3xl
                            "
              >
                {t("hero.tagline")}
              </p>
            </div>
          </div>
        </div>

        {/* Right Part - Car Image (goes to top on mobile) */}
        <div
          className="relative w-full md:w-1/2 flex items-center justify-center
                    h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-screen xl:-ml-36
                   "
        >
          <div
            className="
                            relative w-[110%] h-[110%]
                            sm:w-full sm:h-full 
                            md:absolute md:top-1/2 md:-translate-y-1/2
                            md:-right-16 md:w-[650px] md:h-[670px]
                            lg:-right-40 lg:w-[950px] lg:h-[980px]
                            xl:-right-56 xl:w-[1050px] xl:h-[1090px]
                            2xl:-right-72 2xl:w-[1150px] 2xl:h-[1200px]
                        "
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <Image
              src="/BG.png"
              alt="Red Dune Car"
              fill
              className="object-contain drop-shadow-2xl translate-x-4 md:translate-x-0"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hide on very small screens */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden xs:block">
        <div className="w-[25px] h-[40px] sm:w-[30px] sm:h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
