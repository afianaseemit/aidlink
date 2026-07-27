import { Category } from "@/types/donation";
import {
  HeartPulse,
  Utensils,
  Home,
  GraduationCap,
  ShieldAlert,
  HandHeart,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: 1,
    title: "Medical Aid",
    description: "Emergency medical assistance.",
    icon: HeartPulse,
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    id: 2,
    title: "Food Support",
    description: "Food packages for families.",
    icon: Utensils,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 3,
    title: "Shelter",
    description: "Temporary housing support.",
    icon: Home,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    id: 4,
    title: "Education",
    description: "Books and school supplies.",
    icon: GraduationCap,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    id: 5,
    title: "Disaster Relief",
    description: "Flood and earthquake relief.",
    icon: ShieldAlert,
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    id: 6,
    title: "Community Help",
    description: "Volunteer community support.",
    icon: HandHeart,
    color: "text-green-500",
    bg: "bg-green-100",
  },
];