"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Logo", href: "/logo" },
  { label: "Website", href: "/website" },
  { label: "Copywriting", href: "/copywriting" },
  { label: "Animations", href: "/animations" },
  { label: "Marketing", href: "/marketing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 3rem", height: "72px",
        background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{
            width: 44, height: 44, background: "var(--lime)",
            clipPath: "polygon(0 0, 60% 0, 100% 40%, 100% 100%, 40% 100%, 0 60%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: "1.1rem", color: "#000"
          }}>RS</div>
          <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.1 }}>
            web<br /><span style={{ color: "var(--lime)" }}>creator</span>
          </div>
        </Link>

        <ul style={{ display: "flex", alignItems: "center", gap: "0.2rem", listStyle: "none" }}
          className="hidden md:flex">
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                padding: "0.4rem 0.75rem", fontSize: "0.82rem", fontWeight: 500,
                color: "#ccc", letterSpacing: "0.02em", transition: "color 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--lime)")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="tel:(832)981-5302" className="hidden md:block" style={{
          background: "var(--lime)", color: "#000", fontWeight: 700,
          fontSize: "0.82rem", padding: "0.6rem 1.4rem", borderRadius: 4,
          letterSpacing: "0.04em", whiteSpace: "nowrap"
        }}>Get A Quote</a>

        <button onClick={() => setOpen(!open)} className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: "0.5rem" }}>
          <span style={{ width: 24, height: 2, background: "#fff", display: "block" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block" }} />
        </button>
      </nav>

      {open && (
        <div style={{
          position: "fixed", top: 72, left: 0, right: 0,
          background: "rgba(0,0,0,0.98)", backdropFilter: "blur(12px)",
          zIndex: 999, padding: "1.5rem 2rem 2rem",
          borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column"
        }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              padding: "0.9rem 0", fontSize: "1rem", fontWeight: 500,
              color: "#ccc", borderBottom: "1px solid var(--border)"
            }}>{l.label}</Link>
          ))}
          <a href="tel:(832)981-5302" style={{
            marginTop: "1.5rem", background: "var(--lime)", color: "#000",
            fontWeight: 700, padding: "0.75rem", borderRadius: 6, textAlign: "center"
          }}>Get A Quote</a>
        </div>
      )}
    </>
  );
}
