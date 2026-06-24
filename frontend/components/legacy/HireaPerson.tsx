'use client';
import { motion } from "framer-motion";
import { HiOutlineUserGroup, HiOutlineArrowUpRight, HiOutlineStar } from "react-icons/hi2";

const experts = [
  { initials: "AK", name: "Anika K.", role: "Admissions Strategist", spec: "Ivy League & UK" },
  { initials: "MR", name: "Marcus R.", role: "Visa Architect", spec: "Schengen & North America" },
  { initials: "LP", name: "Lyra P.", role: "SOP Specialist", spec: "Graduate Programs" },
];

export default function HireaPerson() {
  return (
    <section className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] text-white/30"
            >
              <HiOutlineUserGroup size={12} />
              The Human Element
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-[0.9] uppercase"
            >
              Prefer a human
              <br />
              <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                expert touch?
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/40 text-lg leading-relaxed"
            >
              While our AI is surgical in its precision, some paths require nuanced judgment.
              Connect with a seasoned strategist to navigate the complexities of global admission.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#e8c4a0] transition-all duration-300 active:scale-95"
            >
              Book a Consultation
              <HiOutlineArrowUpRight size={14} className="group-hover:rotate-12 transition-transform" />
            </motion.button>

            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">
              Experience Meets Intuition
            </p>
          </div>

          {/* Right: Expert cards */}
          <div className="space-y-3">
            {experts.map((expert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-5 bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:bg-white/[0.05] hover:border-white/12 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8c4a0]/10 border border-[#e8c4a0]/15 flex items-center justify-center text-[#e8c4a0] text-xs font-black uppercase tracking-wide shrink-0">
                  {expert.initials}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">{expert.name}</h4>
                  <p className="text-[11px] text-white/30 font-medium">{expert.role} &mdash; {expert.spec}</p>
                </div>
                <div className="flex items-center gap-1 text-[#e8c4a0]/50">
                  <HiOutlineStar size={13} />
                  <span className="text-[11px] font-black text-white/25">5.0</span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center pt-3"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/20">
                + 24 more specialists available
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
