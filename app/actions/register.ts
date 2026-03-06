// app/actions/register.ts
"use server"

import { prisma } from "@/lib/prisma"
import { hashPassword } from "@/lib/password"
import { signInSchema } from "@/lib/zod"

export type RegisterUserResult = { success: true } | { error: string }

export async function registerUser(formData: FormData): Promise<RegisterUserResult> {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    // 1. Validate inputs
    const validated = signInSchema.safeParse({ email, password })
    if (!validated.success) return { error: "Invalid email or password format" }

    // 2. Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) return { error: "User already exists" }

    // 3. Hash and Save
    const hashedPassword = await hashPassword(password)
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    return { success: true }
  } catch {
    return { error: "Failed to create user account" }
  }
}
