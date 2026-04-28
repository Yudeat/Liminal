'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaXmark } from "react-icons/fa6";
import { HiOutlineBolt, HiOutlineShieldCheck, HiOutlineStar, HiOutlineGlobeAlt } from "react-icons/hi2";

const plans = [
  {
    name: "Basic",
    price: "0",
    desc: "Entry-level system access for independent explorers.",
    features: ["1 University Target", "1 Application Draft", "Standard Community Access", "Basic Protocol Docs"],
    notIncluded: ["Priority Support", "Visa Architecture", "Direct Mentorship"],
    Icon: HiOutlineBolt,
    iconColor: "text-white/30",
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Tactical",
    price: "999",
    desc: "Surgical precision for focused deployments.",
    features: ["5 University Targets", "3 Application Drafts", "Visa Logic Blueprint", "Email Support", "Digital Archive Access"],
    notIncluded: [],
    Icon: HiOutlineShieldCheck,
    iconColor: "text-white/50",
    button: "Deploy Now",
    highlight: false,
  },
  {
    name: "Elite",
    price: "3,999",
    desc: "The standard for high-probability global success.",
    features: ["Unlimited Universities", "Unlimited Draft Reviews", "Full Visa Management", "1-on-1 Strategy Calls", "Priority Processing"],
    notIncluded: [],
    Icon: HiOutlineStar,
    iconColor: "text-[#e8c4a0]",
    button: "Initiate Exile",
    highlight: true,
  },
  {
    name: "Sovereign",
    price: "7,999",
    desc: "Full white-glove autonomous migration.",
    features: ["Everything in Elite", "Concierge Documentation", "Post-Arrival Support", "Private Network Access", "Lifetime System Updates"],
    notIncluded: [],
    Icon: HiOutlineGlobeAlt,
    iconColor: "text-white/40",
    button: "Full Autonomy",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <section id="price" className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/25 mb-5"
          >
            Investment Tiers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white"
          >
            Choose your{" "}
            <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
              protocol.
            </em>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#e8c4a0] text-black border border-[#e8c4a0] shadow-[0_20px_60px_rgba(232,196,160,0.2)] scale-[1.02] z-10"
                  : "bg-white/[0.03] border border-white/8 text-white hover:bg-white/[0.05] hover:border-white/14"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Deployed
                </div>
              )}

              <div className="mb-7">
                <div className={`mb-4 text-xl ${plan.highlight ? "text-black/60" : plan.iconColor}`}>
                  <plan.Icon size={22} />
                </div>
                <h3 className={`text-base font-black uppercase tracking-tight mb-1.5 ${plan.highlight ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-[10px] font-black ${plan.highlight ? "text-black/50" : "text-white/25"}`}>$</span>
                  <span className={`text-4xl font-black tracking-tighter ${plan.highlight ? "text-black" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-[10px] font-bold uppercase ${plan.highlight ? "text-black/40" : "text-white/20"}`}>
                    /one-time
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${plan.highlight ? "text-black/50" : "text-white/30"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-grow space-y-3 mb-7">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <FaCheck
                      className={plan.highlight ? "text-black/60" : "text-[#80c4a0]"}
                      size={10}
                    />
                    <span className={`text-xs font-medium ${plan.highlight ? "text-black/70" : "text-white/40"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.notIncluded?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 opacity-25">
                    <FaXmark size={10} />
                    <span className="text-xs font-medium line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 ${
                  plan.highlight
                    ? "bg-black text-white hover:bg-[#1a1a1a]"
                    : "bg-white/8 text-white hover:bg-white/15 border border-white/8"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center border-t border-white/5 pt-10"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 flex items-center justify-center gap-4 flex-wrap">
            Secure Payment via Stripe
            <span className="h-1 w-1 bg-white/15 rounded-full" />
            No Hidden Fees
            <span className="h-1 w-1 bg-white/15 rounded-full" />
            256-bit Encryption
          </p>
        </motion.div>

      </div>
    </section>
  );
}
