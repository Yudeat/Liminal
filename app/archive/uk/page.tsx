"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCurrencyPound,
  HiOutlineGlobeAlt,
  HiOutlineClock,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import EligibilityChecker from "@/frontend/components/archive/EligibilityChecker";
import UniversityGrid from "@/frontend/components/archive/UniversityGrid";
import { MatchResult, EligibilityProfile, ukAtAGlance, ukVisaSteps, ukTimeline } from "@/frontend/lib/archive-data";

const glanceStats = [
  { icon: HiOutlineAcademicCap, label: "Universities", value: `${ukAtAGlance.universities}+` },
  { icon: HiOutlineCurrencyPound, label: "Avg Tuition", value: `£${(ukAtAGlance.avgTuitionMin / 1000).toFixed(0)}k–£${(ukAtAGlance.avgTuitionMax / 1000).toFixed(0)}k/yr` },
  { icon: HiOutlineCurrencyPound, label: "London Maintenance", value: `£${ukAtAGlance.maintenanceLondon.toLocaleString()}/mo` },
  { icon: HiOutlineCurrencyPound, label: "Outside London", value: `£${ukAtAGlance.maintenanceOutside.toLocaleString()}/mo` },
  { icon: HiOutlineClock, label: "Visa Processing", value: `~${ukAtAGlance.visaProcessingWeeks} weeks` },
  { icon: HiOutlineBriefcase, label: "Post-Study Work", value: `${ukAtAGlance.postStudyWorkYears} years` },
  { icon: HiOutlineCalendar, label: "UCAS Deadline (UG)", value: ukAtAGlance.ugDeadline },
  { icon: HiOutlineGlobeAlt, label: "Visa Type", value: "UK Student Visa" },
];

const checklist = {
  Application: [
    "Valid passport (6+ months beyond course end)",
    "Academic transcripts (certified copies)",
    "English test results (IELTS / TOEFL)",
    "Statement of Purpose / Personal Statement",
    "Letters of Recommendation (2–3)",
    "CV / Resume (for postgraduate)",
    "Portfolio (Architecture, Arts)",
    "Proof of work experience (if required)",
  ],
  Visa: [
    "CAS number from your university",
    "Proof of funds (tuition + 9 months maintenance)",
    "Funds held for 28 consecutive days",
    "Academic Technology Approval Scheme (ATAS) — if required",
    "TB test results (if from listed country)",
    "IHS surcharge payment receipt",
    "Passport-sized photos",
  ],
  Arrival: [
    "Collect BRP within 10 days of arrival",
    "Register with a local GP (NHS)",
    "Open a UK bank account (Student account preferred)",
    "Register with the university",
    "Set up National Insurance Number (if working part-time)",
  ],
};

