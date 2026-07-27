"use client";

import { Brain } from "lucide-react";

type Props = {
  response: string;
};

export default function AICard({ response }: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="mb-5 flex items-center gap-3">

        <Brain
          size={32}
          className="text-blue-600"
        />

        <h2 className="text-2xl font-bold">
          AI Disaster Analysis
        </h2>

      </div>

      <div className="min-h-[220px] rounded-2xl bg-slate-50 p-5 whitespace-pre-wrap">

        {response || "Run AI analysis to view recommendations."}

      </div>

    </div>
  );
}