import Link from "next/link";
import { HiOutlineClock, HiOutlineHome } from "react-icons/hi2";

export default function ArchivePage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white/70 border border-gray-200 rounded-3xl p-10 backdrop-blur">
        <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center">
          <HiOutlineClock size={26} />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-gray-500 mb-3">Archive</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#4b1227]">Coming Soon</h1>
        <p className="mt-4 text-gray-600">
          We are building the archive experience. It will be available in an upcoming release.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-[#4b1227] transition-colors"
          >
            <HiOutlineHome size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}