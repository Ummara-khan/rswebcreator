"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function WebsitePage() {
  const capabilities = [
    "Responsive Design – Looks great on all screen sizes and devices",
    "Optimized Performance – Fast load times for better user experience",
    "Robust Security – Advanced data protection and secure infrastructure",
    "Custom Functionality – Tailored features to meet your business goals",
    "Scalable Architecture – Built to grow with your business",
    "API Integrations – Smooth connection with third-party tools and platforms",
  ];

  const steps = [
    {
      number: "01",
      title: "Discover & Plan",
      description:
        "We start by understanding your goals, audience, and project needs. This discovery phase helps us create a focused, strategic roadmap.",
    },
    {
      number: "02",
      title: "Design UI/UX",
      description:
        "Our designers craft clean, user-friendly interfaces that align with your brand and deliver intuitive user experiences across all devices.",
    },
    {
      number: "03",
      title: "Develop & Build",
      description:
        "Using scalable, high-performance code, we turn designs into fully functional websites or apps optimized for speed and responsiveness.",
    },
    {
      number: "04",
      title: "Test & Launch",
      description:
        "We conduct thorough testing to ensure quality and compatibility. Once approved, we launch and provide support for long-term success.",
    },
  ];

  const faqs = [
    {
      question: "Why does my business need a professionally developed website?",
      answer:
        "A professional website boosts credibility, improves user experience, and helps your business stand out online — all while supporting SEO and conversions.",
    },
    {
      question: "What platforms and technologies does RS Web Creator use?",
      answer:
        "We work with modern technologies including React, Next.js, WordPress, and custom-built solutions tailored to your specific business needs and goals.",
    },
    {
      question: "Will my website be SEO-optimized and mobile-friendly?",
      answer:
        "Absolutely. Every website we build is fully responsive and follows SEO best practices to ensure visibility across search engines and all devices.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState("");

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
          }}
        >
          Website
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

      {/* Text Content Section */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px 80px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#ccc",
            margin: 0,
          }}
        >
          At <strong style={{ color: "#fff" }}>RS Web Creators</strong>, we
          design and develop high-performance websites and mobile apps that
          elevate your brand and deliver seamless user experiences on every
          device. Whether you're launching a new product, improving your digital
          presence, or optimizing customer interactions, our custom development
          solutions are built to align with your business goals.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#ccc",
            margin: 0,
            textAlign: "center",
          }}
        >
          From responsive websites to feature-rich mobile apps, we combine
          intuitive UI/UX design with robust functionality to ensure fast,
          secure, and scalable platforms. Our agile development process allows
          us to adapt to your evolving needs while keeping user satisfaction at
          the center.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#ccc",
            margin: 0,
            textAlign: "center",
          }}
        >
          Powered by the latest technologies and a user-first approach, we turn
          your ideas into impactful digital solutions that boost engagement,
          improve efficiency, and fuel business growth.
        </p>
      </div>

      {/* Capabilities Section */}
      <div style={{ padding: "20px 40px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: "800",
                margin: 0,
                lineHeight: "1.2",
                color: "#fff",
              }}
            >
              Top Capabilities of Our Web & App Builds
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#ccc",
                margin: 0,
              }}
            >
              At <strong style={{ color: "#fff" }}>RS Web Creators</strong>, we
              build websites and mobile apps engineered for performance,
              security, and seamless user experience. Every project features
              responsive design, fast load times, and user-friendly interfaces
              that work flawlessly across all devices.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "#ccc",
                margin: 0,
              }}
            >
              From custom business websites to complex mobile apps, our
              solutions are tailored to your goals. With scalable architecture,
              intuitive navigation, and smart integrations, we create digital
              platforms that drive engagement and support sustainable growth.
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {capabilities.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "15px",
                  color: "#ccc",
                  lineHeight: "1.5",
                }}
              >
                <span
                  style={{
                    minWidth: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "block",
                    }}
                  />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Images + Process Steps Section */}
      <div
        style={{
          padding: "80px 40px 60px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr",
            gap: "32px",
            marginBottom: "70px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              height: "420px",
              background: "#1a1a2e",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80"
              alt="Mobile UX design"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              height: "420px",
              background: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <svg
              viewBox="0 0 340 340"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="170" cy="290" rx="140" ry="28" fill="#1e1e1e" />
              <rect
                x="60"
                y="60"
                width="220"
                height="200"
                rx="10"
                fill="#c8f03a"
              />
              <rect
                x="60"
                y="60"
                width="220"
                height="30"
                rx="10"
                fill="#a8d020"
              />
              <circle cx="80" cy="75" r="5" fill="#fff" opacity="0.5" />
              <circle cx="96" cy="75" r="5" fill="#fff" opacity="0.5" />
              <circle cx="112" cy="75" r="5" fill="#fff" opacity="0.5" />
              <rect
                x="75"
                y="105"
                width="80"
                height="8"
                rx="4"
                fill="#0a0a0a"
                opacity="0.5"
              />
              <rect
                x="75"
                y="120"
                width="130"
                height="8"
                rx="4"
                fill="#0a0a0a"
                opacity="0.35"
              />
              <rect
                x="75"
                y="135"
                width="60"
                height="8"
                rx="4"
                fill="#0a0a0a"
                opacity="0.35"
              />
              <rect
                x="75"
                y="150"
                width="100"
                height="8"
                rx="4"
                fill="#0a0a0a"
                opacity="0.35"
              />
              <text
                x="90"
                y="108"
                fill="#0a0a0a"
                fontSize="10"
                fontWeight="bold"
              >
                CSS
              </text>
              <text
                x="155"
                y="108"
                fill="#0a0a0a"
                fontSize="10"
                fontWeight="bold"
              >
                C++
              </text>
              <text x="90" y="140" fill="#0a0a0a" fontSize="9">
                /
              </text>
              <circle
                cx="95"
                cy="205"
                r="14"
                fill="#c8f03a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect
                x="82"
                y="219"
                width="26"
                height="40"
                rx="6"
                fill="#1e5c00"
              />
              <rect
                x="72"
                y="222"
                width="12"
                height="28"
                rx="5"
                fill="#1e5c00"
              />
              <rect
                x="96"
                y="222"
                width="12"
                height="28"
                rx="5"
                fill="#1e5c00"
              />
              <rect x="83" y="256" width="10" height="22" rx="4" fill="#333" />
              <rect x="97" y="256" width="10" height="22" rx="4" fill="#333" />
              <circle
                cx="255"
                cy="190"
                r="14"
                fill="#c8f03a"
                stroke="#0a0a0a"
                strokeWidth="2"
              />
              <rect
                x="242"
                y="204"
                width="26"
                height="40"
                rx="6"
                fill="#1e5c00"
              />
              <rect
                x="232"
                y="207"
                width="12"
                height="28"
                rx="5"
                fill="#1e5c00"
              />
              <rect
                x="256"
                y="207"
                width="12"
                height="28"
                rx="5"
                fill="#1e5c00"
              />
              <rect x="243" y="241" width="10" height="22" rx="4" fill="#333" />
              <rect
                x="257"
                y="241"
                width="10"
                height="22"
                rx="4"
                fill="#c8f03a"
              />
              <ellipse
                cx="60"
                cy="38"
                rx="22"
                ry="12"
                fill="white"
                opacity="0.9"
              />
              <ellipse
                cx="48"
                cy="40"
                rx="14"
                ry="10"
                fill="white"
                opacity="0.9"
              />
              <ellipse
                cx="72"
                cy="42"
                rx="14"
                ry="10"
                fill="white"
                opacity="0.9"
              />
              <ellipse
                cx="300"
                cy="28"
                rx="18"
                ry="10"
                fill="white"
                opacity="0.9"
              />
              <ellipse
                cx="290"
                cy="30"
                rx="12"
                ry="8"
                fill="white"
                opacity="0.9"
              />
              <ellipse
                cx="310"
                cy="32"
                rx="12"
                ry="8"
                fill="white"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>

        {/* Process Steps */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "22px",
              left: "calc(4.5% + 22px)",
              right: "calc(4.5% + 22px)",
              height: "2px",
              background: "#c8f03a",
              opacity: 0.4,
              zIndex: 0,
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "32px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    backgroundColor: "#c8f03a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "14px",
                    color: "#0a0a0a",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#fff",
                    lineHeight: "1.3",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.75",
                    color: "#999",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Carousel */}
        <PortfolioCarousel />
      </div>

      {/* ── FAQ + Why Choose Us ── */}
      <div style={{ backgroundColor: "#0f0f0f", padding: "80px 0 60px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "320px",
          }}
        >
          {/* Left — FAQ */}
          <div style={{ padding: "0 80px 0 60px" }}>
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                fontWeight: "800",
                color: "#fff",
                margin: "0 0 32px",
                lineHeight: "1.3",
              }}
            >
              Any questions find here.
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  style={{ borderTop: "1px solid #2a2a2a", padding: "16px 0" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                      padding: 0,
                    }}
                  >
                    <span
                      style={{
                        minWidth: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #555",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        color: "#aaa",
                        flexShrink: 0,
                        lineHeight: 1,
                      }}
                    >
                      {openFaq === index ? "−" : "+"}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#fff",
                      }}
                    >
                      {faq.question}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p
                      style={{
                        margin: "12px 0 0 32px",
                        fontSize: "12px",
                        lineHeight: "1.8",
                        color: "#888",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
              <div style={{ borderTop: "1px solid #2a2a2a" }} />
            </div>
          </div>

          {/* Right — Why Choose Us */}
          <div
            style={{
              padding: "0 60px 0 80px",
              borderLeft: "1px solid #2a2a2a",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.4rem, 2vw, 1.9rem)",
                fontWeight: "800",
                color: "#fff",
                margin: "0 0 20px",
                lineHeight: "1.3",
              }}
            >
              Why Choose RS Web Creator for Your Website?
            </h2>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.9",
                color: "#888",
                margin: 0,
              }}
            >
              At RS Web Creator, we build more than just websites — we create
              digital experiences that perform. Our team blends modern design,
              clean code, and SEO-friendly practices to deliver fast,
              responsive, and conversion-focused websites tailored to your
              brand.
            </p>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      {/* ── Footer ── */}
      <footer
        style={{ backgroundColor: "#111", borderTop: "1px solid #1f1f1f" }}
      >
        {/* Main footer content */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 40px 40px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gap: "60px",
          }}
        >
          {/* Column 1 — Brand + Contact */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 44 Q18 12 30 18 Q42 24 28 32 Q14 40 32 48"
                  stroke="#c8f03a"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M24 20 Q36 10 40 24 Q44 38 30 42"
                  stroke="#c8f03a"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <div style={{ lineHeight: 1.1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#fff",
                    }}
                  >
                    web
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#c8f03a",
                      fontWeight: "900",
                      marginTop: "2px",
                    }}
                  >
                    *
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#c8f03a",
                    letterSpacing: "2px",
                  }}
                >
                  CREATOR
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "13px",
                color: "#bbb",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>📞</span>
                <span>(832) 981-5302</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>✉️</span>
                <span>info@rswebcrestors.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span style={{ marginTop: "2px" }}>📍</span>
                <span style={{ lineHeight: 1.5 }}>
                  10301 Northwest Freeway Suite 311,
                  <br />
                  Houston Texas 77092 United States
                </span>
              </div>
            </div>

            {/* Subscribe */}
            <div style={{ display: "flex", maxWidth: "300px" }}>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: "12px 14px",
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRight: "none",
                  borderRadius: "4px 0 0 4px",
                  color: "#fff",
                  fontSize: "12px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "0 18px",
                  backgroundColor: "#333",
                  border: "1px solid #2a2a2a",
                  borderRadius: "0 4px 4px 0",
                  color: "#fff",
                  fontSize: "12px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe ▶
              </button>
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "700",
                margin: "0 0 24px",
              }}
            >
              Useful Links
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Refund Policy",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "#999",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03a")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: "700",
                margin: "0 0 24px",
              }}
            >
              Services
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {[
                "Logo",
                "Website",
                "Copywriting",
                "Animations",
                "Marketing",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "#999",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#c8f03a")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
                >
                  {link}
                </a>
              ))}
            </div>
            {/* Underline accent */}
            <div
              style={{
                marginTop: "24px",
                width: "60px",
                height: "2px",
                background: "linear-gradient(to right, #c8f03a, transparent)",
                opacity: 0.8,
              }}
            />
          </div>
        </div>

        {/* Footer bottom bar */}
        <div
          style={{
            borderTop: "1px solid #222",
            padding: "24px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              { label: "f", title: "Facebook" },
              { label: "ig", title: "Instagram" },
              { label: "in", title: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                title={s.title}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  border: "1px solid #333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#aaa",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: "700",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#c8f03a";
                  e.currentTarget.style.color = "#c8f03a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.color = "#aaa";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
          {/* Copyright */}
          <p style={{ color: "#555", fontSize: "12px", margin: 0 }}>
            Copyright 2025 © All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

// ── Portfolio Carousel ──
const portfolioItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80",
    alt: "Portfolio 1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80",
    alt: "Portfolio 2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
    alt: "Portfolio 3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    alt: "Portfolio 4",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
    alt: "Portfolio 5",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
    alt: "Portfolio 6",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
    alt: "Portfolio 7",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    alt: "Portfolio 8",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    alt: "Portfolio 9",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    alt: "Portfolio 10",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80",
    alt: "Portfolio 11",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    alt: "Portfolio 12",
  },
];

const ITEMS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

function PortfolioCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  const visibleItems = portfolioItems.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        padding: "60px 0 50px",
        position: "relative",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          fontWeight: "800",
          margin: "0 0 48px",
          letterSpacing: "-0.5px",
        }}
      >
        Portfolio
      </h2>
      <div
        style={{ position: "relative", display: "flex", alignItems: "center" }}
      >
        <button
          onClick={() =>
            setCurrentPage((p) => (p === 0 ? TOTAL_PAGES - 1 : p - 1))
          }
          style={{
            position: "absolute",
            left: "12px",
            zIndex: 10,
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            padding: "8px 14px",
            lineHeight: 1,
          }}
        >
          &#8249;
        </button>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "16px",
            width: "100%",
            padding: "0 70px",
            boxSizing: "border-box",
          }}
        >
          {visibleItems.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                background: "#1a1a1a",
                height: "620px",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentPage((p) => (p === TOTAL_PAGES - 1 ? 0 : p + 1))
          }
          style={{
            position: "absolute",
            right: "12px",
            zIndex: 10,
            background: "transparent",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
            padding: "8px 14px",
            lineHeight: 1,
          }}
        >
          &#8250;
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            style={{
              width: i === currentPage ? "20px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: i === currentPage ? "#c8f03a" : "#444",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.25s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
