"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from 'next/link';
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useState } from "react";
import { CONTACT_DATA } from "@/lib/data";

export function Contact() {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        firstName: "",
        phone: "",
        email: "",
        make: "",
        model: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setStatusMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setStatusMessage(t("contact.status.success"));
                setFormData({ firstName: "", phone: "", email: "", make: "", model: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(data.message || t("contact.status.error"));
            }
        } catch {
            setStatus("error");
            setStatusMessage(t("contact.status.networkError"));
        }
    };

    return (
        <section id="contact" className="py-24 bg-linear-to-b from-white to-gray-50/50 overflow-hidden bg-gray-500">
            <div className="container mx-auto px-6 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info & Form */}
                    <div className="space-y-10">
                        <div data-aos="fade-right" data-aos-duration="800">
                            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-6 uppercase">
                                {t("contact.prefix")}{" "}
                                <span className="text-primary">
                                    {t("contact.title")}
                                </span>
                            </h2>
                            <p className="font-sans text-muted-foreground text-xl leading-relaxed max-w-xl">
                                {t("contact.description")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <Link href={CONTACT_DATA.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="group">
                                    <h4 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">{t("contact.visitUs")}</h4>
                                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{t(CONTACT_DATA.address)}</p>
                                </Link>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <Link href={`tel:${CONTACT_DATA.phone}`} className="group">
                                    <h4 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">{t("contact.callUs")}</h4>
                                    <p className="font-sans text-sm text-muted-foreground font-medium" dir="ltr">{CONTACT_DATA.phoneDisplay}</p>
                                </Link>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300" data-aos="zoom-in" data-aos-delay="500">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <Link href={`mailto:${CONTACT_DATA.email}`} className="group">
                                    <h4 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">{t("contact.email")}</h4>
                                    <p className="font-sans text-sm text-muted-foreground font-medium">{CONTACT_DATA.email}</p>
                                </Link>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300" data-aos="zoom-in" data-aos-delay="600">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg mb-1">{t("contact.workingHours")}</h4>
                                    <p className="font-sans text-sm text-muted-foreground font-medium">{t(CONTACT_DATA.workingHours)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100" data-aos="fade-up" data-aos-delay="400">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.firstName")}</label>
                                        <Input
                                            name="firstName"
                                            placeholder="Enter your name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.phone")}</label>
                                        <Input
                                            name="phone"
                                            placeholder="Enter your phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.email")}</label>
                                    <Input
                                        name="email"
                                        placeholder="Enter your email address"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.make")}</label>
                                        <Input
                                            name="make"
                                            placeholder="e.g. BMW"
                                            value={formData.make}
                                            onChange={handleChange}
                                            className="bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.model")}</label>
                                        <Input
                                            name="model"
                                            placeholder="e.g. X5"
                                            value={formData.model}
                                            onChange={handleChange}
                                            className="bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">{t("contact.form.message")}</label>
                                    <Textarea
                                        name="message"
                                        placeholder="Describe your requirements..."
                                        className="min-h-[150px] bg-gray-50/50 border-gray-200 focus:bg-white transition-all"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="p-4 rounded-xl bg-green-50 text-green-700 text-sm font-bold flex items-center gap-3 animate-fade-in">
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">✅</div>
                                        {statusMessage}
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-bold flex items-center gap-3 animate-fade-in">
                                        <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">❌</div>
                                        {statusMessage}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-14 text-base font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                                    disabled={status === "loading"}
                                >
                                    {status === "loading" ? "Processing..." : t("contact.form.submit")}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="lg:sticky lg:top-32 h-[600px] lg:h-[800px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50 border-4 border-white mb-12 lg:mb-0 relative group" data-aos="fade-left" data-aos-duration="1000">
                        <iframe
                            src="https://maps.google.com/maps?q=25.10978889465332,55.227561950683594&z=17&hl=en&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 brightness-95 group-hover:brightness-100"
                        />
                        <div className="absolute top-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="font-heading font-bold text-xl mb-2">Our Location</h3>
                            <p className="text-sm text-muted-foreground mb-4">https://www.google.com/maps?q=25.10978889465332,55.227561950683594&z=17&hl=en</p>
                            <Link
                                href={CONTACT_DATA.googleMapsUrl}
                                target="_blank"
                                className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
                            >
                                Open in Google Maps
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}