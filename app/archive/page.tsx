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
          
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
   
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
    
    <Link
     href="/" className="p-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
       <HiOutlineArrowLeftOnRectangle size={20} />
    </Link>
  </motion.div>
</div>

    </div>
  );
}