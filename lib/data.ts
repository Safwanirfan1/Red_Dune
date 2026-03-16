import {
    Car, Settings, BarChart3, AppWindow, ShieldCheck, Zap,
    Cpu, CircleDot, Disc,
    Armchair, Cog,
    MoveVertical, Battery, Clock, RotateCcw
} from "lucide-react";

export const SITE_CONFIG = {
    name: "Red Dune",
    description: "siteConfig.description",
    navItems: [
        { label: "nav.home", href: "/" },
        { label: "nav.services", href: "/services" },
        { label: "nav.products", href: "/#products" },
        { label: "nav.contact", href: "/contact" },
    ],
};

export const NAV_DROPDOWNS = {
    services: [
        { label: "nav.recovery", href: "/services/recovery" },
        { label: "nav.engineGear", href: "/services/enginegear" },
        { label: "nav.engineering", href: "/services/engineering" },
        { label: "nav.bodyShop", href: "/services/bodyshop" },
        { label: "nav.workshop", href: "/services/workshop" },
    ],
    brands: [
        // Column 1
        [
            { label: "brands.names.astonMartin", href: "/#brands" },
            { label: "brands.names.ferrari", href: "/#brands" },
            { label: "brands.names.maserati", href: "/#brands" },
            { label: "brands.names.rollsRoyce", href: "/#brands" },
            { label: "brands.names.bugatti", href: "/#brands" },
        ],
        // Column 2
        [
            { label: "brands.names.audi", href: "/#brands" },
            { label: "brands.names.jaguar", href: "/#brands" },
            { label: "brands.names.mercedes", href: "/#brands" },
            { label: "brands.names.mclaren", href: "/#brands" },
            { label: "brands.names.maybach", href: "/#brands" },
        ],
        // Column 3
        [
            { label: "brands.names.bentley", href: "/#brands" },
            { label: "brands.names.lamborghini", href: "/#brands" },
            { label: "brands.names.rangeRover", href: "/#brands" },
            { label: "brands.names.volkswagen", href: "/#brands" },
            { label: "brands.names.miniCooper", href: "/#brands" },
        ],
        // Column 4
        [
            { label: "brands.names.bmw", href: "/#brands" },
            { label: "brands.names.landRover", href: "/#brands" },
            { label: "brands.names.porsche", href: "/#brands" },
            { label: "brands.names.alfaRomeo", href: "/#brands" },
            { label: "brands.names.smart", href: "/#brands" },
        ],
    ],
    products: [
        { label: "nav.spareParts", href: "/products/spare-parts" },
        { label: "nav.serviceContract", href: "/products/service-contract" },
        { label: "nav.inspections", href: "/products/360-inspections" },
    ],
};

export const CONTACT_DATA = {
    phone: "+971 56 776 5665",
    phoneDisplay: "+971 56 776 5665",
    email: "info@reddune.ae",
    address: "footer.address",
    workingHours: "nav.workingHours",
    googleMapsUrl: "https://www.google.com/maps?q=25.10978889465332,55.227561950683594&z=17&hl=en",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115682.02874133959!2d55.15555627622875!3d25.02980590326476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f727c9135a575%3A0x633d749be9d4a8e3!2sGerman%20Experts%20Car%20Maintenance%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
};

