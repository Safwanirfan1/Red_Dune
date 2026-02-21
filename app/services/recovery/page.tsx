import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RecoveryServices } from "@/components/sections/RecoveryServices";
import { Contact } from "@/components/sections/Contact";

export default function RecoveryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24">
        <RecoveryServices />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
