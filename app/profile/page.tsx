'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  HiBars3BottomRight, 
  HiAcademicCap,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiXMark,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineCamera, 
  HiOutlineEnvelope, 
  HiOutlineIdentification,
  HiOutlineGlobeAlt, 
  HiOutlineArrowLeft
} from "react-icons/hi2";
import { 
  Languages, 
  CircleDollarSign, 
  Palette, 
  ShieldCheck, 
  Smartphone, 
  LockKeyhole, 
  ChevronRight 
} from 'lucide-react';


interface DashboardProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
}

export default function DashboardPage({ session }: DashboardProps) {
  // 1. UI State
  const [isNavOpen, setIsNavOpen] = useState(false);
  const user = session?.user;
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
// Reusable Row Component
const SettingRow = ({ icon: Icon, label, href = "#" }) => (
  <Link 
    href={href}
    className="group flex items-center justify-between p-4 bg-white transition-all active:scale-[0.98] hover:bg-gray-50"
  >
    <div className="flex items-center gap-4">
      <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <span className="text-[15px] font-medium text-gray-800 leading-none">
        {label}
      </span>
    </div>
    <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
  </Link>
);
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedImage = localStorage.getItem("profile-image");
        if (savedImage) {
          setImage(savedImage);
          return;
        }
      } catch {
        // Ignore storage errors
      }
    }
    if (user?.image) {
      setImage(user.image);
    }
  }, [user]);
  
const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const nextImage = reader.result as string;
        setImage(nextImage);
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("profile-image", nextImage);
          } catch {
            // Ignore storage errors
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setImage(null);
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem("profile-image");
      } catch {
        // Ignore storage errors
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl transition-transform duration-500 lg:hidden ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end">
             <button 
             title='navopen'
             onClick={() => setIsNavOpen(false)} className="p-4 text-black"><HiXMark size={32} /></button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4 px-6">
             <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Account Menu</h2>
             <NavItem icon={<HiOutlineUser />} label="Profile" active onClick={() => setIsNavOpen(false)} />
             <NavItem icon={<HiOutlineCreditCard />} label="Subscription" onClick={() => setIsNavOpen(false)} />
             <NavItem icon={<HiOutlineCog6Tooth />} label="Settings" onClick={() => setIsNavOpen(false)} />
             <NavItem icon={<HiAcademicCap/>} label="Dashboard" onClick={() => setIsNavOpen(false)} />
          </div>
        </div>
      </div>

      {/* DASHBOARD HEADER */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase">
            Exile <span className="text-pink-400 italic font-serif lowercase font-light">os</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button type="button"
            title='Navopen'
            onClick={() => setIsNavOpen(true)} 
            className="lg:hidden p-2 bg-gray-50 rounded-full">
              <HiBars3BottomRight size={20} />
            </button>

            <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">
              <HiOutlineArrowLeftOnRectangle size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 space-y-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 text-center lg:text-left">Account</h2>
            <NavItem icon={<HiOutlineUser />} label="Profile" active />
            <NavItem icon={<HiOutlineCreditCard />} label="Subscription" />
            <NavItem icon={<HiOutlineCog6Tooth />} label="Settings" />
            <NavItem icon={<HiAcademicCap/>} label="Dashboard" />
          </aside>
          
{/* profile */}
<section id='profile' className="p-6 md:hidden">
      <Link href="/" aria-label="Back to home">
        <HiOutlineArrowLeft size={29} className="hover:text-pink-500 transition-all" />
      </Link>
      
      <p className='font-black uppercase tracking-tighter text-2xl mt-5 mb-6'>Profile</p>
      
      <div className='bg-black text-white w-full md:w-3/4 rounded-[2rem] p-8 shadow-2xl relative group'>
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* IMAGE UPLOAD TARGET */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-700 overflow-hidden flex items-center justify-center bg-zinc-900 group-hover:border-pink-500 transition-colors">
              {image ? (
                <Image src={image} alt="Profile" fill className="rounded-full object-cover" />
              ) : (
                <HiOutlineCamera size={30} className="text-zinc-500" />
              )}
            </div>
            
            {/* Hidden Input */}
            <input 
            title='fileupload'
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            {/* Trigger Button */}
            <button 
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-1 -right-1 bg-pink-500 p-2 rounded-full hover:scale-110 transition-transform shadow-lg"
              aria-label="Upload photo"
            >
              <HiOutlineCamera size={14} className="text-white" />
            </button>
          </div>

          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              {user?.name ?? "Seeker"}
            </h2>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1 mb-6">
              {user?.email ?? "no-email@exile.os"}
            </div>
            
            <button 
              type="button" 
              className="px-6 py-2 border border-zinc-700 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={handleClearImage}
              className="mt-3 px-6 py-2 border border-zinc-700/60 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all"
            >
              Clear Photo
            </button>
          </div>
        </div>
      </div>
    </section>
    <div className="md:hidden bg-[#F8F9FA] py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        
        {/* Top Group */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <SettingRow icon={Languages} label="Language" />
          <SettingRow icon={CircleDollarSign} label="Currencies" />
          <SettingRow icon={Palette} label="Appearance" />
        </div>

        {/* Bottom Group */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
          <SettingRow icon={ShieldCheck} label="Application Security" />
          <SettingRow icon={Smartphone} label="Manage Devices" />
          <SettingRow icon={LockKeyhole} label="Change Password" />
        </div>

      </div>
    </div>
   
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
    title='some'
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${
        active ? "bg-black text-white shadow-xl shadow-black/10 scale-[1.02]" : "text-gray-400 hover:bg-gray-100 hover:text-black"
      }`}
    >
      <span className="text-xl">{icon}</span>
      {label}
    </button>
  );
}
