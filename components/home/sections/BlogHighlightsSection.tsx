import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogHighlightsSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 bg-white/70 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-3">What We Are Writing</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#4b1227] leading-[0.95]">
              Field notes from
              <br />
              <span className="italic font-serif font-light lowercase text-[#7a1e39]">Exile OS Journal</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-[#4b1227] transition-colors"
          >
            View all posts
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{post.series}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-[#4b1227]">{post.title}</h3>
              <p className="mt-3 text-[#5d2d3f]">{post.excerpt}</p>

              <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex rounded-full border border-gray-300 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#4b1227] hover:bg-[#4b1227] hover:text-white transition-colors"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
