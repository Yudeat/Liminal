'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  "Admissions Strategist",
  "Visa Architect",
  "SOP Specialist",
  "Consultation",
];

const stats = [
  { label: "Specialists", value: "27+" },
  { label: "Avg Rating", value: "5.0" },
  { label: "Regions", value: "14" },
  { label: "Available", value: "Now" },
];

export default function HireaPerson() {
  const sectionRef = useRef<HTMLElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Shape + text reveal on scroll
    gsap.fromTo(shapeRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1, duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      textRef.current?.querySelectorAll(".big-word") ?? [],
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: "power3.out", delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-in"),
      { y: 24, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f0ede8] text-black font-sans overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16 relative h-full" style={{ minHeight: "100vh" }}>

        {/* Top-left: tab nav */}
        <div className="absolute top-14 left-8 md:left-14 z-20 flex flex-col gap-2.5 fade-in">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`text-left text-[11px] font-bold tracking-wide transition-colors ${
                i === activeTab ? "text-black" : "text-black/35 hover:text-black/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Center: geometric shape + big type */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          {/* Bold shape behind text */}
          <div
            ref={shapeRef}
            className="absolute"
            style={{
              width: "52%",
              height: "38%",
              background: "#4b1227",
              transform: "rotate(-4deg)",
              top: "28%",
              left: "24%",
              zIndex: 1,
            }}
          />

          {/* Big words */}
          <div className="relative z-10 text-center leading-none">
            <div className="overflow-hidden">
              <span className="big-word block text-[6rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-tighter text-black">
                The
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="big-word block text-[6rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-tighter text-[#f0ede8]">
                Expert
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="big-word block text-[6rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-tighter text-black">
                Touch.
              </span>
            </div>
          </div>
        </div>

        {/* Decorative vertical line + dots */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/6 z-0 fade-in" />

        {/* Bottom-left: description + CTA */}
        <div className="absolute bottom-14 left-8 md:left-14 z-20 max-w-[220px] fade-in">
          <p className="text-sm text-black/60 leading-relaxed mb-5">
            While our OS is surgical in precision, some paths require nuanced judgment. Connect with a seasoned strategist to navigate complex global admissions.
          </p>
          <Link
            href="/authentication"
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black border-b border-black/30 pb-0.5 hover:border-black transition-colors group"
          >
            Book a Consultation
            <HiOutlineArrowUpRight size={11} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        {/* Right: stats column */}
        <div className="absolute bottom-14 right-8 md:right-14 z-20 flex flex-col gap-6 text-right fade-in">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 mb-0.5">
                {s.label}
              </p>
              <p className="text-2xl font-bold tracking-tight text-black">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 fade-in">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/25 whitespace-nowrap">
            Experience Meets Intuition
          </p>
        </div>

      </div>
    </section>
  );
}
