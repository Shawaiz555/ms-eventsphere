import Image from "next/image";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const teamMembers = [
  { name: "Muhammad Shawaiz", role: "CEO", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
  { name: "Zain Imran", role: "CTO", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Hamza Ali Minhas", role: "Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
];

const values = [
  {
    title: "We care",
    description:
      "We care about our people and their well-being. We always look out for each other. We care about our customers and their success. We care about our world. Caring is the only way we know.",
    Icon: FavoriteIcon,
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    glow: "rgba(96,165,250,0.12)",
    iconColor: "#60a5fa",
  },
  {
    title: "We dare",
    description:
      "We encourage ourselves to dream big and swing for the fences. We dare to fail but always fail forward. We question the norm and embrace change. Who dares, wins.",
    Icon: BoltIcon,
    gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    glow: "rgba(139,92,246,0.12)",
    iconColor: "#a78bfa",
  },
  {
    title: "We own it",
    description:
      "We are all self-starters with entrepreneurial mindsets. We take full responsibility for our actions. We persist relentlessly until we succeed. We call it Rosh-Gadol.",
    Icon: ShieldIcon,
    gradient: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
    glow: "rgba(6,182,212,0.12)",
    iconColor: "#22d3ee",
  },
  {
    title: "We are humble",
    description:
      "We know we don't know it all. We listen to our colleagues, our customers & our industry. We allow ourselves to be amazed and always seek to learn and improve.",
    Icon: EmojiObjectsIcon,
    gradient: "linear-gradient(135deg, #f472b6, #8b5cf6)",
    glow: "rgba(244,114,182,0.12)",
    iconColor: "#f472b6",
  },
];

const faqs = [
  {
    q: "How do I book an event with MS-EventSphere?",
    a: "You can easily book your event by contacting us through our website or giving us a call. We'll work with you to customize the perfect event plan.",
  },
  {
    q: "Do you offer event planning for both large and small events?",
    a: "Yes! Whether you're hosting a large corporate event or a small intimate gathering, we cater to all types of events.",
  },
  {
    q: "What types of events do you specialize in?",
    a: "We specialize in corporate events, weddings, parties, conferences, and more. Whatever your event may be, we've got you covered.",
  },
];

export default function Page() {
  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "90px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          fill
          alt="Team collaboration"
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.75) 60%, rgba(3,7,18,0.92) 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "80px 24px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: "100px", padding: "6px 18px",
            marginBottom: "24px",
          }}>
            <span style={{ color: "#a78bfa", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              ABOUT US
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 800,
            color: "#f8fafc", lineHeight: 1.1, marginBottom: "20px",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}>
            The people behind{" "}
            <span style={{
              background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              MS-EventSphere
            </span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.15rem", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            A passionate team dedicated to transforming the world of B2B event management.
          </p>
          {/* Inline stats */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "40px" }}>
            {[
              { value: "3+", label: "Years Experience" },
              { value: "10K+", label: "Events Managed" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{
                  fontSize: "2rem", fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{s.value}</p>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", letterSpacing: "0.06em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            THE TEAM
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Meet Our Team
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-glow"
              style={{
                flex: "1 1 280px",
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.12)",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex", flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Gradient top bar */}
              <div style={{ height: "2px", width: "100%", background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }} />

              {/* Portrait image — full-width card top */}
              <div style={{
                width: "100%",
                aspectRatio: "4/3",
                position: "relative",
                overflow: "hidden",
              }}>
                <Image
                  src={member.image}
                  fill
                  alt={member.name}
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: "contain", objectPosition: "top center" }}
                />
                {/* Subtle bottom gradient overlay */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "48px",
                  background: "linear-gradient(to top, #0f172a, transparent)",
                }} />
              </div>

              <div style={{ padding: "20px 24px 28px", textAlign: "center" }}>
                <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.05rem", marginBottom: "6px" }}>
                  {member.name}
                </h3>
                <span style={{
                  display: "inline-block",
                  background: "rgba(96,165,250,0.1)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  borderRadius: "100px", padding: "3px 14px",
                  color: "#60a5fa", fontSize: "0.78rem", fontWeight: 600,
                }}>
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{
        padding: "100px 24px",
        background: "rgba(15,23,42,0.6)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            PURPOSE
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            marginBottom: "28px",
          }}>
            Our Mission &amp; Vision
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "40px" }}>
            Our mission is to deliver exceptional event experiences that leave lasting impressions.
            We believe in creating personalized solutions tailored to every client&apos;s needs.
            Our vision is to be the leading event management company known for innovation,
            creativity, and excellence.
          </p>
          <Link href="/Partner">
            <button
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-xl text-sm tracking-wide"
              style={{ border: "none", cursor: "pointer" }}
            >
              Become a Partner
            </button>
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #0f172a 0%, #030712 100%)" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            TESTIMONIALS
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {[
            {
              text: "MS-EventSphere Management managed our annual conference flawlessly. From the initial planning to the final execution, they were exceptional. Highly recommend their services!",
              name: "Sarah Smith",
              role: "Marketing Director, TechCorp",
            },
            {
              text: "Our wedding day was made perfect by MS-EventSphere Management. The attention to detail and personal touch made all the difference. We couldn't have asked for a better team.",
              name: "John and Emily Johnson",
              role: "Happy Clients",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="card-glow"
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.12)",
                borderRadius: "18px",
                padding: "32px",
                position: "relative",
              }}
            >
              <span style={{
                fontSize: "3rem", lineHeight: 1, position: "absolute", top: "16px", left: "24px",
                background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                opacity: 0.5,
              }}>&ldquo;</span>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "20px", paddingTop: "16px" }}>
                {t.text}
              </p>
              <div style={{ borderTop: "1px solid rgba(96,165,250,0.1)", paddingTop: "16px" }}>
                <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</p>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, #0f172a, #1a0a2e)",
        textAlign: "center",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <h2 style={{
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
          color: "#f1f5f9", marginBottom: "16px",
        }}>
          Ready to Make Your Event Unforgettable?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 36px" }}>
          Whether you are planning a corporate event or any special occasion, we&apos;re here
          to help you create an amazing experience.
        </p>
        <Link href="/Contact">
          <button
            className="btn-gradient text-white font-semibold px-10 py-4 rounded-xl text-base tracking-wide"
            style={{ border: "none", cursor: "pointer" }}
          >
            Get In Touch
          </button>
        </Link>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            CULTURE
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {values.map((value, index) => (
            <div
              key={index}
              className="card-glow"
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.1)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div style={{
                width: "52px", height: "52px", borderRadius: "12px", flexShrink: 0,
                background: value.glow,
                border: `1px solid ${value.iconColor}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <value.Icon sx={{ fontSize: "1.6rem", color: value.iconColor }} />
              </div>
              <div>
                <h3 style={{
                  fontWeight: 700, fontSize: "1rem",
                  background: value.gradient,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  marginBottom: "8px",
                }}>
                  {value.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: "80px 24px 100px",
        background: "rgba(15,23,42,0.5)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            FAQ
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card-glow"
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.1)",
                borderRadius: "14px",
                padding: "24px 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "8px", flexShrink: 0,
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", color: "white", fontWeight: 700,
                }}>
                  {i + 1}
                </span>
                <div>
                  <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem", marginBottom: "10px" }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
