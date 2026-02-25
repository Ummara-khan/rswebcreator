import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { About, Services, Portfolio, Testimonials, Brands, CTA, WhatsApp } from "@/components/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
