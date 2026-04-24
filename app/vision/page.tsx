'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HiOutlineGlobeAsiaAustralia,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import BlogNavbar from "@/components/blog/BlogNavbar";
import Footer from "@/app/Footer";

export default function NepalVisionPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 flex flex-col">
      <BlogNavbar />

      <section className="pt-28 md:pt-32 pb-18 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <HiOutlineGlobeAsiaAustralia className="text-red-500 animate-pulse" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              Vision / Exile OS
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-7">
            We are building
            <br />
            <span className="text-pink-400 italic font-serif font-light lowercase text-5xl md:text-6xl">
              infrastructure
            </span>
            <br />
            for global transition.
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 font-medium leading-relaxed">
            Exile OS is an operating system for students moving from one country to another. 
            We replace consultancy guesswork with transparent workflows, objective data, and clear execution steps.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-y border-gray-100 bg-white/70">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-500 mb-5">Who We Are</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#4b1227] leading-[1] mb-8">
              A product-first team
              <br />
              for student autonomy.
            </h2>
            <p className="text-lg text-[#5d2d3f] leading-relaxed">
              We are operators, designers, and engineers focused on one mission: helping students navigate global admissions and visa workflows without dependency on opaque middle layers.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: <HiOutlineCpuChip size={22} />,
                title: "System, not slogans",
                text: "Every stage is mapped as a workflow: profile readiness, document validity, timeline risk, and submission quality.",
              },
              {
                icon: <HiOutlineShieldCheck size={22} />,
                title: "Trust by architecture",
                text: "Sensitive identity data is handled with security-first patterns, controlled access boundaries, and auditable operations.",
              },
              {
                icon: <HiOutlineBolt size={22} />,
                title: "Execution over confusion",
                text: "We convert high-stress ambiguity into clear next steps students can verify and execute with confidence.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-3 text-[#7a1e39]">
                  {item.icon}
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                </div>
                <p className="text-[#5d2d3f]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-500 mb-5">What We Are Trying To Do</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#4b1227] leading-[1] mb-10">
            Replace consultancy dependency
            <br />
            with student-owned systems.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Make the process visible",
                text: "No black-box advising. Students should see the logic behind recommendations and route decisions.",
              },
              {
                step: "02",
                title: "Make execution repeatable",
                text: "From SOP structure to visa evidence checks, repeatable systems reduce avoidable human error.",
              },
              {
                step: "03",
                title: "Make transition complete",
                text: "We support the full lifecycle: application, visa, and first-30-day settlement readiness.",
              },
            ].map((item) => (
              <article key={item.step} className="rounded-3xl border border-gray-200 bg-white/80 p-7">
                <p className="text-sm font-black text-[#7a1e39] mb-3">{item.step}</p>
                <h3 className="text-2xl font-black tracking-tight text-[#4b1227] mb-4">{item.title}</h3>
                <p className="text-[#5d2d3f]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-black text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[90px]" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-gray-400 mb-5">Final Manifesto</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1] mb-6">
              Let&apos;s Exile to a
              <br />
              <span className="text-pink-400 italic font-serif font-light lowercase">better future.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              A better future is not a motivational quote. It is built through systems, discipline, and transparent execution.
              Exile OS exists to help students cross borders with agency, clarity, and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/authentication"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-pink-300 transition-colors"
              >
                <HiOutlineRocketLaunch size={16} />
                Start Your Journey
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Read the Journal
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
