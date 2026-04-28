import { useEffect } from "react";
import Navbar from "@/components/aimri/Navbar";
import Hero from "@/components/aimri/Hero";
import About from "@/components/aimri/About";
import VisionMission from "@/components/aimri/VisionMission";
import Membership from "@/components/aimri/Membership";
import Leadership from "@/components/aimri/Leadership";
import CTA from "@/components/aimri/CTA";
import Footer from "@/components/aimri/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "AIMRI — Asosiasi Industri Mineral Republik Indonesia";
    const desc = "AIMRI mewadahi 105+ perusahaan, institusi, dan NGO untuk memajukan industri mineral Indonesia secara berkelanjutan. Sebelumnya APNIPER (2022).";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Membership />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
