'use client';
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaGithub />, href: "#", label: "Github" },
  ];

  const footerNavigation = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Risk Scoring", href: "#" },
      { name: "How We Work", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "/blog" },
    ],
    Developers: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "SDKs", href: "#" },
      { name: "Community", href: "#" },
    ],
    Legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-7">
            <div className="flex items-center gap-2">
              <Image src="/nav.png" alt="Exile Logo" width={24} height={24} className="opacity-80" />
              <span className="text-base font-black tracking-tighter uppercase text-white">Exile</span>
            </div>
            <p className="text-xs text-white/25 leading-relaxed font-medium max-w-[200px]">
              The operating system for the self-guided student. Built for the bold.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/20 hover:text-white/60 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-base">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNavigation).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                {title}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/20 font-medium hover:text-white/50 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[10px] font-bold uppercase tracking-widest text-white/15">
            <p>&copy; {currentYear} Exile Inc.</p>
            <div className="hidden md:block h-1 w-1 bg-white/10 rounded-full" />
            <p className="italic font-serif normal-case text-white/10">Autonomy in Education.</p>
          </div>

          <div className="flex gap-6 items-center border border-white/6 px-4 py-2 rounded-full bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#80c4a0] rounded-full animate-pulse shadow-[0_0_8px_rgba(128,196,160,0.5)]" />
              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                Network Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
