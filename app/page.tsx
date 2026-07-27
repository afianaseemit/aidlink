import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import FeaturedDonations from "@/components/FeaturedDonations";
import AISection from "@/components/AISection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <HowItWorks />
      <FeaturedDonations />
      <AISection />
      <Footer />
    </>
  );
}