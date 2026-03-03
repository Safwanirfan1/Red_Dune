"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  // Helper to translate nav labels

  const getTranslatedLabel = (label: string) => {
    if (label.includes(".")) return t(label);
    const key = label.toLowerCase();
    if (key === "home") return t("nav.home");
    if (key === "services") return t("nav.services");
    if (key === "brands") return t("nav.brands");
    if (key === "products") return t("nav.products");
    if (key === "contact") return t("nav.contact");
    return label;
  };

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4" data-aos="fade-up">
            <div className="flex items-center gap-2 -mt-8">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={250}
                height={250}
              />
            </div>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {SITE_CONFIG.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {getTranslatedLabel(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/engineering"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {t("services.items.engineering.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bodyshop"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {t("services.items.bodyShop.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enginegear"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {t("services.items.engineGearbox.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/workshop"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {t("services.items.workshop.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/recovery"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {t("services.items.recovery.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-heading text-lg font-semibold mb-6">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <Link
                  href="https://www.google.com/maps?q=25.10978889465332,55.227561950683594&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-sans">{t("footer.address")}</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="font-sans" dir="ltr">
                  +971 56 776 5665
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="font-sans">info@reddune.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-gray-500 text-sm">
            © {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <div className="font-sans text-gray-500 text-sm">
            {t("footer.poweredBy")}
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
