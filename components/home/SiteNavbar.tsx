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
        animate={{ y: isHeroVisible ? 0 : -100, opacity: isHeroVisible ? 1 : 0 }}
        className="fixed w-full pt-4 md:pt-6 top-0 z-50 px-4 md:px-6 pointer-events-none"
      >
        <nav className="relative mx-auto max-w-7xl border border-gray-100/50 p-2 md:p-3 h-16 md:h-20 rounded-full flex items-center justify-between bg-white/70 backdrop-blur-2xl pointer-events-auto shadow-sm transition-all">
          <div className="flex items-center gap-2 pl-3 md:pl-6">
            <div className="relative w-6 h-6 md:w-8 md:h-8">
              <Image src="/nav.png" alt="logo" fill className="object-contain" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase text-black">Exile</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black hover:translate-y-[-1px] transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4 pr-1 md:pr-2">
            {user ? (
              <>
                <Link href="/profile" className="px-4 md:px-6 py-2.5 tracking-widest">
                  <HiUserCircle size={38} />
                </Link>
                <button className="px-5 md:px-8 py-2.5 md:py-3.5 bg-black text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-200 transition-all duration-500 active:scale-95">
                  <span className="hidden sm:inline">Get Started for free</span>
                  <span className="sm:hidden">Start</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/authentication"
                  className="px-4 md:px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-black transition-colors"
                >
                  Log In
                </Link>
                <button className="px-5 md:px-8 py-2.5 md:py-3.5 bg-black text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-200 transition-all duration-500 active:scale-95">
                  <span className="hidden sm:inline">Get Started for free</span>
                  <span className="sm:hidden">Start</span>
                </button>
              </>
            )}
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {!isHeroVisible && (
          <motion.div
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 100, x: "-50%", opacity: 0 }}
            className="fixed bottom-8 left-1/2 z-[70] w-auto"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 p-2 rounded-[2rem] shadow-2xl flex items-center gap-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.4, y: -10 }}
                  className="p-4 text-white/40 hover:text-pink-400 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                </motion.a>
              ))}
              <div className="h-8 w-[1px] bg-white/10 mx-2" />
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white text-black px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-400 transition-colors"
              >
                Inquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
