"use client";

import React from "react";

export default function LandingPage() {
  return (
    <main style={{ backgroundColor: "#000" }}>
      {/* SECTION 1: HERO */}
      <section
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 8%",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* BACKGROUND EFFECT */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(163, 230, 53, 0.15) 0%, transparent 50%),
              linear-gradient(rgba(163, 230, 53, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(163, 230, 53, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 30px 30px, 30px 30px",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* ===== PARENT ROW: HEADINGS + 12K CARD ===== */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "60px",
              gap: "40px",
            }}
          >
            {/* LEFT: MAIN TITLES */}
            <div style={{ textAlign: "left", flex: "1 1 auto", minWidth: 0 }}>
              <div style={{ display: "block" }}>
                <h1
                  style={{
                    fontSize: "clamp(4rem, 10vw, 14rem)",
                    fontWeight: 900,
                    lineHeight: "0.85",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    margin: "20px 0",
                  }}
                >
                  IDEAS
                </h1>
              </div>

              <div style={{ display: "block" }}>
                <h1
                  style={{
                    fontSize: "clamp(4rem, 10vw, 14rem)",
                    fontWeight: 900,
                    lineHeight: "0.85",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                    margin: "5px 0",
                    marginLeft: "clamp(40px, 6vw, 100px)",
                  }}
                >
                  TO IMPACT
                </h1>
              </div>
            </div>

            {/* RIGHT: STATS CARD - BIGGER SIZE */}
            <div
              style={{
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* Glow behind card */}
              <div
                style={{
                  position: "absolute",
                  top: "-120px",
                  right: "-60px",
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 35%, #e0f9b5 0%, #a3e635 50%, #365314 100%)`,
                  filter: "blur(50px)",
                  opacity: 0.5,
                  zIndex: 0,
                }}
              />

              {/* Card Wrapper - This is the RELATIVE parent */}
              <div
                style={{
                  position: "relative",
                  width: "680px",
                  height: "500px",
                }}
              >
                {/* Image - ABSOLUTE positioned, crossing the card */}
                <img
                  src="/assets/6-e1752081002112.png"
                  alt="Project showcase"
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: 0,
                    marginTop: "-150px", // This pushes half outside the card
                    width: "300px",
                    height: "300px",
                    objectFit: "contain",
                    zIndex: 10,
                    pointerEvents: "none",
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(30px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "36px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "50px 55px",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontSize: "8rem",
                      fontWeight: 900,
                      color: "#fff",
                      lineHeight: "1",
                      marginBottom: "10px",
                    }}
                  >
                    12K
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#a3e635",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Completed Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ===== END PARENT ROW ===== */}

          {/* INNOVATE LINE & DESCRIPTION BLOCK */}
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            {/* Tagline with Horizontal Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                INNOVATE. BUILD. SUCCEED.
              </span>
              <div
                style={{
                  height: "1px",
                  flexGrow: 1,
                  background: "rgba(255, 255, 255, 0.3)",
                }}
              />
            </div>

            {/* Indented Paragraph */}
            <div style={{ paddingLeft: "40px" }}>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "800px",
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              >
                From standout logo designs to dynamic websites, animations, and
                apps — we blend creativity with strategy to elevate your brand.
                Our expert team delivers impactful solutions in web development,
                branding, social media, SEO, and more — designed to engage,
                inspire, and convert.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* SECTION 2: RS WEB CREATOR */}
<section
  style={{
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 5%", // Ample vertical padding
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    zIndex: 2,
  }}
>
  {/* MAIN CONTAINER - Full width with a very high maxWidth for large screens */}
  <div style={{ 
    display: "flex", 
    width: "100%", 
    maxWidth: "1800px", // Increased to 1800px as requested
    alignItems: "center", 
    gap: "6vw" 
  }}>
    
    {/* LEFT SIDE: LARGE IMAGE BOX */}
    <div style={{ 
      flex: "1", 
      position: "relative",
      height: "700px", // Fixed height ensures the image is "Large" and doesn't collapse
    }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/secondsweb.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "4px",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* WHITE AND LIME ACCENT BOXES */}
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "-30px",
          zIndex: 3,
          display: "flex",
          flexDirection: "column"
        }}>
    
        </div>
      </div>
      
      {/* Spinning Circle Badge Placeholder (Visible in your Image) */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-50px",
        width: "150px",
        height: "150px",
        zIndex: 5,
        backgroundImage: "url('/assets/award-badge.png')", // Add your badge asset here
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }} />
    </div>

    {/* RIGHT SIDE: TEXT CONTENT */}
    <div style={{ 
      flex: "1", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center"
    }}>
      <h2
        style={{
          fontSize: "clamp(3.5rem, 6vw, 6rem)", // Larger scaling
          fontWeight: 800,
          color: "#ffffff",
          margin: "0 0 20px 0",
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        }}
      >
        RS Web Creator
      </h2>
      
      {/* Horizontal Divider Line */}
      <div
        style={{
          width: "250px", // Match the long line in the UI
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.4)",
          marginBottom: "50px",
        }}
      />

      <div style={{ maxWidth: "650px" }}>
        <p
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "30px",
          }}
        >
          At RS Web Creator, we transform ideas into impactful digital
          experiences. From cutting-edge websites to bold brand identities, we
          craft creative solutions that drive results.
        </p>
        
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "60px",
          }}
        >
          With a passion for design and a focus on strategy, we help businesses 
          stand out, grow, and stay ahead in the digital world.
        </p>
      </div>

      {/* Circle Button Style */}
      <div style={{ position: "relative", width: "fit-content" }}>
          <button
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              fontSize: "0.8rem",
              fontWeight: 700,
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "0.4s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            MORE <br/> ABOUT US
          </button>
      </div>
    </div>
  </div>
