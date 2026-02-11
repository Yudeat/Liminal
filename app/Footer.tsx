import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaSquareInstagram, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaSquareInstagram />, href: "#" },
    { icon: <FaGithub />, href: "#" },
  ];

  const footerLinks = {
    Product: ["Features", "Security", "Payment", "Risk Scoring", "How We Work"],
    Company: ["About Us", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Cookie Policy"],
  };

  const developerLinks = ["API", "SDK", "Documentation", "Support Center", "Blog", "Community"];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="flex items-center gap-2">
            <Image src="/nav.png" alt="logo" width={40} height={40} />
            <span className="text-xl font-bold tracking-tighter">Liminal</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Follow Us</p>
            <ul className="flex gap-4">
              {socialLinks.map((social, i) => (
                <li key={i} className="text-xl text-gray-600 hover:text-[#bf00ff] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {social.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12">
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link} className="text-gray-500 hover:text-[#bf00ff] cursor-pointer transition-colors text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-4 md:mt-8">
            <h3 className="font-bold text-gray-900 mb-4">Developers</h3>
            <ul className="space-y-2">
              {developerLinks.map((link) => (
                <li key={link} className="text-gray-500 hover:text-[#bf00ff] cursor-pointer transition-colors text-sm">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Liminal Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-gray-600 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-600 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}