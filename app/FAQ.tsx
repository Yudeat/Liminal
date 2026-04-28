// frequently asked questions
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus, HiOutlineSparkles, HiOutlineArrowLongRight } from "react-icons/hi2";

const faqs = [
  {
    question: "What exactly is Exile?",
    answer: "Exile is an end-to-end roadmap for studying abroad. We aren't a traditional agency that takes over your application; we are a digital guide that provides the tools, data, and step-by-step instructions so you can successfully navigate the process yourself."
  },
  {
    question: "Can I really handle the application without an agent?",
    answer: "Absolutely. Most agents use the same public information we've digitized. Exile breaks down complex tasks—like SOP writing, visa filing, and university shortlisting—into manageable daily steps tailored to your specific profile."
  },
  {
    question: "How does the 'Step-by-Step' guidance work?",
    answer: "Once you check your eligibility, Exile generates a custom timeline. From 'Day 1: Document Checklist' to 'Day 45: Visa Interview Prep,' we provide templates, tutorials, and AI reviews for every single milestone."
  },
  {
    question: "Does Exile help with the Visa process?",
    answer: "Yes. We guide you through the financial documentation requirements and provide a 'DIY Visa Kit' that explains exactly how to book your appointment and what to say during your interview."
  },
  {
    question: "What if I get stuck while doing it myself?",
    answer: "While Exile is designed for self-sufficiency, you're never alone. You can access our 'Emergency Review' feature where a human expert double-checks your work before you hit submit."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/8 text-white/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em]">
            <HiOutlineSparkles className="text-[#e8c4a0]" /> The DIY Revolution
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.88] uppercase">
            You are the{" "}
            <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">pilot.</em>
            <br />
            We are the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">GPS.</span>
              <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#e8c4a0]/20 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="text-white/35 text-lg font-medium max-w-xl mx-auto leading-relaxed">
            Stop paying thousands in agency commissions. Own your journey with surgical precision.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-400 ${
                activeIndex === index
                  ? "bg-white/[0.05] border border-white/12"
                  : "bg-white/[0.02] border border-white/6 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left gap-6"
              >
                <span className={`font-black text-base uppercase tracking-tight transition-colors ${
                  activeIndex === index ? "text-white" : "text-white/50 hover:text-white/80"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-7 h-7 flex items-center justify-center rounded-lg shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#e8c4a0] text-black"
                    : "bg-white/5 text-white/30"
                }`}>
                  {activeIndex === index ? <HiMinus size={13} /> : <HiPlus size={13} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-8 text-white/40 text-base font-medium leading-relaxed">
                      <div className="h-px w-full bg-white/5 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/[0.03] border border-white/8 rounded-3xl p-10 md:p-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(232,196,160,0.05) 0%, transparent 60%)" }}
          />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="inline-block text-[#80c4a0] font-black tracking-[0.3em] uppercase text-[10px]">
                Final Protocol
              </span>
              <h2 className="text-4xl md:text-5xl text-white font-black leading-[0.88] tracking-tighter uppercase">
                Don&apos;t just dream
                <br />
                <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">elsewhere.</em>
                <br />
                Navigate there.
              </h2>
              <p className="text-white/30 text-base font-medium leading-relaxed max-w-xs">
                The bridge between your current desk and your future campus. No middlemen, no mystery.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-5">
              <button className="group inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all hover:bg-[#e8c4a0] active:scale-95">
                Begin Journey
                <HiOutlineArrowLongRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
                Free to start &bull; Precision to finish
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
