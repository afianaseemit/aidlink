"use client";

import {
  AlertTriangle,
  MapPin,
  Users,
  CheckCircle,
  Building2,
  HandHeart,
} from "lucide-react";

type Request = {
  id: string;

  disasterType: string;

  city: string;

  peopleAffected: number;

  urgency: string;

  status: string;

  assignedVolunteerName?: string;

  assignedOrganizationName?: string;
};


type Props = {
  requests: Request[];
};

export default function RecentRequests({
  requests,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Help Requests
      </h2>

      {requests.length === 0 ? (
        <div className="rounded-xl bg-slate-50 p-6 text-center text-slate-500">
          No requests found.
        </div>
      ) : (
        <div className="space-y-4">

          {requests.map((request) => (
            <div
              key={request.id}
              className="rounded-2xl border p-4 transition hover:bg-slate-50"
            >

              <div className="flex items-center gap-2">

                <AlertTriangle
                  className="text-red-600"
                  size={20}
                />

                <h3 className="font-semibold">
                  {request.disasterType}
                </h3>

              </div>

              <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-600">

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {request.city}
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} />
                  {request.peopleAffected} People
                </div>

              </div>              <div className="mt-4 flex flex-wrap items-center gap-3">

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
                  {request.urgency}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    request.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : request.status === "Assigned"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  <CheckCircle
                    size={14}
                    className="mr-1 inline"
                  />
                  {request.status}
                </span>

              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-700">

                <div className="flex items-center gap-2">

                  <HandHeart
                    size={16}
                    className="text-green-600"
                  />

                  <span className="font-medium">
                    Volunteer:
                  </span>

                  {request.assignedVolunteerName ||
                    "Not Assigned"}

                </div>

                <div className="flex items-center gap-2">

                  <Building2
                    size={16}
                    className="text-blue-600"
                  />

                  <span className="font-medium">
                    Organization:
                  </span>

                  {request.assignedOrganizationName ||
                    "Not Assigned"}

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}