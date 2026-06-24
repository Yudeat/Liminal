import { auth } from "@/backend/auth";
import HomePage from "@/frontend/components/home/HomePage";

export default async function Home() {
  const session = await auth();
  return <HomePage session={session} />;
}
