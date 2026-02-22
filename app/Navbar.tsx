'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser, FaCheck } from "react-icons/fa6";
import SparkleNavbar from '@/components/lightswind/sparkle-navbar';

// --- Modern Spring Animation Variants ---
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15, // Lower damping = more bounce
  mass: 1
};

const containerVars = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.3 } 
  },
};

const bounceUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: springTransition
  }
};

const artBounce = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { ...springTransition, delay: 0.8 } 
  }
};

export default function BouncingHero() {
  return (
    <div className="relative min-h-screen w-full bg-white text-black overflow-hidden font-sans antialiased">
      
      {/* 🏛️ Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stucco.png')]" />

      {/* --- Navbar --- */}
      <header className="absolute w-full pt-6 top-0 z-50 px-6">
        <nav className="relative mx-auto max-w-7xl border border-gray-100 p-3 h-16 md:h-20 rounded-full flex items-center justify-between bg-white/60 backdrop-blur-xl shadow-sm">
          <div className="flex items-center gap-2 pl-4">
            <Image src="/nav.png" alt="logo" width={28} height={28} className="object-contain" />
            <span className="text-xl font-black tracking-tighter uppercase">Liminal</span>
          </div>

          <div className="hidden md:block">
            <SparkleNavbar items={['Vision', 'Process', 'Archive', 'Inquiry']} color="#2CFF05" />
          </div>

          <div className="flex items-center gap-4 pr-4">
            <button className="md:hidden"><GiHamburgerMenu size={22} /></button>
            <button className="p-2 border border-gray-100 rounded-full hover:bg-black hover:text-white transition-all">
                <FaRegCircleUser size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* --- Main Hero Content --- */}
      <motion.main 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center items-center text-center"
      >
        {/* Status Badge with Spring */}
        <motion.div variants={bounceUp} className="mb-8 inline-flex items-center gap-3 bg-gray-50 border border-gray-100 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase text-gray-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Protocol Active • 2026
        </motion.div>

        {/* Main Title with Layered Spring */}
        <motion.h1 variants={bounceUp} className="text-6xl md:text-[8.5rem] font-black tracking-tighter leading-[0.85] uppercase mb-10">
          THE ART <br /> 
          <motion.span 
            variants={artBounce}
            className="text-pink-400 italic font-serif font-light lowercase inline-block"
          >
            of self
          </motion.span> <br />
          <span className="relative inline-block">
            EXILE.
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
              className="absolute -bottom-2 left-0 h-[6px] md:h-[10px] bg-green-400" 
            />
          </span>
        </motion.h1>

        {/* Subtext with slight delay */}
        <motion.p variants={bounceUp} className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
          Design your global odyssey with surgical precision and classical autonomy. 
          No agents. Just your ambition, mapped.
        </motion.p>

        {/* CTA Stack */}
        <motion.div variants={bounceUp} className="flex flex-col sm:flex-row gap-6 items-center">
          <button className="px-12 py-6 bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform duration-300 shadow-2xl shadow-black/20">
            Begin Journey 
          </button>
          
          <div className="flex items-center gap-8">
             {['No Fees', 'DIY Logic'].map((text) => (
               <div key={text} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                 <FaCheck className="text-green-500" /> {text}
               </div>
             ))}
          </div>
        </motion.div>
      </motion.main>

      {/* 🎨 Bouncing Decorative Elements */}
      <motion.div 
        animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 bg-pink-50/50 blur-[100px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-green-50/50 blur-[120px] rounded-full -z-10" 
      />
    </div>
  );
}