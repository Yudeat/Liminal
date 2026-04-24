'use client';

import React, { useRef } from 'react';
import { HiOutlineMap, HiOutlineFingerPrint, HiOutlineSun } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function WhatIsLiminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .fromTo(
        ".hero-block",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.85 },
      )
      .fromTo(
        ".philosophy-row",
        { opacity: 0, x: -22 },
        { opacity: 1, x: 0, stagger: 0.16, duration: 0.7 },
        "-=0.32",
      )
      .fromTo(".cta-block", { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.7 }, "-=0.25");
  }, { scope: containerRef });

  const handleCtaMouseEnter = () => {
    if (!ctaCardRef.current) return;
    gsap.to(ctaCardRef.current, { scale: 0.98, duration: 0.28, ease: "power2.out" });
  };

  const handleCtaMouseLeave = () => {
    if (!ctaCardRef.current) return;
    gsap.to(ctaCardRef.current, { scale: 1, duration: 0.28, ease: "power2.out" });
  };

  return (
    <div ref={containerRef} className="bg-white text-black font-sans selection:bg-pink-100">
      

      
      <section className="py-32 bg-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <div className="hero-block space-y-8">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-pink-400">
              <HiOutlineSun size={24} />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">For the Student</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Education shouldn&apos;t be a cage. We treat university applications like a mission. 
              No agents taking commissions. No generic advice. We give you the surgical 
              tools to hack the system and place yourself in the world’s elite institutions.
            </p>
          </div>

          <div className="hero-block space-y-8">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-blue-400">
              <HiOutlineMap size={24} />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">For the Traveller</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Travel isn&apos;t a vacation; it&apos;s an exile from the ordinary. We build the visa logic, 
              the logistical blueprints, and the community support to ensure your migration 
              is seamless. You provide the destination; we provide the precision.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE PHILOSOPHY: SURGICAL PRECISION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <HiOutlineFingerPrint size={60} className="text-gray-200 mb-8" />
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              We don&apos;t do <br />
              <span className="italic font-serif font-light lowercase text-pink-400">agencies.</span>
            </h2>
          </div>

          <div className="space-y-24">
            <div className="philosophy-row flex flex-col md:flex-row gap-12 items-center">
              <div className="text-[12rem] font-black text-gray-50 leading-none">01</div>
              <div>
                <h4 className="text-2xl font-black uppercase mb-4">No Middlemen</h4>
                <p className="text-gray-500 text-lg">
                  Traditional agents get paid by universities to &quot;sell&quot; you to them. 
                  Exile is paid by you to build you. Our loyalty is to your trajectory alone.
                </p>
              </div>
            </div>

            <div className="philosophy-row flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="text-[12rem] font-black text-gray-50 leading-none">02</div>
              <div className="md:text-right">
                <h4 className="text-2xl font-black uppercase mb-4">Total Autonomy</h4>
                <p className="text-gray-500 text-lg">
                  We give you the blueprints, the drafts, and the data. You hit the &quot;deploy&quot; button. 
                  By the time you reach your destination, you aren&apos;t just a student-you&apos;re an architect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 flex justify-center items-center">
        <div
          ref={ctaCardRef}
          onMouseEnter={handleCtaMouseEnter}
          onMouseLeave={handleCtaMouseLeave}
          className="cta-block bg-pink-400 w-full max-w-4xl p-20 rounded-[4rem] text-center text-white cursor-pointer"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Start your <br /> exile today.
          </h2>
          <button className="bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            Begin Journey
          </button>
        </div>
      </section>

    </div>
  );
}
