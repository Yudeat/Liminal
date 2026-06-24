"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiUserCircle } from "react-icons/hi2";
import { NavItem, SessionUser } from "./types";

type SiteNavbarProps = {
  user?: SessionUser;
  isHeroVisible: boolean;
  navItems: NavItem[];
  setIsHovered: (value: boolean) => void;
};

export function SiteNavbar({
  user,
  isHeroVisible,
  navItems,
  setIsHovered,
}: SiteNavbarProps) {
  return (
    <>
      <motion.header
        animate={{ y: isHeroVisible ? 0 : -120, opacity: isHeroVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed w-full pt-5 top-0 z-50 px-5 md:px-8 pointer-events-none"
      >
        <nav className="relative mx-auto max-w-7xl border border-white/10 px-4 md:px-6 h-16 md:h-[68px] rounded-2xl flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-2xl pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all">
          {/* Logo */}
          <div className="flex items-center gap-2.5 pl-1">
            <div className="relative w-6 h-6 md:w-7 md:h-7">
              <Image src="/nav.png" alt="Exile logo" fill className="object-contain" />
            </div>
            <span className="text-base md:text-lg font-black tracking-tighter uppercase text-white">Exile</span>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40 hover:text-white transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 pr-1">
            {user ? (
              <>
                <Link href="/profile" className="text-white/50 hover:text-white transition-colors">
                  <HiUserCircle size={32} />
                </Link>
                <button className="px-5 py-2.5 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-[0.18em] hover:bg-[#f0f0f0] transition-all duration-300 active:scale-95">
                  Dashboard
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/authentication"
                  className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                >
                  Log In
                </Link>
                <button className="px-5 py-2.5 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-[0.18em] hover:bg-[#f0f0f0] transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  Get Started
                </button>
              </>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Sticky dock on scroll */}
      <AnimatePresence>
        {!isHeroVisible && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 left-1/2 z-[70] w-auto"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-2 rounded-[1.75rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.35, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="p-3.5 text-white/30 hover:text-[#e8c4a0] transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                </motion.a>
              ))}
              <div className="h-7 w-px bg-white/10 mx-1.5" />
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white text-black px-5 py-2.5 rounded-[1.25rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#e8c4a0] transition-colors"
              >
                Begin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