export const PRODUCT_DETAILS = [
    {
        id: "spare-parts",
        title: "products.spareParts.title",
        description: "products.spareParts.description",
        features: [
            "products.spareParts.features.0",
            "products.spareParts.features.1",
            "products.spareParts.features.2",
            "products.spareParts.features.3",
        ],
        benefits: [
            { title: "products.spareParts.benefits.0.title", description: "products.spareParts.benefits.0.desc" },
            { title: "products.spareParts.benefits.1.title", description: "products.spareParts.benefits.1.desc" },
            { title: "products.spareParts.benefits.2.title", description: "products.spareParts.benefits.2.desc" },
            { title: "products.spareParts.benefits.3.title", description: "products.spareParts.benefits.3.desc" },
        ],
        image: "/images/spare-parts.jpg",
    },
    {
        id: "service-contract",
        title: "products.serviceContract.title",
        description: "products.serviceContract.description",
        features: [
            "products.serviceContract.features.0",
            "products.serviceContract.features.1",
            "products.serviceContract.features.2",
            "products.serviceContract.features.3",
        ],
        benefits: [
            { title: "products.serviceContract.benefits.0.title", description: "products.serviceContract.benefits.0.desc" },
            { title: "products.serviceContract.benefits.1.title", description: "products.serviceContract.benefits.1.desc" },
            { title: "products.serviceContract.benefits.2.title", description: "products.serviceContract.benefits.2.desc" },
            { title: "products.serviceContract.benefits.3.title", description: "products.serviceContract.benefits.3.desc" },
        ],
        image: "/images/service-contract.jpg",
    },
    {
        id: "warranty-contract",
        title: "products.warrantyContract.title",
        description: "products.warrantyContract.description",
        features: [
            "products.warrantyContract.features.0",
            "products.warrantyContract.features.1",
            "products.warrantyContract.features.2",
            "products.warrantyContract.features.3",
        ],
        benefits: [
            { title: "products.warrantyContract.benefits.0.title", description: "products.warrantyContract.benefits.0.desc" },
            { title: "products.warrantyContract.benefits.1.title", description: "products.warrantyContract.benefits.1.desc" },
            { title: "products.warrantyContract.benefits.2.title", description: "products.warrantyContract.benefits.2.desc" },
            { title: "products.warrantyContract.benefits.3.title", description: "products.warrantyContract.benefits.3.desc" },
        ],
        image: "/images/warranty.jpg",
    },
    {
        id: "360-inspections",
        title: "products.inspections360.title",
        description: "products.inspections360.description",
        features: [
            "products.inspections360.features.0",
            "products.inspections360.features.1",
            "products.inspections360.features.2",
            "products.inspections360.features.3",
        ],
        benefits: [
            { title: "products.inspections360.benefits.0.title", description: "products.inspections360.benefits.0.desc" },
            { title: "products.inspections360.benefits.1.title", description: "products.inspections360.benefits.1.desc" },
            { title: "products.inspections360.benefits.2.title", description: "products.inspections360.benefits.2.desc" },
            { title: "products.inspections360.benefits.3.title", description: "products.inspections360.benefits.3.desc" },
        ],
        image: "/images/inspection.jpg",
    },
    {
        id: "insurance",
        title: "products.insurance.title",
        description: "products.insurance.description",
        features: [
            "products.insurance.features.0",
            "products.insurance.features.1",
            "products.insurance.features.2",
            "products.insurance.features.3",
        ],
        benefits: [
            { title: "products.insurance.benefits.0.title", description: "products.insurance.benefits.0.desc" },
            { title: "products.insurance.benefits.1.title", description: "products.insurance.benefits.1.desc" },
            { title: "products.insurance.benefits.2.title", description: "products.insurance.benefits.2.desc" },
            { title: "products.insurance.benefits.3.title", description: "products.insurance.benefits.3.desc" },
        ],
        image: "/images/insurance.jpg",
    },
];

export const SERVICES = [
    {
        title: "services.smallCards.performance.title",
        description: "services.smallCards.performance.desc",
        icon: Zap,
    },
    {
        title: "services.smallCards.maintenance.title",
        description: "services.smallCards.maintenance.desc",
        icon: Settings,
    },
    {
        title: "services.smallCards.bodyshop.title",
        description: "services.smallCards.bodyshop.desc",
        icon: Car,
    },
    {
        title: "services.smallCards.detailing.title",
        description: "services.smallCards.detailing.desc",
        icon: ShieldCheck,
    },
];

export const SERVICE_DETAILS = [
    {
        id: "service",
        title: "services.items.service.title",
        description: "services.items.service.description",
        image: "/images/services1.jpg",
        link: "/services/enginegear",
    },
    {
        id: "workshop",
        title: "services.items.workshop.title",
        description: "services.items.workshop.description",
        image: "/images/services.jpg",
        link: "/services/workshop",
    },
    {
        id: "body-shop",
        title: "services.items.bodyShop.title",
        description: "services.items.bodyShop.description",
        image: "/images/download.jpg",
        link: "/services/bodyshop",
    },
    {
        id: "engineering",
        title: "services.items.engineering.title",
        description: "services.items.engineering.description",
        image: "/images/nop 2.jfif",
        link: "/services/engineering",
    },
    {
        id: "engine-gearbox",
        title: "services.items.engineGearbox.title",
        description: "services.items.engineGearbox.description",
        image: "/images/nop 3.jfif",
        link: "/services/enginegear",
    },
    {
        id: "recovery",
        title: "services.items.recovery.title",
        description: "services.items.recovery.description",
        image: "/images/nop 1.jfif",
        link: "/services/recovery",
    },
];

