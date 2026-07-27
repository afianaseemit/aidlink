"use client";

import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const links = [
  { name: "Home", href: "/" },
  { name: "Donate", href: "/donate" },
  { name: "Request Help", href: "/request-help" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Organizations", href: "/organizations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {

        setLoggedIn(!!user);

      }
    );

    return () => unsubscribe();

  }, []);

  return (

    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link
          href="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          Aid
          <span className="text-cyan-500">
            Link
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>

          ))}

          {loggedIn && (

            <>
              <Link
                href="/dashboard"
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                Dashboard
              </Link>

              <Link
                href="/profile"
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                Profile
              </Link>
            </>

          )}

        </nav>
                <div className="hidden lg:block">

          {loggedIn ? (

            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <User size={18} />
              Dashboard
            </Link>

          ) : (

            <Link
              href="/login"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <User size={18} />
              Login
            </Link>

          )}

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 lg:hidden"
        >

          {open ? <X size={28} /> : <Menu size={28} />}

        </button>

      </div>

      {open && (

        <div className="border-t bg-white lg:hidden">

          <div className="flex flex-col px-6 py-5">

            {links.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-slate-700 transition hover:bg-slate-100"
              >
                {item.name}
              </Link>

            ))}

            {loggedIn ? (

              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl border border-blue-600 px-5 py-3 text-center font-semibold text-blue-600"
                >
                  Profile
                </Link>
              </>

            ) : (

              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-xl border border-blue-600 px-5 py-3 text-center font-semibold text-blue-600"
                >
                  Create Account
                </Link>
              </>

            )}

          </div>

        </div>

      )}

    </header>

  );

}