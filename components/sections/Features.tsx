"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { ShieldCheck, BarChart3, Settings, AppWindow } from "lucide-react";

export function Features() {
    const { t } = useLanguage();

    const features = [
        {
            title: t("features.cards.germanExperts.title"),
            description: t("features.cards.germanExperts.description"),
            icon: ShieldCheck,
        },
        {
            title: t("features.cards.diagnostics.title"),
            description: t("features.cards.diagnostics.description"),
            icon: BarChart3,
        },
        {
            title: t("features.cards.parts.title"),
            description: t("features.cards.parts.description"),
            icon: Settings,
        },
        {
            title: t("features.cards.experience.title"),
            description: t("features.cards.experience.description"),
            icon: AppWindow,
        },
    ];

    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                            {t("features.title")}
                        </h2>
                        <p className="font-sans text-muted-foreground text-lg leading-relaxed">
                            {t("features.description")}
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">{t("features.certified")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">{t("features.genuine")}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={14} />
                                </div>
                                <span className="font-sans font-medium">{t("features.pricing")}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Grid Content */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-colors" data-aos="fade-up" data-aos-delay={index * 100}>
                                <feature.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="font-sans text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
