import Image from "next/image";
export default function Navbar() {
  return (
    <>
    <div className="flex flex-row items-center">
      <div className="flex flex-row  text-4xl items-center">
         <Image src="/logoo.png" 
       width={200}
       height={200}
       alt="logo" 
       className="ml-5 
       h-10 
     rounded-full
     w-24
     h-auto
     "
      />
      </div>
   
      </div>
            <h1 className="text-4xl font-bold ml-5">Liminal</h1>    
</>
          
  );
}