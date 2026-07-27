"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {

  await signOut(auth);

  router.replace("/login");

}

  return (
    <button
      onClick={logout}
      className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}