export default function UKArchivePage() {
  const [results, setResults] = useState<MatchResult[] | null>(null);
  const [profile, setProfile] = useState<EligibilityProfile | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function handleResults(r: MatchResult[], p: EligibilityProfile) {
    setResults(r);
    setProfile(p);
    setTimeout(() => {
      document.getElementById("universities")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans antialiased">
      {/* Nav back */}
      <div className="px-6 pt-8 max-w-7xl mx-auto flex items-center gap-3">
        <Link
          href="/archive"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/50 hover:text-white transition-colors"
        >
          ← Archive
        </Link>
        <span className="text-white/15">/</span>
        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/30">
          🇬🇧 United Kingdom
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-6xl block mb-6"
            >
              🇬🇧
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-4"
            >
              Country Archive
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] text-white mb-6"
            >
              United{" "}
              <em className="italic font-serif font-light lowercase text-[#f9a8d4] not-italic italic">
                Kingdom.
              </em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed max-w-md"
            >
              Home to Oxford, Cambridge, and 24 Russell Group universities. The Graduate Route gives you 2 years to work after graduation — no job offer required.
            </motion.p>
          </div>

          {/* At a glance */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 gap-3"
          >
            {glanceStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl p-4">
                  <Icon size={15} className="text-white/35 mb-2" />
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">{stat.label}</p>
                  <p className="text-sm font-black text-white leading-tight">{stat.value}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Eligibility Checker */}
        <EligibilityChecker onResults={handleResults} />

        {/* Universities */}
        <div id="universities">
          <UniversityGrid results={results} profile={profile} />
        </div>

        {/* Visa Logic */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-4">Step by Step</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.88] mb-12">
            The Visa{" "}
            <em className="italic font-serif font-light lowercase text-[#f9a8d4] not-italic italic">logic.</em>
          </h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
            <div className="space-y-6">
              {ukVisaSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08 }}
                  className="md:pl-12 relative"
                >
                  <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-[#080808] border border-white/15 flex items-center justify-center text-[11px] font-black text-white/60 hidden md:flex">
                    {step.step}
                  </div>
                  <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-white/14 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-black uppercase tracking-tight text-white">{step.title}</h3>
                      {step.cost && (
                        <span className="text-[10px] font-black text-[#f9a8d4] border border-[#f9a8d4]/25 px-2.5 py-1 rounded-full shrink-0">
                          £{step.cost.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{step.desc}</p>
                    <div className="flex items-start gap-2">
                      <HiOutlineExclamationTriangle size={14} className="text-[#f9a8d4] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#f9a8d4]/70 leading-relaxed font-medium">{step.failPoint}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Breakdown */}
        <section className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 md:p-12">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-4">The Real Number</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-[0.88] mb-2">
            What you must{" "}
            <em className="italic font-serif font-light lowercase text-[#f9a8d4] not-italic italic">show in your bank.</em>
          </h2>
          <p className="text-white/55 text-sm mb-10 max-w-xl">
            This is the number students consistently underestimate. The UKVI requires you to show tuition + 9 months of maintenance, held for 28 consecutive days before you apply.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                location: "London",
                tuition: 25000,
                maintenance: ukAtAGlance.maintenanceLondon,
              },
              {
                location: "Outside London",
                tuition: 18000,
                maintenance: ukAtAGlance.maintenanceOutside,
              },
            ].map((scenario) => {
              const maintenanceTotal = scenario.maintenance * 9;
              const total = scenario.tuition + maintenanceTotal;
              return (
                <div key={scenario.location} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/45">{scenario.location} (example)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Tuition (1 year)</span>
                      <span className="text-white font-bold">£{scenario.tuition.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Maintenance (9 months × £{scenario.maintenance.toLocaleString()})</span>
                      <span className="text-white font-bold">£{maintenanceTotal.toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-white/8" />
                    <div className="flex justify-between">
                      <span className="text-white font-black text-sm uppercase tracking-tight">Total to show</span>
                      <span className="text-[#f9a8d4] font-black text-lg">£{total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35 mt-6">
            ⚠ These are illustrative figures. Always verify current requirements on the UKVI website before applying.
          </p>
        </section>

        {/* Timeline */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-4">Month by Month</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.88] mb-12">
            Your 18-month{" "}
            <em className="italic font-serif font-light lowercase text-[#f9a8d4] not-italic italic">map.</em>
          </h2>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-white/6 hidden md:block" />
            <div className="space-y-4">
              {ukTimeline.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.04 }}
                  className={`flex gap-6 items-start ${point.month === 0 ? "relative" : ""}`}
                >
                  <div className="shrink-0 w-12 text-right">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                      point.month === 0 ? "text-[#f9a8d4]" : "text-white/30"
                    }`}>
                      {point.month === 0 ? "Day 0" : `M ${point.month}`}
                    </span>
                  </div>
                  <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${
                    point.month === 0 ? "bg-[#f9a8d4] shadow-[0_0_8px_rgba(232,196,160,0.6)]" : "bg-white/20"
                  }`} />
                  <div className={`flex-1 pb-4 ${
                    point.month === 0 ? "bg-[#f9a8d4]/5 border border-[#f9a8d4]/15 rounded-xl px-4 py-3 -mt-1" : ""
                  }`}>
                    <p className={`text-sm font-black uppercase tracking-tight mb-1 ${
                      point.month === 0 ? "text-[#f9a8d4]" : "text-white"
                    }`}>
                      {point.label}
                    </p>
                    <p className="text-white/55 text-xs leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Checklist */}
        <section>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-4">What You Need</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.88] mb-12">
            Document{" "}
            <em className="italic font-serif font-light lowercase text-[#f9a8d4] not-italic italic">checklist.</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(checklist).map(([phase, items]) => (
              <div key={phase} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/45 mb-5">{phase} Phase</p>
                <div className="space-y-3">
                  {items.map((item) => {
                    const key = `${phase}:${item}`;
                    const done = checked[key];
                    return (
                      <button
                        key={item}
                        onClick={() => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))}
                        className="flex items-start gap-3 text-left w-full group"
                      >
                        <div className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                          done ? "bg-[#80c4a0] border-[#80c4a0]" : "border-white/20 bg-white/5 group-hover:border-white/35"
                        }`}>
                          {done && <HiOutlineCheckCircle size={11} className="text-black" />}
                        </div>
                        <span className={`text-[11px] font-medium leading-relaxed transition-colors ${
                          done ? "text-white/30 line-through" : "text-white/65 group-hover:text-white/85"
                        }`}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <div className="mt-5 pt-4 border-t border-white/6">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                    {items.filter((item) => checked[`${phase}:${item}`]).length} / {items.length} complete
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#f9a8d4] rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.88] text-black">
              Ready to exile
              <br />
              <em className="italic font-serif font-light lowercase">to the UK?</em>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/authentication"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#1a1a1a] transition-all active:scale-95"
              >
                Begin Journey
                <HiOutlineArrowUpRight size={14} />
              </Link>
              <Link
                href="/archive"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black/10 text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-black/20 transition-all active:scale-95"
              >
                Explore Countries
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
