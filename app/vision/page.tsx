'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HiOutlineGlobeAsiaAustralia, 
  HiOutlineCheckBadge,
  HiOutlineXCircle,
  HiOutlineArrowLeft,
  HiOutlineMapPin,
  HiOutlineLockClosed
} from "react-icons/hi2";
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

const comparisons = [
  { feature: "Agent Commissions", local: "Hidden / High", liminal: "Zero / Transparent" },
  { feature: "University Choice", local: "Limited to Partners", liminal: "Global Autonomy" },
  { feature: "Visa Blueprint", local: "Generic Templates", liminal: "Surgical / Custom" },
  { feature: "SOP Writing", local: "Mass Produced", liminal: "Original / Authentic" },
];

export default function NepalVisionPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-pink-100 flex flex-col">
      
      {/* --- GLOBAL NAV --- */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-xl border border-gray-100 p-3 rounded-full pointer-events-auto shadow-sm">
          <Link href="/" className="flex items-center gap-2 pl-4 group">
            <HiOutlineArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4 pr-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-green-500 animate-pulse hidden md:inline">NPR Systems Active</span>
            <button className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-400 transition-colors">Portal</button>
          </div>
        </div>
      </nav>

      {/* --- HERO: NEPAL CONTEXT --- */}
      <section className="pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <HiOutlineGlobeAsiaAustralia className="text-red-500 animate-pulse" size={24} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
              Nepal Protocol / Operation Exile
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Kathmandu <br /> 
            <span className="text-pink-400 italic font-serif font-light lowercase text-6xl md:text-[7.5rem]">to the</span> <br /> 
            world.
          </h1>
          <p className="max-w-2xl text-xl text-gray-500 font-medium leading-relaxed">
            Nepali students have been trapped in the &quot;Consultancy Loop&quot; for too long. We bring Silicon Valley precision to the streets of Bagbazar and New Baneshwor.
          </p>
        </div>
      </section>

      {/* --- GEOGRAPHY: TALLEST MINDS TO PLAIN LIFES --- */}
      <section className="py-24 px-6 overflow-hidden relative border-t border-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <HiOutlineMapPin className="text-pink-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Geography of Ambition</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
            From <span className="text-blue-600">Tallest Minds</span> <br />
            To <span className="text-green-600 font-serif italic lowercase font-light">plain lifes.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-l border-gray-100 pl-8">
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Whether you are architecting your future from the shadows of <strong>Mount Everest</strong> or building your dream in the fertile <strong>Plains of the Terai</strong>, Liminal provides the same surgical precision. 
            </p>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We bridge the gap between high-altitude grit and global opportunity. No matter your district, the protocol remains the same.
            </p>
          </div>
        </div>
      </section>

      {/* --- PROS VS CONS (THE COMPARISON) --- */}
      <section className="py-24 px-6 bg-gray-50 rounded-[4rem] mx-4 border border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">The System vs. The Protocol</h2>
            <p className="text-gray-400 uppercase text-[10px] font-black tracking-widest">Why Liminal is the only logical choice for Nepal</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-6 text-left text-[10px] font-black uppercase tracking-widest text-gray-400">Feature</th>
                  <th className="py-6 text-left text-[10px] font-black uppercase tracking-widest text-red-400 italic">Consultancy</th>
                  <th className="py-6 text-left text-[10px] font-black uppercase tracking-widest text-green-500 underline decoration-2">Liminal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisons.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/50 transition-colors">
                    <td className="py-8 font-black uppercase text-xs tracking-tight">{row.feature}</td>
                    <td className="py-8 text-gray-400 text-sm flex items-center gap-2">
                       <HiOutlineXCircle className="text-red-300" /> {row.local}
                    </td>
                    <td className="py-8 font-bold text-sm flex items-center gap-2">
                      <HiOutlineCheckBadge className="text-green-500" /> {row.liminal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- PAYMENT: LOCAL GATEWAYS --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                <HiOutlineLockClosed className="text-green-500" /> Local Payment Protocol
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                Pay in NPR. <br />
                <span className="italic font-serif font-light lowercase text-pink-400">using your own wallets.</span>
              </h3>
              <p className="text-gray-500 text-lg mb-12 font-medium">
                No international dollar card? No problem. Liminal integrates with the local financial stack of Nepal, making global education accessible to every student.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
                <span className="font-black text-xl">eSewa</span>
                <span className="font-black text-xl">Khalti</span>
                <span className="font-black text-xl">ConnectIPS</span>
                <span className="font-black text-xl text-blue-600">FonePay</span>
              </div>
            </div>

            <div className="bg-black text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-[60px]" />
              <h4 className="text-xl font-black uppercase mb-8 border-b border-white/10 pb-4 italic">The Workflow</h4>
              <div className="space-y-8">
                {[
                  "Select your protocol (Basic, Tactical, Elite).",
                  "Choose 'Nepal Local Payment' at checkout.",
                  "Scan the FonePay QR or transfer via eSewa instantly."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-black">{i+1}</div>
                    <p className="text-sm font-medium text-gray-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="mt-auto bg-black text-white py-20 px-6 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-2xl font-black uppercase tracking-tighter">Liminal</div>
              <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed">
                Operating from the cloud, anchored in Kathmandu. The first independent Education OS for high-altitude dreamers.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center gap-3 bg-green-500/10 text-green-500 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">
                  <FaWhatsapp size={16} /> Contact Nepal Support
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6">HQ / Nepal</h4>
              <p className="text-gray-400 text-xs font-bold uppercase leading-loose">
                Liminal Operations <br />
                New Baneshwor, Kathmandu <br />
                Nepal, 44600
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-6">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="text-xl hover:text-pink-400 transition-colors"><FaInstagram /></a>
                <a href="#" className="text-xl hover:text-pink-400 transition-colors"><FaTwitter /></a>
                <a href="#" className="text-xl hover:text-pink-400 transition-colors"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">© 2026 Liminal Protocol. Kathmandu.</span>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Exile</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
