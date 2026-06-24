import { auth } from "@/backend/auth";
import { redirect } from "next/navigation";
import ProfileClient from "@/frontend/components/profile/ProfileClient";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) redirect("/authentication");

  return <ProfileClient session={session} />;
}
