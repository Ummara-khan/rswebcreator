"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Image from "next/image"; // Use Next.js optimized image

export default function WebsitePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const capabilities = [
    "Responsive Design – Looks great on all screen sizes and devices",
    "Optimized Performance – Fast load times for better user experience",
    "Robust Security – Advanced data protection and secure infrastructure",
    "Custom Functionality – Tailored features to meet your business goals",
    "Scalable Architecture – Built to grow with your business",
    "API Integrations – Smooth connection with third-party tools and platforms",
  ];

  // Updated steps from image_2604b2.png
  const steps = [
    {
      number: "01",
      title: "Discover & Align",
      description:
        "We begin by understanding your brand, audience, and goals to ensure the content aligns with your tone, values, and messaging strategy.",
    },
    {
      number: "02",
      title: "Plan & Outline",
      description:
        "We structure your message with clarity—defining key points, tone, and intent before the writing begins to keep the content focused and effective.",
    },
    {
      number: "03",
      title: "Write & Refine",
      description:
        "Our writers craft compelling, conversion-driven copy tailored to your needs. We fine-tune every word for clarity, flow, and impact.",
    },
    {
      number: "04",
      title: "Review & Deliver",
      description:
        "After internal edits, we share the draft for your feedback. Final content is polished, approved, and ready for use across all platforms.",
    },
  ];

  // Updated FAQs from image_2604b2.png
  const faqs = [
    {
      question: "Why is professional copywriting important for my website?",
      answer:
        "High-quality copy boosts engagement, builds trust, and improves SEO—helping turn visitors into customers.",
    },
    {
      question: "What types of copywriting services does RS Web Creator offer?",
      answer:
        "We offer a full range of services, including website copy, blog posts, product descriptions, and ad copy.",
    },
    {
      question: "Will the content be SEO-optimized?",
      answer:
        "Yes, all our content is crafted to align with SEO best practices while maintaining a natural, engaging tone for readers.",
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
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${-80 + i * 18}px`,
              left: "50%",
              transform: "translateX(-50%)",
              width: `${500 - i * 30}px`,
              height: `${500 - i * 30}px`,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.04)",
              zIndex: 0,
            }}
          />
        ))}
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
          Copywriting
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
          <span style={{ color: "#aaa" }}>Website</span>
        </nav>
      </div>

      {/* Section: Content Comparison - Source: image_276c3e.png */}
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
          {/* Content Writing */}
          <div
            style={{
              flex: "1 1 300px",
              padding: "40px",
              borderRight: "1px solid #222",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px" }}>
              Content Writing
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              Content writing is the art of crafting clear, engaging, and purposeful
              text tailored to a target audience. It covers blogs, website copy,
              articles, and social media posts—each designed to communicate your brand
              message, educate readers, or tell compelling stories. The focus is on
              quality writing, tone, and creativity to build genuine connections with
              your audience.
            </p>
          </div>

          {/* SEO Content Writing */}
          <div style={{ flex: "1 1 300px", padding: "40px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "15px" }}>
              SEO Content Writing
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.6" }}>
              SEO content writing blends compelling storytelling with keyword strategy
              to improve search engine visibility. It focuses on optimizing structure,
              headings, meta tags, and internal links to enhance rankings. While
              maintaining clarity and engagement, this approach is data-driven—crafted
              to attract organic traffic, match search intent, and answer user queries
              effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Textual Key Features - Source: image_26ed37.png */}
      <div style={{ padding: "0 20px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
              Key feature of Content Writing
            </h2>
            <p style={{ color: "#aaa", lineHeight: "1.8", fontSize: "1.1rem" }}>
              The key feature of content writing lies in its ability to **communicate clearly**,
              **connect emotionally**, and **deliver real value to the audience**. It uses the
              right tone, structure, and storytelling to reflect a brand’s voice while
              educating, informing, or engaging readers. At **RS Web Creators**, we focus on
              clarity, creativity, and purpose—turning ideas into impactful messages that
              build trust and drive action.
            </p>
          </div>
          
          <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "15px" }}>
            {[
              "Clear Messaging – Delivers ideas simply and effectively",
              "Brand Consistency – Matches your brand’s tone and style",
              "Valuable Content – Shares relevant, useful information",
              "Engaging Stories – Captures attention through narrative",
              "Goal-Driven – Builds trust and drives action",
              "Audience Focused – Tailored to resonate with your readers"
            ].map(feature => (
              <div key={feature} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{color: "#fff"}}>⦿</span>
                <span style={{color: "#ddd", fontSize: "1.1rem"}}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section: Key Features with Images - Source: image_268ac4.jpg */}
      <div style={{ padding: "0 20px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/AdobeStock_316854442.png"
              alt="Person writing on laptop"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>

          <div style={{ flex: "1 1 400px", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src="/assets/Blog-post-amico-1024x1024.png"
              alt="Blog post illustration"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Section: Process & FAQ - Source: image_2604b2.png & image_1c223a.png */}
      <div style={{ padding: "80px 20px", backgroundColor: "#0d0d0d", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          
          {/* Visual Timeline - Source: image_1c1e53.png */}
          <div style={{ marginBottom: "100px", padding: "0 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              {/* Connector Line */}
              <div style={{ position: "absolute", top: "25px", left: "5%", right: "5%", height: "1px", backgroundColor: "#333", zIndex: 0 }}></div>
              
              {steps.map((step, index) => (
                <div key={step.number} style={{ flex: 1, textAlign: "center", position: "relative", zIndex: 1, maxWidth: "220px" }}>
                  {/* Circle */}
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
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.5" }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ and Why Choose Us */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "60px" }}>
            {/* Left Side: FAQ */}
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

            {/* Right Side: Why Choose Us */}
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>
                Why Choose RS Web Creator for Copywriting?
              </h2>
              <p style={{ color: "#aaa", lineHeight: "1.8", fontSize: "1.1rem" }}>
                At RS Web Creator, we don’t just write—we communicate with purpose. Our copy is
                crafted to reflect your brand voice, engage your audience, and boost SEO
                performance. Whether it’s for web pages, ads, or product descriptions, we
                write to convert.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "20px" }}>Ready to start your project?</h3>
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
