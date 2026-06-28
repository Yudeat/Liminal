import Link from "next/link";
import { HiOutlineGlobeAlt, HiOutlineArrowUpRight, HiOutlineLockClosed } from "react-icons/hi2";

const countries = [
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Russell Group · Graduate Route · UCAS",
    universities: 170,
    live: true,
  },
  {
    code: "ca",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Co-op Programs · PR Pathways · Top-10 Cities",
    universities: 98,
    live: false,
  },
  {
    code: "de",
    name: "Germany",
    flag: "🇩🇪",
    tagline: "Free Tuition · Technical Excellence · Visa Fast-Track",
    universities: 120,
    live: false,
  },
  {
    code: "au",
    name: "Australia",
    flag: "🇦🇺",
    tagline: "Group of Eight · Post-Study Work · ATAR System",
    universities: 43,
    live: false,
  },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans antialiased">
      <div className="px-6 pt-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/50 hover:text-white transition-colors"
        >
          ← Exile OS
        </Link>
      </div>

      <section className="px-6 pt-16 pb-32 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/45 mb-5">
            The Intelligence Layer
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-white mb-6">
            The{" "}
            <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
              Archive.
            </em>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Country-by-country intelligence. Eligibility checks, visa logic, university requirements, and execution timelines — built for students who move without middlemen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {countries.map((country) =>
            country.live ? (
              <Link
                key={country.code}
                href={`/archive/${country.code}`}
                className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(circle, rgba(232,196,160,0.08) 0%, transparent 70%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl">{country.flag}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#80c4a0] border border-[#80c4a0]/30 px-2.5 py-1 rounded-full">
                        Live
                      </span>
                      <HiOutlineArrowUpRight
                        size={16}
                        className="text-white/30 group-hover:text-[#e8c4a0] group-hover:rotate-12 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">
                    {country.name}
                  </h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 mb-6">
                    {country.tagline}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-white/8" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">
                      {country.universities} universities indexed
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={country.code}
                className="relative bg-white/[0.02] border border-white/6 rounded-3xl p-8 overflow-hidden opacity-50"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl grayscale">{country.flag}</span>
                    <HiOutlineLockClosed size={16} className="text-white/25 mt-1" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter text-white/60 mb-2">
                    {country.name}
                  </h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-6">
                    {country.tagline}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-white/6" />
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
