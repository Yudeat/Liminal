'use client';
import ParticlesBackground from "@/components/lightswind/particles-background";
import Image from "next/image";
import SparkleNavbar  from '@/components/lightswind/sparkle-navbar'
import { GiHamburgerMenu  } from "react-icons/gi";
import { FaRegCircleUser } from "react-icons/fa6";
export default function Navbar() {

  return (
 <>
 {/* logo */}
<nav className="relative mx-4 mt-4 max-w-7xl lg:mx-auto border p-2 md:p-4 h-auto md:h-24 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-evenly bg-black/50 backdrop-blur-md overflow-hidden text-white border-white/10">
<div className="flex items-center text-xl md:text-2xl font-bold z-10">  
   <Image
      src="/nav.png"
      alt="logo"
      width={40}
      height={10}
      
    />
  <span >Liminal</span>
    </div>

    {/* middle section */}
<div className="w-full md:w-auto md:block hidden flex items-center justify-center z-10 py-2 md:py-0">  
    <SparkleNavbar
  items={['Home', 'About', 'Services', 'Contact']}
  color="#1E90FF"
/>
</div>

{/* Nav bar particles background */}
<div className="absolute inset-0 pointer-events-none">

      <ParticlesBackground
  colors={['#00ffff', '#ff00ff', '#ffaa00']}
  size={4}
  countDesktop={80}
  countTablet={60}
  countMobile={40}
  zIndex={-1}
  height="100vh"
/>
</div>


{/* left section */}
<section>
<div className=" md:hidden items-center justify-end z-10 py-2 md:py-0">
<GiHamburgerMenu/>
</div>

<div className=" text-2xl hidden md:flex items-center justify-end z-10 py-2 md:py-0">
<FaRegCircleUser/>
</div>
</section>



</nav>

</>

  );
}