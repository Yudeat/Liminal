import { HeroShell } from "./HeroShell";
import { SessionData } from "./types";

type NavbarProps = {
  session: SessionData | null;
};

export default function Navbar({ session }: NavbarProps) {
  return <HeroShell session={session} />;
}
