// auth.ts (Root)
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
import { comparePassword } from "./lib/password"
import { prisma } from "./lib/prisma"
import { applyRateLimit } from "./lib/rate-limit"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials, request) => {
        try {
          // 1. Validate Input with Zod
          const { email, password } = await signInSchema.parseAsync(credentials)
          const ipHeader = request?.headers.get("x-forwarded-for") ?? request?.headers.get("x-real-ip")
          const ip = ipHeader?.split(",")[0]?.trim() || "unknown"
          const loginRateLimit = applyRateLimit(`login:${ip}:${email}`, { windowMs: 10 * 60 * 1000, max: 5 })
          if (!loginRateLimit.allowed) return null

          // 2. Find User in Postgres
          const user = await prisma.user.findUnique({ where: { email } })
          if (!user || !user.password) return null

          // 3. Verify Password
          const isValid = await comparePassword(password, user.password)
          if (!isValid) return null

          return user
        } catch {
          return null
        }
      },
    }),
  ],
})
