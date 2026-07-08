"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  { src: "/hero-1.png", city: "Frankfurt", country: "Germany", desc: "Top-ranked universities, zero tuition at public institutions." },
  { src: "/hero-2.png", city: "Český Krumlov", country: "Czech Republic", desc: "Affordable education in the heart of Central Europe." },
  { src: "/hero-3.png", city: "Southern Europe", country: "Explore", desc: "Over 48 countries. Your destination, your rules." },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading
    gsap.fromTo(
      sectionRef.current.querySelector(".dest-heading"),
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      }
    );

    // Cards stagger
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)",
          duration: 1.1,
          ease: "power3.out",
          delay: i * 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
        }
      );

      // Parallax on each card image
      const img = card.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="bg-[#080808] py-28 px-6 md:px-14 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="dest-heading mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">
              Where Students Go
            </p>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              The{" "}
              <em className="font-serif font-light lowercase text-[#f9a8d4] not-italic italic">world</em>
              <br />awaits.
            </h2>
          </div>
          <Link
            href="/archive"
            className="inline-flex items-center gap-2 border border-white/15 text-white/60 px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:border-white/40 hover:text-white transition-all shrink-0"
          >
            View All Destinations <HiOutlineArrowUpRight size={12} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((d, i) => (
            <div
              key={d.city}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ height: i === 1 ? "520px" : "420px" }}
            >
              <Image
                src={d.src}
                alt={d.city}
                fill
                className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#f9a8d4] mb-2">
                  {d.country}
                </p>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  {d.city}
                </h3>
                <p className="text-white/55 text-xs leading-relaxed">
                  {d.desc}
                </p>
              </div>

              <div className="absolute top-5 right-5 w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <HiOutlineArrowUpRight size={13} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
