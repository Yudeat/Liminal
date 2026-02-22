'use client';
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function CallMenu() {
  return (
    <section className="relative overflow-hidden bg-white border-y border-gray-100 px-6 py-24 md:px-12 lg:px-24">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9]">
            Ready to lead your <br className="hidden md:block" />
            <span className="text-pink-400 italic font-serif font-light lowercase">departure?</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            <p>
              Join thousands of students navigating their future independently. 
              <span className="block text-black">Map your journey for free today.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-12 py-5 rounded-2xl bg-black text-white text-sm font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-gray-900 active:scale-95 shadow-xl shadow-black/10">
              <span className="relative z-10 flex items-center gap-3">
                Start for Free <HiOutlineArrowLongRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <button className="px-12 py-5 rounded-2xl bg-white text-black border border-gray-200 text-sm font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
              Talk to an Expert
            </button>
          </div>
          
          <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
            No Credit Card Required • Global Coverage
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}