"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax on background image
    gsap.to(imgRef.current, {
      yPercent: 18,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Heading words stagger in
    const words = headingRef.current?.querySelectorAll(".jword");
    if (words) {
      gsap.fromTo(words,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }

    // Body fade in
    gsap.fromTo(bodyRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 55%" },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between py-20 px-8 md:px-16"
    >
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 scale-110">
        <Image
          src="/hero-3.png"
          alt="Begin your journey"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* Heading — top center */}
      <div className="relative z-10 text-center pt-8">
        <h2
          ref={headingRef}
          className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-bold leading-[0.9] tracking-tight text-white"
        >
          {["Navigate", "Your", "Future.", "With Us"].map((w) => (
            <span key={w} className="jword block overflow-hidden">
              {w}
            </span>
          ))}
        </h2>
      </div>

      {/* Body + CTA — bottom center */}
      <div ref={bodyRef} className="relative z-10 flex flex-col items-center gap-7 pb-4">
        <p className="text-white/65 text-sm md:text-base leading-relaxed text-center max-w-sm">
          No matter where you are, the door is open. Exile OS helps students navigate global admissions and migration — without agents, without hidden fees, and without limits.
        </p>
        <Link
          href="/authentication"
          className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 group"
        >
          Begin Your Exile
          <HiOutlineArrowUpRight size={13} className="group-hover:rotate-12 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
