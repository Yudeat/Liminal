"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem, SessionUser } from "./types";

type SiteNavbarProps = {
  user?: SessionUser;
  isHeroVisible: boolean;
  navItems: NavItem[];
  setIsHovered: (value: boolean) => void;
};

export function SiteNavbar({ user, navItems, setIsHovered }: SiteNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-14 pt-7 flex items-center justify-between pointer-events-none">
      {/* Logo — left */}
      <Link href="/" className="flex items-center gap-2.5 pointer-events-auto">
        <div className="relative w-5 h-5">
          <Image src="/nav.png" alt="Exile" fill className="object-contain" />
        </div>
        <span className="text-[11px] font-black uppercase tracking-[0.22em] text-white">
          Exile Worldwide
        </span>
      </Link>

      {/* Nav links — right */}
      <nav className="hidden md:flex items-center gap-8 pointer-events-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
          >
            {item.name}
          </a>
        ))}
        <Link
          href={user ? "/profile" : "/authentication"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          {user ? "Profile" : "Start"}
        </Link>
      </nav>
    </header>
  );
}
