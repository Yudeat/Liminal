import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import BlogNavbar from "@/components/blog/BlogNavbar";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Exile OS",
      description: "The requested blog post could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Exile OS Blog`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Exile OS",
      publishedTime: post.publishedAt,
      images: [
        {
          url: `${siteUrl}/nav.png`,
          width: 512,
          height: 512,
          alt: `Exile OS - ${post.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}/nav.png`],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogNavbar />
      <article className="min-h-screen px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto rounded-[2rem] border border-gray-200/80 bg-white/75 backdrop-blur-sm p-7 md:p-10">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-gray-300 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-widest text-gray-700 hover:bg-white"
          >
            Back to blog
          </Link>

          <header className="mt-10 border-b border-gray-300/60 pb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">{post.series}</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight text-[#4b1227] leading-[0.95]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl italic font-serif text-[#7a1e39]">{post.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="magazine-prose mt-10">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
