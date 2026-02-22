'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { 
  motion, 
  AnimatePresence, 
  useSpring, 
  useMotionValue,
  useTransform
} from "framer-motion";

// Icons - Refined for HI2 and FA6 verified exports
import { GiHamburgerMenu } from "react-icons/gi";
import { 
  HiXMark, 
  HiOutlineChevronDoubleDown, 
  HiOutlineSparkles, 
  HiOutlineAcademicCap, 
  HiOutlineGlobeAmericas,
  HiOutlineBolt // Corrected from HiOutlineLightningBolt
} from "react-icons/hi2"; 
import { 
  FaRegCircleUser, 
  FaCheck, 
  FaCompass, 
  FaPaperPlane, 
  FaBoxArchive // Corrected from FaArchive
} from "react-icons/fa6";

export default function LiminalContextualHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Contextual Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const globeX = useTransform(mouseX, [0, 2000], [15, -15]);
  const globeY = useTransform(mouseY, [0, 2000], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const navItems = [
    { name: 'Vision', icon: <FaCompass />, href: '#hero' },
    { name: 'Process', icon: <HiOutlineBolt />, href: '#process' },
    { name: 'Archive', icon: <FaBoxArchive />, href: '#archive' },
    { name: 'Inquiry', icon: <FaPaperPlane />, href: '#contact' },
  ];

  return (
    <div className="relative min-h-[100vh] w-full bg-white text-black font-sans antialiased">
      
      {/* --- CUSTOM CURSOR --- */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ scale: isHovered ? 4 : 1 }}
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* --- 1. TOP NAVBAR --- */}
      <motion.header 
        animate={{ y: isHeroVisible ? 0 : -100, opacity: isHeroVisible ? 1 : 0 }}
        className="fixed w-full pt-6 top-0 z-50 px-6 pointer-events-none"
      >
        <nav className="relative mx-auto max-w-7xl border border-gray-100 p-3 h-16 md:h-20 rounded-full flex items-center justify-between bg-white/60 backdrop-blur-xl pointer-events-auto shadow-sm">
          <div className="flex items-center gap-2 pl-4">
            <Image src="/nav.png" alt="logo" width={24} height={24} />
            <span className="text-xl font-black tracking-tighter uppercase">Liminal</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">{item.name}</a>
            ))}
          </div>
          <div className="flex items-center gap-3 pr-2">
            <button onClick={() => setIsOpen(true)} className="md:hidden p-2"><GiHamburgerMenu size={22} /></button>
            <button className="px-6 py-2.5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">Start</button>
          </div>
        </nav>
      </motion.header>

      {/* --- 2. BOTTOM DOCK --- */}
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

      {/* --- HERO SECTION --- */}
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
            <HiOutlineSparkles className="text-green-500" /> Independent Education OS
          </div>
          <h1 className="text-[4.5rem] md:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase">
            THE ART <br /> 
            <span className="text-pink-400 italic font-serif font-light lowercase">of self</span> <br />
            EXILE.
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
              className="px-12 py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-black/20 flex items-center gap-3"
            >
              Begin Journey <HiOutlineAcademicCap size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 text-gray-300">
          <HiOutlineChevronDoubleDown size={24} />
        </motion.div>
      </section>

      {/* Spacer to allow for scroll testing */}
     
    </div>
  );
}