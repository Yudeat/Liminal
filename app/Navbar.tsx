import { HeroShell } from "@/components/home/HeroShell";
import { SessionData } from "@/components/home/types";

type NavbarProps = {
  session: SessionData | null;
};

export default function Navbar({ session }: NavbarProps) {
  return <HeroShell session={session} />;
}
