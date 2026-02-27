"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image"; // Use Next.js optimized image
import { useState } from "react";

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Default open first FAQ

  const faqData = [
    {
      question: "What marketing services do you offer?",
      answer: "We provide social media marketing, SEO, Google Ads, content marketing, email campaigns, and complete digital strategy support.",
    },
    {
      question: "How can digital marketing help grow my business?",
      answer: "Digital marketing increases your online visibility, drives targeted traffic to your website, and helps convert visitors into loyal customers through data-driven campaigns.",
    },
    {
      question: "Do you offer customized marketing strategies?",
      answer: "Yes, we analyze your specific business goals, target audience, and industry to create a bespoke marketing strategy that delivers measurable results.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover & Research",
      description: "We begin with a deep dive into your brand, goals, and audience. Through consultations, market research, and competitor analysis, we set a strategic foundation for your digital success.",
    },
    {
      number: "02",
      title: "Plan & Strategize",
      description: "Based on insights, we build a tailored marketing strategy—selecting the right channels and messaging to align with your business objectives and audience behavior.",
    },
    {
      number: "03",
      title: "Execute & Optimize",
      description: "We launch targeted campaigns across SEO, social media, PPC, email, and content. Real-time monitoring and data-driven optimization ensure improved reach, engagement, and conversions.",
    },
    {
      number: "04",
      title: "Analyze & Scale",
      description: "Detailed performance reports track results and ROI. These insights shape future strategies, helping us scale successful tactics and continuously grow your digital presence.",
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
          minHeight: "400px",
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
          Marketing
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
          <span style={{ color: "#aaa" }}>Marketing</span>
        </nav>
      </div>

      {/* Section 1: SMM and SEO - Source: image_19c15a.png */}
      <div style={{ padding: "80px 20px 40px", maxWidth: "1200px", margin: "0 auto" }}>
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
          {/* Social Media Marketing */}
          <div
            style={{
              flex: "1 1 300px",
              padding: "40px",
              borderRight: "1px solid #333", // Vertical line divider
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px", lineHeight: "1.2" }}>
              Strategic Social Media Marketing That Drives Results
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Our **Social Media Marketing (SMM)** services are designed to grow your
              brand, reach your ideal audience, and boost engagement across platforms
              like Facebook, Instagram, LinkedIn, and TikTok. We craft tailored content,
              manage communities, and run targeted ad campaigns—all backed by data
              and strategy to deliver measurable results.
            </p>
          </div>

          {/* SEO Strategies */}
          <div style={{ flex: "1 1 300px", padding: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px", lineHeight: "1.2" }}>
              Smart SEO Strategies for Long-Term Visibility
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Our SEO services help your website rank higher, attract quality traffic, and
              grow sustainably. We focus on keyword research, on-page and technical
              optimization, and strong backlinks to boost visibility. With a data-driven
              strategy and performance tracking, we ensure your brand is found by the
              right audience—organically and effectively.
            </p>
          </div>
        </div>
      </div>
      
      {/* Section 2: Key Features - Source: image_19bdd6.png */}
      <div style={{ padding: "40px 20px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Text Description */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
              Key Feature of Digital Marketing
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Our digital marketing strategy combines data-driven targeting with creative
              content to reach the right audience. Through SEO, social media advertising, and
              content marketing, we engage users effectively. By using audience segmentation,
              we deliver personalized messages that boost relevance, engagement, and results.
            </p>
          </div>

          {/* Features List */}
          <div style={{ flex: "1 1 400px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa", fontSize: "1.1rem" }}>
              {[
                "Content Marketing That Tells Your Brand Story",
                "Personalized Email Marketing to Nurture Leads",
                "Social Media Marketing That Engages and Converts",
                "Comprehensive SEO Services for Long-Term Visibility",
                "Performance Analytics and Reporting"
              ].map((feature, index) => (
                <li key={index} style={{ marginBottom: "15px", display: "flex", alignItems: "center" }}>
                  <span style={{ color: "#cfff04", marginRight: "10px" }}>◉</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* New Section: Side-by-Side Images - Source: image_19baae.jpg */}
      <div style={{ padding: "40px 20px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Image 1 - Modern Data Platform */}
          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/Modern-Data-Platform-scaled-1-1024x558.png"
              alt="Modern Data Platform"
              width={1024}
              height={558}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          {/* Image 2 - Social Media Pana */}
          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/Social-media-pana-1024x1024.png"
              alt="Social Media Marketing Illustration"
              width={1024}
              height={1024}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* New Section: Process Timeline - Source: image_1963db.png */}
      <div style={{ padding: "40px 20px 80px", backgroundColor: "#0d0d0d", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "30px", position: "relative" }}>
            
            {/* Connector Line */}
            <div style={{ position: "absolute", top: "25px", left: "5%", right: "5%", height: "1px", backgroundColor: "#333", zIndex: 0 }}></div>
            
            {processSteps.map((step, index) => (
              <div key={step.number} style={{ flex: 1, textAlign: "center", position: "relative", zIndex: 1, minWidth: "220px", maxWidth: "260px" }}>
                {/* Circle Number */}
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
                
                {/* Content */}
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "10px" }}>{step.title}</h3>
                <p style={{ color: "#aaa", fontSize: "0.95rem", lineHeight: "1.6" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section - Source: image_19c538.png */}
      <div style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "flex-start" }}>
          
          {/* Left Side: Questions */}
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>Any questions find here.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {faqData.map((faq, index) => (
                <div key={index} style={{ borderBottom: "1px solid #222", paddingBottom: "15px" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      background: "none",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      textAlign: "left",
                      cursor: "pointer",
                      padding: "0",
                    }}
                  >
                    {faq.question}
                    <span style={{ fontSize: "1.5rem", color: "#cfff04" }}>
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p style={{ color: "#aaa", marginTop: "10px", lineHeight: "1.6", fontSize: "1rem" }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Why Choose Us */}
          <div style={{ flex: "1 1 400px", backgroundColor: "#161616", padding: "40px", borderRadius: "16px", border: "1px solid #222" }}>
            <h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", lineHeight: "1.2" }}>
              Why Choose RS Web Creator for Marketing?
            </h3>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              At RS Web Creator, we don't believe in one-size-fits-all strategies. We combine
              data-driven insights with creative execution to deliver marketing that gets
              real results—more traffic, higher engagement, and better ROI across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div style={{ padding: "60px 20px", textAlign: "center", borderTop: "1px solid #222" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ready to grow your business?</h3>
        <p
          style={{
            color: "#aaa",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px",
          }}
        >
          Let's discuss a customized marketing strategy tailored to your goals.
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
          Get a Free Consultation
        </button> 
      </div>
    </div>
  );
}
