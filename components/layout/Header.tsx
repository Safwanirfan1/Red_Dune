"use client";

import { useState, useEffect } from "react";
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
  Globe,
} from "lucide-react";
import { SITE_CONFIG, NAV_DROPDOWNS } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { t, language, setLanguage, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  type NavItem = { label: string; href: string };
  type Column = NavItem[];
  type DropdownData = NavItem[] | Column[];

  // Helper to get dropdown data safely
  const getDropdownData = (label: string): DropdownData | undefined => {
    const key = label.toLowerCase();
    return (NAV_DROPDOWNS as Record<string, DropdownData>)[key];
  };

  // Helper to translate nav labels
  const getTranslatedLabel = (label: string) => {
    const key = label.toLowerCase().replace(/ /g, "");
    // Map specific cases if needed, otherwise rely on key matching
    if (key === "home") return t("nav.home");
    if (key === "services") return t("nav.services");
    if (key === "brands") return t("nav.brands");
    if (key === "products") return t("nav.products");
    if (key === "contact") return t("nav.contact");
    return label;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      dir={direction}
    >
      {/* Top Bar - Dark Premium Look */}
      <div
        className="bg-secondary text-secondary-foreground py-2 text-xs md:text-sm transition-all duration-300 overflow-hidden"
        style={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6">
            <a
              href="tel:+971567765665"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={14} className="text-primary" />
              <span dir="ltr">+971 56 776 5665</span>
            </a>
            <a
              href="https://wa.me/971567765665"
              className="flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              <MessageCircle size={14} className="text-green-500" />
              <span>{t("nav.whatsapp")}</span>
            </a>
          </div>
          <div className="hidden md:flex gap-4 opacity-80">
            <span>{t("nav.workingHours")}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={cn(
          "transition-all duration-300 w-full border-b border-white/10 h-14 flex items-center",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm text-secondary"
            : "bg-white/90 backdrop-blur-sm text-secondary",
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo dune.png"
              alt="Red Dune - German Expert Garage"
              width={200}
              height={50}
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {SITE_CONFIG.navItems.map((item) => {
              const hasDropdown = ["Services", "Brands", "Products"].includes(
                item.label,
              );
              const dropdownData = hasDropdown
                ? getDropdownData(item.label)
                : null;
              const label = getTranslatedLabel(item.label);

              return (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() =>
                    hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors py-4",
                      activeDropdown === item.label && "text-primary",
                    )}
                  >
                    {label}
                    {hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-300",
                          activeDropdown === item.label ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {hasDropdown && dropdownData && (
                    <div
                      className={cn(
                        "absolute top-full pt-4 w-auto min-w-[200px] transition-all duration-300 ease-in-out z-50",
                        direction === "rtl"
                          ? "right-1/2 translate-x-1/2"
                          : "left-1/2 -translate-x-1/2",
                        activeDropdown === item.label
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible pointer-events-none",
                      )}
                    >
                      <div className="bg-secondary text-white rounded-xl shadow-2xl overflow-hidden border border-white/10 p-6">
                        {/* Brands Grid (4 Columns) */}
                        {item.label === "Brands" && (
                          <div
                            className="grid grid-cols-4 gap-x-12 gap-y-4 w-[800px]"
                            dir="ltr"
                          >
                            {(dropdownData as Column[]).map((col, colIndex) => (
                              <div
                                key={colIndex}
                                className="flex flex-col gap-3"
                              >
                                {col.map((brand) => (
                                  <Link
                                    key={brand.label}
                                    href={brand.href}
                                    className="hover:text-primary transition-colors text-sm flex items-center gap-2 group/item"
                                  >
                                    <ChevronRight
                                      size={12}
                                      className="opacity-0 -ml-4 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all text-primary"
                                    />
                                    {brand.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Services & Products (Horizontal) */}
                        {(item.label === "Services" ||
                          item.label === "Products") && (
                          <div className="flex gap-8 whitespace-nowrap">
                            {(dropdownData as NavItem[]).map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-center gap-2 hover:text-primary transition-colors group/item"
                              >
                                <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                {subItem.label}
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
              <span className="font-bold text-sm">
                {language === "en" ? "AR" : "EN"}
              </span>
            </Button>

            <Link
              href="#contact"
              className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("nav.bookService")}
            </Link>

            <button
              className="lg:hidden p-2 text-secondary"
              onClick={toggleMenu}
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
          "lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform",
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
        style={{ top: isScrolled ? "56px" : "100px" }}
      >
        <nav className="flex flex-col p-8 gap-4 h-full overflow-y-auto">
          {SITE_CONFIG.navItems.map((item) => {
            const hasDropdown = ["Services", "Brands", "Products"].includes(
              item.label,
            );
            const dropdownData = hasDropdown
              ? getDropdownData(item.label)
              : null;
            const isExpanded = mobileExpanded === item.label;
            const label = getTranslatedLabel(item.label);

            return (
              <div key={item.href} className="border-b border-gray-100 pb-2">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-xl font-bold text-foreground hover:text-primary py-2 block flex-1"
                    onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                  {hasDropdown && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMobileExpand(item.label);
                      }}
                      className="p-2 text-secondary hover:text-primary transition-colors"
                    >
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform duration-300",
                          isExpanded ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Accordion */}
                {hasDropdown && dropdownData && (
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isExpanded
                        ? "max-h-[800px] opacity-100 mt-2 mb-4"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                      {item.label === "Brands"
                        ? // Flatten Brands for Mobile
                          (dropdownData as Column[]).flat().map((brand) => (
                            <Link
                              key={brand.label}
                              href={brand.href}
                              className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {brand.label}
                            </Link>
                          ))
                        : // Services & Products
                          (dropdownData as NavItem[]).map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="#contact"
            className="bg-primary text-white py-4 rounded-lg text-center font-bold uppercase mt-4 shadow-lg shadow-primary/20"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t("nav.bookService")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
