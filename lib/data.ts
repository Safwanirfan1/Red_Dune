import {
    Car, Settings, BarChart3, AppWindow, ShieldCheck, Zap,
    Droplet, Cpu, CircleDot, Activity, Disc,
    ClipboardCheck, Armchair, Gauge, Settings2, Cog,
    MoveVertical, GitMerge, Wind
} from "lucide-react";

export const SITE_CONFIG = {
    name: "Red Dune",
    description: "Premium Automotive Services in UAE",
    navItems: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Brands", href: "/#brands" },
        { label: "Products", href: "/#products" },
        { label: "Contact", href: "/#contact" },
    ],
};

export const NAV_DROPDOWNS = {
    services: [
        { label: "Recovery Services", href: "/#contact" },
        { label: "Engine & Gearbox", href: "/#contact" },
        { label: "Engineering & Programming", href: "/services/engineering" },
        { label: "Body Shop", href: "/services/bodyshop" },
        { label: "Workshop", href: "/services/workshop" },
    ],
    brands: [
        // Column 1
        [
            { label: "Aston Martin", href: "/#brands" },
            { label: "Ferrari", href: "/#brands" },
            { label: "Maserati", href: "/#brands" },
            { label: "Rolls Royce", href: "/#brands" },
            { label: "Bugatti", href: "/#brands" },
        ],
        // Column 2
        [
            { label: "Audi", href: "/#brands" },
            { label: "Jaguar", href: "/#brands" },
            { label: "Mercedes", href: "/#brands" },
            { label: "McLaren", href: "/#brands" },
            { label: "Maybach", href: "/#brands" },
        ],
        // Column 3
        [
            { label: "Bentley", href: "/#brands" },
            { label: "Lamborghini", href: "/#brands" },
            { label: "Range Rover", href: "/#brands" },
            { label: "Volkswagen", href: "/#brands" },
            { label: "Mini Cooper", href: "/#brands" },
        ],
        // Column 4
        [
            { label: "BMW", href: "/#brands" },
            { label: "Land Rover", href: "/#brands" },
            { label: "Porsche", href: "/#brands" },
            { label: "Alfa Romeo", href: "/#brands" },
            { label: "Smart Car", href: "/#brands" },
        ],
    ],
    products: [
        { label: "Spare Parts", href: "/products/spare-parts" },
        { label: "Service Contract", href: "/products/service-contract" },
        { label: "360 Inspections", href: "/products/360-inspections" },
    ],
};

