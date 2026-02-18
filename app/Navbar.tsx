'use client';
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import SparkleNavbar from '@/components/lightswind/sparkle-navbar';
import { motion } from "framer-motion";
// animation for text and icon
const fadeUp = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
  },
};

const itemAnimate = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', ease: 'easeOut', duration: 1.2 }
  }
}

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-black px-4 overflow-x-hidden mt-6">
      
      <div className="sticky w-full pt-4 top-0 z-10">
        
        <nav className="relative mx-4 max-w-7xl lg:mx-auto border p-4  md:p-4 h-auto md:h-24 rounded-3xl md:rounded-full flex flex-row md:flex-row items-center justify-between bg-white/80 backdrop-blur-md overflow-hidden text-black border-gray-200 shadow-sm">
          
          {/* Logo */}
          <div className="flex items-center text-xl md:text-2xl font-bold z-10">
            <Image src="/nav.png" alt="logo" width={40} height={10} />
            <span className="ml-2 text-black">Liminal</span>
          </div>

          {/* Middle Links */}
          <div className="w-full md:w-auto md:block hidden z-10 py-2 md:py-0">
            <SparkleNavbar
              items={['Home' , 'Services','Docs','Refund', 'Contact']}
              color="#2CFF05"
            />
          </div>

          {/* Icons Section */}
          <section className="flex items-center text-black">
            <div className="md:hidden flex items-center mr-5 justify-end z-10 py-2">
              <GiHamburgerMenu size={24} />
            </div>
            <div className="text-2xl hidden md:flex items-center justify-end z-10">
              <FaRegCircleUser />
            </div>
          </section>
        </nav>

        {/* Main Content */}
        
      
      </div>
    </div>
  );
}