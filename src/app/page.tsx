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
// import ProductShowcase from "@/components/ProductShowcase";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ProductShow from "@/components/ProductShow";
import Resources from "@/components/Resources";
import Partners from "@/components/Partners";
// import Navbar from "@/components/Navbar";
// import WorkDone from "@/components/WorkDone";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dm-sans)]">
      <Header />
      {/* <Navbar /> */}

      <main className="">
        <Hero />
        <LogoTicker />

        {/* <ProductShowcase /> */}
        <ProductShow />
        {/* <WorkDone /> */}
        <Collaboration />
        <Partners />
        <Resources />
        <Testimonials />

        <CallToAction />

        <Footer />
      </main>
    </div>
  );
}
