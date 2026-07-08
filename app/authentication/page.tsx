"use client"

import { useState } from "react"
import Image from "next/image"
import { HiEye, HiEyeOff } from "react-icons/hi"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault()
    // auth coming soon
  }

  const switchMode = () => {
    setIsLogin(!isLogin)
    setForm({ name: "", email: "", password: "" })
  }

  return (
    <div className="min-h-screen flex font-sans">

      {/* Left panel — atmospheric image */}
      <div className="hidden lg:block lg:w-[45%] relative overflow-hidden">
        <Image
          src="/auth-bg.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

        {/* Centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-7 h-7">
              <Image src="/nav.png" alt="Exile" fill className="object-contain" />
            </div>
            <span className="text-white/80 text-sm font-black uppercase tracking-widest">Exile</span>
          </div>
          <p className="text-white/80 text-2xl font-light leading-snug tracking-tight">
            "The art of<br />
            <em className="text-[#f9a8d4] not-italic font-black">self-exile</em><br />
            begins here."
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-[380px]">

          <p className="text-center text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10">
            Exile OS
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isLogin ? "Access to Exile" : "Join Exile"}
          </h1>

          <form onSubmit={handleAction} className="space-y-5">

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Insert email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-500">
                  Password
                </label>
                {isLogin && (
                  <button type="button" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Your password"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-11 text-sm text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <HiEyeOff size={18} /> : <HiEye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 bg-black text-white rounded-lg text-sm font-bold hover:bg-[#4b1227] transition-colors"
            >
              {isLogin ? "Login" : "Create account"}
            </button>
          </form>

          <div className="my-7 border-t border-gray-100" />

          <p className="text-center text-sm text-gray-500">
            {isLogin ? "New to Exile? " : "Already have an account? "}
            <button
              onClick={switchMode}
              className="font-semibold text-gray-900 hover:underline"
            >
              {isLogin ? "Create an account" : "Log in"}
            </button>
          </p>

        </div>
      </div>

    </div>
  )
}
