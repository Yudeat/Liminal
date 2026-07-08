'use client';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

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
    question: "How does the step-by-step guidance work?",
    answer: "Once you check your eligibility, Exile generates a custom timeline. From 'Day 1: Document Checklist' to 'Day 45: Visa Interview Prep,' we provide templates, tutorials, and AI reviews for every single milestone."
  },
  {
    question: "Does Exile help with the visa process?",
    answer: "Yes. We guide you through the financial documentation requirements and provide a DIY Visa Kit that explains exactly how to book your appointment and what to say during your interview."
  },
  {
    question: "What if I get stuck while doing it myself?",
    answer: "While Exile is designed for self-sufficiency, you're never alone. You can access our Emergency Review feature where a human expert double-checks your work before you hit submit."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f2f2f0] py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-16 md:gap-24 items-start">

        {/* Left */}
        <div className="md:sticky md:top-32">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 mb-5">FAQ</p>
          <h2 className="text-3xl font-black tracking-tight text-black leading-tight mb-8">
            Key considerations<br />for your Exile<br />journey
          </h2>
          <button className="inline-flex items-center gap-2 border border-black/20 text-black/60 text-[10px] font-black uppercase tracking-widest px-4 py-2.5 hover:border-black/50 hover:text-black transition-all">
            + Request guidance
          </button>
        </div>

        {/* Right: accordion */}
        <div className="divide-y divide-black/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#e879a0] text-sm leading-none">↳</span>
                  <span className={`text-sm font-semibold transition-colors ${activeIndex === i ? "text-black" : "text-black/60 group-hover:text-black"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`w-6 h-6 shrink-0 flex items-center justify-center border transition-all ${activeIndex === i ? "border-black bg-black text-white" : "border-black/20 text-black/40"}`}>
                  {activeIndex === i ? <HiMinus size={11} /> : <HiPlus size={11} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pl-6 pb-5 text-sm text-black/55 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