export const PRODUCT_DETAILS = [
    {
        id: "spare-parts",
        title: "Genuine Spare Parts",
        description: "At Red Dune, we understand that every part plays a crucial role in your vehicle's performance and safety. We supply 100% authentic OEM (Original Equipment Manufacturer) spare parts for all major German luxury brands. Our global supply network ensures that even hard-to-find components are sourced quickly, guaranteeing that your vehicle maintains its factory specifications and value.",
        features: ["100% Genuine OEM Parts", "12-Month Warranty", "Express Global Shipping", "Competitive Market Rates"],
        benefits: [
            { title: "Factory Precision", description: "Parts designed specifically for your vehicle model ensure perfect fit and optimal performance." },
            { title: "Longevity", description: "Genuine parts are built to last, reducing the need for frequent replacements and saving money in the long run." },
            { title: "Resale Value", description: "Maintaining your car with original parts preserves its history and keeps its resale value high." },
            { title: "Safety Assurance", description: "Never compromise on safety with counterfeit alternatives. Our parts meet strict safety standards." }
        ],
        image: "/images/products/spare-parts.jpg",
    },
    {
        id: "service-contract",
        title: "Service Contract",
        description: "Enjoy complete peace of mind and significant savings with our tailored Service Contracts. Designed to cover all your scheduled maintenance needs, our packages protect you from inflation and unexpected price rises. Whether you drive a daily commuter or a weekend sports car, we have a plan that fits your mileage and usage perfectly.",
        features: ["Up to 40% Savings", "Inflation Proof", "Transferable Benefits", "Full Service History"],
        benefits: [
            { title: "Cost Control", description: "Lock in today's labor and parts prices for the duration of your contract, avoiding future price hikes." },
            { title: "Regular Care", description: "Scheduled servicing ensures your vehicle runs efficiently and prevents minor issues from becoming major repairs." },
            { title: "Priority Status", description: "Contract holders receive priority booking and expedited service at our centers." },
            { title: "Certified Expertise", description: "All work is performed by our certified German car specialists using official manufacturer guidelines." }
        ],
        image: "/images/products/service-contract.jpg",
    },
    {
        id: "warranty-contract",
        title: "Warranty Contract",
        description: "Drive with confidence knowing that you are protected against unexpected mechanical and electrical failures. Our Extended Warranty Contracts offer comprehensive coverage similar to your manufacturer's warranty, picking up where it left off. From engine and transmission to complex electronics, we've got you covered.",
        features: ["Comprehensive Coverage", "Zero Deductible", "24/7 Roadside Assist", "High Claim Limits"],
        benefits: [
            { title: "Major Systems Covered", description: "Protection for Engine, Gearbox, Differential, AC System, Electrical Components, and more." },
            { title: "Hassle-Free Claims", description: "We handle all the paperwork and direct billing, so you don't have to pay out of pocket for covered repairs." },
            { title: "Transferable", description: "Increase your car's resale value by transferring the warranty to the new owner." },
            { title: "Unlimited Mileage", description: "Options available for unlimited mileage coverage to suit your driving habits." }
        ],
        image: "/images/products/warranty.jpg",
    },
    {
        id: "360-inspections",
        title: "360 Inspections",
        description: "Buying a pre-owned luxury car? Ensure you're making a smart investment with our comprehensive 360-degree Inspection. Our certified technicians perform a rigorous 111-point check covering every aspect of the vehicle, from the engine and chassis to the paintwork and interior electronics. You receive a detailed digital report with photos and expert recommendations.",
        features: ["111-Point Check", "Digital Report", "Paint Depth Analysis", "Computer Diagnostics"],
        benefits: [
            { title: "Hidden Issue Detection", description: "We identify past accident damage, resprayed panels, and mechanical faults that aren't visible to the naked eye." },
            { title: "Negotiation Power", description: "Use our unbiased report to negotiate a fair price based on the vehicle's true condition." },
            { title: "Peace of Mind", description: "Buy with confidence knowing exactly what you're getting into, with no nasty surprises later." },
            { title: "Test Drive Analysis", description: "Our experts road-test the vehicle to check for noises, vibrations, and handling issues." }
        ],
        image: "/images/products/inspection.jpg",
    },
    {
        id: "insurance",
        title: "Car Insurance",
        description: "Navigating car insurance can be complex. We simplify the process by partnering with the UAE's leading insurance providers to offer you the best coverage at competitive rates. Beyond just selling a policy, we manage the entire claims process for you—from accident recovery to final repair—ensuring your car is restored to factory standards at Red Dune.",
        features: ["Best Rates", "Claims Management", "Agency Repair Option", "Replacement Car"],
        benefits: [
            { title: "One-Stop Solution", description: "We handle everything: policy issuance, renewal, and claims. You just drive." },
            { title: "Guaranteed Repairs", description: "Policies purchased through us guarantee repairs at Red Dune with genuine parts." },
            { title: "Claims Advocacy", description: "We fight for your rights effectively to ensure your claim is approved and processed quickly." },
            { title: "Tailored Coverage", description: "Get coverage that actually matches your high-value vehicle's needs, including off-road and GCC cover." }
        ],
        image: "/images/products/insurance.jpg",
    },
];

export const SERVICES = [
    {
        title: "Performance Tuning",
        description: "Optimize your vehicle's engine for peak performance and efficiency.",
        icon: Zap,
    },
    {
        title: "Maintenance & Repair",
        description: "Comprehensive diagnostics and repair services for all luxury car brands.",
        icon: Settings,
    },
    {
        title: "Body Shop & Painting",
        description: "State-of-the-art body repair and premium paint services.",
        icon: Car,
    },
    {
        title: "Detailing & Protection",
        description: "Ceramic coating, PPF, and interior detailing to keep your car looking new.",
        icon: ShieldCheck,
    },
];

