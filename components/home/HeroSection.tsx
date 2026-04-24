"use client";

import Link from "next/link";
import { MotionValue, motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineChevronDoubleDown,
  HiOutlineGlobeAmericas,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { SessionUser } from "./types";

type HeroSectionProps = {
  user?: SessionUser;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  globeX: MotionValue<number>;
  globeY: MotionValue<number>;
};

export function HeroSection({ user, isHovered, setIsHovered, globeX, globeY }: HeroSectionProps) {
  const badgeText = user ? "EXILEOS-The in-between" : "Independent Education OS";
  const headingTop = user ? "BE READY" : "THE ART";
  const headingAccent = user ? "to jumb" : "of self";
  const headingBottom = user ? "HIGHER." : "EXILE.";

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
        <motion.div style={{ x: globeX, y: globeY }} className="absolute -bottom-20 -right-20 text-gray-100/60">
          <HiOutlineGlobeAmericas size={500} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="mb-6 inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400">
          <HiOutlineSparkles className="text-green-500" /> {badgeText}
        </div>
        <h1 className="text-[4.5rem] md:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase">
          {headingTop} <br />
          <span className="text-pink-400 italic font-serif font-light lowercase">{headingAccent}</span> <br />
          {headingBottom}
        </h1>
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="#price"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-12 py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-black/20 flex items-center gap-3"
          >
            Begin Journey
            <motion.div
              animate={{ y: isHovered ? -3 : 0, rotate: isHovered ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HiOutlineAcademicCap size={18} />
            </motion.div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-300"
      >
        <HiOutlineChevronDoubleDown size={24} />
      </motion.div>
    </section>
  );
}
