import {
  FileText,
  Brain,
  Users,
  HeartHandshake,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Request",
    description:
      "People in need submit their request through AidLink with all necessary details.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our AI analyzes urgency, identifies required items and prioritizes requests.",
  },
  {
    icon: Users,
    title: "Volunteer Matching",
    description:
      "Nearby volunteers and donors are notified to provide the required support.",
  },
  {
    icon: HeartHandshake,
    title: "Help Delivered",
    description:
      "Donations reach the right people quickly with complete transparency.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            How AidLink Works
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From requesting help to delivering donations,
            every step is fast, transparent and powered by AI.
          </p>

        </div>

        {/* Timeline */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Step Number */}

                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}

                <div className="mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={32} />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}