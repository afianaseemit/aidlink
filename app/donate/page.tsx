"use client";

import { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  HeartHandshake,
  Loader2,
} from "lucide-react";

type Organization = {
  id: string;
  name: string;
};

export default function DonatePage() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    city: "",

    donationMode: "Monetary",

    donationType: "Food",

    organizationId: "",

    organizationName: "",

    amount: "",

    paymentMethod: "Easypaisa",

    itemName: "",

    quantity: "",

    pickupAddress: "",

    bloodGroup: "",

    message: "",

  });

  useEffect(() => {

    loadOrganizations();

  }, []);

  async function loadOrganizations() {

    const snapshot = await getDocs(
      collection(db, "organizations")
    );

    const data: Organization[] = [];

    snapshot.forEach((doc) => {

      const org = doc.data();

      data.push({

        id: doc.id,

        name: org.name || "Organization",

      });

    });

    setOrganizations(data);

  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    setLoading(true);

    setMessage("");

    try {      await addDoc(
        collection(db, "donations"),
        {
          name: form.name,

          email: form.email,

          phone: form.phone,

          city: form.city,

          donationMode: form.donationMode,

          donationType: form.donationType,

          organizationId: form.organizationId,

          organizationName: form.organizationName,

          amount:
            form.donationMode === "Monetary"
              ? Number(form.amount)
              : 0,

          paymentMethod:
            form.donationMode === "Monetary"
              ? form.paymentMethod
              : "",

          itemName:
            form.donationMode === "Physical"
              ? form.itemName
              : "",

          quantity:
            form.donationMode === "Physical"
              ? Number(form.quantity)
              : 0,

          pickupAddress:
            form.donationMode === "Physical"
              ? form.pickupAddress
              : "",

          bloodGroup: form.bloodGroup,

          message: form.message,

          createdAt: serverTimestamp(),
        }
      );

      setMessage(
        "✅ Thank you! Your donation has been submitted successfully."
      );

      setForm({
        name: "",

        email: "",

        phone: "",

        city: "",

        donationMode: "Monetary",

        donationType: "Food",

        organizationId: "",

        organizationName: "",

        amount: "",

        paymentMethod: "Easypaisa",

        itemName: "",

        quantity: "",

        pickupAddress: "",

        bloodGroup: "",

        message: "",
      });

    } catch (error) {

      console.error(error);

      setMessage(
        "❌ Failed to submit donation."
      );

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
            Support disaster victims through monetary or
            physical donations.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >          {message && (
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

          <select
            value={form.donationMode}
            onChange={(e) =>
              setForm({
                ...form,
                donationMode: e.target.value,
              })
            }
            className="w-full rounded-xl border p-4"
          >
            <option value="Monetary">
              Monetary Donation
            </option>

            <option value="Physical">
              Physical Donation
            </option>
          </select>

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
            <option>Blood</option>
            <option>General Relief</option>
          </select>

          <select
            required
            value={form.organizationId}
            onChange={(e) => {

              const selected =
                organizations.find(
                  (org) =>
                    org.id === e.target.value
                );

              setForm({
                ...form,
                organizationId: e.target.value,
                organizationName:
                  selected?.name || "",
              });

            }}
            className="w-full rounded-xl border p-4"
          >
            <option value="">
              Select Organization
            </option>

            {organizations.map((org) => (
              <option
                key={org.id}
                value={org.id}
              >
                {org.name}
              </option>
            ))}
          </select>          {form.donationMode === "Monetary" ? (
            <>

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

            </>
          ) : (
            <>

              <input
                type="text"
                required
                placeholder="Item Name"
                value={form.itemName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    itemName: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

              <input
                type="number"
                required
                placeholder="Quantity"
                value={form.quantity}
                onChange={(e) =>
                  setForm({
                    ...form,
                    quantity: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                required
                placeholder="Pickup Address"
                value={form.pickupAddress}
                onChange={(e) =>
                  setForm({
                    ...form,
                    pickupAddress: e.target.value,
                  })
                }
                className="w-full rounded-xl border p-4"
              />

            </>
          )}

          {form.donationType === "Blood" && (
            <input
              type="text"
              placeholder="Blood Group (A+, O+, etc.)"
              value={form.bloodGroup}
              onChange={(e) =>
                setForm({
                  ...form,
                  bloodGroup: e.target.value,
                })
              }
              className="w-full rounded-xl border p-4"
            />
          )}

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

          <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-5">

            <h3 className="text-lg font-semibold text-yellow-800">
              Disclaimer
            </h3>

            <p className="mt-2 text-sm leading-7 text-yellow-700">
              This donation system is developed for educational and
              demonstration purposes. Any payment methods,
              organizations, account details, or contact information
              shown are fictional and should not be used for real
              financial transactions.
            </p>

          </div>

          {form.donationMode === "Monetary" && (

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">

              <h3 className="font-bold text-blue-700">
                Payment Instructions
              </h3>

              <div className="mt-3 space-y-2 text-sm text-slate-700">

                <p>📱 Easypaisa: 03XX-XXXXXXX</p>

                <p>📱 JazzCash: 03XX-XXXXXXX</p>

                <p>🏦 Bank: Fictional Demo Account</p>

                <p>
                  * Payment details are fictional and provided
                  only for demonstration.
                </p>

              </div>

            </div>

          )}

          {form.donationMode === "Physical" && (

            <div className="rounded-xl border border-green-200 bg-green-50 p-5">

              <h3 className="font-bold text-green-700">
                Physical Donation Instructions
              </h3>

              <p className="mt-2 text-sm text-slate-700">
                After submitting your donation, the selected
                organization will contact you to arrange pickup or
                delivery of your donated items.
              </p>

            </div>

          )}

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
  )}


