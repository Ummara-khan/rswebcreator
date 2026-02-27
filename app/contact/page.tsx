"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
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
          Contact Us
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
          <span style={{ color: "#aaa" }}>Contact Us</span>
        </nav>
      </div>

      {/* Contact Content Section - Source: image_1951d7.png */}
      <div style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
          
          {/* Left Side: Get In Touch */}
          <div style={{ flex: "1 1 450px", backgroundColor: "#161616", padding: "40px", borderRadius: "16px", border: "1px solid #222" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "10px" }}>Get In Touch</h2>
            <p style={{ color: "#aaa", marginBottom: "30px" }}>We'd love to hear from you</p>
            
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "#cfff04", marginBottom: "10px", fontSize: "0.9rem", letterSpacing: "1px" }}>REACH US THROUGH</h4>
              <p style={{ color: "#fff", marginBottom: "5px" }}>(832) 981-5302</p>
              <p style={{ color: "#fff", marginBottom: "5px" }}>(346) 585-7763</p>
              <p style={{ color: "#fff", marginBottom: "20px" }}>(888) 828-8871</p>
              <p style={{ color: "#fff", marginBottom: "5px" }}>info@rswebcreators.com</p>
              <p style={{ color: "#fff" }}>10301 Northwest Freeway Suite 311, Houston Texas 77092 United States</p>
            </div>

            <div>
              <h4 style={{ color: "#cfff04", marginBottom: "10px", fontSize: "0.9rem", letterSpacing: "1px" }}>SOCIAL NETWORKS</h4>
              <p style={{ color: "#fff", marginBottom: "5px" }}>insta_account</p>
              <p style={{ color: "#fff", marginBottom: "5px" }}>yourfbusernamne</p>
              <p style={{ color: "#fff" }}>GMB</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div style={{ flex: "1 1 450px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>Send us a Message</h2>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <input type="text" placeholder="Your Name" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
              <textarea placeholder="Message" rows={5} style={{...inputStyle, resize: "vertical"}}></textarea>
              
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <input type="checkbox" id="sms" style={{ marginTop: "5px" }} />
                <label htmlFor="sms" style={{ color: "#aaa", fontSize: "0.9rem" }}>
                  By submitting this form, you agree to receive SMS message from our company regarding our services.
                </label>
              </div>

              <button type="submit" style={{
                backgroundColor: "#cfff04",
                color: "#000",
                padding: "15px 30px",
                borderRadius: "4px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "10px"
              }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section - Real Interactive Map */}
      <div style={{ width: "100%", height: "450px", overflow: "hidden", borderTop: "1px solid #222", position: "relative" }}>
        <style>
          {`
            .map-iframe {
              filter: grayscale(100%);
              transition: filter 0.3s ease;
            }
            .map-iframe:hover {
              filter: grayscale(0%);
            }
          `}
        </style>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9702287413697!2d-95.5126847!3d29.8055268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c6c747761005%3A0xe7a5c1064210ec9c!2s10301%20Northwest%20Fwy%20%23311%2C%20Houston%2C%20TX%2077092%2C%20USA!5e0!3m2!1sen!2s!4v1689845258957!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-iframe"
        ></iframe>
      </div>
    </div>
  );
}

// Reusable input style
const inputStyle = {
  backgroundColor: "#161616",
  border: "1px solid #333",
  padding: "15px",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "1rem",
};
