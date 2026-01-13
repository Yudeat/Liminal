'use client';
import ParticlesBackground from "@/components/lightswind/particles-background";
import Image from "next/image";
import SparkleNavbar  from '@/components/lightswind/sparkle-navbar'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
 const [isOpen, setIsOpen] = React.useState(false);

  return (
 <>
 {/* logo */}
<nav className="relative mx-4 mt-4 max-w-7xl lg:mx-auto border p-2 md:p-4 h-auto md:h-24 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center justify-evenly bg-black/50 backdrop-blur-md overflow-hidden text-white border-white/10">
<div className="flex items-center text-xl md:text-2xl font-bold z-10">   <Image
      src="/nav.png"
      alt="logo"
      width={60}
      height={60}
      
    />
  <span >Liminal</span>
    </div>
<div className="w-full md:w-auto flex items-center justify-center z-10 py-2 md:py-0">  
    <SparkleNavbar
  items={['Home', 'About', 'Services', 'Contact']}
  color="#1E90FF"
/>
</div>
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


<div>
<GiHamburgerMenu/>
</div>



</nav>

</>

  );
}