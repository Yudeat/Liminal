import ParticlesBackground from "@/components/lightswind/particles-background";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative flex flex-row items-center w-full h-24 px-6 overflow-hidden">
 <ParticlesBackground />
      <div className="flex items-center">
        <Image
          src="/log.png"
          alt="logo"
          width={200}
          height={60} 
          priority 
        />
      </div>
    </nav>
  );
}