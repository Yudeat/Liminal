import { auth } from "@/auth";
import HomePage from "@/components/home/HomePage";

export default async function Home() {
  const session = await auth();
  return <HomePage session={session} />;
}
