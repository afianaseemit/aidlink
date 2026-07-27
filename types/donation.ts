import { LucideIcon } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface Donation {
  id: number;
  title: string;
  location: string;
  image: string;
  raised: number;
  goal: number;
  category: string;
}

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: "donor" | "volunteer" | "beneficiary" | "admin";
  photoURL?: string;
}

export interface HelpRequest {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  status: "Pending" | "Approved" | "Completed";
  createdAt: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  skills: string;
}