export const SERVICE_DETAILS = [
    {
        id: "service",
        title: "SERVICE",
        description: "Our comprehensive service packages ensure your vehicle performs at its best. From routine maintenance to complex repairs, our certified technicians use state-of-the-art diagnostic tools to identify and resolve issues with precision. We use only genuine parts to maintain the integrity and value of your luxury vehicle.",
        image: "/images/services1.jpg",
        link: "#contact",
    },
    {
        id: "workshop",
        title: "WORKSHOP",
        description: "Our world-class workshop is equipped with the latest technology to handle any automotive challenge. We maintain a pristine, organized environment that reflects the quality of work we deliver. Whether it's a minor adjustment or a major overhaul, your car is in the safest hands.",
        image: "/images/Services.jpg",
        link: "/services/workshop",
    },
    {
        id: "body-shop",
        title: "BODY SHOP",
        description: "Restore your vehicle's showroom shine with our expert body shop services. We specialize in dent removal, scratch repair, and full-body painting using premium accident-repair techniques. Our color-matching technology ensures a flawless finish that is indistinguishable from the factory original.",
        image: "/images/download.jpg",
        link: "/services/bodyshop",
    },
    {
        id: "engineering",
        title: "ENGINEERING AND PROGRAMMING",
        description: "Unlock the full potential of your vehicle with our advanced engineering and programming services. We offer ECU tuning, performance upgrades, and software updates tailored to your specific driving preferences. Enhance power, efficiency, and responsiveness with our custom solutions.",
        image: "/images/download2.jpg",
        link: "/services/engineering",
    },
    {
        id: "engine-gearbox",
        title: "ENGINE AND GEARBOX",
        description: "The heart of your vehicle deserves the utmost care. Our engine and gearbox specialists are experts in diagnosing and repairing complex mechanical issues. From engine rebuilds to transmission servicing, we ensure smooth power delivery and reliability for the long haul.",
        image: "/images/2.jpg",
        link: "#contact",
    },
    {
        id: "recovery",
        title: "RECOVERY SERVICE",
        description: "Stranded? Our premium recovery service is available 24/7 to assist you. We provide safe and professional towing for luxury vehicles, ensuring they are transported without a scratch to our workshop. Peace of mind is just a phone call away.",
        image: "/images/recovery.jpg",
        link: "#contact",
    },
];

export const FEATURES = [
    {
        title: "German Experts",
        description: "Certified technicians specializing in German luxury vehicles.",
        icon: ShieldCheck,
    },
    {
        title: "Advanced Diagnostics",
        description: "Latest diagnostic tools to identify issues accurately.",
        icon: BarChart3,
    },
    {
        title: "Genuine Parts",
        description: "We use only original manufacturer parts for repairs.",
        icon: Settings,
    },
    {
        title: "Premium Experience",
        description: "Comfortable lounge and transparent service process.",
        icon: AppWindow,
    },
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Essential Maintenance Tips for Luxury Cars",
        excerpt: "Keep your high-performance vehicle in top condition with these expert tips.",
        date: "Oct 12, 2023",
        image: "/images/blog1.jpg",
    },
    {
        id: 2,
        title: "Understanding ECU Tuning: Benefits & Risks",
        excerpt: "Unlock the hidden potential of your engine with professional tuning.",
        date: "Sep 28, 2023",
        image: "/images/blog2.jpg",
    },
    {
        id: 3,
        title: "Ceramic Coating vs. PPF: Which is Right for You?",
        excerpt: "A detailed comparison of paint protection solutions.",
        date: "Sep 15, 2023",
        image: "/images/blog3.jpg",
    },
];

export const WORKSHOP_SERVICES = [
    { id: "ws-workshop", title: "Engine Managemnt System", icon: Settings, description: "Advanced diagnostic and repair workshop.", image: "/images/services/workshop.jpg" },
    { id: "ws-bodyshop", title: "Car Comfort", icon: ShieldCheck, description: "Expert body repair and painting.", image: "/images/services/bodyshop.jpg" },
    { id: "ws-programming", title: "Brake System", icon: Cpu, description: "ECU coding and software updates.", image: "/images/services/programming.jpg" },
    { id: "ws-engine", title: "Oil Change Service", icon: Cog, description: "Complete engine and transmission overhaul.", image: "/images/services/engine.jpg" },
    { id: "ws-recovery", title: "Wheel Alignment", icon: Car, description: "24/7 vehicle recovery and towing.", image: "/images/services/recovery.jpg" },
    // { id: "ws-dashboard", title: "Dashboard Repair", icon: Gauge, description: "Instrument cluster and dashboard fixing.", image: "/images/services/dashboard.jpg" },
    { id: "ws-headlight", title: "Stop & Go Service", icon: Zap, description: "Crystal clear headlight restoration.", image: "/images/services/headlight.jpg" },
    { id: "ws-windshield", title: "Radiator Service", icon: AppWindow, description: "Professional glass replacement.", image: "/images/services/windshield.jpg" },
    { id: "ws-dent", title: "Transmission rRpair", icon: ShieldCheck, description: "Remove dents without repainting.", image: "/images/services/dent.jpg" },
    { id: "ws-roof", title: "Fuel Injection Service", icon: MoveVertical, description: "Fixing sagging or damaged roof liners.", image: "/images/services/roof.jpg" },
    // { id: "ws-ac", title: "AC Repair", icon: Wind, description: "Complete climate control restoration.", image: "/images/services/ac.jpg" },
    // { id: "ws-brake", title: "Brake Service", icon: Disc, description: "Pad and rotor replacement.", image: "/images/services/brake.jpg" },
    // { id: "ws-suspension", title: "Suspension Repair", icon: Activity, description: "Shocks, struts, and arm replacement.", image: "/images/services/suspension.jpg" },
    // { id: "ws-electrical", title: "Electrical Diagnostics", icon: Zap, description: "Solving complex electrical issues.", image: "/images/services/electrical.jpg" },
    // { id: "ws-oil", title: "Oil Change Service", icon: Droplet, description: "Premium oil and filter change.", image: "/images/services/oil.jpg" },
    // { id: "ws-transmission", title: "Transmission Repair", icon: GitMerge, description: "Gearbox diagnostics and repair.", image: "/images/services/transmission.jpg" },
    // { id: "ws-inspection", title: "Car Inspection", icon: ClipboardCheck, description: "Pre-purchase and safety inspections.", image: "/images/services/inspection.jpg" },
    // { id: "ws-tuning", title: "Performance Tuning", icon: Gauge, description: "Enhancing power and driving dynamics.", image: "/images/services/tuning.jpg" },
];

