'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaXmark, FaBolt, FaShieldHalved, FaCrown } from "react-icons/fa6";

const plans = [
  {
    name: "Basic",
    price: "0",
    desc: "Entry-level system access for independent explorers.",
    features: ["1 University Target", "1 Application Draft", "Standard Community Access", "Basic Protocol Docs"],
    notIncluded: ["Priority Support", "Visa Architecture", "Direct Mentorship"],
    icon: <FaBolt className="text-gray-400" />,
    button: "Get Started",
    highlight: false
  },
  {
    name: "Tactical",
    price: "999",
    desc: "Surgical precision for focused deployments.",
    features: ["5 University Targets", "3 Application Drafts", "Visa Logic Blueprint", "Email Support", "Digital Archive Access"],
    icon: <FaShieldHalved className="text-blue-500" />,
    button: "Deploy Now",
    highlight: false
  },
  {
    name: "Elite",
    price: "3,999",
    desc: "The standard for high-probability global success.",
    features: ["Unlimited Universities", "Unlimited Draft Reviews", "Full Visa Management", "1-on-1 Strategy Calls", "Priority Processing"],
    icon: <FaCrown className="text-pink-400" />,
    button: "Initiate Exile",
    highlight: true
  },
  {
    name: "Sovereign",
    price: "7,999",
    desc: "Full white-glove autonomous migration.",
    features: ["Everything in Elite", "Concierge Documentation", "Post-Arrival Support", "Private Network Access", "Lifetime System Updates"],
    icon: <FaCrown className="text-yellow-500" />,
    button: "Full Autonomy",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <section id="price" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4"
          >
            Investment Tiers
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Choose your <span className="italic font-serif font-light lowercase text-pink-400">protocol.</span>
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border ${
                plan.highlight 
                  ? 'border-black bg-black text-white shadow-2xl scale-105 z-10' 
                  : 'border-gray-100 bg-gray-50/50 text-black'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-400 text-white text-[8px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Deployed
                </div>
              )}

              <div className="mb-8">
                <div className="mb-4 text-2xl">{plan.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-xs font-bold uppercase {plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>/one-time</span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheck className={plan.highlight ? 'text-pink-400' : 'text-green-500'} size={12} />
                    <span className="text-xs font-medium tracking-tight">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 opacity-30">
                    <FaXmark size={12} />
                    <span className="text-xs font-medium tracking-tight line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                plan.highlight 
                  ? 'bg-white text-black hover:bg-pink-400' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center border-t border-gray-100 pt-12"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 flex items-center justify-center gap-4">
            Secure Payment via Stripe <span className="h-1 w-1 bg-gray-300 rounded-full" /> No Hidden Fees <span className="h-1 w-1 bg-gray-300 rounded-full" /> 256-bit Encryption
          </p>
        </motion.div>
      </div>
    </section>
  );
}