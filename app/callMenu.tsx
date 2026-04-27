'use client';
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function CallMenu() {
  return (
    <section className="bg-[#080808] px-6 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.03] border border-white/8 rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          {/* Ambient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(232,196,160,0.07) 0%, transparent 55%)" }}
          />
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(232,196,160,0.3), transparent)" }}
          />

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25">
              Ready for Departure
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.88] uppercase">
              Ready to lead your
              <br />
              <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                departure?
              </em>
            </h2>

            <p className="text-white/35 text-lg max-w-xl mx-auto leading-relaxed font-medium">
              Join thousands of students navigating their future independently.{" "}
              <span className="text-white/60">Map your journey for free today.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-[#e8c4a0] transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.07)]">
                Start for Free
                <HiOutlineArrowLongRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="px-10 py-4 rounded-xl border border-white/10 text-white/40 font-black text-[11px] uppercase tracking-widest hover:border-white/25 hover:text-white/70 transition-all duration-300">
                Talk to an Expert
              </button>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/15">
              No Credit Card Required &bull; Global Coverage
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
