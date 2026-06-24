"use client";

import Link from "next/link";
import { MotionValue, motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChevronDoubleDown,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { SessionUser } from "./types";

type HeroSectionProps = {
  user?: SessionUser;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  globeX: MotionValue<number>;
  globeY: MotionValue<number>;
};

const stats = [
  { value: "3,000+", label: "Students Guided" },
  { value: "48", label: "Countries Reached" },
  { value: "$0", label: "In Agency Fees" },
];

export function HeroSection({ user, isHovered, setIsHovered, globeX, globeY }: HeroSectionProps) {
  const badgeText = user ? "Your Journey Continues" : "Independent Education OS";
  const headingTop = user ? "READY TO" : "THE ART";
  const headingMid = user ? "jump" : "of self";
  const headingBottom = user ? "HIGHER." : "EXILE.";

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        style={{
          x: globeX,
          y: globeY,
          background: "radial-gradient(circle, rgba(232,196,160,0.08) 0%, transparent 70%)",
        }}
        className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
      />
      <motion.div
        className="absolute bottom-[10%] left-[0%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,80,120,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-32 pb-24">
          {/* Left: Headline */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] text-white/40"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e8c4a0] animate-pulse" />
              {badgeText}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[4.5rem] md:text-[7.5rem] lg:text-[8.5rem] leading-[0.82] font-black tracking-tighter uppercase text-white"
            >
              {headingTop}
              <br />
              <em className="font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                {headingMid}
              </em>
              <br />
              {headingBottom}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white/40 text-lg font-medium leading-relaxed max-w-sm"
            >
              Navigate global admissions and migration with surgical precision — no agents, no commissions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#price"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#e8c4a0] transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                Begin Journey
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HiOutlineArrowUpRight size={16} />
                </motion.div>
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-white/50 rounded-xl font-black uppercase tracking-widest text-[11px] hover:border-white/30 hover:text-white transition-all duration-300"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right: Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="border border-white/8 bg-white/3 rounded-2xl p-8 backdrop-blur-sm space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/25">
                Audited Metrics
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="text-3xl font-black text-white tracking-tight">{stat.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-white/6" />
              <div className="flex items-center gap-3">
                <HiOutlineAcademicCap className="text-[#e8c4a0]" size={18} />
                <p className="text-xs text-white/30 font-medium">
                  Trusted by students targeting Oxford, MIT, ETH Zurich & more
                </p>
              </div>
            </div>

            {/* Marquee logos */}
            <div className="border border-white/8 bg-white/2 rounded-2xl px-8 py-5 flex items-center justify-between overflow-hidden">
              {["Oxford", "Stanford", "MIT", "ETH Zürich", "Toronto"].map((uni) => (
                <span key={uni} className="text-xs font-black uppercase tracking-tighter text-white/15 whitespace-nowrap">
                  {uni}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 z-10"
      >
        <HiOutlineChevronDoubleDown size={20} />
      </motion.div>
    </section>
  );
}
