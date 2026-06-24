'use client';

export default function Newsletter() {
  return (
    <section className="bg-[#080808] py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-8 md:p-14 relative overflow-hidden">

          {/* Subtle glow */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(128,196,160,0.06) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Copy */}
            <div className="max-w-lg text-center lg:text-left space-y-3">
              <div className="inline-block px-3 py-1 bg-white/8 border border-white/10 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 rounded-lg">
                The Dispatch
              </div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight text-white uppercase">
                Stay in the{" "}
                <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">loop.</em>
              </h3>
              <p className="text-white/30 text-base font-medium leading-relaxed">
                Curated DIY guides, admission deadlines, and exclusive global insights delivered straight to your inbox.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md">
              <form className="flex flex-col sm:flex-row gap-2.5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-5 py-3.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white outline-none focus:border-white/25 focus:ring-4 focus:ring-white/5 transition-all placeholder:text-white/20"
                />
                <button className="px-6 py-3.5 rounded-xl text-[11px] font-black bg-white text-black hover:bg-[#e8c4a0] transition-all active:scale-95 whitespace-nowrap uppercase tracking-widest">
                  Join Now
                </button>
              </form>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-white/20 text-center lg:text-left ml-1">
                No spam. Just{" "}
                <span className="text-white/40">Exile</span> logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
