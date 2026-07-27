"use client";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";

import LogoutButton from "@/components/LogoutButton";

import {
  User,
  Mail,
  Shield,
} from "lucide-react";

export default function ProfilePage() {

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({

    name: "",

    email: "",

    role: "User",

  });

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(

      auth,

      (user) => {

        if (user) {

          setUserData({

            name:
              user.displayName ||
              "AidLink User",

            email:
              user.email || "",

            role: "Registered User",

          });

        }

        setLoading(false);

      }

    );

    return () => unsubscribe();

  }, []);

  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center">

        <h1 className="text-2xl font-bold">

          Loading Profile...

        </h1>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-slate-100 py-16">

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">

            <User

              size={48}

              className="text-blue-600"

            />

          </div>

          <h1 className="mt-5 text-4xl font-bold text-slate-800">

            My Profile

          </h1>

          <p className="mt-2 text-slate-500">

            Manage your AidLink account

          </p>

        </div>

        <div className="mt-10 space-y-6">

               <div className="flex items-center gap-4 rounded-2xl border p-5">

            <div className="rounded-full bg-blue-100 p-3">

              <User
                className="text-blue-600"
                size={24}
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Full Name

              </p>

              <h2 className="text-xl font-semibold">

                {userData.name}

              </h2>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border p-5">

            <div className="rounded-full bg-green-100 p-3">

              <Mail
                className="text-green-600"
                size={24}
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Email Address

              </p>

              <h2 className="text-lg font-semibold break-all">

                {userData.email}

              </h2>

            </div>

          </div>

          <div className="flex items-center gap-4 rounded-2xl border p-5">

            <div className="rounded-full bg-purple-100 p-3">

              <Shield
                className="text-purple-600"
                size={24}
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Account Role

              </p>

              <h2 className="text-lg font-semibold">

                {userData.role}

              </h2>

            </div>

          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

            <h3 className="text-lg font-bold text-green-700">

              Account Status

            </h3>

            <p className="mt-2 text-slate-700">

              ✅ Your AidLink account is active and ready to
              donate, volunteer, or request emergency help.

            </p>

          </div>

          <div className="pt-4">

            <LogoutButton />

          </div>

        </div>

      </div>

    </main>

  );

}