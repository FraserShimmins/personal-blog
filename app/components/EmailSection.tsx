"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EmailSection() {

  {/* UseStates */}
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      console.log("POST /api/send ->", res.status);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      {/* ON SUCCESS --> clear fields, and start a tiny cooldown */}
      setEmail("");
      setSubject("");
      setMessage("");

      setCooldown(true);
      setTimeout(() => setCooldown(false), 2000); // 2s lockout
    } 
    catch (err) {
      console.error("Send failed:", err);
    } 
    finally {
      setSending(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col">
      <div className="mx-6 sm:mx-10 w-fill mt-20 mb-40">
        <h1 className="text-[#a2b8b1] font-bold mb-12 text-4xl sm:text-5xl lg:text-6xl">
          Get In Touch!
        </h1>

        <form onSubmit={handleSubmit} className="text-[#a2b8b1]">
          {/* Email */}
          <label htmlFor="email" className="block text-lg sm:text-xl">
            Email:
          </label>

          <div className="flex items-center gap-12 mb-8">
            <div className="rounded-sm border-2 border-[#19374b] p-1 w-3xl">
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder="example@gmail.com"
                value={email}
                onChange={(email) => setEmail(email.target.value)}
                className="w-full bg-[#a2b8b1] placeholder-slate-900/60 text-slate-900
                           px-4 py-3 outline-none focus:ring-2 focus:ring-[#19374b]"
              />
            </div>

            <button
              type="submit"
              disabled={sending || cooldown}
              className="w-fill rounded-sm bg-[#19374b] text-[#a2b8b1]
                         hover:bg-slate-900 hover:text-white active:bg-slate-950
                         flex items-center justify-center gap-2 px-5 py-2
                         text-base sm:text-lg lg:text-xl border-4 border-slate-950
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="ml-[-5px] w-[3em] h-[3em]" />
              <span>
                {sending ? "Sending…" : cooldown ? "Sent!" : "Send"}
              </span>
            </button>
          </div>

          {/* Subject */}
          <label htmlFor="subject" className="block mb-2 text-lg sm:text-xl">
            Subject:
          </label>

          <div className="rounded-sm border-2 border-[#19374b] p-1 mb-8 md:max-w-3xl w-full">
            <input
              name="subject"
              id="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(subject) => setSubject(subject.target.value)}
              className="w-full bg-[#a2b8b1] placeholder-slate-900/60 text-slate-900
                         px-4 py-3 outline-none focus:ring-2 focus:ring-[#19374b]"
            />
          </div>

          {/* Message */}
          <label htmlFor="message" className="block mb-2 text-lg sm:text-xl">
            Message:
          </label>
          
          <div className="rounded-sm border-2 border-[#19374b] p-1 w-fill">
            <textarea
              name="message"
              id="message"
              rows={16}
              placeholder="Type your message…"
              value={message}
              onChange={(message) => setMessage(message.target.value)}
              className="w-full bg-[#a2b8b1] placeholder-slate-900/60 text-slate-900
                         px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#19374b]"
            />
          </div>

        </form>
      </div>
    </section>
  );
}
