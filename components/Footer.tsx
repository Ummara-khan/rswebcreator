import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid var(--border)", padding: "4rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "3rem", marginBottom: "3rem" }}
        className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <div style={{
              width: 44, height: 44, background: "var(--lime)",
              clipPath: "polygon(0 0, 60% 0, 100% 40%, 100% 100%, 40% 100%, 0 60%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 900, color: "#000"
            }}>RS</div>
            <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 700, lineHeight: 1.1 }}>
              web<br /><span style={{ color: "var(--lime)" }}>creator</span>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 280 }}>
            Transforming ideas into impactful digital experiences. From cutting-edge websites to bold brand identities.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {["f", "in", "ig"].map(s => (
              <a key={s} href="#" style={{
                width: 36, height: 36, borderRadius: "50%", border: "1.5px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.8rem", color: "var(--muted)"
              }}>{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Useful Links</h4>
          <ul style={{ listStyle: "none" }}>
            {[["About Us", "/"], ["Contact Us", "/contact"], ["Privacy Policy", "/"], ["Terms & Conditions", "/"], ["Refund Policy", "/"]].map(([l, h]) => (
              <li key={l} style={{ marginBottom: "0.6rem" }}>
                <Link href={h} style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Services</h4>
          <ul style={{ listStyle: "none" }}>
            {[["Logo Design", "/logo"], ["Website", "/website"], ["Copywriting", "/copywriting"], ["Animations", "/animations"], ["Marketing", "/marketing"]].map(([l, h]) => (
              <li key={l} style={{ marginBottom: "0.6rem" }}>
                <Link href={h} style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact</h4>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "0.75rem" }}>📞 (832) 981-5302</p>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "0.75rem" }}>✉️ info@rswebcreator.com</p>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.5 }}>📍 10301 Northwest Freeway Suite 311, Houston Texas 77092</p>
          <div style={{ display: "flex" }}>
            <input type="email" placeholder="Your email" style={{
              flex: 1, background: "var(--bg3)", border: "1px solid var(--border)",
              borderRight: "none", borderRadius: "6px 0 0 6px",
              padding: "0.6rem 1rem", color: "var(--text)", fontSize: "0.82rem", outline: "none"
            }} />
            <button style={{
              background: "var(--lime)", color: "#000", border: "none",
              borderRadius: "0 6px 6px 0", padding: "0.6rem 1rem",
              fontWeight: 700, fontSize: "0.75rem", cursor: "pointer"
            }}>Subscribe ►</button>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.78rem", color: "var(--muted)" }}>
        Copyright 2025 © RS Web Creator. All Rights Reserved.
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
