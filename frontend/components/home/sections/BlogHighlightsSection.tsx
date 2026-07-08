import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/frontend/lib/blog-posts";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function BlogHighlightsSection() {
  const latest = blogPosts[0];

  return (
    <section
      id="blog"
      className="relative bg-[#080808] min-h-[90vh] flex items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-1.png"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-transparent to-[#080808]/80" />
      </div>

      {/* Floating photo — bottom left */}
      <div className="absolute left-6 bottom-16 md:left-20 md:bottom-24 -rotate-[7deg] z-10 hidden md:block shadow-2xl">
        <div className="relative w-44 h-56 overflow-hidden">
          <Image src="/hero-2.png" alt="" fill className="object-cover" sizes="176px" />
        </div>
      </div>

      {/* Floating photo — top right */}
      <div className="absolute right-6 top-16 md:right-20 md:top-24 rotate-[6deg] z-10 hidden md:block shadow-2xl">
        <div className="relative w-36 h-44 overflow-hidden">
          <Image src="/hero-3.png" alt="" fill className="object-cover" sizes="144px" />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-20 text-center px-6 max-w-2xl mx-auto py-36">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">
          What We Are Writing
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-6">
          Field notes from
          <br />
          <em className="font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
            Exile OS Journal
          </em>
        </h2>

        <p className="text-white/55 text-sm leading-relaxed max-w-sm mx-auto mb-10">
          {latest.excerpt}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/blog/${latest.slug}`}
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-[#e8c4a0] transition-colors duration-300"
          >
            Read latest
          </Link>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 border border-white/25 text-white/70 px-7 py-3 text-[11px] font-black uppercase tracking-widest hover:border-white/50 hover:text-white transition-all duration-300"
          >
            All posts
            <HiOutlineArrowUpRight size={12} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
