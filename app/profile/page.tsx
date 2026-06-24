import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileClient from "./profile-client";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) redirect("/authentication");

  return <ProfileClient session={session} />;
}
