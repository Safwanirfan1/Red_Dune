"use client";

import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FloatingButtons() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        // Delay appearance slightly for smooth entry
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const baseClasses = "fixed bottom-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center text-white";

    return (
        <>
            {/* WhatsApp - Left Bottom */}
            <Link
                href="https://wa.me/971567765665"
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} left-8 bg-[#25D366] hover:bg-[#20bd5a] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                aria-label={t("nav.chatWhatsApp")}
            >
                <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                <MessageCircle size={28} className="relative z-10" />
            </Link>

            {/* Call - Right Bottom */}
            <Link
                href="tel:+971567765665"
                className={`${baseClasses} right-8 bg-primary hover:bg-primary/90 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                aria-label={t("nav.callNow")}
            >
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                <Phone size={28} className="relative z-10" />
            </Link>
        </>
    );
}
