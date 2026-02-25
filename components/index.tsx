import Link from "next/link";

const services = [
  { name: "Logo Design", href: "/logo", desc: "We craft bold, memorable logos that capture your brand's essence and spark instant recognition across every platform." },
  { name: "SMM & SEO", href: "/marketing", desc: "We grow your brand with smart SEO and social media that connect, engage, and convert audiences." },
  { name: "Web & App Development", href: "/website", desc: "Building sleek, high-performing websites and apps that deliver seamless user experiences and real-world results." },
  { name: "Animations", href: "/animations", desc: "We bring ideas to life with captivating animations that engage, explain, and elevate your brand's story." },
];

export function Services() {
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg)" }}>
      <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <span style={{ display: "inline-block", border: "1px solid var(--border)", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>Services</span>
      </div>
      <h2 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", textAlign: "center", marginBottom: "3rem" }}>Expertise You Can Trust</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }} className="services-grid">
        {services.map(s => (
          <Link key={s.name} href={s.href} style={{
            background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12,
            padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem",
            cursor: "pointer", textDecoration: "none"
          }}>
            <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--lime)" }}>{s.name}</div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
              READ MORE
              <div style={{ width: 32, height: 32, borderRadius: "50%", border: "1.5px solid var(--muted)", display: "flex", alignItems: "center", justifyContent: "center" }}>↗</div>
            </div>
          </Link>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

export function About() {
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg2)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-section">
      <div style={{ position: "relative" }}>
        <div style={{ width: "100%", aspectRatio: "1/1", background: "#1a2a0a", borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#0d1a05" width="400" height="400"/>
            <circle cx="200" cy="200" r="140" fill="none" stroke="#c6f135" strokeWidth="1" opacity="0.15"/>
            <ellipse cx="200" cy="200" rx="65" ry="40" fill="none" stroke="#c6f135" strokeWidth="2.5" opacity="0.8"/>
            <text x="165" y="197" fontFamily="Arial" fontSize="15" fontWeight="bold" fill="#c6f135" opacity="0.9">WEB</text>
            <text x="152" y="215" fontFamily="Arial" fontSize="15" fontWeight="bold" fill="#c6f135" opacity="0.9">DESIGN</text>
            <ellipse cx="90" cy="140" rx="42" ry="22" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.5"/>
            <text x="68" y="145" fontFamily="Arial" fontSize="10" fill="#fff" opacity="0.7">RESEARCH</text>
            <ellipse cx="310" cy="140" rx="42" ry="22" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.5"/>
            <text x="285" y="145" fontFamily="Arial" fontSize="10" fill="#fff" opacity="0.7">WEBSITE</text>
            <ellipse cx="310" cy="265" rx="45" ry="22" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.5"/>
            <text x="278" y="270" fontFamily="Arial" fontSize="10" fill="#fff" opacity="0.7">ADVERTISING</text>
            <ellipse cx="90" cy="265" rx="42" ry="22" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.5"/>
            <text x="68" y="270" fontFamily="Arial" fontSize="10" fill="#fff" opacity="0.7">CREATIVITY</text>
          </svg>
        </div>
        {/* Award badge */}
        <div style={{ position: "absolute", top: -15, right: -15 }}>
          <svg viewBox="0 0 90 90" width="90" height="90" style={{ animation: "rotateSlow 12s linear infinite" }}>
            <path id="abadge" d="M 45,45 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none"/>
            <text fontSize="7.5" fontFamily="Arial" fontWeight="600" fill="#c6f135" letterSpacing="2">
              <textPath href="#abadge">WINNING AGENCY • AWARD •</textPath>
            </text>
          </svg>
        </div>
        {/* Lime bar */}
        <div style={{ position: "absolute", bottom: 0, right: -24, width: 20, height: 90, background: "var(--lime)" }} />
        <style>{`@keyframes rotateSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>

     

      <style>{`@media (max-width: 768px) { .about-section { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const testimonials = [
  { stars: 5, text: "The team understood my vision perfectly and turned it into a clean, modern website. I've already noticed more customer engagement.", name: "Emily Carter", loc: "New York, NY" },
  { stars: 4, text: "I really appreciated how responsive and professional they were. Every detail was handled with care, and the results exceeded expectations.", name: "James Miller", loc: "Austin, TX" },
  { stars: 5, text: "My new website feels fresh and user-friendly. The process was smooth from start to finish, and communication was excellent.", name: "Sophia Johnson", loc: "Envato Client" },
  { stars: 5, text: "They went above and beyond to deliver a site that not only looks great but also performs well. I've had fantastic feedback from clients.", name: "Michael Brown", loc: "Chicago, IL" },
  { stars: 4, text: "The design came out exactly as I wanted. A couple of features took extra time, but the end result was worth it.", name: "Olivia Davis", loc: "Miami, FL" },
  { stars: 5, text: "Fantastic service! The website looks modern and runs smoothly. The team was professional and easy to work with.", name: "Daniel Harris", loc: "Seattle, WA" },
  { stars: 5, text: "Overall a good experience. The design turned out great, though communication took a little longer than expected at times.", name: "Grace Thompson", loc: "Denver, CO" },
  { stars: 4, text: "Absolutely love the final result. My site feels fresh, responsive, and has already started to bring in new leads.", name: "William Scott", loc: "Boston, MA" },
];

export function Testimonials() {
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "4rem", marginBottom: "3rem" }} className="t-header">
        <div>
          <span style={{ display: "inline-block", border: "1px solid var(--border)", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>Testimonials</span>
          <h2 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)" }}>What Clients Say</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "4rem", fontWeight: 900 }}>4.7</div>
          <div style={{ color: "var(--lime)", fontSize: "1rem" }}>★★★★★</div>
          <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>145 Reviews</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }} className="t-grid">
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "1.5rem" }}>
            <div style={{ color: "var(--lime)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
            <p style={{ fontSize: "0.85rem", color: "#bbb", lineHeight: 1.7, marginBottom: "1rem" }}>{t.text}</p>
            <div style={{ fontWeight: 700, fontSize: "0.85rem" }}>{t.name}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{t.loc}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .t-grid { grid-template-columns: 1fr !important; } .t-header { flex-direction: column; gap: 2rem; } }
        @media (max-width: 1024px) { .t-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}

const brands = ["TECHHIVE", "NEXACORE", "BRANDWISE", "DIGITRON", "FLOWMARK", "SKYLAUNCH", "BUILDCRAFT", "PIXELLAB", "NOVASTRIDE", "WEBFORCE", "CRESTIFY", "PRODIGITAL"];

export function Brands() {
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg2)", textAlign: "center" }}>
      <span style={{ display: "inline-block", border: "1px solid var(--border)", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>Credibility</span>
      <h2 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.75rem" }}>Built on Trust, Backed by Brands</h2>
      <p style={{ color: "var(--muted)", maxWidth: 600, margin: "0 auto", fontSize: "0.9rem" }}>Trusted by leading brands that prioritize creativity, demand consistency, and seek impactful results.</p>

      <div style={{ overflow: "hidden", marginTop: "3rem" }}>
        <div style={{ display: "flex", gap: "3rem", animation: "brandScroll 20s linear infinite", width: "max-content" }}>
          {[...brands, ...brands].map((b, i) => (
            <div key={i} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8, padding: "0.75rem 2rem", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", whiteSpace: "nowrap", color: "var(--muted)" }}>{b}</div>
          ))}
        </div>
      </div>
      <style>{`@keyframes brandScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

export function Portfolio() {
  const items = [
    { title: "Logo", em: "Design", bg: "linear-gradient(135deg,#1a1000,#2a1800)" },
    { title: "", em: "Animations", bg: "linear-gradient(135deg,#001a10,#00100a)" },
  ];
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg2)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }} className="p-header">
        <div>
          <span style={{ display: "inline-block", border: "1px solid var(--border)", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "1.5rem" }}>Recent Work</span>
          <h2 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3rem)" }}>Our Portfolio</h2>
          <p style={{ color: "var(--muted)", marginTop: "0.75rem", fontSize: "0.9rem", maxWidth: 500 }}>Explore our recent work — a showcase of bold designs, smart builds, and creative strategies.</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["All", "Logo", "Web", "Motion"].map(t => (
            <button key={t} style={{ padding: "0.5rem 1.2rem", borderRadius: 999, border: "1px solid var(--border)", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", background: t === "All" ? "var(--lime)" : "transparent", color: t === "All" ? "#000" : "var(--muted)" }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="p-grid">
        {items.map((item, i) => (
          <div key={i} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "4/3", background: "var(--card)", cursor: "pointer" }}>
            <div style={{ width: "100%", height: "100%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, color: "rgba(198,241,53,0.12)" }}>
              {item.title.toUpperCase() || item.em.toUpperCase()}
            </div>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)", display: "flex", alignItems: "flex-end", padding: "1.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 900, fontSize: "1.4rem" }}>
                  {item.title} <span style={{ color: "var(--lime)" }}>{item.em}</span>
                </h3>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--lime)", marginTop: "0.5rem" }}>View All ↗</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) { .p-grid { grid-template-columns: 1fr !important; } .p-header { flex-direction: column; align-items: flex-start; gap: 1rem; } }
      `}</style>
    </section>
  );
}

export function CTA() {
  return (
    <section style={{ padding: "6rem 4rem", background: "var(--bg)", textAlign: "center" }}>
      <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,6vw,5rem)", textTransform: "uppercase", lineHeight: 1, marginBottom: "1rem" }}>
        Ready to <span style={{ color: "var(--lime)" }}>Elevate</span><br />Your Brand?
      </h2>
      <p style={{ color: "var(--muted)", marginBottom: "2.5rem", fontSize: "1rem" }}>Let's build something extraordinary together.</p>
      <a href="tel:(832)981-5302" style={{ background: "var(--lime)", color: "#000", fontWeight: 800, fontSize: "0.85rem", padding: "0.9rem 2.5rem", borderRadius: 6, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block" }}>Get A Free Quote</a>
    </section>
  );
}

export function WhatsApp() {
  return (
    <a href="https://wa.me/18329815302" target="_blank" rel="noreferrer" style={{
      position: "fixed", bottom: "2rem", right: "2rem",
      width: 56, height: 56, background: "#25D366",
      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 999, boxShadow: "0 4px 20px rgba(37,211,102,0.4)"
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}
