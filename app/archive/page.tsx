'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HiOutlineHome, 
  HiOutlineDocumentMagnifyingGlass, 
  HiOutlineShieldCheck,
  HiOutlinePlus,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCloudArrowUp,
  HiOutlineCheckBadge,
  HiOutlineIdentification,
  HiOutlineSparkles,
  HiOutlineCpuChip,
  HiOutlineBolt
} from "react-icons/hi2";

export default function HyperDashboard() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-black font-sans flex flex-col overflow-hidden relative">
      
      {/* 1. SURGICAL GRID OVERLAY (Adds depth) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* --- TOP NAV --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="pointer-events-auto flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-full shadow-sm group hover:border-pink-500 transition-all">
            <HiOutlineHome className="text-gray-400 group-hover:text-pink-500 transition-colors" />
            <span className="text-[10px] font-black uppercase tracking-widest">Exit to OS</span>
          </Link>
          <div className="flex gap-2 pointer-events-auto">
             <div className="px-4 py-2 bg-pink-50 border border-pink-100 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping" />
                <span className="text-[9px] font-black uppercase text-pink-600">Syncing: Kathmandu Hub</span>
             </div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-24 pb-32 px-6 md:px-12 overflow-y-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER WITH PULSE */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                Mission <span className="text-pink-500 italic font-serif lowercase font-light">control.</span>
              </h1>
              <div className="flex items-center gap-4">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ID: LMNL-2026-NEP</p>
                <div className="h-px w-12 bg-gray-200" />
                <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Connection: Secure</p>
              </div>
            </div>
            
            {/* LIVE FEED MINI-SECTION */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 w-full md:w-64">
              <p className="text-[8px] font-black text-gray-400 uppercase mb-2 italic">Intelligence Feed</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-pink-500 rounded-full" />
                  <p className="text-[9px] font-bold">New Visa Logic for Australia Updated</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  <p className="text-[9px] font-bold">NOC Auto-Drafting Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* LARGE: DOCUMENT RADAR */}
            <div className="lg:col-span-3 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-xl shadow-gray-200/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <HiOutlineCpuChip size={120} />
              </div>
              
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black uppercase tracking-tighter">Surgical Scan Protocol</h3>
                <HiOutlineSparkles className="text-pink-500 animate-pulse" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Upload Zone */}
                <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-1 border-2 border-dashed border-gray-100 rounded-[2rem] p-8 flex flex-col items-center justify-center bg-gray-50/50 hover:border-pink-300 transition-all cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-pink-500 mb-4">
                    <HiOutlineCloudArrowUp size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Deploy New Documents</span>
                </motion.div>

                {/* Progress List */}
                <div className="md:col-span-2 space-y-4">
                  {[
                    { label: "Academic Transcript", status: "Verified", color: "text-green-500", progress: 100 },
                    { label: "Passport (Bio Data)", status: "Analyzing", color: "text-blue-500", progress: 65 },
                    { label: "Bank Statement Logic", status: "Incomplete", color: "text-pink-500", progress: 20 },
                  ].map((doc, i) => (
                    <div key={i} className="bg-white border border-gray-50 p-4 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black uppercase">{doc.label}</span>
                        <span className={`text-[9px] font-black uppercase ${doc.color}`}>{doc.status}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${doc.progress}%` }}
                          className={`h-full ${doc.status === 'Verified' ? 'bg-green-500' : 'bg-pink-500'}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SMALL: SYSTEM PULSE */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-black text-white p-8 rounded-[3rem] h-full flex flex-col justify-between group overflow-hidden relative">
                <div className="z-10 relative">
                  <HiOutlineBolt className="text-pink-500 mb-4 text-3xl group-hover:rotate-12 transition-transform" />
                  <h3 className="text-xs font-black uppercase tracking-widest opacity-60">Exile Readiness</h3>
                  <div className="text-7xl font-black tracking-tighter">82%</div>
                </div>
                <button className="z-10 mt-8 w-full py-5 bg-pink-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                  Activate Protocol
                </button>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/30 blur-[80px]" />
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: MISSION TIMELINE */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 p-8 rounded-[3rem]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">Mission Roadmap</h4>
              <div className="space-y-6">
                {[
                  { step: "Phase 01", title: "Target Identification", status: "Completed" },
                  { step: "Phase 02", title: "Document Sanitization", status: "Active" },
                  { step: "Phase 03", title: "SOP Deployment", status: "Pending" },
                ].map((phase, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className={`w-2 h-2 rounded-full ${phase.status === 'Completed' ? 'bg-green-500' : phase.status === 'Active' ? 'bg-pink-500 animate-pulse' : 'bg-gray-200'}`} />
                    <div className="flex-grow">
                      <p className="text-[8px] font-black text-gray-400 uppercase">{phase.step}</p>
                      <p className="text-xs font-black uppercase">{phase.title}</p>
                    </div>
                    <span className="text-[9px] font-black text-gray-300 uppercase italic">{phase.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NEPAL SPECIFIC ASSET */}
            <div className="bg-blue-600 p-8 rounded-[3rem] text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
               <HiOutlineIdentification size={80} className="absolute -bottom-5 -left-5 opacity-20" />
               <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 relative z-10">Nepal Blueprints</h4>
               <p className="text-[10px] font-medium opacity-80 uppercase tracking-widest relative z-10">Auto-generating NOC & Citizenship translations...</p>
               <button className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all relative z-10">
                  Access Templates
               </button>
            </div>
          </div>
        </div>
      </main>

      {/* --- FLOATING DOCK MENU --- */}
     {/* --- FLOATING DOCK MENU --- */}
<div className="fixed bottom-8 w-full flex justify-center z-[100] px-6">
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-black/95 backdrop-blur-2xl border border-white/10 p-3 rounded-[2.5rem] flex items-center gap-2 shadow-2xl"
  >
    {[
      { icon: <HiOutlineHome />, label: "Home", href: "/" },
      { icon: <HiOutlineDocumentMagnifyingGlass />, label: "Scan", href: "/scan" },
      { icon: <HiOutlinePlus />, label: "New", primary: true, href: "/new" },
      { icon: <HiOutlineShieldCheck />, label: "Verified", href: "/verified" },
      { icon: <HiOutlineChatBubbleLeftRight />, label: "Support", href: "/support" },
    ].map((item, i) => {
      // Logic: If href is missing, default to "#" to prevent the 'undefined' crash
      const safeHref = item.href || "#";

      return (
        <Link 
          key={i} 
          href={safeHref} 
          className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all group ${
            item.primary 
            ? 'bg-pink-500 text-white mx-2 shadow-lg shadow-pink-500/20' 
            : 'text-gray-500 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">
            {item.label}
          </span>
        </Link>
      );
    })}
    
    <div className="w-px h-8 bg-white/10 mx-2" />
    
    <button className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
       <HiOutlineArrowLeftOnRectangle size={20} />
    </button>
  </motion.div>
</div>

    </div>
  );
}