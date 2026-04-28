import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function BlogHighlightsSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/25">
              What We Are Writing
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] uppercase">
              Field notes from
              <br />
              <em className="italic font-serif font-light lowercase text-[#e8c4a0] not-italic italic">
                Exile OS Journal
              </em>
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 shrink-0 border border-white/10 text-white/40 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:border-white/25 hover:text-white transition-all duration-300"
          >
            View all posts
            <HiOutlineArrowUpRight size={13} className="group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {latestPosts.map((post, i) => (
            <article
              key={post.slug}
              className="group bg-white/[0.03] border border-white/8 rounded-3xl p-7 flex flex-col hover:bg-white/[0.05] hover:border-white/14 transition-all duration-400"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/25 mb-4">
                {post.series}
              </p>
              <h3 className="text-xl font-black tracking-tight text-white mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/20 mb-5">
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 border border-white/8 text-white/35 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest self-start hover:border-[#e8c4a0]/30 hover:text-[#e8c4a0] transition-all duration-300"
              >
                Read article
                <HiOutlineArrowUpRight size={11} />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
