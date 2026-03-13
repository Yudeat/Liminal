'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HiBars3BottomRight, 
  HiAcademicCap,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineCog6Tooth,
  HiXMark,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineCamera, 
  HiOutlineCheck, 
  HiOutlineEnvelope, 
  HiOutlineIdentification,
  HiOutlineGlobeAlt 
} from "react-icons/hi2";

export default function DashboardPage({ session }: { session: any }) {
  // 1. UI State
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // 2. Profile Logic State
  const user = session?.user;
  const [formData, setFormData] = useState({
    name: user?.name || "Seeker",
    bio: "Independent learner exploring the Art of Exile.",
    location: "Digital Nomad",
    website: "https://exile.os"
  });
  const [image, setImage] = useState(user?.image || null);

  // 3. Handlers
  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl transition-transform duration-500 lg:hidden ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end">
             <button onClick={() => setIsNavOpen(false)} className="p-4 text-black"><HiXMark size={32} /></button>
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
            onClick={() => setIsNavOpen(true)} className="lg:hidden p-2 bg-gray-50 rounded-full">
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

          {/* MAIN SECTION: PROFILE GRID */}
          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* LEFT COLUMN: PROFILE CARD */}
              <div className="xl:col-span-1">
                <div className="xl:sticky xl:top-32 bg-black text-white rounded-[2.5rem] p-8 overflow-hidden relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white/10 p-1 mb-6">
                      <div className="w-full h-full rounded-full bg-zinc-800 overflow-hidden flex items-center justify-center">
                        {image ? (
                          <img src={image} className="w-full h-full object-cover" alt="Profile" />
                        ) : (
                          <span className="text-4xl font-black">{formData.name[0]}</span>
                        )}
                      </div>
                    </div>
                    <h2 className="text-2xl font-black tracking-tighter uppercase mb-1">{formData.name}</h2>
                    <p className="text-pink-400 font-serif italic text-sm mb-6">Verified Student</p>
                    <div className="w-full space-y-4 text-left border-t border-white/10 pt-6">
                      <div className="flex items-center gap-3 text-zinc-400">
                        <HiOutlineEnvelope className="text-pink-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest truncate">{user?.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-zinc-400">
                        <HiOutlineGlobeAlt className="text-pink-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{formData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: THE FORM */}
              <div className="xl:col-span-2">
                <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-10">Update Identity</h3>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1 flex items-center gap-2">
                        <HiOutlineIdentification size={14}/> Display Name
                      </label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border-none rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-pink-200 shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Your Philosophy (Bio)</label>
                      <textarea 
                        rows={3}
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                        className="w-full bg-white border-none rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-pink-200 shadow-sm resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black ml-1">Change Portrait</label>
                      <label className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-pink-400 hover:bg-pink-50 transition-all group">
                        <HiOutlineCamera className="text-gray-400 group-hover:text-pink-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-pink-500">Choose Image</span>
                        <input type="file" className="hidden" onChange={handlePhoto} accept="image/*" />
                      </label>
                    </div>

                    <button 
                      onClick={handleSave}
                      className="group relative w-full md:w-auto px-10 py-4 bg-black text-white rounded-full transition-all hover:bg-pink-500 active:scale-95"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {saving ? 'Synchronizing...' : 'Save Profile'}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button 
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