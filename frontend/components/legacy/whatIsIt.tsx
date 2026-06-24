'use client';

import React, { useRef } from 'react';
import { HiOutlineMap, HiOutlineFingerPrint, HiOutlineSun, HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function WhatIsLiminal() {
  return (
    <div className="bg-[#080808] text-white font-sans">

      {/* For the Student / For the Traveller */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-16"
          >
            Who We Serve
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(232,196,160,0.08) 0%, transparent 70%)" }} />
              <div className="relative z-10 space-y-6">
                <div className="w-11 h-11 rounded-xl bg-[#e8c4a0]/10 border border-[#e8c4a0]/20 flex items-center justify-center text-[#e8c4a0]">
                  <HiOutlineSun size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25 mb-3">
                    For the Student
                  </p>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-tight mb-5">
                    Own Your Application
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed">
                    Education shouldn&apos;t be a cage. We treat university applications like a mission —
                    no agents taking commissions, no generic advice. We give you surgical tools
                    to place yourself in the world&apos;s elite institutions.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#e8c4a0]/70 group-hover:text-[#e8c4a0] transition-colors">
                    Learn More <HiOutlineArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.12 } } }}
              className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(200,80,120,0.06) 0%, transparent 70%)" }} />
              <div className="relative z-10 space-y-6">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                  <HiOutlineMap size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25 mb-3">
                    For the Traveller
                  </p>
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-tight mb-5">
                    Precision Migration
                  </h3>
                  <p className="text-white/40 text-base leading-relaxed">
                    Travel isn&apos;t a vacation — it&apos;s an exile from the ordinary. We build the
                    visa logic, logistical blueprints, and community support to ensure your
                    migration is seamless. You provide the destination; we provide the precision.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    Explore <HiOutlineArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left: Heading */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <HiOutlineFingerPrint size={40} className="text-white/15 mb-8" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-6">
                  The Philosophy
                </p>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] text-white">
                  We don&apos;t do
                  <br />
                  <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                    agencies.
                  </em>
                </h2>
              </motion.div>
            </div>

            {/* Right: Principles */}
            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "No Middlemen",
                  desc: "Traditional agents get paid by universities to 'sell' you to them. Exile is paid by you to build you. Our loyalty is to your trajectory alone.",
                },
                {
                  num: "02",
                  title: "Total Autonomy",
                  desc: "We give you the blueprints, the drafts, and the data. You hit the 'deploy' button. By the time you reach your destination, you aren't just a student — you're an architect.",
                },
                {
                  num: "03",
                  title: "Radical Transparency",
                  desc: "Every step of the process is documented, every fee is disclosed, every decision is yours to make. No hidden playbooks, no surprises.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
                  className="flex gap-8 items-start group"
                >
                  <span className="text-[3.5rem] font-black text-white/6 leading-none shrink-0 group-hover:text-white/10 transition-colors">
                    {item.num}
                  </span>
                  <div className="pt-2 border-t border-white/8 flex-1 space-y-3">
                    <h4 className="text-lg font-black uppercase tracking-tight text-white">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative bg-[#e8c4a0] rounded-3xl p-16 md:p-24 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] text-black">
                Start your <br />
                <em className="italic font-serif font-light lowercase">exile today.</em>
              </h2>
              <button className="shrink-0 bg-black text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#1a1a1a] transition-all active:scale-95 shadow-xl shadow-black/20">
                Begin Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
