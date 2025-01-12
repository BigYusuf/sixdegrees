// "use client";

import {
  CallToAction,
  Collaboration,
  Footer,
  Header,
  Hero,
  LogoTicker,
  ProductShowcase,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dm-sans)]">
      <Header />

      <main className="">
        <Hero />
        <LogoTicker />

        <ProductShowcase />
        <Collaboration />

        {/* <Features /> */}
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}
