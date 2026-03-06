// app/actions/register.ts
"use server"

import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/password"
import { signInSchema } from "@/lib/zod"

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // 1. Validate inputs
  const validated = signInSchema.safeParse({ email, password })
  if (!validated.success) return

  // 2. Check if user exists
  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) return

  // 3. Hash and Save
  const hashedPassword = await hashPassword(password)
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })
}
