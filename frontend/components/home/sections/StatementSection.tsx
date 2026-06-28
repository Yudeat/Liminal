"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const snapshot = [
  { value: "3,000+", label: "Students Guided", sub: "Globally" },
  { value: "48",     label: "Countries Reached", sub: "Destinations" },
  { value: "$0",     label: "Agency Fees", sub: "Always free to start" },
  { value: "170+",   label: "UK Universities", sub: "Indexed & searchable" },
];

export default function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".reveal-up"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black font-sans">

      {/* Top split — statement left, body right */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-black/8">

        {/* Left: bold statement */}
        <div className="reveal-up flex items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-black max-w-sm">
            One platform,<br />
            every destination,<br />
            zero agents.
          </h2>
        </div>

        {/* Right: body + CTA */}
        <div className="reveal-up flex flex-col justify-between gap-10">
          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-xl">
            Exile OS gives students the tools to navigate global admissions and visa processes independently. From eligibility checks to SOP frameworks, every step is transparent, automated, and student-owned.
          </p>
          <div>
            <Link
              href="/authentication"
              className="inline-flex items-center gap-2.5 border border-black/20 text-black px-6 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 group"
            >
              Start for Free
              <HiOutlineArrowUpRight size={12} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom — snapshot */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left: label */}
        <div className="reveal-up">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
            Impact Snapshot
          </h3>
        </div>

        {/* Right: stats panel */}
        <div className="reveal-up border border-black/10">
          {/* Panel header */}
          <div className="flex items-center justify-between px-7 py-4 border-b border-black/8">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-black/50">
              Exile OS — Student Network
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-black/40">
              Live Metrics
            </span>
          </div>

          {/* Big primary stat */}
          <div className="px-7 py-10 border-b border-black/8">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-black/40 mb-3">
              Students Guided
            </p>
            <div className="flex items-end gap-3">
              <span className="text-[5rem] md:text-[7rem] font-bold leading-none tracking-tighter text-black">
                3,000
              </span>
              <span className="text-2xl font-bold text-black/40 mb-3">+</span>
            </div>
          </div>

          {/* Secondary stats grid */}
          <div className="grid grid-cols-3 divide-x divide-black/8">
            {snapshot.slice(1).map((s) => (
              <div key={s.label} className="px-5 py-6">
                <p className="text-2xl md:text-3xl font-bold tracking-tighter text-black mb-1">
                  {s.value}
                </p>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
