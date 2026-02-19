"use client";
import Image from "next/image";
import { Mail } from "../lib/send-mail";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import Loader from "../Reuseable Components/Loader";

export default function Home() {
  const [loginedUserEmail, setLoginedUserEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    setLoginedUserEmail(signedInUser?.email || "");
  }, []);

  const sendMail = async (e) => {
    e.preventDefault();

    setIsSendingEmail(true);
    try {
      toast.success("Email sent Successfully!!!");
      await Mail({
        to: loginedUserEmail,
        subject: `Thank You for visiting our site`,
        message: `<p>Dear </p>
          <p>I hope you are well</p>
          <h4>Thank you </h4>
          <p>Best regards, <br>
             <strong>Zain Imran</strong><br>
             <strong>CTO</strong><br>
             <strong>EventSphere</strong><br>
             <strong>We will provide a demo to you as soon as possible</strong><br>
             <strong><a href="mailto:zanmirza3334@gmail.com">zanmirza3334@gmail.com</a></strong>
          </p>`,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HERO SECTION ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Full-screen background image */}
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=85"
          fill
          alt="Event hero background"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />

        {/* Multi-layer dark overlay — stronger than other heroes */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(3,7,18,0.82) 0%, rgba(3,7,18,0.65) 50%, rgba(3,7,18,0.88) 100%)",
        }} />
        {/* Side vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(3,7,18,0.7) 100%)",
        }} />

        {/* Coloured glow accents over the image */}
        <div style={{
          position: "absolute", top: "15%", left: "5%",
          width: "520px", height: "520px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* ── Content wrapper — sits above all overlays ── */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(96, 165, 250, 0.35)",
              borderRadius: "100px", padding: "6px 16px",
              marginBottom: "28px",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#60a5fa",
              boxShadow: "0 0 8px rgba(96,165,250,0.8)",
              display: "inline-block",
              animation: "glowPulse 2s ease-in-out infinite",
            }} />
            <span style={{ color: "#60a5fa", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em" }}>
              THE MS-EVENTSPHERE EXPERIENCE OS
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              fontWeight: 800,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#f1f5f9" }}>Unlimited events for</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #06b6d4, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              limitless professionals
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            color: "#94a3b8", fontSize: "clamp(1rem, 2vw, 1.25rem)",
            textAlign: "center", maxWidth: "600px",
            lineHeight: 1.7, marginBottom: "40px",
          }}>
            Raise the bar with software that is easy to customize and built to
            boost event ROI year-round. One platform for all of your B2B events.
          </p>

          {/* CTA row */}
          <div className="w-full flex flex-col sm:flex-row justify-center gap-3" style={{ maxWidth: "540px" }}>
            <input
              type="email"
              value={loginedUserEmail}
              disabled
              placeholder="Enter Your Email..."
              className="input-glow rounded-xl px-5 py-3 flex-1 text-sm"
            />
            <button
              onClick={sendMail}
              disabled={isSendingEmail}
              className="btn-gradient text-white font-semibold px-7 py-3 rounded-xl text-sm tracking-wide whitespace-nowrap"
              style={{
                border: "none",
                cursor: isSendingEmail ? "not-allowed" : "pointer",
                opacity: isSendingEmail ? 0.7 : 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {isSendingEmail ? <Loader variant="dots" size="sm" /> : "Click for Demo"}
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { value: "10K+", label: "Events Managed" },
              { value: "98%", label: "Customer Satisfaction" },
              { value: "150+", label: "Countries Reached" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <p style={{
                  fontSize: "2rem", fontWeight: 800,
                  background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  {stat.value}
                </p>
                <p style={{ color: "#94a3b8", fontSize: "0.8rem", letterSpacing: "0.05em" }}>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>{/* end content wrapper */}
      </section>

      {/* ── SPONSORS SECTION ── */}
      <section style={{
        background: "rgba(15, 23, 42, 0.6)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
        borderBottom: "1px solid rgba(96,165,250,0.08)",
        padding: "40px 0",
        overflow: "hidden",
      }}>
        <p style={{
          textAlign: "center", color: "#94a3b8",
          fontSize: "0.75rem", fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase",
          marginBottom: "28px",
        }}>
          Trusted by industry leaders
        </p>

        {/* Fade masks on edges */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to right, rgba(15,23,42,0.95), transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
            background: "linear-gradient(to left, rgba(15,23,42,0.95), transparent)",
            pointerEvents: "none",
          }} />

          {/* Marquee track — items duplicated for seamless loop */}
          <div className="marquee-track" style={{ gap: "64px", alignItems: "center" }}>
            {[
              { label: "Amazon", style: { fontSize: "1.35rem", fontFamily: "Arial, sans-serif", letterSpacing: "-0.01em" } },
              { label: "Forbes", style: { fontSize: "1.4rem", fontFamily: "Georgia, serif", fontStyle: "italic" } },
              { label: "HubSpot", style: { fontSize: "1.2rem", fontFamily: "Arial, sans-serif", fontWeight: 900 } },
              { label: "Snowflake", style: { fontSize: "1.1rem", fontFamily: "Arial, sans-serif", letterSpacing: "0.04em" } },
              { label: "TIME", style: { fontSize: "1.6rem", fontFamily: "Georgia, serif", fontWeight: 900, letterSpacing: "0.12em" } },
              { label: "WSJ", style: { fontSize: "1.3rem", fontFamily: "Georgia, serif", letterSpacing: "0.1em" } },
              { label: "Salesforce", style: { fontSize: "1.2rem", fontFamily: "Arial, sans-serif" } },
              { label: "Microsoft", style: { fontSize: "1.25rem", fontFamily: "Arial, sans-serif", letterSpacing: "-0.01em" } },
              // Duplicate set for seamless infinite loop
              { label: "Amazon", style: { fontSize: "1.35rem", fontFamily: "Arial, sans-serif", letterSpacing: "-0.01em" } },
              { label: "Forbes", style: { fontSize: "1.4rem", fontFamily: "Georgia, serif", fontStyle: "italic" } },
              { label: "HubSpot", style: { fontSize: "1.2rem", fontFamily: "Arial, sans-serif", fontWeight: 900 } },
              { label: "Snowflake", style: { fontSize: "1.1rem", fontFamily: "Arial, sans-serif", letterSpacing: "0.04em" } },
              { label: "TIME", style: { fontSize: "1.6rem", fontFamily: "Georgia, serif", fontWeight: 900, letterSpacing: "0.12em" } },
              { label: "WSJ", style: { fontSize: "1.3rem", fontFamily: "Georgia, serif", letterSpacing: "0.1em" } },
              { label: "Salesforce", style: { fontSize: "1.2rem", fontFamily: "Arial, sans-serif" } },
              { label: "Microsoft", style: { fontSize: "1.25rem", fontFamily: "Arial, sans-serif", letterSpacing: "-0.01em" } },
            ].map((brand, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  opacity: 0.38,
                  transition: "opacity 0.3s",
                  color: "#f1f5f9",
                  fontWeight: 800,
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  ...brand.style,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.38")}
              >
                {brand.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTION 1: Powerful Tech ── */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
        borderTop: "1px solid rgba(96,165,250,0.06)",
      }}>
        <div
          className="flex flex-col lg:flex-row items-center gap-16"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Text side */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(96,165,250,0.08)",
              border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: "100px", padding: "4px 14px",
              marginBottom: "20px",
            }}>
              <span style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                PLATFORM
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700,
              color: "#f1f5f9", lineHeight: 1.2, marginBottom: "20px",
            }}>
              Powerful tech that&apos;s easy to use
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "28px" }}>
              Streamline your most complex events with a full-scale, full-spectrum platform
              built to plan, promote, and produce.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Personalize attendee journeys with dynamic registration and multi-track agendas.",
                "Leverage a built-in event marketing suite, code-free templates, and integrations.",
                "Monitor event success indicators, engagement insights, and business outcomes.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", color: "white", fontWeight: 800,
                  }}>✓</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-xl"
              style={{ border: "none", cursor: "pointer", width: "fit-content", marginTop: "36px", fontSize: "0.9rem" }}
            >
              Learn More
            </button>
          </div>
          {/* Image side — contained with glow border */}
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(96,165,250,0.15)",
              boxShadow: "0 24px 80px rgba(59,130,246,0.15), 0 8px 32px rgba(0,0,0,0.5)",
              position: "relative",
              aspectRatio: "16/10",
            }}>
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80"
                fill
                alt="Event technology conference"
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(135deg, rgba(3,7,18,0.25) 0%, transparent 70%)",
              }} />
            </div>
            {/* Floating stat badge */}
            <div style={{
              position: "absolute", bottom: "-20px", left: "-20px",
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: "14px", padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <p style={{ color: "#60a5fa", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>150+</p>
              <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "4px" }}>Countries reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTION 2: Sales Pipeline ── */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0f172a 0%, #1a0a2e 100%)",
        borderTop: "1px solid rgba(96,165,250,0.06)",
      }}>
        <div
          className="flex flex-col-reverse lg:flex-row items-center gap-16"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Image side — contained with purple glow */}
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(139,92,246,0.2)",
              boxShadow: "0 24px 80px rgba(139,92,246,0.12), 0 8px 32px rgba(0,0,0,0.5)",
              position: "relative",
              aspectRatio: "16/10",
            }}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80"
                fill
                alt="Business meeting and sales"
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 40%, rgba(26,10,46,0.3) 100%)",
              }} />
            </div>
            {/* Floating stat badge */}
            <div style={{
              position: "absolute", bottom: "-20px", right: "-20px",
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: "14px", padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}>
              <p style={{ color: "#8b5cf6", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>98%</p>
              <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginTop: "4px" }}>Customer satisfaction</p>
            </div>
          </div>
          {/* Text side */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: "100px", padding: "4px 14px",
              marginBottom: "20px",
            }}>
              <span style={{ color: "#8b5cf6", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                ROI &amp; REVENUE
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700,
              color: "#f1f5f9", lineHeight: 1.2, marginBottom: "20px",
            }}>
              Build sales pipeline and prove event ROI
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "28px" }}>
              Convert your events into revenue-generating opportunities and improve
              time-to-value for sponsors and sales teams alike.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Connect events to your CRM so data can flow in real-time.",
                "Supply go-to-market teams with actionable intent data.",
                "Arm your exhibitors with smart lead capture tools.",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0, marginTop: "2px",
                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", color: "white", fontWeight: 800,
                  }}>✓</span>
                  <span style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-xl"
              style={{ border: "none", cursor: "pointer", width: "fit-content", marginTop: "36px", fontSize: "0.9rem" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
        textAlign: "center",
      }}>
        {/* Quote icon */}
        <div style={{
          width: "56px", height: "56px", borderRadius: "14px",
          background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))",
          border: "1px solid rgba(96,165,250,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 32px",
        }}>
          <span style={{
            fontSize: "2rem", lineHeight: 1,
            background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>&ldquo;</span>
        </div>

        <blockquote style={{
          maxWidth: "760px", margin: "0 auto 40px",
          fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
          color: "#f1f5f9", lineHeight: 1.6, fontStyle: "italic", fontWeight: 500,
        }}>
          MS-EventSphere has everything we need all in one platform. We needed a partner to help us scale
          and grow as a company, and MS-EventSphere checks those boxes.
        </blockquote>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "50%",
            overflow: "hidden", position: "relative",
            border: "2px solid rgba(96,165,250,0.3)",
          }}>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              fill
              alt="Alexis Fillon"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem" }}>Alexis Fillon</p>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Senior Growth Marketing Manager</p>
          </div>
        </div>
      </section>

      {/* ── AWARDS SECTION ── */}
      <section style={{
        padding: "80px 24px",
        background: "rgba(15, 23, 42, 0.5)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{
            color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px",
          }}>
            RECOGNITION
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            The No.1-Rated Event Software
          </h2>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ maxWidth: "900px", margin: "0 auto" }}
        >
          {[
            { Icon: EmojiEventsIcon, color: "#f59e0b", glow: "rgba(245,158,11,0.15)", title: "Forrester Wave Leader", sub: "B2B Event Management Technology, 2023" },
            { Icon: StarIcon, color: "#60a5fa", glow: "rgba(96,165,250,0.15)", title: "Inc. 5000 Honoree", sub: "Top 25% Fastest-growing Private Companies, 2022" },
            { Icon: EmojiEventsIcon, color: "#8b5cf6", glow: "rgba(139,92,246,0.15)", title: "G2 Leader — Enterprise", sub: "Event Management Software Category, 2024" },
            { Icon: StarIcon, color: "#06b6d4", glow: "rgba(6,182,212,0.15)", title: "Gartner Peer Insights", sub: "Customers' Choice for Event Technology, 2023" },
          ].map((award, i) => (
            <div
              key={i}
              className="card-glow"
              style={{
                display: "flex", alignItems: "center", gap: "20px",
                background: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(96, 165, 250, 0.12)",
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{
                flexShrink: 0,
                width: "72px", height: "72px",
                borderRadius: "16px",
                background: award.glow,
                border: `1px solid ${award.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <award.Icon sx={{ fontSize: "2rem", color: award.color }} />
              </div>
              <div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem", marginBottom: "6px" }}>
                  {award.title}
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5 }}>{award.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
