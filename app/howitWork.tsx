'use client';

import { motion } from 'framer-motion';
import { 
  HiOutlineFingerPrint, 
  HiOutlineCommandLine, 
  HiOutlineGlobeAlt, 
  HiOutlineRocketLaunch 
} from "react-icons/hi2";

const steps = [
  {
    title: "System Audit",
    desc: "We analyze your academic trajectory and professional intent using our proprietary DIY logic. No middlemen, just data.",
    icon: <HiOutlineFingerPrint size={32} />,
    color: "bg-blue-500"
  },
  {
    title: "Surgical Design",
    desc: "Architect a custom roadmap that bypasses traditional agency noise. You own the process; we provide the blueprint.",
    icon: <HiOutlineCommandLine size={32} />,
    color: "bg-pink-400"
  },
  {
    title: "Global Deployment",
    desc: "Launch your journey across international borders with surgical precision. Secure your exile on your own terms.",
    icon: <HiOutlineGlobeAlt size={32} />,
    color: "bg-green-400"
  },
  {
    title: "Autonomous Growth",
    desc: "Scale your skills within a decentralized network of global students. The system is now yours to operate.",
    icon: <HiOutlineRocketLaunch size={32} />,
    color: "bg-black"
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-24 bg-white/70 overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-100 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8b1e3f] mb-4"
          >
            The Protocol
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#4b1227]"
          >
            How it <span className="italic font-serif font-light lowercase text-[#7a1e39]">works.</span>
          </motion.h2 >
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-12 mb-32 ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image/Icon Block */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center justify-center shadow-inner"
                >
                  <div className={`absolute inset-0 opacity-5 rounded-[3rem] ${step.color}`} />
                  <div className="text-black relative z-10 scale-150">
                    {step.icon}
                  </div>
                  {/* Decorative Number */}
                  <span className="absolute -top-4 -left-4 text-8xl font-black text-gray-100 -z-10">
                    0{i + 1}
                  </span>
                </motion.div>
              </div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`flex items-center gap-4 mb-4 justify-center md:justify-start`}>
                  <div className={`w-10 h-1 ${step.color}`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#7a2f47]">
                    Phase 0{i + 1}
                  </span>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tight mb-6 text-[#4b1227]">
                  {step.title}
                </h3>
                <p className="text-xl text-[#5d2d3f] font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 p-12 bg-black rounded-[4rem] text-center text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[100px]" />
          <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 relative z-10">
            Ready to initiate <br />
            <span className="text-pink-400 italic font-serif font-light lowercase">your exile?</span>
          </h4>
          <button className="px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-pink-400 transition-colors relative z-10">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}