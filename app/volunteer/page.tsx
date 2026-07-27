"use client";

"use client";

import { useState } from "react";

import { auth, db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    skills: "",
    availability: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  const user = auth.currentUser;

  if (!user) {
    setMessage("❌ Please login first.");
    setLoading(false);
    return;
  }

  try {

    // Save volunteer record
    await addDoc(collection(db, "volunteers"), {
      uid: user.uid,
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      skills: form.skills,
      availability: form.availability,
      status: "Available",
      assignedRequest: "",
      createdAt: serverTimestamp(),
    });

    // Update user's role
    await updateDoc(doc(db, "users", user.uid), {
      role: "volunteer",
    });

    setMessage("✅ Volunteer registered successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      skills: "",
      availability: "",
    });

  } catch (error: any) {
    console.error(error);
    setMessage(error.message || "❌ Failed to register volunteer.");
  }

  setLoading(false);
}

  return (
    <main className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-center text-4xl font-bold text-blue-600">
          Volunteer Registration
        </h1>

        <p className="mt-3 text-center text-slate-600">
          Join AidLink and help people during disasters.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (Medical, Rescue, Logistics etc.)"
            value={form.skills}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          />

          <select
            name="availability"
            value={form.availability}
            onChange={handleChange}
            required
            className="w-full rounded-xl border p-4"
          >
            <option value="">Select Availability</option>
            <option>Weekdays</option>
            <option>Weekends</option>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700"
          >
            {loading ? "Registering..." : "Register as Volunteer"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center font-semibold">
            {message}
          </p>
        )}

      </div>
    </main>
  );
}