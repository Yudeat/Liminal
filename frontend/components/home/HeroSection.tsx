"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { SessionUser } from "./types";
import { blogPosts } from "@/frontend/lib/blog-posts";
import dynamic from "next/dynamic";

const HeroGL = dynamic(() => import("./HeroGL"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    src: "/hero-1.png",
    city: "Frankfurt",
    label: "Germany",
    tagline: "Financial capital. Global gateway.",
  },
  {
    src: "/hero-2.png",
    city: "Český Krumlov",
    label: "Czech Republic",
    tagline: "Medieval heritage. Modern ambition.",
  },
  {
    src: "/hero-3.png",
    city: "Explore",
    label: "The World",
    tagline: "Every journey starts with one step.",
  },
];

const WORDS = ["Begin.", "Every", "Journey."];

type HeroSectionProps = {
  user?: SessionUser;
  isHovered: boolean;
  setIsHovered: (v: boolean) => void;
};

export function HeroSection({ user, setIsHovered }: HeroSectionProps) {
  const latest = blogPosts[0];
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => goTo((prev) => (prev + 1) % slides.length), 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initial text animation
  useEffect(() => {
    if (!textRef.current) return;
    const words = textRef.current.querySelectorAll(".word");
    gsap.fromTo(words,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.15, ease: "power4.out", delay: 0.3 }
    );
  }, []);

  // Scroll parallax on images
  useEffect(() => {
    if (!containerRef.current) return;
    slideRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el.querySelector("img"), {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  function goTo(next: number | ((prev: number) => number)) {
    const nextIndex = typeof next === "function" ? next(current) : next;
    if (animating || nextIndex === current) return;
    setAnimating(true);

    const currentSlide = slideRefs.current[current];
    const nextSlide = slideRefs.current[nextIndex];
    if (!currentSlide || !nextSlide) return;

    // Bring next slide on top
    gsap.set(nextSlide, { zIndex: 2, clipPath: "inset(0 100% 0 0)" });
    gsap.set(currentSlide, { zIndex: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(currentSlide, { zIndex: 0, clipPath: "inset(0 0% 0 0)" });
        setCurrent(nextIndex);
        setAnimating(false);
      },
    });

    tl.to(nextSlide, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.inOut" });

    // Animate counter
    if (counterRef.current) {
      gsap.to(counterRef.current, {
        opacity: 0, y: -12, duration: 0.3,
        onComplete: () => {
          if (counterRef.current) {
            counterRef.current.textContent = `0${nextIndex + 1}`;
            gsap.to(counterRef.current, { opacity: 1, y: 0, duration: 0.3 });
          }
        }
      });
    }

    // Animate city label
    const label = document.querySelector(".slide-city");
    if (label) {
      gsap.to(label, { opacity: 0, y: -8, duration: 0.25, onComplete: () => {
        gsap.to(label, { opacity: 1, y: 0, duration: 0.3, delay: 0.8 });
      }});
    }

    // Reset interval
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => goTo((p) => (p + 1) % slides.length), 5000);
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          ref={(el) => { slideRefs.current[i] = el; }}
          className="absolute inset-0"
          style={{
            zIndex: i === current ? 1 : 0,
            clipPath: "inset(0 0% 0 0)",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.city}
            fill
            className="object-cover object-center scale-110"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      {/* R3F wave overlay */}
      <HeroGL />

      {/* Slide progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex h-[2px]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 relative overflow-hidden bg-white/15"
          >
            {i === current && (
              <span
                key={current}
                className="absolute inset-y-0 left-0 bg-white"
                style={{
                  animation: "progress 5s linear forwards",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom-left: big headline */}
      <div className="absolute bottom-10 left-8 md:left-14 z-20">
        <div ref={textRef} className="overflow-hidden mb-6">
          {WORDS.map((w, i) => (
            <div key={i} className="overflow-hidden">
              <span className="word block text-[5rem] md:text-[9rem] lg:text-[11rem] font-black leading-[0.86] tracking-tighter text-white uppercase">
                {w}
              </span>
            </div>
          ))}
        </div>

        {/* City + tagline */}
        <div className="mb-6 space-y-1">
          <p className="slide-city text-[10px] font-black uppercase tracking-[0.3em] text-[#e8c4a0]">
            {slides[current].label} · {slides[current].city}
          </p>
          <p className="text-white/50 text-xs font-medium tracking-wide">
            {slides[current].tagline}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5">
          <Link
            href="/authentication"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-black text-[11px] uppercase tracking-widest hover:bg-[#e8c4a0] transition-colors duration-300"
          >
            Get Started <HiOutlineArrowUpRight size={12} />
          </Link>
          <Link
            href="#process"
            className="text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors"
          >
            How it works
          </Link>
        </div>
      </div>

      {/* Bottom-right: slide counter + blog card */}
      <div className="absolute bottom-10 right-8 md:right-14 z-20 flex flex-col items-end gap-5">

        {/* Slide counter */}
        <div className="flex items-center gap-3 text-white/50">
          <span ref={counterRef} className="text-4xl font-black text-white tabular-nums">01</span>
          <span className="text-[10px] font-black uppercase tracking-widest">/ 0{slides.length}</span>
        </div>

        {/* Blog card */}
        <Link href={`/blog/${latest.slug}`} className="group block w-[220px]">
          <div className="relative h-28 overflow-hidden mb-2 bg-black/40 backdrop-blur-sm border border-white/10">
            <Image src="/hero-2.png" alt="" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm p-1 group-hover:bg-[#e8c4a0] transition-colors">
              <HiOutlineArrowUpRight size={11} className="text-white group-hover:text-black" />
            </div>
          </div>
          <p className="text-[9px] font-black uppercase tracking-[0.28em] text-white/45 mb-1">{latest.series}</p>
          <p className="text-xs font-bold text-white/80 group-hover:text-[#e8c4a0] transition-colors leading-snug line-clamp-2">
            {latest.title}
          </p>
        </Link>
      </div>

      {/* Slide dots — mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-4" : "bg-white/40"}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  );
}
