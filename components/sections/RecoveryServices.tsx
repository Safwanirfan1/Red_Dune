"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  Clock,
  Shield,
  Car,
  DollarSign,
  User,
  Phone,
  MapPin,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function RecoveryServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation Refs
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Red Separators
      gsap.utils.toArray<HTMLElement>(".red-separator").forEach((line) => {
        gsap.fromTo(
          line,
          { width: "0%" },
          {
            width: "100%",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
            },
          },
        );
      });

      // Animate Fade In Sections
      sectionsRef.current.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          },
        );
      });

      // Cards Stagger
      gsap.fromTo(
        ".why-us-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#why-choose-us",
            start: "top 75%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-full font-sans text-[#111111]"
    >
      {/* ================= HERO SECTION ================= */}
      <div className="w-full h-px bg-gray-100 relative mt-10 mb-10 overflow-hidden hidden md:block">
        <div className="red-separator absolute top-0 left-0 h-[3px] bg-[#E10600] w-full" />
      </div>

      <section
        ref={addToRefs}
        className="container mx-auto px-6 py-10 md:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Side - Left */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-[28px] md:text-[42px] leading-tight font-bold text-[#111111]">
              Stuck on the Road?{" "}
              <span className="text-[#E10600]">
                Call Sunday to Thursday: 08:00 AM – 11:00 PM, Saturday: 10:00 AM
                – 07:30 PM
              </span>{" "}
              Car Recovery Services in Dubai & Abu Dhabi
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether your engine dies on the highway or you're stuck with a
              flat in the middle of the night, car recovery service from Red Dune German
              Experts is fast, reliable, and always available. Our team is
              available Sunday to Thursday, 08:00 AM – 11:00 PM, Saturday 10:00
              AM – 07:30 PM, with the right recovery vehicle in Dubai and Abu
              Dhabi, wherever you are in the UAE.
            </p>
            <div className="pt-4">
              <Button className="bg-[#E10600] hover:bg-[#b30500] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Book Now
              </Button>
            </div>
          </div>

          {/* Image Side - Right */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />{" "}
            {/* Placeholder background */}
            <Image
              src="/images/recovery.jpg" // Using existing image as placeholder
              alt="Car Recovery Service Dubai"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: FLATBED RECOVERY ================= */}
      <div className="w-full h-px bg-gray-100 relative mt-10 mb-10 overflow-hidden">
        <div className="red-separator absolute top-0 left-0 h-[3px] bg-[#E10600] w-full" />
      </div>

      <section
        ref={addToRefs}
        className="container mx-auto px-6 py-10 md:py-20 bg-gray-50 rounded-3xl"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side - Left (Desktop) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/s2.jpg" // Placeholder using existing image
              alt="Flatbed Recovery Service"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Side - Right (Desktop) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
              Get Safe & Quick{" "}
              <span className="text-[#E10600]">Emergency Flatbed Recovery</span>{" "}
              Service in Dubai
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Not every breakdown is sudden or severe. Sometimes it's a dead
              battery in a mall parking lot. Other times, your car refuses to
              start after fueling up. Whatever the case, we've got the right
              recovery vehicle ready to come to you, fast.
            </p>

            <ul className="space-y-4 mt-4">
              {[
                "Flatbed trucks for low-clearance sports cars and luxury vehicles",
                "Door-type recovery vehicles for extra protection during transport",
                "Tools that secure your vehicle without a scratch",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#E10600] rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 font-medium italic border-l-4 border-[#FFC400] pl-4 py-2 bg-yellow-50/50">
              Our car recovery in Dubai covers it all — whether you're on Sheikh
              Zayed Road, in Business Bay, or off-road in the desert.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ABU DHABI ================= */}
      <div className="w-full h-px bg-gray-100 relative mt-10 mb-10 overflow-hidden">
        <div className="red-separator absolute top-0 left-0 h-[3px] bg-[#E10600] w-full" />
      </div>

      <section
        ref={addToRefs}
        className="container mx-auto px-6 py-10 md:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Side - Right (technically Left in markup, but we alternate visual flow if desired. Prompt says Left Image, Right Text again. Wait, Prompt says Section 2: Left Image, Right Text. Section 3: Left Image, Right Text. Just following prompt.) */}

          {/* Actually Section 1 was Left Text / Right Image. Section 2 was Left Image / Right Text. Section 3 Prompt says Left Image / Right Text. Let's stick to that. */}

          {/* Image Side - Left */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/download.jpg" // Placeholder
              alt="Abu Dhabi Recovery"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Side - Right */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111]">
              Need Car Recovery in{" "}
              <span className="text-[#E10600]">Abu Dhabi?</span> German Experts
              Are Just a Call Away
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Getting stranded in Abu Dhabi can feel overwhelming, especially
              during extreme heat or late at night. That’s why we keep our lines
              open Sunday to Thursday, 08:00 AM – 11:00 PM, Saturday 10:00 AM –
              07:30 PM, so help is just a quick call away.
            </p>

            <ul className="space-y-4 mt-4">
              {[
                "A quick, friendly response from real humans, not robots",
                "Clean, modern trucks with experienced drivers",
                "Recovery from even the most awkward spots, including basements and tight corners",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#E10600] rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 font-medium italic border-l-4 border-[#FFC400] pl-4 py-2 bg-yellow-50/50">
              Whether you're near Al Reem Island, Yas, or Mussafah, our Abu
              Dhabi car recovery crew won’t keep you waiting.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE US (CARDS) ================= */}
      <section
        id="why-choose-us"
        className="py-20 bg-[#111111] text-white relative"
      >
        <div className="absolute top-0 w-full h-px bg-[#E10600]/30" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Choose German Experts?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              When your car breaks down, you need more than just a tow truck.
              You need someone who actually cares about getting your vehicle to
              safety, without making things worse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Clock,
                title: "We're always available",
                desc: "Middle of the night? Holiday? We've got you.",
              },
              {
                icon: Shield,
                title: "We protect your car",
                desc: "No dragging or jerky pulling. Just safe, smooth loading.",
              },
              {
                icon: Car,
                title: "We handle all brands",
                desc: "From Ferraris to family sedans.",
              },
              {
                icon: DollarSign,
                title: "We’re honest about pricing",
                desc: "No surprises. What we quote is what you pay.",
              },
              {
                icon: User,
                title: "We keep it personal",
                desc: "No call centers. We treat your car like it's our own.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="why-us-card bg-secondary p-8 rounded-2xl hover:bg-[#252525] transition-all duration-300 border border-white/5 hover:border-[#E10600]/50 hover:-translate-y-2 group shadow-lg"
              >
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-full flex items-center justify-center mb-6 text-[#E10600] group-hover:bg-[#E10600] group-hover:text-white transition-colors">
                  <card.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: VEHICLE TYPES ================= */}
      <section ref={addToRefs} className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Trust Our Team to Recover{" "}
            <span className="text-[#E10600]">
              Luxury, Commercial, and Off-Road
            </span>{" "}
            Vehicles
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our recovery trucks aren’t just built for one kind of car; we’re
            equipped for just about anything on UAE roads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Luxury Cars",
              models: "Ferrari, Bentley, Mercedes-AMG",
              img: "/images/s2.jpg",
            }, // Using placeholders
            {
              title: "SUVs & 4x4s",
              models: "Land Cruiser, Pajero, Patrol",
              img: "/images/download.jpg",
            },
            {
              title: "Electric Vehicles",
              models: "Tesla, Polestar, Hybrids",
              img: "/images/download2.jpg",
            },
            {
              title: "Commercial",
              models: "Vans, Fleets, Buses",
              img: "/images/recovery.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.models}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: FAST RESPONSE ================= */}
      <section ref={addToRefs} className="bg-[#E10600] text-white py-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <Clock size={64} className="mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Reach Our Nearest Recovery Unit in Minutes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
            {[
              "Quick dispatch, often within 30 minutes",
              "Friendly drivers who know the roads inside out",
              "Live location tracking so you’re never left guessing",
              "No roadside membership needed — just call and we’ll come",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              >
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: SUPPORT ACROSS UAE ================= */}
      <section ref={addToRefs} className="container mx-auto px-6 py-20">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Stay Road-Ready with Round-the-Clock Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-200 -z-10" />

            {[
              {
                step: "01",
                title: "Book Now",
                desc: "Call support or click 'Book Now'",
                icon: Phone,
              },
              {
                step: "02",
                title: "Share Details",
                desc: "Car model and location",
                icon: MapPin,
              },
              {
                step: "03",
                title: "Dispatch",
                desc: "We send the right truck",
                icon: Truck,
              },
              {
                step: "04",
                title: "Track",
                desc: "Track driver in real-time",
                icon: Clock,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-gray-50 md:bg-transparent"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-gray-50 text-[#E10600] text-xl font-bold relative z-10">
                  <step.icon size={32} />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#111111] text-white rounded-full flex items-center justify-center text-xs border-2 border-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: FAQ ================= */}
      <section ref={addToRefs} className="container mx-auto px-6 py-20 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How fast can your car recovery team reach breakdown locations in Dubai?",
              a: "Typically within 30 to 45 minutes, depending on your location and traffic conditions.",
            },
            {
              q: "Do you provide specialized towing services for exotic and luxury vehicles like Ferrari or Rolls-Royce?",
              a: "Yes. We use self-lift flatbeds and experienced drivers trained for high-end cars.",
            },
            {
              q: "What are the average costs?",
              a: "AED 150 to AED 350 depending on location and distance.",
            },
            {
              q: "Can I request a flatbed without membership?",
              a: "Absolutely. No membership needed.",
            },
            {
              q: "Are drivers certified?",
              a: "Yes. Fully insured and trained.",
            },
            {
              q: "Do you offer long-distance recovery?",
              a: "Yes, across the UAE.",
            },
            {
              q: "What vehicles can you recover?",
              a: "Sedans, SUVs, sports cars, EVs, commercial vehicles.",
            },
            {
              q: "How do I track arrival time?",
              a: "We send a live tracking link via SMS.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 open:shadow-md hover:border-[#E10600]/30"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-bold text-lg text-[#111111] group-hover:text-[#E10600] transition-colors">
                  {faq.q}
                </h3>
                <span className="transform transition-transform group-open:rotate-180 text-gray-400">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
