import Link from "next/link";
import {
  HeartHandshake,
  Utensils,
  Shirt,
  GraduationCap,
  Hospital,
  House,
} from "lucide-react";

const categories = [
  {
    title: "Food Assistance",
    description:
      "Help families by donating groceries, cooked meals, and essential food items.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Clothing",
    description:
      "Provide clothes, shoes, blankets, and winter essentials to those in need.",
    icon: Shirt,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Medical Aid",
    description:
      "Support medicines, first aid, hospital expenses, and emergency healthcare.",
    icon: Hospital,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Education",
    description:
      "Donate books, stationery, school uniforms, and educational resources.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Shelter",
    description:
      "Provide temporary housing, tents, furniture, and household necessities.",
    icon: House,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Volunteer",
    description:
      "Join AidLink volunteers to support relief activities and community service.",
    icon: HeartHandshake,
    color: "bg-cyan-100 text-cyan-600",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Donation Categories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Choose How You Want to Make an Impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every contribution matters. Select a category and help people where
            support is needed the most.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <Link
                  href="/donate"
                  className="mt-8 inline-flex items-center font-semibold text-blue-600 transition group-hover:translate-x-2"
                >
                  Explore →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}