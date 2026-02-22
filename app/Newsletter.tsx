'use client';
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-white text-black px-4">
      <div className="max-w-7xl mx-auto border border-gray-100 bg-gray-50/50 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden">
        
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-green-100/30 blur-[100px] rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left space-y-4">
            <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md">
              The Dispatch
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Stay in the <span className="text-pink-400 italic font-serif font-light">loop.</span>
            </h3>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Curated DIY guides, admission deadlines, and exclusive global insights delivered straight to your inbox.
            </p>
          </div>

          {/* Form Elements */}
          <div className="w-full max-w-md">
            <form 
              className="flex flex-col sm:flex-row gap-3" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-4 md:p-5 rounded-2xl text-sm font-bold bg-white border border-gray-200 outline-none focus:border-black focus:ring-4 focus:ring-black/5 transition-all placeholder:text-gray-300"
              />
              <button
                className="px-8 py-4 md:py-5 rounded-2xl text-sm font-black bg-black text-white hover:bg-gray-900 transition-all active:scale-95 whitespace-nowrap uppercase tracking-widest"
              >
                Join Now
              </button>
            </form>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center lg:text-left ml-1">
              No spam. Just <span className="text-black">Liminal</span> logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}