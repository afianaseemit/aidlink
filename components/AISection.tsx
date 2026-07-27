"use client";

import { useState } from "react";
import { Bot, Sparkles, Loader2 } from "lucide-react";

export default function AISection() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!prompt.trim()) {
      setReply("Please describe your situation first.");
      return;
    }

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      console.log("AI DATA:", data);

      if (data.success) {
        setReply(data.response);
      } else {
        setReply(data.error || "Unable to analyze your request.");
      }
    } catch (error: any) {
      setReply(error.message || "Unable to contact AI.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            AI Assistant
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Describe Your Situation
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            AidLink AI analyzes your request and suggests the best course of action.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-2xl">

          <textarea
            rows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Flood in Swat. Around 200 families need food, clean drinking water, medicines and temporary shelter."
            className="w-full rounded-2xl border border-slate-300 p-5 text-lg outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button
            onClick={askAI}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Analyzing...
              </>
            ) : (
              <>
                <Bot size={20} />
                Analyze Request
              </>
            )}
          </button>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">

            <div className="mb-4 flex items-center gap-3">

              <div className="rounded-full bg-blue-600 p-3 text-white">
                <Bot size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  AidLink AI Response
                </h3>

                <p className="text-sm text-slate-500">
                  AI-generated assistance
                </p>
              </div>

            </div>

            <pre className="min-h-[220px] whitespace-pre-wrap break-words rounded-xl bg-white p-5 text-slate-700 leading-8">

              {loading
                ? "Analyzing..."
                : reply || "AI response will appear here after clicking 'Analyze Request'."}

            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}