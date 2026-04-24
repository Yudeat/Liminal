import { headers } from "next/headers";

function readForwardedFor(value: string | null): string | null {
  if (!value) return null;
  const first = value.split(",")[0]?.trim();
  return first || null;
}

export async function getRequestIp(): Promise<string> {
  const h = await headers();
  const forwarded = readForwardedFor(h.get("x-forwarded-for"));
  const realIp = h.get("x-real-ip");
  return forwarded || realIp || "unknown";
}
