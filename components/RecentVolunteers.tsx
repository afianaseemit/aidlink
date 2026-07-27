"use client";

type Volunteer = {
  id: string;
  name: string;
  email: string;
  city: string;
  skills: string;
};

type Props = {
  volunteers: Volunteer[];
};

import { User, MapPin, BadgeCheck } from "lucide-react";

export default function RecentVolunteers({
  volunteers,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Recent Volunteers
      </h2>

      {volunteers.length === 0 ? (
        <div className="rounded-xl bg-slate-50 p-6 text-center text-slate-500">
          No volunteers found.
        </div>
      ) : (
        <div className="space-y-4">

          {volunteers.map((volunteer) => (

            <div
              key={volunteer.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >

              <div>

                <div className="flex items-center gap-2">

                  <User
                    size={18}
                    className="text-blue-600"
                  />

                  <h3 className="font-semibold text-slate-800">
                    {volunteer.name}
                  </h3>

                </div>

                <p className="mt-1 text-sm text-slate-500">
                  {volunteer.email}
                </p>

                <div className="mt-2 flex items-center gap-5 text-sm text-slate-600">

                  <div className="flex items-center gap-1">

                    <MapPin
                      size={15}
                      className="text-cyan-600"
                    />

                    {volunteer.city}

                  </div>

                  <div className="flex items-center gap-1">

                    <BadgeCheck
                      size={15}
                      className="text-green-600"
                    />

                    {volunteer.skills}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}