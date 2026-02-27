"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Image from "next/image"; // Use Next.js optimized image

export default function AnimationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Animation Steps Based on Visual Style in image_1c1e53.png
  const steps = [
    {
      number: "01",
      title: "Discover & Align",
      description:
        "We begin by understanding your brand, audience, and goals to ensure the animations align with your tone, values, and messaging strategy.",
    },
    {
      number: "02",
      title: "Plan & Outline",
      description:
        "We structure your message with clarity—defining key points, tone, and intent before the animating begins to keep the content focused and effective.",
    },
    {
      number: "03",
      title: "Create & Refine",
      description:
        "Our animators craft compelling, conversion-driven motions tailored to your needs. We fine-tune every frame for clarity, flow, and impact.",
    },
    {
      number: "04",
      title: "Review & Deliver",
      description:
        "After internal edits, we share the draft for your feedback. Final animations are polished, approved, and ready for use across all platforms.",
    },
  ];

  // FAQs - Adapted for Animation Services
  const faqs = [
    {
      question: "What types of animations do you offer?",
      answer:
        "We create logo animations, explainer videos, social media motion graphics, UI animations, and more — all tailored to your brand.",
    },
    {
      question: "How can animation help my brand?",
      answer:
        "Animation increases engagement, improves retention of information, and makes your brand more memorable to consumers.",
    },
    {
      question: "Will the animations be compatible with all platforms?",
      answer:
        "Yes, we deliver animations in optimized formats compatible with websites, social media platforms, and presentation software.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderBottom: "1px solid #222",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, #2a2a2a 0%, #1a1a1a 40%, #0d0d0d 70%, transparent 100%)",
            boxShadow:
              "inset -20px -20px 60px rgba(255,255,255,0.03), inset 20px 20px 60px rgba(0,0,0,0.8)",
            zIndex: 0,
          }}
        />
        <h1
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "800",
            margin: "0 0 12px",
            letterSpacing: "-2px",
            textAlign: "center",
          }}
        >
          Animation
        </h1>
        <nav
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "#ccc",
          }}
        >
          <a
            href="/"
            style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
          >
            Home
          </a>
          <span style={{ color: "#666" }}>›</span>
          <span style={{ color: "#aaa" }}>Animation</span>
        </nav>
      </div>

      {/* Section: Content Comparison - Source: image_1a48fb.png */}
      <div style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#161616",
            borderRadius: "16px",
            border: "1px solid #222",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
          }}
        >
          {/* Logo Animation */}
          <div
            style={{
              flex: "1 1 300px",
              padding: "40px",
              borderRight: "1px solid #222",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px" }}>
              Logo Animation
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Logo animation transforms static designs into dynamic visuals that
              capture attention and enhance brand recognition. From subtle motions
              to bold reveals, animated logos are ideal for websites, videos, and social
              media. At **RS Web Creators**, we craft animations that reflect your brand’s
              style and leave a lasting impression.
            </p>
          </div>

          {/* Video Animation */}
          <div style={{ flex: "1 1 300px", padding: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px" }}>
              Video Animation
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Animated videos simplify complex ideas with clarity and impact. Through
              engaging visuals and smooth motion, we help you tell your story,
              showcase your product, or explain a process. At **RS Web Creators**, our
              custom animations are designed to inform, inspire, and connect—turning
              your message into a visual experience your audience remembers.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: Key Features - Source: image_1a3a8e.png */}
      <div style={{ padding: "0 20px 80px", maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
          Key Features of Logo & Video Animation
        </h2>
        <p style={{ color: "#aaa", lineHeight: "1.8", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto" }}>
          Our animations enhance your brand with smooth transitions, engaging motion, and consistent styling. Each animation is crafted for clarity,
          emotional impact, and platform versatility—whether it’s a subtle logo reveal or a full explainer video. Designed for web, social, and presentations,
          they help you stand out and communicate with purpose.
        </p>
      </div>

      {/* SECTION: Side-by-Side Images */}
      <div style={{ padding: "0 20px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* GIF Asset */}
          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/24331b0bb61d0e424478d57303eaaf60.gif"
              alt="Logo Animation GIF"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          {/* PNG Asset */}
          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/Animation-pana-1024x1024.png"
              alt="Video Animation Illustration"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Section: Process (Timeline View) - Source: image_1c1e53.png */}
      <div style={{ padding: "80px 20px", backgroundColor: "#0d0d0d", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Visual Timeline - Source: image_1c1e53.png */}
          <div style={{ marginBottom: "100px", padding: "0 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              {/* Connector Line - Source: image_1c1e53.png */}
              <div style={{ position: "absolute", top: "25px", left: "5%", right: "5%", height: "1px", backgroundColor: "#333", zIndex: 0 }}></div>
              
              {steps.map((step, index) => (
                <div key={step.number} style={{ flex: 1, textAlign: "center", position: "relative", zIndex: 1, maxWidth: "220px" }}>
                  {/* Circle - Source: image_1c1e53.png */}
                  <div style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "50%", 
                    backgroundColor: "#cfff04", 
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    margin: "0 auto 20px",
                  }}>
                    {step.number}
                  </div>
                  {/* Content - Source: image_1c1e53.png */}
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.5" }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ & "Why Choose" Side-by-Side Section - Source: image_19c538.png */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", maxWidth: "1200px", margin: "0 auto", alignItems: "flex-start" }}>
            
            {/* FAQ */}
            <div style={{ flex: "1 1 500px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>
                Any questions find here.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#111",
                      borderRadius: "8px",
                      border: "1px solid #222",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "20px",
                        background: "none",
                        border: "none",
                        color: "#fff",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {faq.question}
                      <span>{openFaq === index ? "−" : "+"}</span>
                    </button>
                    {openFaq === index && (
                      <div style={{ padding: "0 20px 20px", color: "#aaa", lineHeight: "1.6" }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose RS Web Creator */}
            <div style={{ flex: "1 1 400px", paddingTop: "10px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>
                Why Choose RS Web Creator for Animation?
              </h2>
              <p style={{ color: "#aaa", lineHeight: "1.8", fontSize: "1.1rem" }}>
                From scroll-stopping logo reveals to sleek explainer videos, RS Web Creator brings
                your brand to life with high-quality animations. Our work is designed to engage,
                inform, and convert — across websites, ads, and social platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ready to start your animation?</h3>
        <p
          style={{
            color: "#aaa",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          Get in touch with us to discuss your vision and how we can bring it to life.
        </p>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "4px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get a Quote
        </button> 
      </div>
    </div>
  );
}
