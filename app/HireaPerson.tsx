'use client';
import { motion } from "framer-motion";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function HireaPerson() {
  return (
    <section className="relative overflow-hidden bg-white border-y border-gray-100 px-6 py-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500"
          >
            <HiOutlineUserGroup size={14} />
            The Human Element
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight">
            Prefer a human touch? <br />
            <span className="text-pink-400 italic font-serif font-light">Consult with an expert.</span>
          </h2>
          
          <p className="text-lg text-gray-500 leading-relaxed font-medium">
            While our AI is surgical in its precision, some paths require nuanced judgment. 
            Connect with a seasoned strategist to navigate the complexities of global admission.
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
          <button className="relative group overflow-hidden bg-black text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:bg-gray-900 active:scale-95 shadow-xl shadow-black/10">
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <div className="text-right">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest italic">
              Experience Meets Intuition.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}