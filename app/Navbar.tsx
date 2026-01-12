import Image from "next/image";
export default function Navbar() {
  return (
    <>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className=""
            />
            <h1 className="text-4xl font-bold ml-5">Liminal</h1>    
</>
          
  );
}