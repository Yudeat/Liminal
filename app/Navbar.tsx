'use client';
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser, FaCheck } from "react-icons/fa6";
import { HiOutlineAcademicCap, HiOutlineCalculator } from "react-icons/hi2";
import SparkleNavbar from '@/components/lightswind/sparkle-navbar';
import { motion } from "framer-motion";

// Your existing animation variants
const fadeUp = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  },
};

const itemAnimate = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.8 }
  }
}

export default function LandingPage() {
  const [budget, setBudget] = useState(20000);

  return (
    <div className="relative min-h-screen w-full bg-white text-black overflow-x-hidden">
      
      {/* Sticky Navbar */}
      <div className="sticky w-full pt-4 top-0 z-50 px-4">
        <nav className="relative mx-auto max-w-7xl border p-4 h-auto md:h-20 rounded-3xl md:rounded-full flex items-center justify-between bg-white/80 backdrop-blur-md text-black border-gray-200 shadow-sm">
          <div className="flex items-center text-xl md:text-2xl font-bold">
            <Image src="/nav.png" alt="logo" width={32} height={32} />
            <span className="ml-2 text-black">Liminal</span>
          </div>

          <div className="hidden md:block">
            <SparkleNavbar
              items={['Home', 'Services', 'Docs', 'Refund', 'Contact']}
              color="#2CFF05"
            />
          </div>

          <section className="flex items-center gap-4">
            <div className="md:hidden">
              <GiHamburgerMenu size={24} />
            </div>
            <div className="hidden md:flex text-2xl">
              <FaRegCircleUser />
            </div>
          </section>
        </nav>
      </div>

      {/* Main Hero Content */}
      <motion.main 
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pt-16 pb-24 items-center"
      >
        
        {/* Left Side: Copy */}
        <div className="space-y-8">
          <motion.div variants={itemAnimate} className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            AI-Driven Admission Insights
          </motion.div>

          <motion.h1 variants={itemAnimate} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Your global <br /> 
            <span className="text-gray-400 italic">education</span> starts <br />
            with <span className="underline decoration-green-400">Liminal.</span>
          </motion.h1>

          <motion.p variants={itemAnimate} className="text-lg text-gray-600 max-w-md">
            Instantly check your eligibility for top-tier universities worldwide based on your grades, test scores, and financial goals.
          </motion.p>

          <motion.div variants={itemAnimate} className="flex flex-col gap-3">
            {['No hidden fees', 'Verified by 200+ Institutions', 'Real-time results'].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                <FaCheck className="text-green-500" /> {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Eligibility Form */}
        <motion.div variants={itemAnimate} className="relative">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gray-50 rounded-[40px] -z-10 border border-gray-100" />
          
          <div className="bg-white border border-gray-200 p-8 rounded-[32px] shadow-2xl shadow-gray-200/50">
            <div className="flex items-center gap-3 mb-8">
              <HiOutlineCalculator className="text-3xl text-black" />
              <h2 className="text-xl font-bold">Eligibility Checker</h2>
            </div>

            <form className="space-y-6">
              {/* Degree Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {['Bachelors', 'Masters'].map((lvl) => (
                  <button key={lvl} type="button" className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${lvl === 'Masters' ? 'bg-white shadow-sm' : 'text-gray-500'}`}>
                    {lvl}
                  </button>
                ))}
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">GPA (4.0 Scale)</label>
                  <input type="number" placeholder="3.80" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">IELTS Score</label>
                  <input type="number" placeholder="7.5" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all" />
                </div>
              </div>

              {/* Budget Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest text-left">Max Annual Budget</label>
                  <span className="font-bold text-sm">${budget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="5000" max="80000" step="1000" 
                  value={budget} 
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" 
                />
              </div>

              <button className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Analyze My Chances <HiOutlineAcademicCap className="text-xl" />
              </button>
            </form>
          </div>
        </motion.div>

      </motion.main>
    </div>
  );
}