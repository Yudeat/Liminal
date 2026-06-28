'use client';

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const mainLinks = [
  { name: "About", href: "#process" },
  { name: "Vision", href: "/vision" },
  { name: "Archive", href: "/archive" },
  { name: "Journal", href: "/blog" },
  { name: "Pricing", href: "#price" },
  { name: "Contact", href: "#chat", external: true },
];

const colLeft = [
  { name: "United Kingdom", href: "/archive/uk" },
  { name: "Germany", href: "/archive" },
  { name: "Czech Republic", href: "/archive" },
  { name: "Australia", href: "/archive" },
  { name: "Canada", href: "/archive" },
];

const colRight = [
  { name: "How It Works", href: "#process" },
  { name: "Eligibility Check", href: "/archive/uk" },
  { name: "Visa Blueprint", href: "/archive" },
  { name: "SOP Framework", href: "/blog" },
  { name: "Student Stories", href: "/blog" },
];

const socials = [
  { icon: <FaInstagram size={14} />, href: "#", label: "@exileos", platform: "instagram" },
  { icon: <FaXTwitter size={14} />, href: "#", label: "@exileos_x", platform: "twitter" },
  { icon: <FaLinkedinIn size={14} />, href: "#", label: "Exile OS", platform: "linkedin" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 pt-16 pb-14">

        {/* Top section — logo left, nav links right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 mb-20">

          {/* Left: lettermark */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <Image src="/nav.png" alt="Exile" fill className="object-contain invert" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40">
                Exile OS
              </span>
            </div>
          </div>

          {/* Right: main nav links with dividers */}
          <nav>
            {mainLinks.map((link, i) => (
              <div key={link.name}>
                {i === 0 && <div className="h-px bg-white/10 mb-0" />}
                <Link
                  href={link.href}
                  className="group flex items-center justify-between py-4 hover:pl-3 transition-all duration-300"
                >
                  <span className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-white/70 transition-colors">
                    {link.name}
                  </span>
                  {link.external && (
                    <HiOutlineArrowUpRight
                      size={16}
                      className="text-white/30 group-hover:text-white/60 group-hover:rotate-12 transition-all"
                    />
                  )}
                </Link>
                <div className="h-px bg-white/10" />
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom section — description left, sub-links right */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">

          {/* Left: description + socials */}
          <div className="flex flex-col justify-between gap-10">
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Few students realise they have the world at their feet — both literally and figuratively. Exile OS is the operating system for self-guided global migration, built for students who move without middlemen.
            </p>

            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <Link
                  key={s.platform}
                  href={s.href}
                  className="inline-flex items-center gap-3 text-[11px] font-medium text-white/45 hover:text-white transition-colors"
                >
                  {s.icon}
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: two sub-link columns */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3.5">
              {colLeft.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-medium"
                >
                  {l.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3.5">
              {colRight.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-medium"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/25 font-medium tracking-wide">
            © {new Date().getFullYear()} Exile OS Inc. — Autonomy in Education.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#80c4a0] animate-pulse" />
            <span className="text-[11px] text-white/25 font-medium uppercase tracking-widest">
              Network Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
