"use client";

import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Users,
} from "lucide-react";

export default function OrganizationsPage() {

  const organizations = [
    {
      id: 1,
      name: "AidLink Relief Foundation",
      city: "Islamabad",
      category: "Disaster Relief",
      phone: "+92 300 1111111",
      email: "contact@aidlink.org",
      campaigns: "12",
      website: "https://www.aidlink.org",
      volunteers: "67",
      description:
        "Provides emergency food, shelter and medical assistance during natural disasters.",
    },
    {
      id: 2,
      name: "HopeCare Network",
      city: "Lahore",
      category: "Medical Support",
      phone: "+92 300 2222222",
      email: "info@hopecare.org",
      campaigns: "29",
      website: "https://www.hopecare.org",
      volunteers: "46",
      description:
        "Supports communities with emergency healthcare and relief services.",
    },
    {
      id: 3,
      name: "Unity Rescue Team",
      city: "Karachi",
      category: "Emergency Response",
      phone: "+92 300 3333333",
      email: "support@unityrescue.org",
      campaigns: "43",
      website: "https://www.unityrescue.org",
      volunteers: "57",
      description:
        "Coordinates rescue volunteers and emergency response operations.",
    },
    {
      id: 4,
      name: "Bright Future Foundation",
      city: "Peshawar",
      category: "Education & Relief",
      phone: "+92 300 4444444",
      email: "hello@brightfuture.org",
      campaigns: "10",
      website: "https://www.brightfuture.org",
      volunteers: "103",
      description:
        "Provides educational support and humanitarian assistance to affected families.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-blue-600">
            Relief Organizations
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Connect with organizations supporting disaster relief across Pakistan.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {organizations.map((org) => (

            <div
              key={org.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h2 className="text-3xl font-bold text-blue-600">
                {org.name}
              </h2>

              <p className="mt-3 text-slate-600">
                {org.description}
              </p>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-red-500" />
                  <span>{org.city}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-green-600" />
                  <span>{org.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600" />
                  <span>{org.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-cyan-600" />

                  <a
                    href={org.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>

                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-slate-100 p-5 text-center">

                  <Users
                    className="mx-auto mb-2 text-green-600"
                    size={28}
                  />

                  <h3 className="text-2xl font-bold">
                    {org.volunteers}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Volunteers
                  </p>

                </div>

                <div className="rounded-2xl bg-slate-100 p-5 text-center">

                  <h3 className="text-2xl font-bold text-blue-600">
                    {org.campaigns}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Campaigns
                  </p>

                </div>

              </div>

              <div className="mt-8 flex gap-4">

                <a
                  href={`tel:${org.phone}`}
                  className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Call
                </a>

                <a
                  href={`mailto:${org.email}`}
                  className="flex-1 rounded-xl border border-blue-600 py-3 text-center font-semibold text-blue-600 hover:bg-blue-50"
                >
                  Email
                </a>

              </div>

            </div>

          ))}

        </div>
              {/* Disclaimer */}

      <div className="mt-12 rounded-3xl border border-yellow-300 bg-yellow-50 p-8 shadow-sm">

        <h2 className="text-2xl font-bold text-yellow-800">
          Disclaimer
        </h2>

        <p className="mt-4 leading-8 text-yellow-700">
          AidLink is an academic demonstration project developed for
          educational purposes. The organizations, phone numbers,
          email addresses, websites, campaigns, volunteer counts,
          and other details displayed on this page are fictional and
          are provided solely to demonstrate the functionality of the
          AidLink platform.
        </p>

        <p className="mt-4 leading-8 text-yellow-700">
          These organizations do not represent real humanitarian
          agencies, and no real-world affiliation or endorsement is
          intended. Please do not attempt to contact, donate to, or
          rely on the information presented here.
        </p>

        <p className="mt-4 leading-8 text-yellow-700">
          For actual disaster relief or emergency assistance, please
          contact officially recognized government authorities or
          registered humanitarian organizations.
        </p>

      </div>

    </div>

  </main>
  );
}