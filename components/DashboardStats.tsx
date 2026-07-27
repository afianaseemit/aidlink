import {
  Users,
  HandHeart,
  HeartHandshake,
  TriangleAlert,
  Building2,
} from "lucide-react";

type Props = {
  users: number;
  volunteers: number;
  donations: number;
  requests: number;
organizations?: number;};

export default function DashboardStats({

  users,

  volunteers,

  donations,

  requests,

  organizations,

}: Props) {

  const stats = [

    {
      title: "Registered Users",
      value: users,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },

    {
      title: "Volunteers",
      value: volunteers,
      icon: HandHeart,
      color: "text-green-600",
      bg: "bg-green-50",
    },

    {
      title: "Donations",
      value: donations,
      icon: HeartHandshake,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },

    {
      title: "Help Requests",
      value: requests,
      icon: TriangleAlert,
      color: "text-red-600",
      bg: "bg-red-50",
    },

    {
      title: "Organizations",
value: organizations ?? 4,      icon: Building2,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },

  ];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >

            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
            >

              <Icon
                size={28}
                className={item.color}
              />

            </div>

            <h2 className="text-4xl font-bold text-slate-800">
              {item.value}
            </h2>

            <p className="mt-2 text-slate-500">
              {item.title}
            </p>

          </div>

        );

      })}

    </div>

  );

}