"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EngineeringServices } from "@/components/sections/EngineeringServices";



export default function EngineeringPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="pt-24">
                <EngineeringServices />
            </div>
            <Footer />
        </main>
    );
}
