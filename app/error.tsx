"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center text-center px-6">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-400 mb-6">
        System Error
      </span>
      <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
        Something <br />
        <span className="italic font-serif font-light lowercase text-pink-400">broke.</span>
      </h1>
      <p className="text-gray-400 text-lg font-medium mb-12 max-w-sm">
        An unexpected error occurred. Try again or return home.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="px-8 py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-pink-400 transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-4 border border-gray-200 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
