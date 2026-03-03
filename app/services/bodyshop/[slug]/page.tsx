import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import ServiceDetailSections from "@/components/sections/ServiceDetailSections";
import { BODYSHOP_PAGE_DATA } from "@/lib/data";
import React from "react";
import { notFound } from "next/navigation";
import AOSRefresh from "@/components/AOSRefresh";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BODYSHOP_PAGE_DATA.map((page) => ({
    slug: page.id,
  }));
}

const BodyShopDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const pageData = BODYSHOP_PAGE_DATA.find((p) => p.id === slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main>
      <AOSRefresh />
      <Header />
      <ServiceDetailSections data={pageData} />
      <Contact />
      <Footer />
    </main>
  );
};

export default BodyShopDetailPage;
