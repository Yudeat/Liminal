'use client';
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const testimonials = [
  {
    quote: "Liminal didn't just help me apply; it taught me how the system actually works. I saved $3,000 in agency fees.",
    author: "Arjun M.",
    uni: "University of Toronto",
    rating: "5.0",
    flag: "CA",
  },
  {
    quote: "The DIY Visa Kit is surgical. My interview lasted 3 minutes because my documentation was flawless.",
    author: "Sofia R.",
    uni: "LMU Munich",
    rating: "4.9",
    flag: "DE",
  },
  {
    quote: "Finally, a platform that respects student autonomy. No pushy sales, just pure data and clear roadmaps.",
    author: "James L.",
    uni: "University of Sydney",
    rating: "5.0",
    flag: "AU",
  },
];

const universities = ["Oxford", "Stanford", "MIT", "ETH Zürich", "Toronto", "NUS", "Imperial"];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function RatingSection() {
  return (
    <section className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20 items-end">
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] text-white/30"
            >
              Audited Success
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.88] text-white"
            >
              Verified by the
              <br />
              <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                boldest
              </em>{" "}
              students.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-2"
          >
            <div className="flex gap-1 text-[#e8c4a0] text-lg">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="text-[11px] font-black uppercase tracking-widest text-white/25">
              4.9 / 5 Average Global Rating
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="group relative bg-white/[0.03] border border-white/8 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-white/14 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <HiOutlineQuestionMarkCircle className="text-white/10 text-3xl group-hover:text-[#e8c4a0]/20 transition-colors" />
                <p className="text-white/50 text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/6 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-tight text-white">{t.author}</h4>
                  <p className="text-[11px] font-bold text-white/25 uppercase tracking-widest mt-0.5">{t.uni}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaStar className="text-[#e8c4a0] text-xs" />
                  <span className="text-[11px] font-black text-white/40">{t.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* University logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/5 pt-12 flex flex-wrap justify-center md:justify-between items-center gap-8"
        >
          {universities.map((uni) => (
            <span
              key={uni}
              className="text-sm font-black tracking-tighter uppercase text-white/10 hover:text-white/20 transition-colors"
            >
              {uni}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
