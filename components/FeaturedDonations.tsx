import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedDonations() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Featured Campaign
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Help Families Affected by Floods
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Your donation provides food, shelter, medicine and emergency
            supplies to families affected by natural disasters.
          </p>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-10 text-white">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-3xl font-bold">
                  Emergency Flood Relief
                </h3>

                <p className="mt-3 max-w-xl text-blue-100">
                  Help us deliver food packages, clean drinking water,
                  medicines and temporary shelter to affected communities.
                </p>

                <div className="mt-5 flex items-center gap-2 text-blue-100">
                  <MapPin size={18} />
                  Pakistan
                </div>

              </div>

            </div>

          </div>

          {/* Body */}

          <div className="p-10">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Raised
                </p>

                <h3 className="text-4xl font-bold text-blue-600">
                  Rs.420,000
                </h3>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-500">
                  Goal
                </p>

                <h3 className="text-4xl font-bold text-slate-900">
                  Rs.600,000
                </h3>

              </div>

            </div>

            {/* Progress */}

            <div className="mb-8">

              <div className="mb-3 flex justify-between text-sm text-slate-500">
                <span>70% Completed</span>
                <span>180 Donors</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-slate-200">

                <div
                  className="flex h-full items-center justify-end rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 pr-3 text-xs font-semibold text-white"
                  style={{ width: "70%" }}
                >
                  70%
                </div>

              </div>

            </div>

            {/* Button */}

            <Link
              href="/donate"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Donate Now
              <ArrowRight size={20} />
            </Link>

            {/* Features */}

            <div className="mt-10 grid gap-4 rounded-2xl bg-slate-100 p-6 md:grid-cols-3">

              <div className="text-center">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold text-slate-700">
                  Secure Donation
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl">❤️</div>
                <p className="mt-2 font-semibold text-slate-700">
                  Trusted NGO
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl">🎯</div>
                <p className="mt-2 font-semibold text-slate-700">
                  Direct Impact
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}