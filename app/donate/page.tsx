"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { HeartHandshake, Loader2 } from "lucide-react";

export default function DonatePage() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  city: "",
  donationType: "Food",
  bloodGroup: "",
  amount: "",
  paymentMethod: "Easypaisa",
  message: "",
});

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      await addDoc(
        collection(db, "donations"),
        {
          ...form,
          amount: Number(form.amount),
          createdAt: serverTimestamp(),
        }
      );

      alert("✅ Donation submitted successfully!");

      setForm({
  name: "",
  email: "",
  phone: "",
  city: "",
  donationType: "Food",
  bloodGroup: "",
  amount: "",
  paymentMethod: "Easypaisa",
  message: "",
});
    } catch (error) {

      console.error(error);

      alert("❌ Failed to submit donation.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="min-h-screen bg-slate-100 py-16">

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <div className="mb-8 text-center">

          <HeartHandshake
            size={48}
            className="mx-auto text-blue-600"
          />

          <h1 className="mt-4 text-4xl font-bold text-blue-600">
            Donate Now
          </h1>

          <p className="mt-3 text-slate-600">
            Support disaster victims by donating money or essential items.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

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
                    <select
            value={form.donationType}
            onChange={(e) =>
              setForm({
                ...form,
                donationType: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            
            <option>Food</option>
<option>Clothing</option>
<option>Medicine</option>
<option>Shelter</option>
<option>Education</option>
<option>Technology</option>
<option>Cash</option>
          </select>

          <input
            type="number"
            required
            placeholder="Donation Amount (PKR)"
            value={form.amount}
            onChange={(e) =>
              setForm({
                ...form,
                amount: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />

          <select
            value={form.paymentMethod}
            onChange={(e) =>
              setForm({
                ...form,
                paymentMethod: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option>Easypaisa</option>
            <option>JazzCash</option>
            <option>Bank Transfer</option>
            <option>Cash</option>
          </select>

          <textarea
            rows={5}
            placeholder="Message (Optional)"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          />
          <div className="mb-6 rounded-xl border border-yellow-300 bg-yellow-50 p-5">
  <h3 className="text-lg font-semibold text-yellow-800">
    Disclaimer
  </h3>

  <p className="mt-2 text-sm leading-7 text-yellow-700">
    This payment information is provided for demonstration. The organizations,bank accounts, payment methods, and contact details displayed on this
    page are fictional placeholders. Please do not send real payments using
    this information.
  </p>
</div>
<p className="mt-4 text-center text-sm italic text-red-600">
  * All payment methods shown above are fictional and intended only for
  demonstration.
</p>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">

            <h3 className="font-bold text-blue-700">
              Payment Instructions
            </h3>

            <div className="mt-3 space-y-2 text-sm text-slate-700">

              <p>
                📱 Easypaisa: 03XX-XXXXXXX
              </p>

              <p>
                📱 JazzCash: 03XX-XXXXXXX
              </p>

              <p>
                🏦 Bank: AidLink Relief Fund
              </p>

              <p>
                💳 Cash donations can be submitted through registered AidLink organizations.
              </p>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition hover:opacity-90 disabled:opacity-70"
          >

            {loading ? (
              <>
                <Loader2
                  className="animate-spin"
                  size={20}
                />
                Processing Donation...
              </>
            ) : (
              "Donate Now"
            )}

          </button>

        </form>

      </div>

    </main>

  );

}