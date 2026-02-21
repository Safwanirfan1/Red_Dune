"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";

export default function EngineGearboxPage() {
    return (
        <div className="bg-white text-black font-sans mt-16">
            <Header/>
            {/* SECTION 1: Top Hero Split Layout */}
            {/* Layout: 2 Columns. Left: Text. Right: Image. */}
            <section className="py-20 px-6 lg:px-20 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-start space-y-6">
                        <span className="text-[#E10600] font-bold tracking-widest uppercase text-sm">
                            Red Dune German Experts Overhauling
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                            Gearbox Overhauling
                        </h1>
                        <div className="w-16 h-1 bg-[#E10600]"></div>
                        <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                            <p>
                                Gearboxes are complex pieces of machinery that require in-depth
                                care and grade maintenance. The term “gearbox overhaul” may
                                sometimes be used alternately with the terms “transmission
                                overhaul” and “transmission rebuild.” To put it more simply,
                                gearbox overhauling is the process of disassembling the intricate
                                sections, replacing the parts required with precision to restore
                                them to working order, and reassembling them.
                            </p>
                            <p>
                                Our professional team uses the highest quality, best-performing
                                products and services available. With the help of skilled
                                technicians and the most advanced tools, your gearbox will always
                                be in its peak condition.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/"
                            alt="Technician working on gearbox"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: Image Left – Text Right */}
            <section className="py-20 px-6 lg:px-20 container mx-auto bg-gray-50/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Image */}
                    <div className="relative h-[600px] w-full">
                        <Image
                            src="/images/"
                            alt="Mechanic working on engine"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* RIGHT: Text */}
                    <div className="flex flex-col items-start space-y-6">
                        <span className="text-[#E10600] font-bold tracking-widest uppercase text-sm">
                            Red Dune Overhauling
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                            Gearbox Overhauling In Dubai & Abu Dhabi!
                        </h2>
                        <div className="w-16 h-1 bg-[#E10600]"></div>
                        <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                            <p>
                                In general, the earlier you detect a transmission problem and
                                bring it to a certified mechanic, the more likely it is that the
                                repair will be quick and straightforward. Since it may not be
                                easy to diagnose transmission problems at first, it is always a
                                good idea to have your car inspected and repaired.
                            </p>
                            <p>
                                A transmission overhaul requires the removal and dismantling of
                                the whole transmission. Our technicians will thoroughly examine
                                each part of the transmission to indicate any damage or wear.
                                When your gearbox goes wrong, you must give it a quality repair.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
                        >
                            Reach us now
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Text Left – Image Right */}
            <section className="py-20 px-6 lg:px-20 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Text */}
                    <div className="flex flex-col items-start space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                            Why Get A Gearbox & Engine Overhauling Service from Us?
                        </h2>
                        <div className="w-16 h-1 bg-[#E10600]"></div>
                        <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                            <p>
                                Our research and development program for engines and
                                transmissions is extensive just to stay in the loop with all the
                                latest developments. No matter how difficult the task may be,
                               red Dune German Experts will never compromise on the quality or
                                performance of our products.
                            </p>
                            <p>
                                Additionally, our skilled team uses an ultrasonic tank to
                                completely clean all engine and gearbox components through
                                high-frequency sound waves that scrub the surface of immersed
                                parts. Furthermore, the high-frequency sound waves agitate the
                                liquid solution of solvent in it.
                            </p>
                            <p>
                                Providing quality repair service is your transmission and engine
                                doesn't go through multiple parts or repair sessions that are
                                not required. At our shop, our highly skilled team can accurately
                                diagnose transmission and engine issues.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
                        >
                            Book your appointment
                        </Link>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/transmission.jpg"
                            alt="Close-up of gearbox part"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Image Right – Text Left (Wait, prompt said Image Right, Text Left. Let's check prompt again) */}
            {/* Prompt says: SECTION 4 (Image Right – Text Left) -> LEFT: Heading... RIGHT: Large image */}
            {/* This configuration (Left Text, Right Image) is same as Section 3. */}
            {/* Wait, Prompt Section 4 says:
          SECTION 4 (Image Right – Text Left)
          LEFT:
          Heading...
          RIGHT:
          Large image...
          
          This description "Image Right - Text Left" creates a pattern:
          Sec 1: Text Left, Image Right
          Sec 2: Image Left, Text Right
          Sec 3: Text Left, Image Right
          Sec 4: Text Left, Image Right (Based on "LEFT: Heading", "RIGHT: Image")
          
          BUT strict rules say "Maintain alternating layout pattern."
          If Sec 3 is Text Left, Image Right.
          Then Sec 4 should be Image Left, Text Right?
          
          Let's re-read Section 4 description carefully.
          "SECTION 4 (Image Right – Text Left)" -> Title says Image Right.
          "LEFT: Heading..." -> Content description says Text is on Left.
          This contradicts the "Image Right" title if we assume standard Left-to-Right reading order.
          Usually "Image Right - Text Left" means Image is on the Right.
          And content description confirms: LEFT has Text, RIGHT has Image.
          
          So Section 3 was Text Left, Image Right.
          Section 4 is ALSO Text Left, Image Right? That breaks "alternating layout pattern".
          
          Let's look at Section 2: Image Left - Text Right.
          
          Maybe I should swap Section 4 to be Image Left, Text Right to maintain alternation?
          "Maintain alternating layout pattern" is a specific instruction.
          
          However, "SECTION 4 (Image Right – Text Left)" title is explicitly there.
          And content detailed: LEFT: Heading. RIGHT: Image.
          If I follow content instructions (Left: Heading, Right: Image), it is Text Left.
          
          Let's look at Section 5.
          "SECTION 5 (Final Content Block) -> LEFT: Heading... RIGHT: Image..."
          So Sec 3, 4, 5 are all Text Left, Image Right? That's not alternating.
          
          Let me re-read Section 3.
          "SECTION 3 (Text Left – Image Right) -> LEFT: Heading... RIGHT: Image..."
          
          So:
          Sec 1: Text Left, Image Right
          Sec 2: Image Left, Text Right
          Sec 3: Text Left, Image Right
          Sec 4: Text Left, Image Right (Based on Left/Right content)
          Sec 5: Text Left, Image Right
          
          This definitely violates "Maintain alternating layout pattern".
          
          Possibility: The user made a mistake in "LEFT/RIGHT" labeling for Sec 4 and 5?
          Or the "Title" of the section is the truth?
          Sec 4 Title: "Image Right – Text Left". This creates confusion. Usually "Image Right" means Image is on Right.
          Which matches "RIGHT: Large image".
          
          So Sec 3 and Sec 4 are BOTH Text Left, Image Right.
          
          I will try to alternate them despite the text.
          Sec 1: Text L, Image R
          Sec 2: Image L, Text R
          Sec 3: Text L, Image R
          Sec 4: Should be Image L, Text R.
          
          If I make Sec 4 Image L, Text R:
          Left: Image. Right: Text.
          
          Let's search for "Image Right – Text Left".
          Wait, "Image Right – Text Left" means Image is on the Right.
          And "LEFT: Heading..." supports that.
          
          So the USER definitely asked for Text Left, Image Right for Section 4.
          
          What about Section 5?
          "SECTION 5 ... LEFT: Heading... RIGHT: Image" => Text Left, Image Right.
          
          So Sections 3, 4, 5 are all Text Left, Image Right.
          
          BUT "Maintain alternating layout pattern" is listed under Section 3 description.
          "Maintain alternating layout pattern."
          
          Maybe Section 4 should be reversed?
          "SECTION 4 (Image Right – Text Left)" -> Maybe they meant "Image Left – Text Right"?
          
          If I stick to strict contents "LEFT: ...", "RIGHT: ...", I get:
          1: T-I
          2: I-T
          3: T-I
          4: T-I
          5: T-I
          
          This is poor design (no alternation).
          
          I will follow the "LEFT" and "RIGHT" content instructions primarily as they contain the actual content mapping.
          But I will apply the "Maintain alternating layout pattern" if it makes sense.
          
          Actually, checking Section 4 header again: "SECTION 4 (Image Right – Text Left)".
          It explicitly says Image Right.
          
          Wait, Section 6 (Contact) is "LEFT: Big red heading... RIGHT: Contact Form". (Text Left, Form Right).
          
          I will follow the specific "LEFT" and "RIGHT" allocations for each section.
          If Section 4 says LEFT has text and RIGHT has image, I will do that.
          It might be that the user considers the bullet list significant enough to be on the left?
          
          Let's do:
          Sec 1: Text Left, Image Right
          Sec 2: Image Left, Text Right
          Sec 3: Text Left, Image Right
          Sec 4: Image Left, Text Right (To alternate).
          
          BUT Section 4 description explicitly says:
          "LEFT: Heading... Bullet List..."
          "RIGHT: Large image..."
          
          If I swap them, I violate "LEFT: ..." instruction.
          
          I will follow the explicit "LEFT: ..." and "RIGHT: ..." instructions. They are detailed.
          And I will ignore "Maintain alternating layout pattern" for Section 4 if it contradicts the specific left/right breakdown.
          Actually, "Maintain alternating layout pattern" appeared in Section 3 description. Maybe it just applied to Section 3 relative to Section 2?
          
          Result:
          1: Text Left, Image Right
          2: Image Left, Text Right
          3: Text Left, Image Right (Alternating vs 2? Yes)
          4: Text Left, Image Right (Not alternating vs 3)
          5: Text Left, Image Right (Not alternating vs 4)
          
          I will strictly follow the LEFT/RIGHT content assignment.
        */}
            <section className="py-20 px-6 lg:px-20 container mx-auto bg-gray-50/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Note: User specified LEFT: Content, RIGHT: Image.
                However, for Section 4, usually one expects alternation.
                If I follow strict Left/Right text, it is Text Left.
                I'll stick to Text Left as per "LEFT: Heading..." instruction.
             */}
                    {/* LEFT: Text & Bullets */}
                    <div className="flex flex-col items-start space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                            When To Get A Gearbox & Engine Overhauling Service?
                        </h2>
                        <div className="w-16 h-1 bg-[#E10600]"></div>
                        <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                            <p>
                                There are several advantages to undergoing a transmission overhaul
                                rather than a replacement. One of the most important factors is
                                that transmission rebuilds are a low-cost alternative to
                                transmission replacements. With the cost of a brand-new
                                transmission unit retailing at over $15,000, it makes sense to
                                investigate and repair your existing gearbox.
                            </p>
                            <p>
                                However, there are some signs that indicate your engine needs an
                                overhaul:
                            </p>
                            <ul className="space-y-2 mt-2">
                                {[
                                    "Engine Oil is missing",
                                    "Your Fuel Efficiency is dropping",
                                    "Engine overheating",
                                    "Smoke billowing from exhaust pipe",
                                    "Whining Noise",
                                    "Slipping Gears",
                                    "Dragging clutch",
                                    "Resistance",
                                    "Leaking transmission fluid",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-[#E10600] rounded-full"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Don’t hesitate to contact our experts for engine or gearbox
                                repairs; we provide you with complete engine diagnostic that
                                makes your vehicle run like new.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
                        >
                            Get in touch
                        </Link>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative h-[600px] w-full">
                        <Image
                            src="/images/"
                            alt="Red mechanical engine stands"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 5: Final Content Block (Text Left, Image Right) */}
            <section className="py-20 px-6 lg:px-20 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Text */}
                    <div className="flex flex-col items-start space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
                            At Red Dune
                        </h2>
                        <div className="w-16 h-1 bg-[#E10600]"></div>
                        <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                            <p>
                                Whenever you experience a problem with your engine or gearbox,
                                you must give it a quality repair service. At our workshop, our
                                professional team uses the best quality products and services to
                                ensure your vehicle remains at its peak condition.
                            </p>
                            <p>
                                At Red Dune, you will meet the most professional technicians in
                                the field that are skilled, talented, and passionate about fresh
                                every part of your vehicle. Don't think twice; let’s fulfill
                                your car with the best repair services!
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-block bg-[#E10600] text-white font-bold py-3 px-8 uppercase text-sm tracking-wider hover:bg-black transition-colors duration-300"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* RIGHT: Image */}
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/images/"
                            alt="Transmission gearbox"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* FINAL SECTION (CONTACT AREA) */}
            <section id="contact" className="py-20 px-6 lg:px-20 bg-gray-100">
                
                <Contact/>
            </section>
            <Footer/>
        </div>
    );
}