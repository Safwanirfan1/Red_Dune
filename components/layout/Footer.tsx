import Link from "next/link";
import { Car, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white">
                                <Car size={18} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">RED DUNE</span>
                        </div>
                        <p className="font-sans text-gray-400 text-sm leading-relaxed">
                            Premium automotive care for luxury vehicles. Experience the art of perfection with our certified experts.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {SITE_CONFIG.navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Performance Tuning</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Body Shop & Paint</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Regular Maintenance</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Ceramic Coating</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Diagnostics</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span className="font-sans">123 Auto Avenue, Dubai Investments Park, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span className="font-sans">+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span className="font-sans">info@reddune.ae</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-sans text-gray-500 text-sm">© {new Date().getFullYear()} Red Dune Auto Services. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
