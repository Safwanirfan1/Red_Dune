"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input"; // Will create Input
import { Textarea } from "@/components/ui/Textarea"; // Will create Textarea
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Form */}
                    <div className="space-y-8">
                        <div data-aos="fade-right" data-aos-duration="800">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
                                Get in <span className="text-primary">Touch</span>
                            </h2>
                            <p className="font-sans text-muted-foreground text-lg">
                                Ready to transform your vehicle? Schedule an appointment or visit us today.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                            <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold mb-1">Visit Us</h4>
                                    <p className="font-sans text-sm text-muted-foreground">123 Auto Avenue, DIP, Dubai, UAE</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold mb-1">Call Us</h4>
                                    <p className="font-sans text-sm text-muted-foreground">+971 4 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="500">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold mb-1">Email</h4>
                                    <p className="font-sans text-sm text-muted-foreground">info@reddune.ae</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-aos="zoom-in" data-aos-delay="600">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold mb-1">Working Hours</h4>
                                    <p className="font-sans text-sm text-muted-foreground">Sat - Thu: 8:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-4 pt-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="First Name" />
                                <Input placeholder="Phone Number" />
                            </div>
                            <Input placeholder="Email Address" type="email" />
                            <div className="grid grid-cols-2 gap-4">
                                <Input placeholder="Vehicle Make" />
                                <Input placeholder="Vehicle Model" />
                            </div>
                            <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500" data-aos="fade-left" data-aos-duration="1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115682.02874133959!2d55.15555627622875!3d25.02980590326476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f727c9135a575%3A0x633d749be9d4a8e3!2sGerman%20Experts%20Car%20Maintenance%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
