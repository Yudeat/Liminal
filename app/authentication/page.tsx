"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion"
import { signIn } from "next-auth/react"
import { registerUser } from "@/app/actions/register"
import { HiOutlineSparkles, HiOutlineShieldCheck, HiOutlineArrowRight } from "react-icons/hi2"

export default function LiminalAuth() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })

  // --- Theme-Matching Mouse Tracking ---
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 30, stiffness: 300 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // --- Debounced Validation (Keystroke) ---
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (form.email && !form.email.includes("@")) {
        setError("Invalid context: Email format unrecognized")
      } else {
        setError("")
      }
    }, 800)
    return () => clearTimeout(timeout)
  }, [form.email])

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    if (isLogin) {
      const res = await signIn("credentials", { ...form, redirect: false })
      if (res?.error) setError("Authentication failed: Identity mismatch")
      else window.location.href = "/"
    } else {
      const res = await registerUser(new FormData(e.currentTarget as HTMLFormElement))
      if (res.error) setError(res.error)
      else setIsLogin(true)
    }
    setLoading(false)
  }

  return (
    <div className="relative min-h-screen w-full bg-white text-black font-sans antialiased flex items-center justify-center overflow-hidden">
      
      {/* --- THEME-MATCHING CURSOR --- */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ scale: isHovered ? 4 : 1 }}
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* --- BACKGROUND GRID (From your Hero) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[440px] px-6"
      >
        {/* Context Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400">
            <HiOutlineSparkles className="text-pink-400" /> {isLogin ? "Secure Entry" : "System Enrollment"}
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-[3rem] leading-none font-black tracking-tighter uppercase">
            {isLogin ? "Return to" : "Begin your"} <br />
            <span className="text-pink-400 italic font-serif font-light lowercase">the journey</span>
          </h1>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl border border-gray-100 p-8 rounded-[2.5rem] shadow-sm">
          <form onSubmit={handleAction} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Credential_Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-full text-sm outline-none focus:border-pink-200 focus:bg-white transition-all"
                placeholder="identity@exile.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Access_Key</label>
              <input
                name="password"
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value})}
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-full text-sm outline-none focus:border-pink-200 focus:bg-white transition-all"
                placeholder="••••••••"
              />
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-100 rounded-2xl text-[10px] font-bold text-red-500 uppercase tracking-tight"
                >
                  <HiOutlineShieldCheck size={14} /> {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={loading}
              className="w-full mt-4 py-4 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-pink-400 hover:shadow-xl hover:shadow-pink-100 transition-all duration-500 flex items-center justify-center gap-2 group"
            >
              {loading ? "Verifying..." : isLogin ? "Authorize Session" : "Create Identity"}
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
            >
              {isLogin ? "Need an identity? Enrollment" : "Existing User? Access Portal"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}