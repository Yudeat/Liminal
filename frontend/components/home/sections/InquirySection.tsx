"use client";

import { useState, useRef, useEffect } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

type Message = {
  from: "student" | "exile";
  text: string;
};

const suggestions = [
  "How do I start my application?",
  "Which countries can I apply to?",
  "How much does Elite cost?",
  "Do I need a consultant?",
];

const autoReply = (msg: string): string => {
  const m = msg.toLowerCase();
  if (m.includes("cost") || m.includes("price") || m.includes("elite"))
    return "Elite is a one-time $4,999 investment covering unlimited universities, full visa management, and 1-on-1 strategy calls. We also have a free tier to get started.";
  if (m.includes("start") || m.includes("begin") || m.includes("application"))
    return "Start by checking your eligibility — it takes 2 minutes. From there, Exile generates your custom roadmap with day-by-day milestones.";
  if (m.includes("countr") || m.includes("destination") || m.includes("where"))
    return "We support 48+ destinations including Germany, Czech Republic, Netherlands, Poland, and more. No tuition in many EU countries.";
  if (m.includes("consultant") || m.includes("agent"))
    return "You don't need one. Exile replaces the commission-first consultant model with a transparent, student-owned system. Everything is auditable.";
  return "Thanks for reaching out. Our team will follow up within 24 hours. You can also explore the FAQ section above for immediate answers.";
};

export default function InquirySection() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "exile", text: "Hey! Ask us anything about studying abroad — universities, visas, timelines, or how Exile works." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setInput("");
    setMessages((prev) => [...prev, { from: "student", text }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "exile", text: autoReply(text) }]);
    }, 1000);
  };

  return (
    <section id="chat" className="bg-[#080808] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_480px] gap-16 items-start">

        {/* Left */}
        <div className="md:sticky md:top-32">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-5">
            Inquiry
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] uppercase mb-6">
            Ask us<br />
            <em className="font-serif font-light not-italic italic text-[#f9a8d4]">anything.</em>
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-xs">
            No sales pitch. No pressure. Just answers to whatever is blocking your first step.
          </p>
        </div>

        {/* Chat window */}
        <div className="flex flex-col border border-white/8 bg-white/[0.02] overflow-hidden" style={{ height: "520px" }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
            <div className="w-2 h-2 rounded-full bg-[#f9a8d4]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
              Exile OS — Live Inquiry
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 scrollbar-none">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "student" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.from === "student"
                      ? "bg-[#f9a8d4] text-black font-medium"
                      : "bg-white/6 text-white/80 border border-white/8"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/6 border border-white/8 px-4 py-3 flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          <div className="px-5 pb-3 flex gap-2 flex-wrap">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-[9px] font-black uppercase tracking-wider text-white/40 border border-white/10 px-3 py-1.5 hover:border-[#f9a8d4]/40 hover:text-[#f9a8d4] transition-all"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-t border-white/8">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Type your question..."
              className="flex-1 bg-transparent text-white text-sm placeholder:text-white/25 outline-none"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-8 h-8 flex items-center justify-center bg-[#f9a8d4] text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f472b6] transition-colors"
            >
              <HiOutlinePaperAirplane size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
