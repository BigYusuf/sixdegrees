// "use client";

// import {
// CallToAction,
// Collaboration,
// Footer,
// Header,
// Hero,
// LogoTicker,
// ProductShowcase,
// Testimonials,
// } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ProductShowcase from "@/components/ProductShowcase";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dm-sans)]">
      <Header />

      <main className="">
        <Hero />
        <LogoTicker />

        <ProductShowcase />
        <Collaboration />
        <Testimonials />
        <CallToAction />

        <Footer />
      </main>
    </div>
  );
}
