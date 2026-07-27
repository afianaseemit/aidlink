import {
  FaHandHoldingHeart,
  FaUsers,
  FaHandsHelping,
  FaMapMarkedAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaHandHoldingHeart className="text-5xl text-blue-600" />,
    number: "12,540+",
    label: "Donations Delivered",
  },
  {
    icon: <FaUsers className="text-5xl text-green-500" />,
    number: "4,850+",
    label: "Families Helped",
  },
  {
    icon: <FaHandsHelping className="text-5xl text-cyan-500" />,
    number: "1,250+",
    label: "Active Volunteers",
  },
  {
    icon: <FaMapMarkedAlt className="text-5xl text-purple-500" />,
    number: "150+",
    label: "Communities Served",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Making a Real Difference
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Every donation, volunteer, and supporter contributes to building
            stronger communities through AidLink.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-slate-900">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}