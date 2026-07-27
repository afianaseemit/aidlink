import Link from "next/link";
import { categories } from "./categories";
import { donations } from "./donations";

export default function DataPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <h1 className="mb-10 text-center text-5xl font-bold">
          AidLink Demo Data
        </h1>

        {/* Categories */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-3xl font-bold">
            Categories
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border p-6"
              >
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {category.description}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Donations */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-3xl font-bold">
            Featured Campaigns
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {donations.map((donation) => (

              <div
                key={donation.id}
                className="overflow-hidden rounded-2xl border bg-white shadow"
              >

                <img
                  src={donation.image}
                  alt={donation.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {donation.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {donation.location}
                  </p>

                  <div className="mt-4">

                    <div className="mb-2 flex justify-between text-sm">

                      <span>
                        Rs. {donation.raised.toLocaleString()}
                      </span>

                      <span>
                        Rs. {donation.goal.toLocaleString()}
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-slate-200">

                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                        style={{
                          width: `${
                            (donation.raised / donation.goal) * 100
                          }%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-10 text-center">

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}