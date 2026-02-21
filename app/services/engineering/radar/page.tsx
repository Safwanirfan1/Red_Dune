import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Contact } from '@/components/sections/Contact'
import ServiceDetailSections from '@/components/sections/ServiceDetailSections'
import { ENGINEERING_PAGE_DATA } from '@/lib/data'
import React from 'react'

const RadarPage = () => {
    const pageData = ENGINEERING_PAGE_DATA.find(p => p.id === 'radar')

    if (!pageData) return null

    return (
        <main>
            <Header />
            <ServiceDetailSections data={pageData} />
            <Contact />
            <Footer />
        </main>
    )
}

export default RadarPage