"use client";

import { useState } from "react";

import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  AlertTriangle,
  Loader2,
} from "lucide-react";

export default function RequestHelpPage() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",

    disasterType: "Flood",

    peopleAffected: "",

    urgency: "High",

    neededItems: "",

    description: "",

    status: "Pending",

    assignedVolunteerId: "",
    assignedVolunteerName: "",

    assignedOrganizationId: "",
    assignedOrganizationName: "",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {

      // ==========================
      // FIND AVAILABLE VOLUNTEER
      // ==========================

      const volunteerSnapshot =
        await getDocs(
          collection(db, "volunteers")
        );

      let volunteer: any = null;

      volunteerSnapshot.forEach((doc) => {

        const data = doc.data();

        if (
          !volunteer &&
          data.status === "Available" &&
          data.city?.toLowerCase() ===
            form.city.toLowerCase()
        ) {

          volunteer = {
            id: doc.id,
            ...data,
          };

        }

      });

      // If no volunteer from same city
      // choose first available volunteer

      if (!volunteer) {

        volunteerSnapshot.forEach((doc) => {

          const data = doc.data();

          if (
            !volunteer &&
            data.status === "Available"
          ) {

            volunteer = {
              id: doc.id,
              ...data,
            };

          }

        });

      }

      // ==========================
      // FIND ORGANIZATION
      // ==========================

      const organizationSnapshot =
        await getDocs(
          collection(db, "organizations")
        );

      let organization: any = null;

      organizationSnapshot.forEach((doc) => {

        const data = doc.data();

        if (
          !organization &&
          data.category === form.disasterType
        ) {

          organization = {
            id: doc.id,
            ...data,
          };

        }

      });      // ==========================
      // IF NO MATCHING ORGANIZATION
      // USE FIRST ORGANIZATION
      // ==========================

      if (!organization) {

        organizationSnapshot.forEach((doc) => {

          if (!organization) {

            organization = {
              id: doc.id,
              ...doc.data(),
            };

          }

        });

      }

      // ==========================
      // SAVE HELP REQUEST
      // ==========================

      await addDoc(
        collection(db, "helpRequests"),
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          city: form.city,
          address: form.address,

          disasterType: form.disasterType,

          peopleAffected: Number(
            form.peopleAffected
          ),

          urgency: form.urgency,

          neededItems: form.neededItems,

          description: form.description,

          status:
            volunteer && organization
              ? "Assigned"
              : "Pending",

          assignedVolunteerId:
            volunteer?.id || "",

          assignedVolunteerName:
            volunteer?.name || "",

          assignedOrganizationId:
            organization?.id || "",

          assignedOrganizationName:
            organization?.name || "",

          createdAt: serverTimestamp(),

          updatedAt: serverTimestamp(),
        }
      );

      setMessage(
        volunteer && organization
          ? "✅ Help request submitted successfully and automatically assigned."
          : "✅ Help request submitted successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        address: "",

        disasterType: "Flood",

        peopleAffected: "",

        urgency: "High",

        neededItems: "",

        description: "",

        status: "Pending",

        assignedVolunteerId: "",
        assignedVolunteerName: "",

        assignedOrganizationId: "",
        assignedOrganizationName: "",
      });

    } catch (error) {

      console.error(error);

      setMessage(
        "❌ Failed to submit request."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-100 py-16">

      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

        <div className="mb-8 text-center">

          <AlertTriangle
            className="mx-auto text-red-600"
            size={48}
          />

                  <p className="mt-3 text-slate-600">
            Submit your disaster information. AidLink
            will automatically assign an available
            volunteer and organization whenever possible.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {message && (
            <div
              className={`rounded-xl p-4 text-center font-semibold ${
                message.startsWith("✅")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}

          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            required
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <input
            type="tel"
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            required
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({
                ...form,
                city: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            required
            placeholder="Complete Address"
            value={form.address}
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <select
            value={form.disasterType}
            onChange={(e) =>
              setForm({
                ...form,
                disasterType: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option>Flood</option>
            <option>Earthquake</option>
            <option>Fire</option>
            <option>Landslide</option>
            <option>Storm</option>
            <option>Drought</option>
            <option>Other</option>
          </select>

          <input
            type="number"
            required
            placeholder="Number of People Affected"
            value={form.peopleAffected}
            onChange={(e) =>
              setForm({
                ...form,
                peopleAffected: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <select
            value={form.urgency}
            onChange={(e) =>
              setForm({
                ...form,
                urgency: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>          <input
            type="text"
            required
            placeholder="Required Items (Food, Water, Medicine...)"
            value={form.neededItems}
            onChange={(e) =>
              setForm({
                ...form,
                neededItems: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <textarea
            rows={5}
            required
            placeholder="Describe your current situation..."
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">

            <h3 className="font-bold text-yellow-700">
              Important Notice
            </h3>

            <p className="mt-2 text-sm text-slate-700">
              AidLink automatically assigns an available volunteer and
              a suitable relief organization whenever possible based on
              disaster category, volunteer availability and location.
              Administrators may update assignments later if required.
            </p>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2
                  className="animate-spin"
                  size={20}
                />
                Submitting Request...
              </>
            ) : (
              "Submit Help Request"
            )}
          </button>

        </form>

      </div>

    </main>

  );

}