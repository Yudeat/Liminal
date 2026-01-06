import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/logo.svg"
        alt="liminal logo"
        width={256}
        height={256}
        className="w-32 h-32"
      />
      <p className="text-6xl font-bold">Liminal</p>
      <p className="text-2xl font-bold">
        A{" "}
        <a
          href="https://github.com/liminal-market/liminal-market"
          className="text-blue-500"
        >
          Liminal Market
        </a>{" "}
        dApp
      </p>
    </div>
  );
}
