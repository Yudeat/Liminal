'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiOutlineMap, HiOutlineFingerPrint, HiOutlineSun } from "react-icons/hi2";

export default function WhatIsLiminal() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-white text-black font-sans selection:bg-pink-100">
      

      
      {/* 2. THE DUALITY: STUDENT & TRAVELLER */}
      <section className="py-32 bg-black text-white rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-pink-400">
              <HiOutlineSun size={24} />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">For the Student</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Education shouldn't be a cage. We treat university applications like a mission. 
              No agents taking commissions. No generic advice. We give you the surgical 
              tools to hack the system and place yourself in the world’s elite institutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-blue-400">
              <HiOutlineMap size={24} />
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter">For the Traveller</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Travel isn't a vacation; it's an exile from the ordinary. We build the visa logic, 
              the logistical blueprints, and the community support to ensure your migration 
              is seamless. You provide the destination; we provide the precision.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 3. THE PHILOSOPHY: SURGICAL PRECISION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <HiOutlineFingerPrint size={60} className="text-gray-200 mb-8" />
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              We don't do <br />
              <span className="italic font-serif font-light lowercase text-pink-400">agencies.</span>
            </h2>
          </div>

          <div className="space-y-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="text-[12rem] font-black text-gray-50 leading-none">01</div>
              <div>
                <h4 className="text-2xl font-black uppercase mb-4">No Middlemen</h4>
                <p className="text-gray-500 text-lg">
                  Traditional agents get paid by universities to "sell" you to them. 
                  Exile is paid by you to build you. Our loyalty is to your trajectory alone.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="text-[12rem] font-black text-gray-50 leading-none">02</div>
              <div className="md:text-right">
                <h4 className="text-2xl font-black uppercase mb-4">Total Autonomy</h4>
                <p className="text-gray-500 text-lg">
                  We give you the blueprints, the drafts, and the data. You hit the "deploy" button. 
                  By the time you reach your destination, you aren't just a student—you're an architect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION: JOIN THE EXILE */}
      <section className="py-32 flex justify-center items-center">
        <motion.div 
          whileHover={{ scale: 0.98 }}
          className="bg-pink-400 w-full max-w-4xl p-20 rounded-[4rem] text-center text-white cursor-pointer"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Start your <br /> exile today.
          </h2>
          <button className="bg-black text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
            Begin Journey
          </button>
        </motion.div>
      </section>

    </div>
  );
}