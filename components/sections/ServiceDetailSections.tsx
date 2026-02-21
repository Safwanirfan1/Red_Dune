"use client"

import React from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface ServiceSection {
    heading: string
    description: string
    image: string
    list?: string[]
    cta?: string
}

interface ServiceData {
    id: string
    title: string
    sections: ServiceSection[]
}

export default function ServiceDetailSections({ data }: { data: ServiceData }) {
    return (
        <section className="py-20 bg-white overflow-hidden mt-40 border-t-4 border-red-600">
            <div className="container mx-auto px-4 md:px-8 -mt-12">
                <div className="space-y-32">
                    {data.sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-center gap-12 lg:gap-20`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <div className="w-20 h-0.5 bg-red-600 mb-6"></div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                        {section.heading}
                                    </h2>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {section.description}
                                </p>

                                {section.list && (
                                    <ul className="space-y-4 pt-4">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ChevronRight className="w-5 h-5 text-red-600 mt-1 shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.cta && (
                                    <div className="pt-8">
                                        <Link
                                            href="#contact"
                                            className="inline-block px-10 py-4 bg-red-600 text-white font-bold rounded-lg skew-x-[-12deg] hover:bg-red-700 transition-colors uppercase tracking-wider text-sm"
                                        >
                                            <span className="inline-block skew-x-[12deg]">
                                                {section.cta}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Image Part */}
                            <div className="flex-1 w-full max-w-2xl">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={section.image}
                                        alt={section.heading}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
