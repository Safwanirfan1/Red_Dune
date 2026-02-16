"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkshopFlipGrid } from "@/components/sections/WorkshopFlipGrid";

export default function WorkshopPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="pt-24">
                <WorkshopFlipGrid />
            </div>
            <Footer />
        </main>
    );
}