</section>


{/* SECTION 3: EXPERTISE YOU CAN TRUST */}
<section style={{ minHeight: "100vh", width: "100%", backgroundColor: "#0b0b0b", color: "#fff", padding: "120px 5%", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
  
  {/* Header Content */}
  <div style={{ textAlign: "center", marginBottom: "80px" }}>
    <span style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "10px 24px", borderRadius: "30px", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", backgroundColor: "rgba(255,255,255,0.02)" }}>
      Services
    </span>
    <h2 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 800, marginTop: "30px", letterSpacing: "-0.02em" }}>
      Expertise You Can Trust
    </h2>
  </div>

  {/* Services Grid */}
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", // Increased minimum width
    gap: "30px", 
    width: "100%", 
    maxWidth: "1800px" 
  }}>
    
    {[
      { title: "Logo Design", desc: "We craft bold, memorable logos that capture your brand’s essence and spark instant recognition across every platform.", icon: "/assets/logo-icon.png" },
      { title: "SMM & SEO", desc: "We grow your brand with smart SEO and social media that connect, engage, and convert audiences.", icon: "/assets/smm-icon.png" },
      { title: "Web & App Development", desc: "Building high-performance digital products tailored to your needs.", icon: "/assets/web-icon.png" },
      { title: "Animations", desc: "Bringing your ideas to life with stunning motion graphics and visuals.", icon: "/assets/anim-icon.png" }
    ].map((service, index) => {
      const [isHovered, setIsHovered] = React.useState(false);

      return (
        <div 
          key={index}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: "#161617", 
            padding: "80px 55px", // Increased padding for a larger feel
            borderRadius: "45px",
            border: isHovered ? "1px solid rgba(163, 230, 53, 0.4)" : "1px solid rgba(255,255,255,0.03)",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
            cursor: "pointer",
            minHeight: "580px", // Increased minimum height
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div>
            {/* Icon Wrapper */}
            <div style={{ 
                marginBottom: "40px",
                width: "90px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <img src={service.icon} alt={service.title} style={{ width: "60px", height: "60px", objectFit: "contain" }} />
            </div>

            {/* Title */}
            <h3 style={{ 
              fontSize: "2.4rem", // Larger font
              fontWeight: 700, 
              color: "#a3e635", 
              marginBottom: "20px",
              transition: "0.3s" 
            }}>
              {service.title}
            </h3>

            {/* Description */}
            <p style={{ 
              fontSize: "1.25rem", 
              color: "rgba(255,255,255,0.6)", 
              lineHeight: "1.7",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.5s ease",
              margin: 0,
              maxWidth: "90%"
            }}>
              {service.desc}
            </p>
          </div>

          {/* Read More Container */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            border: "1px solid rgba(255,255,255,0.1)", 
            borderRadius: "100px", 
            padding: "10px 10px 10px 35px",
            marginTop: "30px",
            backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "transparent",
            transition: "0.4s"
          }}>
            <span style={{ 
              fontSize: "1rem", 
              fontWeight: 700, 
              letterSpacing: "1.5px",
              color: "#fff"
            }}>
              READ MORE
            </span>
            
            {/* Arrow Circle - Switches to solid white on hover */}
            <div style={{ 
              width: "55px", 
              height: "55px", 
              backgroundColor: isHovered ? "#fff" : "rgba(255,255,255,0.08)", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              transition: "all 0.4s ease",
              boxShadow: isHovered ? "0 0 20px rgba(163, 230, 53, 0.2)" : "none"
            }}>
              <span style={{ 
                fontSize: "1.5rem", 
                color: isHovered ? "#000" : "#fff",
                fontWeight: "bold",
                transform: isHovered ? "rotate(0deg) scale(1.1)" : "rotate(0deg)"
              }}>
                ↗
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


{/* SECTION 4: RECENT WORK SLIDER - ENHANCED SIZE & REDUCED GAP */}
{(() => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const texts = [
    { first: "Logo", second: "Design" },
    { first: "Motion", second: "Animations" }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ 
      minHeight: "90vh", // Reduced slightly to pull sections closer
      width: "100%", 
      backgroundColor: "#0b0b0b", 
      color: "#fff", 
      padding: "60px 5%", // Reduced vertical padding to fix "too much space"
      fontFamily: "'Inter', sans-serif", 
      display: "flex",
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative", 
      overflow: "hidden"
    }}>
      <div style={{ display: "flex", width: "100%", maxWidth: "1800px", gap: "80px", alignItems: "center", flexWrap: "wrap" }}>
        
        {/* LEFT CONTENT: Increased Font Sizes */}
        <div style={{ flex: "1.2", minWidth: "400px" }}>
          <div style={{ marginBottom: "30px" }}>
            <span style={{ 
              border: "1.5px solid rgba(255,255,255,0.3)", 
              padding: "12px 28px", 
              borderRadius: "40px", 
              fontSize: "1.1rem", // Increased from 0.8rem
              fontWeight: "600",
              letterSpacing: "3px", 
              textTransform: "uppercase", 
              color: "#fff" 
            }}>
              Recent Work
            </span>
          </div>

          <p style={{ 
            fontSize: "1.6rem", // Increased from 1.1rem
            color: "rgba(255,255,255,0.7)", 
            lineHeight: "1.5", 
            maxWidth: "600px", // Increased width to fill space
            marginBottom: "50px",
            fontWeight: "400"
          }}>
            Explore our latest digital masterpieces — a fusion of bold aesthetics, 
            smart builds, and creative strategies tailored for impact.
          </p>
          
          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)", width: "100%", marginBottom: "50px" }} />

          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
             <div style={{ 
              width: "140px", height: "140px", // Increased circle size
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", 
              cursor: "pointer", fontSize: "0.9rem", fontWeight: 700, transition: "0.3s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor="#fff"; e.currentTarget.style.color="#000"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor="transparent"; e.currentTarget.style.color="#fff"; }}
            >
              VIEW ALL
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: Bold Single Line Typography */}
        <div style={{ 
          flex: "2", 
          position: "relative", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-start", 
          minHeight: "400px",
          overflow: "hidden" 
        }}>
          
          <div key={currentSlide} style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            whiteSpace: "nowrap",
            animation: "revealText 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards"
          }}>
            <h1 style={{ 
              fontSize: "clamp(4rem, 12vw, 10rem)", // Increased size
              fontWeight: 900, 
              textTransform: "uppercase",
              margin: 0,
              letterSpacing: "-4px"
            }}>
              {texts[currentSlide].first}
            </h1>
            
            <h1 style={{ 
              fontSize: "clamp(4rem, 12vw, 10rem)", // Increased size
              fontWeight: 900, 
              textTransform: "uppercase",
              margin: 0,
              letterSpacing: "-4px",
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.4)" 
            }}>
              {texts[currentSlide].second}
            </h1>
          </div>

          <div style={{ 
            position: "absolute",
            bottom: "20%",
            left: "0",
            width: "80px",
            height: "3px",
            backgroundColor: "#a3e635",
            boxShadow: "0 0 20px #a3e635",
            animation: "blink 1.5s infinite"
          }} />
        </div>
      </div>

      <style>{`
        @keyframes revealText {
          0% { opacity: 0; transform: translateY(80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </section>
    
  );
})()}


{/* SECTION 5: TESTIMONIALS */}
<section style={{ 
  minHeight: "80vh", 
  width: "100%", 
  backgroundColor: "#0b0b0b", // Slightly deeper black to match cards
  color: "#fff", 
  padding: "120px 8%", 
  fontFamily: "'Inter', sans-serif",
  position: "relative",
  overflow: "hidden"
}}>
  {/* HEADER ROW */}
  <div style={{ 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between", 
    marginBottom: "100px",
    flexWrap: "wrap",
    gap: "40px"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
      {/* Decorative Ribbon */}
      <img 
        src="/assets/ribbon-swirl.png" 
        alt="" 
        style={{ width: "70px", height: "auto", display: "block" }} 
      />
      <h2 style={{ 
        fontSize: "clamp(3.5rem, 9vw, 8.5rem)", 
        fontWeight: 900, 
        textTransform: "uppercase", 
        margin: 0,
        letterSpacing: "-0.02em",
        /* GRADIENT TEXT EFFECT */
        background: "linear-gradient(90deg, #f3fde1 0%, #a3e635 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        TESTIMONIALS
      </h2>
    </div>

    {/* Overall Rating Circle */}
    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
      <div style={{
        width: "110px",
        height: "110px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2.2rem",
        fontWeight: 800,
        backgroundColor: "rgba(255,255,255,0.02)"
      }}>
        4.7
      </div>
      <div>
        <div style={{ 
          color: "#fff", 
          fontSize: "1.4rem", 
          letterSpacing: "4px",
          marginBottom: "5px" 
        }}>★★★★★</div>
        <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
          145 (Review)
        </div>
      </div>
    </div>
  </div>

  {/* TESTIMONIAL CARDS GRID */}
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", 
    gap: "40px" 
  }}>
    {[
      {
        rating: "5.0",
        text: "The team understood my vision perfectly and turned it into a clean, modern website. I’ve already noticed more customer engagement.",
        name: "Emily Carter",
        location: "New York, NY"
      },
      {
        rating: "4.0",
        text: "I really appreciated how responsive and professional they were. Every detail was handled with care, and the results exceeded expectations.",
        name: "James Miller",
        location: "Austin, TX"
      }
    ].map((item, idx) => (
      <div 
        key={idx}
        style={{
          background: "linear-gradient(160deg, #1c1c1e 0%, #0b0b0b 100%)",
          padding: "60px",
          borderRadius: "40px",
          border: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 800, fontSize: "1.2rem" }}>{item.rating}</span>
          <span style={{ 
            color: "#fff", 
            letterSpacing: "3px", 
            fontSize: "0.9rem",
            filter: "drop-shadow(0 0 5px rgba(255,255,255,0.2))"
          }}>
            {"★".repeat(Math.floor(parseFloat(item.rating)))}
          </span>
        </div>
        
        <p style={{ 
          fontSize: "1.45rem", 
          lineHeight: "1.7", 
          color: "rgba(255,255,255,0.75)", 
          margin: 0,
          fontWeight: 400,
          letterSpacing: "0.01em"
        }}>
          {item.text}
        </p>

        <div style={{ marginTop: "15px" }}>
          <h4 style={{ margin: "0 0 5px 0", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
            {item.name}
          </h4>
          <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
            {item.location}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>


{/* SECTION 6: CREDIBILITY */}
<section style={{ 
  minHeight: "80vh", 
  width: "100%", 
  backgroundColor: "#0b0b0b", 
  color: "#fff", 
  padding: "120px 8%", 
  fontFamily: "'Inter', sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}>
  <div style={{ 
    display: "flex", 
    width: "100%", 
    maxWidth: "1800px", 
    gap: "100px", 
    alignItems: "center",
    flexWrap: "wrap" 
  }}>
    
    {/* LEFT CONTENT: TEXT */}
    <div style={{ flex: "1", minWidth: "400px" }}>
      <div style={{ marginBottom: "30px" }}>
        <span style={{ 
          border: "1px solid rgba(255,255,255,0.2)", 
          padding: "10px 24px", 
          borderRadius: "30px", 
          fontSize: "0.85rem", 
          letterSpacing: "2px", 
          textTransform: "uppercase", 
          color: "rgba(255,255,255,0.6)", 
          backgroundColor: "rgba(255,255,255,0.02)" 
        }}>
          Credibility
        </span>
      </div>

      <h2 style={{ 
        fontSize: "clamp(3rem, 5vw, 4.5rem)", 
        fontWeight: 800, 
        lineHeight: "1.1", 
        marginBottom: "40px",
        letterSpacing: "-0.02em"
      }}>
        Built on Trust, <br />
        <span style={{ color: "#fff" }}>Backed by Brands</span>
      </h2>

      <p style={{ 
        fontSize: "1.2rem", 
        lineHeight: "1.8", 
        color: "rgba(255,255,255,0.5)", 
        maxWidth: "500px" 
      }}>
        Trusted by leading brands that prioritize creativity, demand consistency, 
        and seek impactful results that drive meaningful success.
      </p>
    </div>

    {/* RIGHT CONTENT: LOGO GRID */}
    <div style={{ 
      flex: "1.5", 
      display: "grid", 
      gridTemplateColumns: "repeat(3, 1fr)", 
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "8px",
      overflow: "hidden"
    }}>
      {[
        { name: "American Express", src: "/assets/amex.png" },
        { name: "Discover", src: "/assets/discover.png" },
        { name: "Visa", src: "/assets/visa.png" },
        { name: "Stripe", src: "/assets/stripe.png" },
        { name: "Mastercard", src: "/assets/mastercard.png" },
        { name: "PayPal", src: "/assets/paypal.png" },
        { name: "Trustpilot", src: "/assets/trustpilot.png" },
        { name: "Authorize.net", src: "/assets/authorize.png" },
        { name: "Google Reviews", src: "/assets/google.png" },
        { name: "Clutch", src: "/assets/clutch.png" },
        { name: "Sitejabber", src: "/assets/sitejabber.png" },
        { name: "PCI Compliant", src: "/assets/pci.png" }
      ].map((brand, idx) => (
        <div 
          key={idx} 
          style={{ 
            height: "160px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            border: "1px solid rgba(255,255,255,0.05)",
            padding: "30px",
            transition: "background 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(163, 230, 53, 0.03)"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
        >
          <img 
            src={brand.src} 
            alt={brand.name} 
            style={{ 
              maxWidth: "100%", 
              maxHeight: "50px", 
              objectFit: "contain",
              opacity: 0.7,
              filter: "grayscale(100%) brightness(200%)" // Makes logos uniform white/silver
            }} 
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}