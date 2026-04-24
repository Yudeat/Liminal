import Image from "next/image";
import Link from "next/link";

export default function BlogNavbar() {
  return (
    <header className="sticky top-0 z-40 px-4 md:px-6 pt-4 md:pt-6">
      <nav className="relative mx-auto max-w-7xl border border-gray-100/60 p-2 md:p-3 h-16 md:h-20 rounded-full flex items-center justify-between bg-white/80 backdrop-blur-2xl shadow-sm">
        <Link href="/" className="flex items-center gap-2 pl-3 md:pl-6">
          <div className="relative w-6 h-6 md:w-8 md:h-8">
            <Image src="/nav.png" alt="Exile OS logo" fill className="object-contain" />
          </div>
          <span className="text-lg md:text-xl font-black tracking-tighter uppercase text-black">Exile OS</span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/archive"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
          >
            Archive
          </Link>
        </div>

        <div className="pr-1 md:pr-2">
          <Link
            href="/authentication"
            className="px-5 md:px-7 py-2.5 md:py-3 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.15em] hover:bg-[#4b1227] transition-colors"
          >
            Start
          </Link>
        </div>
      </nav>
    </header>
  );
}
