import { signIn } from "@/auth"
import { registerUser } from "@/app/actions/register"

export default function AuthenticationPage() {
  return (
    <div className="flex gap-10 p-20">
      {/* SIGN IN FORM */}
      <form action={async (fd) => { "use server"; await signIn("credentials", fd) }}>
        <h2>Sign In</h2>
        <input name="email" type="email" placeholder="Email" className="text-black" />
        <input name="password" type="password" placeholder="Password" className="text-black" />
        <button type="submit">Login</button>
      </form>

      <div className="border-l h-40"></div>

      {/* REGISTER FORM */}
      <form action={registerUser}>
        <h2>Register</h2>
        <input name="email" type="email" placeholder="Email" className="text-black" />
        <input name="password" type="password" placeholder="Password" className="text-black" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}