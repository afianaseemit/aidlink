"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";


import {
  collection,
  getDocs,
  query,
  limit,
} from "firebase/firestore";

import DashboardStats from "@/components/DashboardStats";
import RecentVolunteers from "@/components/RecentVolunteers";
import RecentDonations from "@/components/RecentDonations";
import RecentRequests from "@/components/RecentRequests";
import LogoutButton from "@/components/LogoutButton";
import AICard from "@/components/AICard";

import {
  Brain,
  Loader2,
} from "lucide-react";

export default function DashboardPage() {

  const router = useRouter();

  const [userName, setUserName] = useState("");

  const [users, setUsers] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
  const [donations, setDonations] = useState(0);
  const [requests, setRequests] = useState(0);
  const [organizations, setOrganizations] = useState(0);

  const [recentVolunteers, setRecentVolunteers] = useState<any[]>([]);
  const [recentDonations, setRecentDonations] = useState<any[]>([]);
  const [recentRequests, setRecentRequests] = useState<any[]>([]);

  const [prompt, setPrompt] = useState(
    "Flood in Swat, Pakistan. Around 150 families need food, clean drinking water, medicines and temporary shelter."
  );

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {

    if (!user) {
      router.replace("/login");
      return;
    }

    setUserName(user.displayName || "User");
    loadDashboard();
    async function loadDashboard() {

  if (!auth.currentUser) return;

  try {

    // your existing Firestore code

  } catch (err) {
    console.error(err);
  }

}

  });

  return () => unsubscribe();
}, [router]);

  async function loadDashboard() {

    try {

      // ================= USERS =================

      const usersSnapshot = await getDocs(
        collection(db, "users")
      );

      setUsers(usersSnapshot.size);

      const volunteerData: any[] = [];

      usersSnapshot.forEach((docSnap) => {

        const data = docSnap.data();

        if (data.role === "volunteer") {

          volunteerData.push({
            id: docSnap.id,
            ...data,
          });

        }

      });

      setVolunteers(volunteerData.length);
      setRecentVolunteers(volunteerData.slice(0, 5));

      // ================= DONATIONS =================

      const donationSnapshot = await getDocs(
        query(
          collection(db, "donations"),
          limit(5)
        )
      );

      const donationData: any[] = [];
            donationSnapshot.forEach((docSnap) => {

        const data = docSnap.data();

        donationData.push({
          id: docSnap.id,
          donorName: data.name || "Anonymous",
          amount: data.amount || 0,
          donationType: data.donationType || "General",
          paymentMethod: data.paymentMethod || "",
          createdAt: data.createdAt || null,
        });

      });

      setDonations(donationSnapshot.size);
      setRecentDonations(donationData);

      // ================= ORGANIZATIONS =================

      const organizationSnapshot = await getDocs(
        collection(db, "organizations")
      );

      setOrganizations(organizationSnapshot.size);

      // ================= HELP REQUESTS =================

      const requestSnapshot = await getDocs(
        query(
          collection(db, "helpRequests"),
          limit(5)
        )
      );

      const requestData: any[] = [];

      requestSnapshot.forEach((docSnap) => {

        const data = docSnap.data();

        requestData.push({
          id: docSnap.id,
          disasterType: data.disasterType || "Unknown",
          city: data.city || "",
          peopleAffected: data.peopleAffected || 0,
          urgency: data.urgency || "High",
          status: data.status || "Pending",

          assignedVolunteerName:
            data.assignedVolunteerName || "",

          assignedOrganizationName:
            data.assignedOrganizationName || "",
        });

      });

      setRequests(requestSnapshot.size);
      setRecentRequests(requestData);

    } catch (err) {

      console.error("Dashboard Error:", err);

    }

  }

  async function analyze() {

    setLoading(true);
    setResult("");

    try {

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data.response);
      } else {
        setResult(data.error);
      }

    } catch (err: any) {

      setResult(err.message);

    } finally {

      setLoading(false);

    }

  }return (
  <main className="min-h-screen bg-slate-100 p-8">

    <div className="mx-auto max-w-7xl">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Welcome, {userName}
          </h1>

          <p className="mt-2 text-slate-500">
            AidLink Disaster Relief Dashboard
          </p>

        </div>

        <LogoutButton />

      </div>

      <DashboardStats
        users={users}
        volunteers={volunteers}
        donations={donations}
        requests={requests}
        organizations={organizations}
      />

      {/* AI */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow">

          <div className="mb-5 flex items-center gap-3">

            <Brain
              className="text-blue-600"
              size={34}
            />

            <h2 className="text-2xl font-bold">
              AI Disaster Analysis
            </h2>

          </div>

          <textarea
            rows={10}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded-xl border p-4"
          />

          <button
            onClick={analyze}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
          >

            {loading ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze with AI"
            )}

          </button>

        </div>

        <AICard response={result} />

      </div>

      {/* Volunteers & Donations */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <RecentVolunteers
          volunteers={recentVolunteers}
        />

        <RecentDonations
          donations={recentDonations}
        />

      </div>

      {/* Help Requests */}

      <div className="mt-10">

        <RecentRequests
          requests={recentRequests}
        />

      </div>

      {/* Bottom Summary */}

      <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl">

        <h2 className="text-3xl font-bold">
          AidLink Dashboard
        </h2>

        <p className="mt-3 max-w-3xl text-blue-100">
          Monitor disaster relief activities, volunteers,
          donations, organizations and emergency help
          requests in real time using AI-powered insights.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-5">

          <div>

            <h3 className="text-4xl font-bold">
              {users}
            </h3>

            <p className="mt-2 text-blue-100">
              Registered Users
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              {volunteers}
            </h3>

            <p className="mt-2 text-blue-100">
              Volunteers
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              {donations}
            </h3>

            <p className="mt-2 text-blue-100">
              Donations
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              {requests}
            </h3>

            <p className="mt-2 text-blue-100">
              Help Requests
            </p>

          </div>

          <div>

            <h3 className="text-4xl font-bold">
              {organizations}
            </h3>

            <p className="mt-2 text-blue-100">
              Organizations
            </p>

          </div>

        </div>

      </div>

    </div>

  </main>
);
}