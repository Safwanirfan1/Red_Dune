"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SERVICE_DETAILS } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ServiceList() {
  const { t } = useLanguage();

  const displayServices = SERVICE_DETAILS.map((service) => ({
    ...service,
    title: t(service.title),
    description: t(service.description),
  }));

  return (
    <div className="flex flex-col">
      {displayServices.map((service, index) => {
        const isEven = index % 2 === 0; // Even: Image Right, Text Left. Odd: Image Left, Text Right.

        return (
          <div
            key={service.id}
            id={service.id}
            className={cn(
              "flex flex-col lg:flex-row min-h-[600px] overflow-hidden border-b border-gray-100 last:border-0",
              isEven ? "bg-white" : "bg-gray-50/50 my-8",
            )}
          >
            {/* Text Side */}
            <div
              className={cn(
                "w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center order-2",
                isEven ? "lg:order-1" : "lg:order-2",
              )}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="service-text">
                <div className="inline-block w-12 h-1 bg-primary mb-6" />
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase text-secondary">
                  {t(service.title)} {/* Apply t() directly to the service title */}
                </h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                  {t(service.description)} {/* Apply t() directly to the service description */}
                </p>
                <Link href={service.link || "/contact"}>
                  <Button className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300">
                    {t("servicesPage.readMore")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div
              className={cn(
                "w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full order-1 ",
                isEven ? "lg:order-2" : "lg:order-1",
              )}
              data-aos={isEven ? "fade-left" : "fade-right"}
              data-aos-duration="1200"
            >
              <div className="service-image absolute inset-0 group" data-aos-offset="0">
                <div className="absolute inset-0 bg-neutral-200" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
