import Link from "next/link";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">

        {/* Left Side */}
        <div>

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            AI Powered Charity Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Connecting
            <span className="text-blue-600"> Kindness </span>
            with
            <span className="text-cyan-500"> Communities</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            AidLink connects donors, volunteers and people in need through one
            intelligent platform. Request assistance, donate essential items,
            and let AI help prioritize urgent cases.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/donate"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Donate Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/request-help"
              className="rounded-xl border-2 border-blue-600 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Request Help
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                5K+
              </h2>

              <p className="mt-2 text-slate-600">
                Donations
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                1K+
              </h2>

              <p className="mt-2 text-slate-600">
                Volunteers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600">
                150+
              </h2>

              <p className="mt-2 text-slate-600">
                Communities
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-10 shadow-2xl">

            <div className="rounded-2xl bg-white p-8">

              <div className="flex items-center gap-4">

                <div className="rounded-full bg-blue-100 p-5">
                  <HeartHandshake
                    size={38}
                    className="text-blue-600"
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Live Impact
                  </h3>

                  <p className="text-slate-500">
                    Flood Relief Campaign
                  </p>

                </div>

              </div>

              <div className="mt-8">

                <div className="mb-3 flex justify-between text-sm text-slate-500">
                  <span>Raised</span>
                  <span>Goal</span>
                </div>

                <div className="mb-5 flex justify-between">

                  <span className="text-3xl font-bold text-blue-600">
                    Rs. 420K
                  </span>

                  <span className="text-3xl font-bold text-slate-900">
                    Rs. 600K
                  </span>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                  <div
                    className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 pr-3 text-xs font-bold text-white"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>

                </div>

              </div>

              <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                Donate Now
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}