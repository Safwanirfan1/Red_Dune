"use client";

import { BodyShopServices } from "@/components/sections/BodyShopServices";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";



export default function BodyShopPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="pt-24">
                <BodyShopServices />
            </div>
            <Footer />
        </main>
    );
}
