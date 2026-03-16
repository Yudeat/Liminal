import { auth } from "@/auth";
import ProfileClient from "./profile-client";

export default async function ProfilePage() {
  const session = await auth();

  return <ProfileClient session={session} />;
}
