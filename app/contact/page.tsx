"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        createdAt: serverTimestamp(),
      });

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatus("❌ Failed to send message. " + (error.message || ""));
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            We'd love to hear from you. Reach out to the AidLink team.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="mb-8 text-3xl font-bold">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">

                <Mail className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600">
                    support@aidlink.org
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <Phone className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-slate-600">
                    +92 300 1234567
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-blue-600" size={28} />

                <div>

                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="text-slate-600">
                    Islamabad, Pakistan
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <Clock className="text-blue-600" size={28} />

                <div>

                  <h3 className="font-semibold">
                    Office Hours
                  </h3>

                  <p className="text-slate-600">
                    Monday - Friday
                  </p>

                  <p className="text-slate-600">
                    9:00 AM - 5:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h2 className="mb-8 text-3xl font-bold">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

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
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center font-semibold">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </main>
  );
}