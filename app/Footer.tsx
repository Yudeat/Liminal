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
      { name: "Blog", href: "#" },
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
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <Image src="/nav.png" alt="Liminal Logo" width={28} height={28} className="" />
              <span className="text-xl font-black tracking-tighter uppercase">Liminal</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed font-medium max-w-[220px]">
              The operating system for the self-guided student. Built for the bold.
            </p>
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-black transition-all duration-500 transform hover:-translate-y-1"
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Links Columns */}
          {Object.entries(footerNavigation).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
                {title}
              </h3>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-400 font-medium hover:text-black transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <p>© {currentYear} Liminal Inc.</p>
            <div className="hidden md:block h-1 w-1 bg-gray-200 rounded-full" />
            <p className="italic font-serif normal-case text-gray-300">Autonomy in Education.</p>
          </div>
          
          <div className="flex gap-8 items-center border border-gray-100 px-4 py-2 rounded-full bg-gray-50/50">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Network Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}