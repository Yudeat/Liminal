import ParticlesBackground from "@/components/lightswind/particles-background";
import Image from "next/image";
import SparkleNavbar  from '@/components/lightswind/sparkle-navbar'

export default function Navbar() {
  return (
 <>
 <div className="  w-full h-24 flex items-center justify-center">
    <SparkleNavbar
  items={['Home', 'About', 'Services', 'Contact']}
  color="#1E90FF"
/>
</div>
      <ParticlesBackground
  colors={['#00ffff', '#ff00ff', '#ffaa00']}
  size={4}
  countDesktop={80}
  countTablet={60}
  countMobile={40}
  zIndex={-1}
  height="100vh"
/>

</>
  );
}