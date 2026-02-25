import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsApp } from "@/components/index";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", padding: "8rem 4rem 4rem", background: "linear-gradient(135deg, #050505 0%, #0d1a05 100%)" }}>
          <div style={{ maxWidth: 700 }}>
            <span style={{ display: "inline-block", border: "1px solid #222", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "1.5rem" }}>Get In Touch</span>
            <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "clamp(3rem,7vw,6rem)", textTransform: "uppercase", lineHeight: 0.95 }}>
              Let's <span style={{ color: "#c6f135" }}>Talk</span>
            </h1>
            <p style={{ color: "#8a8a8a", marginTop: "1.5rem", lineHeight: 1.7 }}>Ready to start your project? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
          </div>
        </div>

        <section style={{ padding: "4rem", background: "#0a0a0a" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", maxWidth: 1100, margin: "0 auto" }}>
            <div>
              <h3 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "1.5rem", marginBottom: "2rem" }}>Send Us a Message</h3>
              {[["Full Name", "text", "John Doe"], ["Email Address", "email", "john@example.com"]].map(([l, t, p]) => (
                <div key={l as string} style={{ marginBottom: "1.25rem" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "0.5rem" }}>{l}</label>
                  <input type={t as string} placeholder={p as string} style={{ width: "100%", background: "#141414", border: "1px solid #222", borderRadius: 8, padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", fontFamily: "Inter, sans-serif" }} />
                </div>
              ))}
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "0.5rem" }}>Service Needed</label>
                <select style={{ width: "100%", background: "#141414", border: "1px solid #222", borderRadius: 8, padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none" }}>
                  {["Logo Design", "Website Development", "Copywriting", "Animations", "Marketing", "Full Package"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "0.5rem" }}>Message</label>
                <textarea placeholder="Tell us about your project..." style={{ width: "100%", height: 140, background: "#141414", border: "1px solid #222", borderRadius: 8, padding: "0.8rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", resize: "vertical", fontFamily: "Inter, sans-serif" }} />
              </div>
              <button style={{ background: "#c6f135", color: "#000", fontWeight: 800, fontSize: "0.85rem", padding: "0.9rem 2.5rem", borderRadius: 6, letterSpacing: "0.08em", textTransform: "uppercase", border: "none", cursor: "pointer", width: "100%" }}>Send Message ↗</button>
            </div>

            <div>
              <h3 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "1.5rem", marginBottom: "2rem" }}>Contact Information</h3>
              {[["📞", "Phone", "(832) 981-5302"], ["✉️", "Email", "info@rswebcreator.com"], ["📍", "Office", "10301 Northwest Freeway Suite 311, Houston Texas 77092 United States"], ["🕐", "Business Hours", "Mon – Fri: 9:00 AM – 6:00 PM CST"]].map(([icon, title, val]) => (
                <div key={title as string} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                  <div style={{ width: 44, height: 44, background: "rgba(198,241,53,0.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{title}</div>
                    <div style={{ fontSize: "0.88rem", color: "#8a8a8a" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
