import {
  HeartHandshake,
  Users,
  ShieldCheck,
  Brain,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            About AidLink
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            AidLink is an AI-powered humanitarian platform that connects
            donors, volunteers, NGOs, and people in need. Our goal is to
            make emergency support faster, smarter, and more transparent.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <HeartHandshake className="mb-5 text-blue-600" size={42} />
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-600">
              Deliver help quickly through AI-powered assistance and trusted
              community support.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Users className="mb-5 text-green-600" size={42} />
            <h3 className="text-xl font-bold">Community</h3>
            <p className="mt-3 text-slate-600">
              Bringing together donors, volunteers, NGOs and beneficiaries on
              one platform.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <Brain className="mb-5 text-purple-600" size={42} />
            <h3 className="text-xl font-bold">AI Assistance</h3>
            <p className="mt-3 text-slate-600">
              AI analyzes requests to identify priorities and recommend
              appropriate assistance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <ShieldCheck className="mb-5 text-cyan-600" size={42} />
            <h3 className="text-xl font-bold">Transparency</h3>
            <p className="mt-3 text-slate-600">
              Every request and donation is managed in a secure and transparent
              manner.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-bold">
            Why Choose AidLink?
          </h2>

          <ul className="mt-8 space-y-5 text-slate-700">

            <li>✅ AI-powered emergency request analysis</li>

            <li>✅ Fast connection with NGOs and volunteers</li>

            <li>✅ Secure Firebase authentication</li>

            <li>✅ Transparent campaign tracking</li>

            <li>✅ Support for food, medical, shelter, education and disaster relief</li>

          </ul>

        </div>

      </div>
    </main>
  );
}