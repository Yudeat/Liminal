'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiOutlineArrowLongRight, HiMinus, HiOutlineSparkles } from "react-icons/hi2";

const faqs = [
  {
    question: "What exactly is Liminal?",
    answer: "Liminal is an end-to-end roadmap for studying abroad. We aren't a traditional agency that takes over your application; we are a digital guide that provides the tools, data, and step-by-step instructions so you can successfully navigate the process yourself."
  },
  {
    question: "Can I really handle the application without an agent?",
    answer: "Absolutely. Most agents use the same public information we’ve digitized. Liminal breaks down complex tasks—like SOP writing, visa filing, and university shortlisting—into manageable daily steps tailored to your specific profile."
  },
  {
    question: "How does the 'Step-by-Step' guidance work?",
    answer: "Once you check your eligibility, Liminal generates a custom timeline. From 'Day 1: Document Checklist' to 'Day 45: Visa Interview Prep,' we provide templates, tutorials, and AI reviews for every single milestone."
  },
  {
    question: "Does Liminal help with the Visa process?",
    answer: "Yes. We guide you through the financial documentation requirements and provide a 'DIY Visa Kit' that explains exactly how to book your appointment and what to say during your interview."
  },
  {
    question: "What if I get stuck while doing it myself?",
    answer: "While Liminal is designed for self-sufficiency, you're never alone. You can access our 'Emergency Review' feature where a human expert double-checks your work before you hit submit."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-32 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* DIY Branding Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-gray-100">
            <HiOutlineSparkles className="text-green-500" /> The DIY Revolution
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] uppercase">
            You are the <span className="text-pink-400 italic font-serif font-light lowercase">pilot.</span> <br/> 
            We are the <span className="underline decoration-green-400 decoration-8 underline-offset-8">GPS.</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Stop paying thousands in agency commissions. Own your journey with surgical precision.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-32">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`group transition-all duration-500 rounded-3xl ${
                activeIndex === index ? 'bg-gray-50' : 'bg-white border border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className={`font-black text-lg uppercase tracking-tight transition-colors ${activeIndex === index ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-black text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                  {activeIndex === index ? <HiMinus size={16} /> : <HiPlus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-10 text-gray-500 text-lg font-medium leading-relaxed antialiased">
                      <div className="h-px w-full bg-gray-200/50 mb-8" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Call to Action: The DIY Promise */}
        <div className="relative group">
          {/* Subtle Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-[48px] blur-2xl opacity-50 transition duration-1000"></div>

          <div className="relative bg-black rounded-[48px] p-10 md:p-20 overflow-hidden shadow-2xl">
            {/* Architectural Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-block text-green-400 font-black tracking-[0.3em] uppercase text-[10px]">
                  Final Protocol
                </span>
                
                <h2 className="text-5xl md:text-6xl text-white font-black leading-[0.9] tracking-tighter uppercase">
                  Don’t just dream <br />
                  <span className="text-pink-400 italic font-serif font-light lowercase">elsewhere.</span> <br />
                  Navigate there.
                </h2>

                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm">
                  The bridge between your current desk and your future campus. No middlemen, no mystery.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-end justify-center gap-6">
                <button className="group relative w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-gray-100 active:scale-95 shadow-xl shadow-white/5">
                  Begin Journey
                  <HiOutlineArrowLongRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  Free to start • Precision to finish
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}