export const FEATURES = [
    {
        title: "features.cards.germanExperts.title",
        description: "features.cards.germanExperts.description",
        icon: ShieldCheck,
    },
    {
        title: "features.cards.diagnostics.title",
        description: "features.cards.diagnostics.description",
        icon: BarChart3,
    },
    {
        title: "features.cards.parts.title",
        description: "features.cards.parts.description",
        icon: Settings,
    },
    {
        title: "features.cards.experience.title",
        description: "features.cards.experience.description",
        icon: AppWindow,
    },
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "blog.posts.maintenance.title",
        excerpt: "blog.posts.maintenance.excerpt",
        date: "Oct 12, 2023",
        image: "/images/blog1.jpg",
    },
    {
        id: 2,
        title: "blog.posts.tuning.title",
        excerpt: "blog.posts.tuning.excerpt",
        date: "Sep 28, 2023",
        image: "/images/blog2.jpg",
    },
    {
        id: 3,
        title: "blog.posts.protection.title",
        excerpt: "blog.posts.protection.excerpt",
        date: "Sep 15, 2023",
        image: "/images/blog3.jpg",
    },
];

export const WORKSHOP_SERVICES = [
    { id: "ws-workshop", title: "workshopServices.engineManagement.title", icon: Settings, description: "workshopServices.engineManagement.description", image: "/images/engineering (2).jpg", href: "/services/engine-management-system" },
    { id: "ws-bodyshop", title: "workshopServices.carComfort.title", icon: ShieldCheck, description: "workshopServices.carComfort.description", image: "/images/how.jpg", href: "/services/comfort-system" },
    { id: "ws-programming", title: "workshopServices.brakeSystem.title", icon: Cpu, description: "workshopServices.brakeSystem.description", image: "/images/s2.jpg", href: "/services/brake-system" },
    { id: "ws-engine", title: "workshopServices.oilChange.title", icon: Cog, description: "workshopServices.oilChange.description", image: "/images/oil.jpg", href: "/services/oil-change" },
    { id: "ws-recovery", title: "workshopServices.wheelAlignment.title", icon: Car, description: "workshopServices.wheelAlignment.description", image: "/images/wheel.jpg", href: "/services/wheel-alignment" },
    { id: "ws-headlight", title: "workshopServices.stopGo.title", icon: Zap, description: "workshopServices.stopGo.description", image: "/images/headlight.jpg", href: "/services/stop-go" },
    { id: "ws-roof", title: "workshopServices.fuelInjection.title", icon: MoveVertical, description: "workshopServices.fuelInjection.description", image: "/images/fuel.jpg", href: "/services/fuel-injection" },
];

