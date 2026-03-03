"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG, NAV_DROPDOWNS } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";

type NavItem = { label: string; href: string };
type Column = NavItem[];

// Map nav label keys to dropdown keys
const DROPDOWN_MAP: Record<string, keyof typeof NAV_DROPDOWNS> = {
  "nav.services": "services",
  "nav.products": "products",
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { t, language, setLanguage, direction } = useLanguage();
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col" dir={direction}>

      {/* Top Bar */}
      <div
        className="bg-secondary text-secondary-foreground py-2 text-xs md:text-sm transition-all duration-300 overflow-hidden"
        style={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <Link href="tel:+971567765665" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} className="text-primary" />
              <span dir="ltr">+971 56 776 5665</span>
            </Link>
            <Link href="https://wa.me/971567765665" className="flex items-center gap-2 hover:text-green-500 transition-colors">
              <MessageCircle size={14} className="text-green-500" />
              <span>{t("nav.whatsapp")}</span>
            </Link>
          </div>
          <div className="hidden md:flex gap-4 opacity-80">
            <span>{t("nav.workingHours")}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={cn(
        "transition-all duration-300 w-full border-b border-white/10 h-14 flex items-center",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/90 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo dune.png"
              alt="Red Dune"
              width={200}
              height={50}
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {SITE_CONFIG.navItems.map((item) => {
              const dropdownKey = DROPDOWN_MAP[item.label];
              const hasDropdown = !!dropdownKey;
              const dropdownData = hasDropdown ? NAV_DROPDOWNS[dropdownKey] : null;
              const isBrands = dropdownKey === "brands";
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors py-4 text-secondary",
                      isOpen && "text-primary"
                    )}
                  >
                    {t(item.label)}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-300", isOpen && "rotate-180")}
                      />
                    )}
                  </Link>

                  {/* Dropdown Panel */}
                  {hasDropdown && dropdownData && (
                    <div
                      className={cn(
                        "absolute top-full pt-2 z-50 transition-all duration-200",
                        "left-1/2 -translate-x-1/2",
                        isOpen
                          ? "opacity-100 translate-y-0 visible pointer-events-auto"
                          : "opacity-0 -translate-y-1 invisible pointer-events-none"
                      )}
                    >
                      <div className="bg-secondary text-white rounded-xl shadow-2xl border border-white/10 p-6">

                        {/* Brands: responsive grid */}
                        {isBrands && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 w-full max-w-[calc(100vw-48px)] lg:w-[800px]" dir="ltr">
                            {(dropdownData as Column[]).map((col, colIdx) => (
                              <div key={colIdx} className="flex flex-col gap-3">
                                {col.map((brand) => (
                                  <Link
                                    key={brand.label}
                                    href={brand.href}
                                    className="hover:text-primary transition-colors text-sm flex items-center gap-2 group/item"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all text-primary" />
                                    {t(brand.label)}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Services & Products: vertical list */}
                        {!isBrands && (
                          <div className="flex flex-row gap-6 whitespace-nowrap items-center">
                            {(dropdownData as NavItem[]).map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-primary transition-all group/item text-sm font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <ChevronRight size={12} className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                {t(subItem.label)}
                              </Link>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full w-10 h-10 hover:bg-gray-100 transition-colors text-red-600 hover:text-red-700"
              aria-label="Toggle Language"
            >
              <span className="font-bold text-sm">{language === "en" ? "AR" : "EN"}</span>
            </Button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("nav.bookService")}
            </Link>

            <button
              className="lg:hidden p-2 text-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
        style={{ top: isScrolled ? "56px" : "100px" }}
      >
        <nav className="flex flex-col p-6 gap-1">
          {SITE_CONFIG.navItems.map((item) => {
            const dropdownKey = DROPDOWN_MAP[item.label];
            const hasDropdown = !!dropdownKey;
            const dropdownData = hasDropdown ? NAV_DROPDOWNS[dropdownKey] : null;
            const isBrands = dropdownKey === "brands";
            const isExpanded = mobileExpanded === item.label;

            return (
              <div key={item.href} className="border-b border-gray-100">
                {/* Row */}
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-lg font-bold text-foreground hover:text-primary py-4 flex-1"
                    onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </Link>
                  {hasDropdown && (
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className="p-3 text-secondary hover:text-primary transition-colors"
                    >
                      <ChevronDown
                        size={20}
                        className={cn("transition-transform duration-300", isExpanded && "rotate-180")}
                      />
                    </button>
                  )}
                </div>

                {/* Accordion */}
                {hasDropdown && dropdownData && isExpanded && (
                  <div className="pb-4 pl-4 border-l-2 border-primary/30 flex flex-col gap-1 mt-1">
                    {isBrands
                      ? (dropdownData as Column[]).flat().map((brand) => (
                        <Link
                          key={brand.label}
                          href={brand.href}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <ChevronRight size={12} className="text-primary shrink-0" />
                          {t(brand.label)}
                        </Link>
                      ))
                      : (dropdownData as NavItem[]).map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <ChevronRight size={12} className="text-primary shrink-0" />
                          {t(subItem.label)}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            className="bg-primary text-white py-4 rounded-lg text-center font-bold uppercase mt-6 shadow-lg shadow-primary/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav.bookService")}
          </Link>
        </nav>
      </div>

    </header>
  );
}