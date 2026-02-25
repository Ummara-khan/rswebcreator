import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsApp } from "@/components/index";
import Link from "next/link";

const pageData = {
  logo: {
    tag: "Our Service", title: "Logo", titleHi: "Design",
    desc: "We craft bold, memorable logos that capture your brand's essence and spark instant recognition across every platform and medium.",
    cards: [
      { name: "Brand Identity", desc: "Complete brand identity packages including logo, color palette, typography, and brand guidelines." },
      { name: "Logo Redesign", desc: "Modernize your existing logo while maintaining brand recognition and equity." },
      { name: "Minimalist Logo", desc: "Clean, versatile logos that work perfectly at any size — from business cards to billboards." },
    ]
  },
  website: {
    tag: "Our Service", title: "Web & App", titleHi: "Development",
    desc: "Building sleek, high-performing websites and apps that deliver seamless user experiences and real-world results for your business.",
    cards: [
      { name: "Business Websites", desc: "Professional websites that convert visitors into customers with compelling design and clear messaging." },
      { name: "E-Commerce", desc: "Feature-rich online stores that drive sales and provide a seamless shopping experience." },
      { name: "Web Applications", desc: "Custom web apps built with modern frameworks to solve your unique business challenges." },
    ]
  },
  copywriting: {
    tag: "Our Service", title: "Copy", titleHi: "writing",
    desc: "Words that sell. Compelling copy that resonates with your audience, drives engagement, and converts readers into loyal customers.",
    cards: [
      { name: "Website Copy", desc: "Engaging, SEO-optimized website content that speaks to your audience and ranks on Google." },
      { name: "Ad Copy", desc: "High-converting ad copy for social media, Google Ads, and digital campaigns." },
      { name: "Brand Messaging", desc: "Clear, consistent messaging that defines your brand voice across all touchpoints." },
    ]
  },
  animations: {
    tag: "Our Service", title: "Motion &", titleHi: "Animations",
    desc: "We bring ideas to life with captivating animations that engage, explain, and elevate your brand's story across all platforms.",
    cards: [
      { name: "Explainer Videos", desc: "Animated explainer videos that simplify complex ideas and boost conversion rates." },
      { name: "Logo Animation", desc: "Bring your logo to life with smooth, professional motion graphics." },
      { name: "Social Media Animations", desc: "Eye-catching animated content designed specifically for social media platforms." },
    ]
  },
  marketing: {
    tag: "Our Service", title: "Digital", titleHi: "Marketing",
    desc: "We grow your brand with smart SEO and social media strategies that connect, engage, and convert audiences into loyal customers.",
    cards: [
      { name: "SEO Optimization", desc: "Data-driven SEO strategies that improve rankings, drive organic traffic, and generate leads." },
      { name: "Social Media Management", desc: "Full-service social media management to grow your following and brand presence." },
      { name: "PPC Advertising", desc: "Targeted paid advertising campaigns that maximize ROI and drive measurable results." },
    ]
  },
  portfolio: {
    tag: "Our Work", title: "Our", titleHi: "Portfolio",
    desc: "A showcase of bold designs, smart builds, and creative strategies that deliver real results for our clients worldwide.",
    cards: [
      { name: "Logo Design", desc: "Brand identities that are bold, distinctive, and built to last." },
      { name: "Web Projects", desc: "High-performance websites built for conversion and user experience." },
      { name: "Animation Reels", desc: "Captivating motion content that brings brand stories to life." },
      { name: "Mobile Apps", desc: "Sleek, intuitive apps designed for modern users." },
      { name: "Marketing Campaigns", desc: "Data-driven campaigns that drove measurable growth for our clients." },
      { name: "E-Commerce Stores", desc: "Revenue-generating online stores with seamless shopping experiences." },
    ]
  }
};

function SubPage({ slug }: { slug: keyof typeof pageData }) {
  const d = pageData[slug];
  return (
    <>
      <Navbar />
      <main>
        <div style={{ minHeight: "50vh", display: "flex", alignItems: "center", padding: "8rem 4rem 4rem", background: "linear-gradient(135deg, #050505 0%, #0d1a05 100%)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-10%", top: "-20%", width: "60%", height: "140%", background: "radial-gradient(ellipse, rgba(120,200,0,0.07) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 700, position: "relative", zIndex: 1 }}>
            <span style={{ display: "inline-block", border: "1px solid #222", borderRadius: 999, padding: "0.35rem 1.2rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8a8a", marginBottom: "1.5rem" }}>{d.tag}</span>
            <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 900, fontSize: "clamp(3rem,7vw,6rem)", textTransform: "uppercase", lineHeight: 0.95 }}>
              {d.title} <span style={{ color: "#c6f135" }}>{d.titleHi}</span>
            </h1>
            <p style={{ color: "#8a8a8a", marginTop: "1.5rem", lineHeight: 1.7, fontSize: "1rem" }}>{d.desc}</p>
          </div>
        </div>

        <section style={{ padding: "4rem", background: "#0a0a0a" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", maxWidth: 1100, margin: "0 auto" }}>
            {d.cards.map(c => (
              <div key={c.name} style={{ background: "#141414", border: "1px solid #222", borderRadius: 12, padding: "2rem" }}>
                <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#c6f135", marginBottom: "0.75rem" }}>{c.name}</div>
                <p style={{ fontSize: "0.85rem", color: "#8a8a8a", lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="tel:(832)981-5302" style={{ background: "#c6f135", color: "#000", fontWeight: 800, fontSize: "0.85rem", padding: "0.9rem 2.5rem", borderRadius: 6, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block" }}>Get A Quote</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}

export function LogoPage() { return <SubPage slug="logo" />; }
export function WebsitePage() { return <SubPage slug="website" />; }
export function CopywritingPage() { return <SubPage slug="copywriting" />; }
export function AnimationsPage() { return <SubPage slug="animations" />; }
export function MarketingPage() { return <SubPage slug="marketing" />; }
export function PortfolioPage() { return <SubPage slug="portfolio" />; }
