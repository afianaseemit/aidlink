import Link from "next/link";
import {
  HeartHandshake,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>

            <div className="mb-5 flex items-center gap-3">

              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-3">
                <HeartHandshake size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                Aid<span className="text-cyan-400">Link</span>
              </h2>

            </div>

            <p className="leading-8 text-slate-300">
              AidLink is an AI-powered humanitarian platform connecting
              donors, volunteers and people in need through smart
              technology and transparent donations.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/donate"
                  className="transition hover:text-cyan-400"
                >
                  Donate
                </Link>
              </li>

              <li>
                <Link
                  href="/request-help"
                  className="transition hover:text-cyan-400"
                >
                  Request Help
                </Link>
              </li>

              <li>
                <Link
                  href="/volunteer"
                  className="transition hover:text-cyan-400"
                >
                  Volunteer
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-slate-300">

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={18} />
                support@aidlink.org
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={18} />
                +92 300 1234567
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 text-cyan-400"
                  size={18}
                />
                Islamabad, Pakistan
              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-gray-700"
              >
                <FaGithub size={20} />
              </a>

            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6">

              <h4 className="text-xl font-bold">
                Become a Volunteer
              </h4>

              <p className="mt-3 text-blue-100">
                Help people in emergencies and make a real impact in your
                community.
              </p>

              <Link
                href="/volunteer"
                className="mt-5 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
              >
                Join Now
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-700 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-slate-400">
              © {new Date().getFullYear()} AidLink. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-400">

              <Link
                href="/privacy-policy "
                className="hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                className="hover:text-white"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>
<div className="mt-8 rounded-xl border border-yellow-500 bg-slate-800 p-5">

  <h4 className="mb-2 font-semibold text-yellow-400">
    Disclaimer
  </h4>

  <p className="text-sm leading-7 text-slate-300">
    AidLink is a demonstration project developed for educational purposes.
    Organization names, payment information, contact details and disaster
    scenarios shown on this website are fictional or placeholders.
    No real financial transactions are processed through this application.
  </p>

</div>      </div>
    </footer>
  );
}
      