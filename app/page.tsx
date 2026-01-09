import Image from "next/image";

export default function Home() {
  return (<>
 

      <Image
      className=""
        src="/logo.svg"
        alt="liminal logo"
        width={256}
        height={256}
        priority
      />
      <p className="text-6xl font-bold">Liminal</p>
      <p className="text-2xl font-bold">
      A Place Between decision and departure
        </p>
      <p className="text-xl">
        Liminal is a place where you can make decisions and leave without
        regrets.  
        
      </p>

    </>
  );
}
