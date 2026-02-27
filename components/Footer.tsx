import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#fff", padding: "4rem 2rem", borderTop: "1px solid #333" }}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1.5fr 2fr", // 2 Column Layout
        gap: "3rem", 
        marginBottom: "3rem",
        maxWidth: "1200px",
        margin: "0 auto 3rem auto"
      }}
        className="footer-grid">
        
        {/* Left Side: Logo & Address */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <div style={{
              width: 40, height: 40, background: "#d4ff00",
              clipPath: "polygon(0 0, 60% 0, 100% 40%, 100% 100%, 40% 100%, 0 60%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, color: "#000", fontSize: "1.2rem"
            }}>RS</div>
            <div style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, lineHeight: 1.1, fontSize: "1.2rem" }}>
              web<br /><span style={{ color: "#d4ff00" }}>creator</span>
            </div>
          </div>
          
          <div style={{ fontSize: "0.85rem", color: "#b3b3b3", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            <p style={{marginBottom: "0.5rem"}}>📞 (832) 981-5302</p>
            <p style={{marginBottom: "0.5rem"}}>✉️ info@rswebcreators.com</p>
            <p style={{marginBottom: "0.5rem", lineHeight: 1.5 }}>
              📍 10301 Northwest Freeway Suite 311, <br/>Houston Texas 77092 United States
            </p>
          </div>
          
          {/* Email Subscription */}
          <div style={{ display: "flex", maxWidth: "350px" }}>
            <input type="email" placeholder="Your Email" style={{
              flex: 1, background: "#1a1a1a", border: "1px solid #333",
              borderRight: "none", borderRadius: "4px 0 0 4px",
              padding: "0.75rem", color: "#fff", outline: "none"
            }} />
            <button style={{
              background: "#d4ff00", color: "#000", border: "none",
              borderRadius: "0 4px 4px 0", padding: "0.75rem 1.25rem",
              fontWeight: 700, fontSize: "0.85rem", cursor: "pointer"
            }}>Subscribe ►</button>
          </div>
        </div>

        {/* Right Side: Links Sections */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* Useful Links */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "#fff" }}>Useful Links</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["About Us", "/"], ["Contact Us", "/contact"], ["Privacy Policy", "/"], ["Terms & Conditions", "/"], ["Refund Policy", "/"]].map(([l, h]) => (
                <li key={l} style={{ marginBottom: "0.8rem" }}>
                  <Link href={h} style={{ fontSize: "0.85rem", color: "#b3b3b3", textDecoration: "none" }}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "#fff" }}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[["Logo", "/logo"], ["Website", "/website"], ["Copywriting", "/copywriting"], ["Animations", "/animations"], ["Marketing", "/marketing"]].map(([l, h]) => (
                <li key={l} style={{ marginBottom: "0.8rem" }}>
                  <Link href={h} style={{ fontSize: "0.85rem", color: "#b3b3b3", textDecoration: "none" }}>{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Social & Copyright */}
      <div style={{ 
        borderTop: "1px solid #333", 
        paddingTop: "1.5rem", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        fontSize: "0.8rem", 
        color: "#b3b3b3"
      }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {["f", "ig", "in"].map(s => (
            <a key={s} href="#" style={{
              width: 32, height: 32, borderRadius: "50%", border: "1px solid #444",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", textDecoration: "none"
            }}>{s}</a>
          ))}
        </div>
        <div>
          Copyright 2025 © All Rights Reserved
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
