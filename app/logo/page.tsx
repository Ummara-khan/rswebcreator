"use client";
import Navbar from "@/components/Navbar";
import { ChevronRight, ChevronLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function LogoPage() {

  // --- FIX: Update state type to allow number or null ---
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); 

  const faqData = [
    {
      q: "Why is a professional logo important for my brand?",
      a: "A professionally designed logo builds trust, enhances brand recognition, and sets you apart from competitors. It’s often the first impression customers have of your business and plays a crucial role in your overall branding and marketing strategy."
    },
    {
      q: "What is the logo design process at RS Web Creator?",
      a: "Our process includes discovery and research, concept development, design and refinement, and final delivery of high-quality files."
    },
    {
      q: "Will my logo be SEO-friendly and usable for online platforms?",
      a: "Yes, we ensure all logos are provided in formats optimized for web, print, and various digital platforms."
    }
  ];

  // Array for the Process Timeline steps
  const processSteps = [
    { num: "01", title: "Discovery & Research", desc: "We understand your brand, target audience, and industry." },
    { num: "02", title: "Concept Development", desc: "Our designers sketch creative logo ideas aligned with your vision." },
    { num: "03", title: "Design & Refinement", desc: "We craft digital drafts and refine the best concepts based on your feedback." },
    { num: "04", title: "Final Delivery", desc: "You receive high-quality logo files ready for web, print, and branding." },
  ];

  // Portfolio Images Data
  const portfolioItems = [
    { src: "/assets/port1.png", alt: "Logo Portfolio 1" },
    { src: "/assets/port2.png", alt: "Logo Portfolio 2" },
    { src: "/assets/port3.png", alt: "Logo Portfolio 3" },
    { src: "/assets/port4.png", alt: "Logo Portfolio 4" },
    { src: "/assets/port5.png", alt: "Logo Portfolio 5" },
    { src: "/assets/port6.png", alt: "Logo Portfolio 6" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div style={{ position: "relative", padding: "150px 5% 100px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: "800", margin: "0", letterSpacing: "-4px" }}>Logo</h1>
        <nav style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", marginTop: "15px", marginBottom: "50px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <ChevronRight size={16} />
          <span style={{ color: "#888" }}>Logo</span>
        </nav>
        <p style={{ maxWidth: "1200px", fontSize: "16px", lineHeight: "1.8", color: "#ccc", fontWeight: "300" }}>
          At <strong style={{ color: "#fff" }}>RS Web Creators</strong>, our logo design services are tailored to reflect your brand's identity and leave a lasting impression.
        </p>
      </div>

      {/* --- WHY EFFECTIVE LOGO DESIGN --- */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "60px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3.5rem)", fontWeight: "800", marginBottom: "24px" }}>Why Effective Logo Design Goes Beyond Aesthetics</h2>
          <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#ccc" }}>At <strong style={{ color: "#fff" }}>RS Web Creators</strong>, we believe a great logo is more than just a visual—it's your brand's voice.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[ "Brand Identity", "First Impressions", "Memorability", "Trust & Credibility", "Versatility", "Emotional Connection" ].map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#fff", borderRadius: "50%" }}></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* --- SIDE BY SIDE IMAGES --- */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "40px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
        <img src="/assets/first_image.png" alt="Logo Design" style={{ width: "100%", borderRadius: "12px" }} />
        <img src="/assets/second_image.png" alt="Brand Identity" style={{ width: "100%", borderRadius: "12px" }} />
      </div>

      {/* --- PROCESS TIMELINE --- */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "80px 5%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px" }}>
        {processSteps.map((step, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ fontSize: "24px", fontWeight: "700", borderBottom: "2px solid #333", paddingBottom: "10px" }}>{step.num}</div>
            <h3 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>{step.title}</h3>
            <p style={{ fontSize: "14px", color: "#aaa" }}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* --- PORTFOLIO SECTION --- */}
      <div style={{ backgroundColor: "#111", padding: "80px 5%", marginTop: "40px" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3.5rem)", fontWeight: "800", textAlign: "center", marginBottom: "50px" }}>Portfolio</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button style={{ backgroundColor: "#333", padding: "10px", borderRadius: "50%", border: "none", cursor: "pointer", color: "#fff" }}><ChevronLeft size={24} /></button>
            <div style={{ display: "flex", gap: "20px", overflowX: "hidden", width: "100%" }}>
              {portfolioItems.map((item, index) => (
                <div key={index} style={{ flex: "0 0 calc(16.66% - 16px)", backgroundColor: "#000", borderRadius: "12px", padding: "20px", aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.src} alt={item.alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
            <button style={{ backgroundColor: "#333", padding: "10px", borderRadius: "50%", border: "none", cursor: "pointer", color: "#fff" }}><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "100px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
        
        {/* Left Side: FAQ Accordion */}
        <div>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3.5rem)", fontWeight: "800", marginBottom: "40px" }}>Any questions find here.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {faqData.map((item, index) => (
              <div key={index} style={{ borderBottom: "1px solid #333", paddingBottom: "15px" }}>
                <button 
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", color: "#fff", fontSize: "18px", fontWeight: "600", textAlign: "left", cursor: "pointer", padding: "10px 0" }}
                >
                  {item.q}
                  {openFAQ === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openFAQ === index && (
                  <p style={{ color: "#aaa", fontSize: "15px", lineHeight: "1.7", marginTop: "10px", paddingRight: "30px" }}>
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Why Choose Us */}
        <div style={{ backgroundColor: "#111", padding: "40px", borderRadius: "12px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>Why Choose RS Web Creator for Your Logo?</h2>
          <p style={{ color: "#ccc", fontSize: "15px", lineHeight: "1.8" }}>
            With years of experience and a passion for design, RS Web Creator offers unmatched value in logo design. We listen, conceptualize, and refine until your logo becomes a true reflection of your brand's identity—ready for digital, print, and everything in between.
          </p>
        </div>
      </div>
      
    </div>
  );
}
