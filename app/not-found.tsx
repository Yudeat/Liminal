import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center text-center px-6">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">
        404 / Not Found
      </span>
      <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
        Lost in <br />
        <span className="italic font-serif font-light lowercase text-pink-400">transit.</span>
      </h1>
      <p className="text-gray-400 text-lg font-medium mb-12 max-w-sm">
        This page doesn&apos;t exist. Check the URL or head back to base.
      </p>
      <Link
        href="/"
        className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-pink-400 transition-colors"
      >
        Return to Base
      </Link>
    </div>
  );
}
