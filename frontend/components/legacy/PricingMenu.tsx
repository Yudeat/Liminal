'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Free",
    price: "$0",
    label: "Entry-level access",
    desc: "1 university target · 1 application draft · community access",
  },
  {
    name: "Elite",
    price: "$4,999",
    label: "Full migration suite",
    desc: "Unlimited universities · visa management · 1-on-1 strategy calls",
  },
  {
    name: "Custom",
    price: "Let's talk",
    label: "Bespoke journey",
    desc: "Dedicated mentor · custom roadmap · flexible terms",
  },
];

export default function PricingPage() {
  return (
    <section id="price" className="bg-[#0c0c0a] py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Top: headline + image */}
        <div className="flex items-start justify-between gap-8 pb-16 border-b border-white/8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] max-w-xl"
          >
            For every student,<br />
            there is a{" "}
            <em className="font-serif font-light not-italic italic text-[#f9a8d4]">
              system
            </em>{" "}
            built<br />
            around their journey.
          </motion.h2>

          <div className="relative w-32 h-24 md:w-44 md:h-32 shrink-0 overflow-hidden">
            <Image src="/hero-2.png" alt="" fill className="object-cover" sizes="176px" />
          </div>
        </div>

        {/* Plan rows */}
        <div
          className="grid gap-x-12"
          style={{ gridTemplateColumns: "220px 1fr auto" }}
        >
          {/* Left description — spans all rows */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="row-span-3 text-xs leading-relaxed text-white/45 pt-6 pr-8 max-w-[180px]"
          >
            From independent explorers to high-stakes global migrations — choose the tier that matches your ambition and timeline.
          </motion.p>

          {plans.map((plan, i) => (
            <React.Fragment key={plan.name}>
              {/* Price */}
              <motion.div
                key={`price-${i}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/8 py-7"
              >
                <span className="text-6xl md:text-7xl font-black tracking-tighter text-white leading-none">
                  {plan.price}
                </span>
              </motion.div>

              {/* Label */}
              <motion.div
                key={`label-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.05 }}
                className="border-t border-white/8 py-7 flex flex-col justify-center"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-1">
                  {plan.name} — {plan.label}
                </p>
                <p className="text-xs text-white/35">{plan.desc}</p>
              </motion.div>
            </React.Fragment>
          ))}

        </div>

        {/* CTA row */}
        <div className="mt-12 flex gap-4" style={{ marginLeft: "calc(220px + 3rem)" }}>
          <a
            href="#"
            className="text-[10px] font-black uppercase tracking-widest text-white border border-white/15 px-6 py-3 hover:border-white/40 transition-colors"
          >
            Get Started Free
          </a>
          <a
            href="#"
            className="text-[10px] font-black uppercase tracking-widest bg-[#f9a8d4] text-black px-6 py-3 hover:bg-[#f472b6] transition-colors"
          >
            Initiate Exile →
          </a>
        </div>

      </div>
    </section>
  );
}