export const BODYSHOP_SERVICES = [
    {
        id: "bs-dashboard",
        title: "bodyshopServices.dashboard.title",
        icon: Armchair,
        description: "bodyshopServices.dashboard.description",
        image: "/images/dashboard cover.jpg",
        href: "/services/bodyshop/dashboard-leather-or-replacement",
    },
    {
        id: "bs-restoration",
        title: "bodyshopServices.classicCar.title",
        icon: Car,
        description: "bodyshopServices.classicCar.description",
        image: "/images/classic.jfif",
        href: "/services/bodyshop/classic-car-restoration",
    },
    {
        id: "bs-headlight",
        title: "bodyshopServices.headlight.title",
        icon: Zap,
        description: "bodyshopServices.headlight.description",
        image: "/images/headlight.jpg",
        href: "/services/bodyshop/headlight-restoration",
    },
    {
        id: "bs-windscreen",
        title: "bodyshopServices.windscreen.title",
        icon: AppWindow,
        description: "bodyshopServices.windscreen.description",
        image: "/images/windscreen.jpg",
        href: "/services/bodyshop/windscreen-restoration",
    },
    {
        id: "bs-roof",
        title: "bodyshopServices.roofLining.title",
        icon: MoveVertical,
        description: "bodyshopServices.roofLining.description",
        image: "/images/roof lining.jpg",
        href: "/services/bodyshop/roof-lining-repair",
    },
    {
        id: "bs-alloy",
        title: "bodyshopServices.alloyWheel.title",
        icon: CircleDot,
        description: "bodyshopServices.alloyWheel.description",
        image: "/images/alloy.jpg",
        href: "/services/bodyshop/alloy-wheel-repair",
    },
    {
        id: "bs-upholstery",
        title: "bodyshopServices.upholstery.title",
        icon: Armchair,
        description: "bodyshopServices.upholstery.description",
        image: "/images/Upholstery & Refurbishment.jpg",
        href: "/services/bodyshop/upholstery-and-refurbishment",
    },
    {
        id: "bs-denting",
        title: "bodyshopServices.dent.title",
        icon: Disc,
        description: "bodyshopServices.dent.description",
        image: "/images/car painting.jpg",
        href: "/services/bodyshop/denting-painting",
    },
    {
        id: "bs-chassis",
        title: "bodyshopServices.chassis.title",
        icon: Settings,
        description: "bodyshopServices.chassis.description",
        image: "/images/chasses.jpg",
        href: "/services/bodyshop/chassis-repair",
    },
    {
        id: "bs-rims",
        title: "bodyshopServices.rims.title",
        icon: CircleDot,
        description: "bodyshopServices.rims.description",
        image: "/images/caliper.jpg",
        href: "/services/bodyshop/rims-and-caliper",
    },
    {
        id: "bs-bodykit",
        title: "bodyshopServices.bodykit.title",
        icon: Car,
        description: "bodyshopServices.bodykit.description",
        image: "/images/car body kit.jpg",
        href: "/services/bodyshop/car-body-kit",
    },
];

