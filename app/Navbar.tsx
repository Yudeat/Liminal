import Image from "next/image";
export default function Navbar() {
  return (
    <>
    <div className="flex flex-row items-center">
      <div className="flex flex-row  text-4xl items-center">
        <Image
          src="/log.png"
          alt="logo"
          width={200}
          height={200} 
      />
      </div>
   
      </div>
            <h1 className="text-4xl font-bold ml-5">Liminal</h1>    
</>
          
  );
}