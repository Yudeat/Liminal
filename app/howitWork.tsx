'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineFingerPrint,
  HiOutlineCommandLine,
  HiOutlineGlobeAlt,
  HiOutlineRocketLaunch,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

const steps = [
  {
    title: "System Audit",
    desc: "We analyze your academic trajectory and professional intent using our proprietary DIY logic. No middlemen, just data.",
    icon: HiOutlineFingerPrint,
    tag: "Phase 01",
    accent: "#e8c4a0",
  },
  {
    title: "Surgical Design",
    desc: "Architect a custom roadmap that bypasses traditional agency noise. You own the process; we provide the blueprint.",
    icon: HiOutlineCommandLine,
    tag: "Phase 02",
    accent: "#c45080",
  },
  {
    title: "Global Deployment",
    desc: "Launch your journey across international borders with surgical precision. Secure your exile on your own terms.",
    icon: HiOutlineGlobeAlt,
    tag: "Phase 03",
    accent: "#80c4a0",
  },
  {
    title: "Autonomous Growth",
    desc: "Scale your skills within a decentralized network of global students. The system is now yours to operate.",
    icon: HiOutlineRocketLaunch,
    tag: "Phase 04",
    accent: "#a080e8",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-5"
            >
              The Protocol
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.88]"
            >
              How it{" "}
              <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                works.
              </em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/30 max-w-xs text-base leading-relaxed"
          >
            Four phases. Zero agents. Complete ownership of your global trajectory.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-10 hover:bg-white/[0.05] hover:border-white/14 transition-all duration-500 overflow-hidden"
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle, ${step.accent}12 0%, transparent 70%)` }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.28em]"
                      style={{ color: `${step.accent}99` }}
                    >
                      {step.tag}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl border flex items-center justify-center"
                      style={{ borderColor: `${step.accent}25`, color: `${step.accent}99` }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/35 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Large bg number */}
                <span className="absolute -bottom-4 -right-2 text-[7rem] font-black leading-none text-white/[0.025] pointer-events-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/[0.03] border border-white/8 rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(232,196,160,0.06) 0%, transparent 60%)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3">
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                Ready to initiate{" "}
                <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                  your exile?
                </em>
              </h4>
              <p className="text-white/30 text-sm">Four phases from audit to autonomous growth.</p>
            </div>
            <button className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#e8c4a0] transition-all duration-300 active:scale-95">
              Get Started Now
              <HiOutlineArrowUpRight size={14} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