export const BODYSHOP_PAGE_DATA = [
    {
        id: "dashboard-leather-or-replacement",
        title: "bodyshopData.dashboard.title",
        sections: [
            {
                heading: "bodyshopData.dashboard.s1.heading",
                description: "bodyshopData.dashboard.s1.description",
                image: "/images/dashboard cover.jpg",
            },
            {
                heading: "bodyshopData.dashboard.s2.heading",
                description: "bodyshopData.dashboard.s2.description",
                image: "/images/dash1.jpg",
                list: [
                    "bodyshopData.dashboard.s2.items.0",
                    "bodyshopData.dashboard.s2.items.1",
                    "bodyshopData.dashboard.s2.items.2",
                    "bodyshopData.dashboard.s2.items.3",
                    "bodyshopData.dashboard.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.dashboard.s3.heading",
                description: "bodyshopData.dashboard.s3.description",
                image: "/images/dash2.jpg",
                cta: "bodyshopData.dashboard.s3.cta",
            },
        ],
    },
    {
        id: "classic-car-restoration",
        title: "bodyshopData.classicCar.title",
        sections: [
            {
                heading: "bodyshopData.classicCar.s1.heading",
                description: "bodyshopData.classicCar.s1.description",
                image: "/images/classic.jfif",
            },
            {
                heading: "bodyshopData.classicCar.s2.heading",
                description: "bodyshopData.classicCar.s2.description",
                image: "/images/chasses.jpg",
                list: [
                    "bodyshopData.classicCar.s2.items.0",
                    "bodyshopData.classicCar.s2.items.1",
                    "bodyshopData.classicCar.s2.items.2",
                    "bodyshopData.classicCar.s2.items.3",
                    "bodyshopData.classicCar.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.classicCar.s3.heading",
                description: "bodyshopData.classicCar.s3.description",
                image: "/images/res1.jpg",
                cta: "bodyshopData.classicCar.s3.cta",
            },
        ],
    },
    {
        id: "headlight-restoration",
        title: "bodyshopData.headlight.title",
        sections: [
            {
                heading: "bodyshopData.headlight.s1.heading",
                description: "bodyshopData.headlight.s1.description",
                image: "/images/headlight.jpg",
            },
            {
                heading: "bodyshopData.headlight.s2.heading",
                description: "bodyshopData.headlight.s2.description",
                image: "/images/head1.jpg",
                list: [
                    "bodyshopData.headlight.s2.items.0",
                    "bodyshopData.headlight.s2.items.1",
                    "bodyshopData.headlight.s2.items.2",
                    "bodyshopData.headlight.s2.items.3",
                    "bodyshopData.headlight.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.headlight.s3.heading",
                description: "bodyshopData.headlight.s3.description",
                image: "/images/head2.jpg",
                cta: "bodyshopData.headlight.s3.cta",
            },
        ],
    },
    {
        id: "windscreen-restoration",
        title: "bodyshopData.windscreen.title",
        sections: [
            {
                heading: "bodyshopData.windscreen.s1.heading",
                description: "bodyshopData.windscreen.s1.description",
                image: "/images/windscreen.jpg",
            },
            {
                heading: "bodyshopData.windscreen.s2.heading",
                description: "bodyshopData.windscreen.s2.description",
                image: "/images/wind (1).jpg",
                list: [
                    "bodyshopData.windscreen.s2.items.0",
                    "bodyshopData.windscreen.s2.items.1",
                    "bodyshopData.windscreen.s2.items.2",
                    "bodyshopData.windscreen.s2.items.3",
                    "bodyshopData.windscreen.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.windscreen.s3.heading",
                description: "bodyshopData.windscreen.s3.description",
                image: "/images/wind (2).jpg",
                cta: "bodyshopData.windscreen.s3.cta",
            },
        ],
    },
    {
        id: "roof-lining-repair",
        title: "bodyshopData.roofLining.title",
        sections: [
            {
                heading: "bodyshopData.roofLining.s1.heading",
                description: "bodyshopData.roofLining.s1.description",
                image: "/images/roof lining.jpg",
            },
            {
                heading: "bodyshopData.roofLining.s2.heading",
                description: "bodyshopData.roofLining.s2.description",
                image: "/images/roof (1).jpg",
                list: [
                    "bodyshopData.roofLining.s2.items.0",
                    "bodyshopData.roofLining.s2.items.1",
                    "bodyshopData.roofLining.s2.items.2",
                    "bodyshopData.roofLining.s2.items.3",
                    "bodyshopData.roofLining.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.roofLining.s3.heading",
                description: "bodyshopData.roofLining.s3.description",
                image: "/images/roof (2).jpg",
                cta: "bodyshopData.roofLining.s3.cta",
            },
        ],
    },
    {
        id: "alloy-wheel-repair",
        title: "bodyshopData.alloyWheel.title",
        sections: [
            {
                heading: "bodyshopData.alloyWheel.s1.heading",
                description: "bodyshopData.alloyWheel.s1.description",
                image: "/images/wheel1.jpeg",
            },
            {
                heading: "bodyshopData.alloyWheel.s2.heading",
                description: "bodyshopData.alloyWheel.s2.description",
                image: "/images/wheel3.jpeg",
                list: [
                    "bodyshopData.alloyWheel.s2.items.0",
                    "bodyshopData.alloyWheel.s2.items.1",
                    "bodyshopData.alloyWheel.s2.items.2",
                    "bodyshopData.alloyWheel.s2.items.3",
                    "bodyshopData.alloyWheel.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.alloyWheel.s3.heading",
                description: "bodyshopData.alloyWheel.s3.description",
                image: "/images/wheel2.jpeg",
                cta: "bodyshopData.alloyWheel.s3.cta",
            },
        ],
    },
    {
        id: "upholstery-and-refurbishment",
        title: "bodyshopData.upholstery.title",
        sections: [
            {
                heading: "bodyshopData.upholstery.s1.heading",
                description: "bodyshopData.upholstery.s1.description",
                image: "/images/Upholstery & Refurbishment.jpg",
            },
            {
                heading: "bodyshopData.upholstery.s2.heading",
                description: "bodyshopData.upholstery.s2.description",
                image: "/images/int (1).jpg",
                list: [
                    "bodyshopData.upholstery.s2.items.0",
                    "bodyshopData.upholstery.s2.items.1",
                    "bodyshopData.upholstery.s2.items.2",
                    "bodyshopData.upholstery.s2.items.3",
                    "bodyshopData.upholstery.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.upholstery.s3.heading",
                description: "bodyshopData.upholstery.s3.description",
                image: "/images/services.jpg",
                cta: "bodyshopData.upholstery.s3.cta",
            },
        ],
    },
    {
        id: "denting-painting",
        title: "bodyshopData.dent.title",
        sections: [
            {
                heading: "bodyshopData.dent.s1.heading",
                description: "bodyshopData.dent.s1.description",
                image: "/images/car painting.jpg",
            },
            {
                heading: "bodyshopData.dent.s2.heading",
                description: "bodyshopData.dent.s2.description",
                image: "/images/dent (2).jpg",
                list: [
                    "bodyshopData.dent.s2.items.0",
                    "bodyshopData.dent.s2.items.1",
                    "bodyshopData.dent.s2.items.2",
                    "bodyshopData.dent.s2.items.3",
                    "bodyshopData.dent.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.dent.s3.heading",
                description: "bodyshopData.dent.s3.description",
                image: "/images/dent (1).jpg",
                cta: "bodyshopData.dent.s3.cta",
            },
        ],
    },
    {
        id: "chassis-repair",
        title: "bodyshopData.chassis.title",
        sections: [
            {
                heading: "bodyshopData.chassis.s1.heading",
                description: "bodyshopData.chassis.s1.description",
                image: "/images/chasses.jpg",
            },
            {
                heading: "bodyshopData.chassis.s2.heading",
                description: "bodyshopData.chassis.s2.description",
                image: "/images/chass (1).jpg",
                list: [
                    "bodyshopData.chassis.s2.items.0",
                    "bodyshopData.chassis.s2.items.1",
                    "bodyshopData.chassis.s2.items.2",
                    "bodyshopData.chassis.s2.items.3",
                    "bodyshopData.chassis.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.chassis.s3.heading",
                description: "bodyshopData.chassis.s3.description",
                image: "/images/chass (3).jpg",
                cta: "bodyshopData.chassis.s3.cta",
            },
        ],
    },
    {
        id: "rims-and-caliper",
        title: "bodyshopData.rims.title",
        sections: [
            {
                heading: "bodyshopData.rims.s1.heading",
                description: "bodyshopData.rims.s1.description",
                image: "/images/caliper.jpg",
            },
            {
                heading: "bodyshopData.rims.s2.heading",
                description: "bodyshopData.rims.s2.description",
                image: "/images/rim (2).jpg",
                list: [
                    "bodyshopData.rims.s2.items.0",
                    "bodyshopData.rims.s2.items.1",
                    "bodyshopData.rims.s2.items.2",
                    "bodyshopData.rims.s2.items.3",
                    "bodyshopData.rims.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.rims.s3.heading",
                description: "bodyshopData.rims.s3.description",
                image: "/images/rim (1).jpg",
                cta: "bodyshopData.rims.s3.cta",
            },
        ],
    },
    {
        id: "car-body-kit",
        title: "bodyshopData.bodykit.title",
        sections: [
            {
                heading: "bodyshopData.bodykit.s1.heading",
                description: "bodyshopData.bodykit.s1.description",
                image: "/images/car body kit.jpg",
            },
            {
                heading: "bodyshopData.bodykit.s2.heading",
                description: "bodyshopData.bodykit.s2.description",
                image: "/images/1.jpg",
                list: [
                    "bodyshopData.bodykit.s2.items.0",
                    "bodyshopData.bodykit.s2.items.1",
                    "bodyshopData.bodykit.s2.items.2",
                    "bodyshopData.bodykit.s2.items.3",
                    "bodyshopData.bodykit.s2.items.4",
                ],
            },
            {
                heading: "bodyshopData.bodykit.s3.heading",
                description: "bodyshopData.bodykit.s3.description",
                image: "/images/2.jpg",
                cta: "bodyshopData.bodykit.s3.cta",
            },
        ],
    },
];

export const ENGINEERING_SERVICES = [
    { id: "eng-retrofit", title: "engineeringServices.retrofit.title", icon: Settings, description: "engineeringServices.retrofit.description", image: "/images/retrofit.jfif", href: "/services/engineering/retrofit" },
    { id: "eng-radar", title: "engineeringServices.radar.title", icon: CircleDot, description: "engineeringServices.radar.description", image: "/images/radar.jfif", href: "/services/engineering/radar" },
    { id: "eng-nav", title: "engineeringServices.navigation.title", icon: AppWindow, description: "engineeringServices.navigation.description", image: "/images/navigation.jfif", href: "/services/engineering/navigation" },
    { id: "eng-programming", title: "engineeringServices.programming.title", icon: Cpu, description: "engineeringServices.programming.description", image: "/images/programming.jfif", href: "/services/engineering/programming" },
];

export const ENGINEERING_PAGE_DATA = [
    {
        id: "radar",
        title: "engineeringData.radar.title",
        sections: [
            {
                heading: "engineeringData.radar.s1.heading",
                description: "engineeringData.radar.s1.description",
                image: "/images/radar.jfif",
            },
            {
                heading: "engineeringData.radar.s2.heading",
                description: "engineeringData.radar.s2.description",
                image: "/images/rad2.jpg",
                list: [
                    "engineeringData.radar.s2.items.0",
                    "engineeringData.radar.s2.items.1",
                    "engineeringData.radar.s2.items.2",
                    "engineeringData.radar.s2.items.3",
                    "engineeringData.radar.s2.items.4"
                ]
            },
            {
                heading: "engineeringData.radar.s3.heading",
                description: "engineeringData.radar.s3.description",
                image: "/images/rad1.jpg",
                cta: "engineeringData.radar.s3.cta"
            }
        ]
    },
    {
        id: "programming",
        title: "engineeringData.programming.title",
        sections: [
            {
                heading: "engineeringData.programming.s1.heading",
                description: "engineeringData.programming.s1.description",
                image: "/images/programming.jfif",
            },
            {
                heading: "engineeringData.programming.s2.heading",
                description: "engineeringData.programming.s2.description",
                image: "/images/pro1.jpg",
                list: [
                    "engineeringData.programming.s2.items.0",
                    "engineeringData.programming.s2.items.1",
                    "engineeringData.programming.s2.items.2",
                    "engineeringData.programming.s2.items.3",
                    "engineeringData.programming.s2.items.4"
                ]
            },
            {
                heading: "engineeringData.programming.s3.heading",
                description: "engineeringData.programming.s3.description",
                image: "/images/pro2.jpg",
                cta: "engineeringData.programming.s3.cta"
            }
        ]
    },
    {
        id: "retrofit",
        title: "engineeringData.retrofit.title",
        sections: [
            {
                heading: "engineeringData.retrofit.s1.heading",
                description: "engineeringData.retrofit.s1.description",
                image: "/images/retrofit.jfif",
            },
            {
                heading: "engineeringData.retrofit.s2.heading",
                description: "engineeringData.retrofit.s2.description",
                image: "/images/re2.JPEG",
                list: [
                    "engineeringData.retrofit.s2.items.0",
                    "engineeringData.retrofit.s2.items.1",
                    "engineeringData.retrofit.s2.items.2",
                    "engineeringData.retrofit.s2.items.3",
                    "engineeringData.retrofit.s2.items.4"
                ]
            },
            {
                heading: "engineeringData.retrofit.s3.heading",
                description: "engineeringData.retrofit.s3.description",
                image: "/images/classic.jfif",
                cta: "engineeringData.retrofit.s3.cta"
            }
        ]
    },
    {
        id: "navigation",
        title: "engineeringData.navigation.title",
        sections: [
            {
                heading: "engineeringData.navigation.s1.heading",
                description: "engineeringData.navigation.s1.description",
                image: "/images/navigation.jfif",
            },
            {
                heading: "engineeringData.navigation.s2.heading",
                description: "engineeringData.navigation.s2.description",
                image: "/images/nav1.jpg",
                list: [
                    "engineeringData.navigation.s2.items.0",
                    "engineeringData.navigation.s2.items.1",
                    "engineeringData.navigation.s2.items.2",
                    "engineeringData.navigation.s2.items.3",
                    "engineeringData.navigation.s2.items.4"
                ]
            },
            {
                heading: "engineeringData.navigation.s3.heading",
                description: "engineeringData.navigation.s3.description",
                image: "/images/nav2.jpg",
                cta: "engineeringData.navigation.s3.cta"
            }
        ]
    }
];

export const SPARE_PARTS_DATA = {
    hero: {
        title1: "spareParts.hero.title1",
        title2: "spareParts.hero.title2",
        description: "spareParts.hero.description",
        image: "/images/part4.jpeg",
        cta: "spareParts.hero.inquireNow",
    },
    about: {
        title1: "spareParts.about.title1",
        title2: "spareParts.about.title2",
        description: "spareParts.about.description",
        image: "/images/part5.jpg",
        itemsKey: "spareParts.about.items",
        cta: "spareParts.about.talkToExpert",
    },
    warranty: {
        title1: "spareParts.warranty.title1",
        title2: "spareParts.warranty.title2",
        items: [
            { key: "certified", icon: ShieldCheck },
            { key: "battery", icon: Battery },
            { key: "leak", icon: Zap },
            { key: "fast", icon: Clock },
            { key: "longTerm", icon: RotateCcw },
            { key: "dealer", icon: Settings },
        ],
    },
    solutions: {
        title1: "spareParts.solutions.title1",
        title2: "spareParts.solutions.title2",
        items: [
            { key: "mechanical", imageLabel: "Engine Components", image: "/images/part5.jpg" },
            { key: "electrical", imageLabel: "Electrical Wiring" },
            { key: "battery", imageLabel: "Battery Replacement" },
            { key: "restoration", imageLabel: "Engine Repair" },
        ],
        cta: "spareParts.solutions.bookService",
    },
    process: {
        title1: "spareParts.process.title1",
        title2: "spareParts.process.title2",
        itemsKey: "spareParts.process.steps",
    },
    whyChoose: {
        title1: "spareParts.whyRedDune.title1",
        title2: "spareParts.whyRedDune.title2",
        imageLabel: "Workshop Section Area",
        items: ["specialists", "equipment", "inventory", "facility"],
    },
    specialization: {
        title: "spareParts.weSpecialize",
        brands: [
            "audi", "bmw", "mercedes", "porsche", "ferrari", "bentley",
            "rangeRover", "rollsRoyce", "lamborghini", "jaguar", "mclaren", "volkswagen"
        ]
    },
    faq: {
        title1: "spareParts.faq.title1",
        title2: "spareParts.faq.title2",
        itemsKey: "spareParts.faq.items",
    }
};

export const WORKSHOP_PAGE_CONFIG = {
    hero: {
        title: "workshop.hero.title",
        description: "workshop.hero.description",
        image: "/images/services.jpg",
    }
};

export const ENGINE_GEARBOX_DATA = {
    hero: {
        subtitle: "services.items.engineGearbox.hero.subtitle",
        title: "services.items.engineGearbox.hero.title",
        description: "services.items.engineGearbox.hero.description",
        image: "/images/gear (3).jpg",
        cta: "services.items.engineGearbox.hero.cta",
    },
    overhaulDubai: {
        subtitle: "services.items.engineGearbox.overhaulDubai.subtitle",
        title: "services.items.engineGearbox.overhaulDubai.title",
        description: "services.items.engineGearbox.overhaulDubai.description",
        image: "/images/gear (1).jpg",
        cta: "services.items.engineGearbox.overhaulDubai.cta",
    },
    whyChooseUs: {
        title: "services.items.engineGearbox.whyChooseUs.title",
        description: "services.items.engineGearbox.whyChooseUs.description",
        image: "/images/transmission.jpg",
        cta: "services.items.engineGearbox.whyChooseUs.cta",
    },
    whenToGet: {
        title: "services.items.engineGearbox.whenToGet.title",
        description: "services.items.engineGearbox.whenToGet.description",
        signsKey: "services.items.engineGearbox.whenToGet.signs",
        signsFooter: "services.items.engineGearbox.whenToGet.signsFooter",
        image: "/images/gear (2).jpg",
        cta: "services.items.engineGearbox.whenToGet.cta",
    },
    atRedDune: {
        title: "services.items.engineGearbox.atRedDune.title",
        description: "services.items.engineGearbox.atRedDune.description",
        image: "/images/services.jpg",
        cta: "services.items.engineGearbox.atRedDune.cta",
    }
};
