// frequently asked questions
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus, HiOutlineSparkles } from "react-icons/hi2";

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
    <section className="bg-[#f2f2f0] py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-black/5 border border-black/8 text-black/50 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em]">
            <HiOutlineSparkles className="text-[#e879a0]" /> The DIY Revolution
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 space-y-5">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.88] uppercase">
            You are the{" "}
            <em className="italic font-serif font-light lowercase text-[#e879a0] not-italic italic">pilot.</em>
            <br />
            We are the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">GPS.</span>
              <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#e879a0]/15 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="text-black/55 text-lg font-medium max-w-xl mx-auto leading-relaxed">
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
                  ? "bg-white border border-black/10"
                  : "bg-black/[0.03] border border-black/6 hover:border-black/12"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left gap-6"
              >
                <span className={`font-black text-base uppercase tracking-tight transition-colors ${
                  activeIndex === index ? "text-black" : "text-black/50 hover:text-black/75"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-7 h-7 flex items-center justify-center rounded-lg shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#080808] text-white"
                    : "bg-black/5 text-black/40"
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
                    <div className="px-7 pb-8 text-black/60 text-base font-medium leading-relaxed">
                      <div className="h-px w-full bg-black/8 mb-6" />
                      {faq.answer}
                    </div>
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