export const BODYSHOP_SERVICES = [
    { id: "bs-dashboard", title: "Dashboard Leather or Replacement", icon: Armchair, description: "Premium leather wrapping and dashboard restoration.", image: "/images/services/dashboard-leather.jpg" },
    { id: "bs-restoration", title: "Classic Car Restoration", icon: Car, description: "Bringing vintage beauties back to life.", image: "/images/services/classic-restoration.jpg" },
    { id: "bs-headlight", title: "Headlight Restoration", icon: Zap, description: "Restoring clarity and brightness to headlights.", image: "/images/services/headlight-restoration.jpg" },
    { id: "bs-windscreen", title: "Windscreen Restoration", icon: AppWindow, description: "Repairing chips and cracks for clear vision.", image: "/images/services/windscreen.jpg" },
    // { id: "bs-pdr", title: "Paintless Dent Repair", icon: ShieldCheck, description: "Removing dents without affecting original paint.", image: "/images/services/pdr.jpg" },
    { id: "bs-roof", title: "Roof Lining Repair", icon: MoveVertical, description: "Fixing sagging headliners and fabrics.", image: "/images/services/roof-lining.jpg" },
    { id: "bs-alloy", title: "Alloy Wheel Repair", icon: CircleDot, description: "Fixing curb rash, bends, and cosmetic damage.", image: "/images/services/alloy.jpg" },
    { id: "bs-upholstery", title: "Upholstery & Refurbishment", icon: Armchair, description: "Interior seat repair and material refurbishment.", image: "/images/services/upholstery.jpg" },
    { id: "bs-denting", title: "Denting Painting", icon: Disc, description: "Professional dent removal and spray painting.", image: "/images/services/denting.jpg" },
    // { id: "bs-smart", title: "Smart Repair", icon: Settings2, description: "Quick fixes for minor scratches and scuffs.", image: "/images/services/smart-repair.jpg" },
    { id: "bs-chassis", title: "Chassis Repair", icon: Settings, description: "Frame straightening and structural alignment.", image: "/images/services/chassis.jpg" },
    { id: "bs-rims", title: "Rims and Caliper", icon: CircleDot, description: "Custom painting and repair for rims and calipers.", image: "/images/services/rims.jpg" },
    { id: "bs-bodykit", title: "Car Body Kit", icon: Car, description: "Installation and styling of custom body kits.", image: "/images/services/bodykit.jpg" },
    // { id: "bs-polish", title: "Polish and Detailing", icon: ShieldCheck, description: "Deep cleaning, polishing, and paint protection.", image: "/images/services/detailing.jpg" },
];

export const ENGINEERING_SERVICES = [
    { id: "eng-retrofit", title: "Retrofit", icon: Settings, description: "Upgrading older vehicles with modern features.", image: "/images/services/retrofit.jpg" },
    { id: "eng-radar", title: "Radar Calibration", icon: CircleDot, description: "Precision calibration for safety systems.", image: "/images/services/radar.jpg" },
    { id: "eng-nav", title: "Navigation Update", icon: AppWindow, description: "Latest maps and software for your GPS.", image: "/images/services/nav-update.jpg" },
    { id: "eng-ecu", title: "Engine Control Unit (ECU)", icon: Cpu, description: "Advanced diagnostics and repair for ECUs.", image: "/images/services/ecu-repair.jpg" },
    { id: "eng-programming", title: "Programming", icon: Cpu, description: "Software programming and module coding.", image: "/images/services/programming.jpg" },
];
