"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBoxArchive, FaCompass, FaPaperPlane } from "react-icons/fa6";
import { HiOutlineBolt } from "react-icons/hi2";
import { HeroSection } from "./HeroSection";
import { SiteNavbar } from "./SiteNavbar";
import { SessionData } from "./types";

type HeroShellProps = {
  session: SessionData | null;
};

export function HeroShell({ session }: HeroShellProps) {
  const user = session?.user;
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: "Vision", icon: <FaCompass />, href: "/vision" },
    { name: "Process", icon: <HiOutlineBolt />, href: "#process" },
    ...(user ? [{ name: "Archive", icon: <FaBoxArchive />, href: "/archive" }] : []),
    { name: "Inquiry", icon: <FaPaperPlane />, href: "#chat" },
  ];

  return (
    <div id="home" className="relative w-full font-sans antialiased">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#e8c4a0] rounded-full pointer-events-none z-[100] mix-blend-screen hidden md:block"
        animate={{ scale: isHovered ? 5 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      <SiteNavbar
        user={user}
        isHeroVisible={true}
        navItems={navItems}
        setIsHovered={setIsHovered}
      />

      <HeroSection
        user={user}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  );
}
