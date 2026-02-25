import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsApp } from "@/components/index";

const plans = [
  { name: "Starter", price: "$499", period: "/project", features: ["Logo Design (3 concepts)", "5-Page Website", "Mobile Responsive", "Basic SEO Setup", "3 Months Support"], featured: false },
  { name: "Professional", price: "$1,299", period: "/project", features: ["Full Brand Identity", "10-Page Website + Blog", "Advanced SEO", "Social Media Setup", "Animation Package", "6 Months Support"], featured: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Complete Digital Presence", "Custom Web Application", "Full Marketing Suite", "Dedicated Account Manager", "Priority Support", "Unlimited Revisions"], featured: false },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", padding: "8rem 4rem 4rem", background: "linear-gradient(135deg, #050505 0%, #0d1a05 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-10%", top: "-20%", width: "60%", height: "140%", background: "radial-gradient(ellipse, rgba(120,200,0,0.07) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 700, position: "relative", zIndex: 1 }}>
            <span style={{ display: "inline-block", border: "1px solid #222", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "1.5rem" }}>Pricing</span>
            <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "clamp(3rem,7vw,6rem)", textTransform: "uppercase", lineHeight: 0.95 }}>
              Simple, <span style={{ color: "#c6f135" }}>Transparent</span> Pricing
            </h1>
            <p style={{ color: "#8a8a8a", marginTop: "1.5rem", lineHeight: 1.7, fontSize: "1rem" }}>Choose the plan that fits your needs. All packages include our signature quality and dedicated support.</p>
          </div>
        </div>

        <section style={{ padding: "4rem", background: "#0a0a0a" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
            {plans.map(p => (
              <div key={p.name} style={{ background: "#141414", border: `1px solid ${p.featured ? "#c6f135" : "#222"}`, borderRadius: 16, padding: "2.5rem", position: "relative" }}>
                {p.featured && <div style={{ background: "#c6f135", color: "#000", fontSize: "0.7rem", fontWeight: 800, padding: "0.25rem 0.75rem", borderRadius: 999, letterSpacing: "0.1em", marginBottom: "1rem", display: "inline-block" }}>MOST POPULAR</div>}
                <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "1.3rem", marginBottom: "0.5rem" }}>{p.name}</div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "3rem", color: "#c6f135", lineHeight: 1, margin: "1rem 0" }}>
                  {p.price}<span style={{ fontSize: "1.2rem", color: "#8a8a8a" }}>{p.period}</span>
                </div>
                <ul style={{ listStyle: "none", margin: "1.5rem 0 2rem" }}>
                  {p.features.map(f => (
                    <li key={f} style={{ padding: "0.5rem 0", borderBottom: "1px solid #222", fontSize: "0.85rem", color: "#bbb", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "#c6f135", fontWeight: "bold" }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:(832)981-5302" style={{ background: "#c6f135", color: "#000", fontWeight: 800, fontSize: "0.85rem", padding: "0.9rem 2.5rem", borderRadius: 6, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", textAlign: "center", textDecoration: "none" }}>
                  {p.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
