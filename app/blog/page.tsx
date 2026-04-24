import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import BlogNavbar from "@/components/blog/BlogNavbar";

export const metadata: Metadata = {
  title: "Blog | Exile OS",
  description:
    "Essays on student autonomy, process design, visa strategy, and building Exile OS in public.",
  openGraph: {
    title: "Exile OS Blog",
    description:
      "Essays on student autonomy, process design, visa strategy, and building Exile OS in public.",
    type: "website",
    images: [{ url: "/nav.png", width: 512, height: 512, alt: "Exile OS Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exile OS Blog",
    description:
      "Essays on student autonomy, process design, visa strategy, and building Exile OS in public.",
    images: ["/nav.png"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <BlogNavbar />
      <section className="min-h-screen px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] border border-gray-200/80 bg-white/75 backdrop-blur-sm p-8 md:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4">Exile OS Journal</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#4b1227]">Blog</h1>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Essays on student autonomy, process design, visa strategy, and product building in public.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-gray-200 bg-white/75 p-6 backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{post.series}</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#4b1227]">{post.title}</h2>
                <p className="mt-3 text-gray-700">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex rounded-full bg-black px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white hover:bg-[#4b1227] transition-colors"
                >
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
