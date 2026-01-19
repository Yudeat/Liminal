'use client';
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
import SparkleNavbar from '@/components/lightswind/sparkle-navbar';
import Hyperspeed from "@/components/Hyperspeed";
import {motion} from "framer-motion";
  const fadeUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, 
  transition: { 
  staggerChildren: 0.3,
  delayChildren: 0.2,
  } },
};

const itemAnimate={
  hidden: { opacity: 0, y: 30 },
  visible:{
    opacity: 1,
    y: 0,
    transition: { 
type: 'tween', 
ease: 'easeOut', 
duration: 1.2,

}
  }
}

export default function LandingPage() {

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>

      <div className="relative z-10" >
        
        <nav className="relative mx-4 mt-4 max-w-7xl lg:mx-auto border p-2 md:p-4 h-auto md:h-24 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-evenly bg-black/40 backdrop-blur-md overflow-hidden text-white border-white/10">
          
          {/* Logo */}
          <div className="flex items-center text-xl md:text-2xl font-bold z-10">
            <Image src="/nav.png" alt="logo" width={40} height={10} />
            <span className="ml-2">Liminal</span>
          </div>

          {/* Middle Links */}
          <div className="w-full md:w-auto md:block hidden flex items-center justify-center z-10 py-2 md:py-0">
            <SparkleNavbar
              items={['Home' , 'Services','Docs','About', 'Contact']}
              color="#2CFF05"
            />
          </div>


          {/* Icons Section */}
          <section className="flex items-center">
            <div className="md:hidden items-center justify-end z-10 py-2 md:py-0">
              <GiHamburgerMenu />
            </div>
            <div className="text-2xl hidden md:flex items-center justify-end z-10 py-2 md:py-0">
              <FaRegCircleUser />
            </div>
          </section>
        </nav>

       
        <motion.div className="flex flex-col items-center justify-center text-center px-4 pt-52 pb-20" variants={fadeUp} 
        whileInView="visible"
        initial="hidden" animate="visible" >
          <motion.h1 
          variants={itemAnimate}
          className="text-xl md:text-5xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-gray-500">
          Everything you need to apply abroad verified, guided, and in your control.
          </motion.h1>
          <motion.p 
          variants={itemAnimate}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10">
           Liminal replaces confusing consultancy processes with a transparent system that
            checks your eligibility, verifies your documents, and guides every step while you stay in charge of submission.          </motion.p>
          <motion.button
          variants={itemAnimate}
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          className="px-8 py-4 bg-[#bf00ff] text-[#2cff05] font-bold rounded-full hover:bg-pink-400 transition-colors">
            Get Started
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}