"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeroVisible(window.scrollY < 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 300 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 300 });
  const globeX = useTransform(mouseX, [0, 2000], [20, -20]);
  const globeY = useTransform(mouseY, [0, 2000], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const navItems = [
    { name: "Vision", icon: <FaCompass />, href: "/vision" },
    { name: "Process", icon: <HiOutlineBolt />, href: "#process" },
    { name: "Archive", icon: <FaBoxArchive />, href: "/archive" },
    { name: "Inquiry", icon: <FaPaperPlane />, href: "#chat" },
  ];

  return (
    <div id="home" className="relative w-full font-sans antialiased">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#e8c4a0] rounded-full pointer-events-none z-[100] mix-blend-screen hidden md:block"
        animate={{ scale: isHovered ? 5 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      <SiteNavbar
        user={user}
        isHeroVisible={isHeroVisible}
        navItems={navItems}
        setIsHovered={setIsHovered}
      />

      <HeroSection
        user={user}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        globeX={globeX}
        globeY={globeY}
      />
    </div>
  );
}
