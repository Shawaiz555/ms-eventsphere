"use client";
import Image from "next/image";
import EventCards from "../Reuseable Components/EventCards";

export default function page() {
  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HERO SECTION ── */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "90px",
        }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
          fill
          alt="Conference stage"
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(3,7,18,0.85) 0%, rgba(15,23,42,0.75) 60%, rgba(59,130,246,0.15) 100%)",
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(59,130,246,0.15)",
            border: "1px solid rgba(96,165,250,0.3)",
            borderRadius: "100px", padding: "6px 18px",
            marginBottom: "24px",
          }}>
            <span style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#60a5fa", display: "inline-block",
              boxShadow: "0 0 8px rgba(96,165,250,0.8)",
            }} />
            <span style={{ color: "#60a5fa", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              LIVE &amp; ON-DEMAND
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 800, color: "#f1f5f9",
            lineHeight: 1.1, marginBottom: "20px",
          }}>
            Attend a{" "}
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              MS-EventSphere
            </span>{" "}
            Event
          </h1>
          <p style={{
            color: "#94a3b8", fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: "680px", margin: "0 auto", lineHeight: 1.7,
          }}>
            Join us for event industry webinars, in-person events, and more. Whether you prefer
            to attend live or watch on-demand, you&apos;ll get the industry&apos;s top insights and
            thought leadership.
          </p>
        </div>
      </section>

      {/* ── UPCOMING EVENT BANNER ── */}
      <section style={{ padding: "80px 24px", background: "rgba(15,23,42,0.6)" }}>
        <div
          style={{
            maxWidth: "1100px", margin: "0 auto",
            display: "flex", flexDirection: "row", flexWrap: "wrap",
            borderRadius: "20px", overflow: "hidden",
            border: "1px solid rgba(96,165,250,0.15)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}
        >
          {/* Text side */}
          <div style={{
            flex: "1 1 360px",
            padding: "56px 48px",
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(96,165,250,0.1)",
              border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: "100px", padding: "4px 14px",
              marginBottom: "20px", width: "fit-content",
            }}>
              <span style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}>
                UPCOMING EVENT
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
              color: "#f1f5f9", lineHeight: 1.2, marginBottom: "12px",
            }}>
              2025 Event Benchmarks:
            </h2>
            <p style={{
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              fontSize: "1.1rem", fontWeight: 600, marginBottom: "20px",
            }}>
              From Insights to Action
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "28px" }}>
              Jan 22, 2025 &nbsp;|&nbsp; 11 am ET / 8 am PT / 4 pm GMT
            </p>
            <button
              className="btn-gradient text-white font-semibold px-8 py-3 rounded-xl text-sm tracking-wide"
              style={{ border: "none", cursor: "pointer", width: "fit-content" }}
            >
              Register Now
            </button>
          </div>

          {/* Image side */}
          <div style={{ flex: "1 1 360px", position: "relative", minHeight: "360px" }}>
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80"
              fill
              alt="Upcoming Event"
              style={{ objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.1) 60%)",
            }} />
            {/* Floating date chip */}
            <div style={{
              position: "absolute", top: "24px", right: "24px",
              background: "rgba(15,23,42,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: "12px", padding: "12px 18px",
              textAlign: "center",
            }}>
              <p style={{ color: "#60a5fa", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>22</p>
              <p style={{ color: "#94a3b8", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em" }}>JAN 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH SECTION ── */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
      }}>
        <div
          className="flex flex-col lg:flex-row gap-12 items-center"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {/* Visual card */}
          <div style={{
            flex: "0 0 auto",
            width: "min(100%, 420px)",
            background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))",
            border: "1px solid rgba(96,165,250,0.15)",
            borderRadius: "24px",
            padding: "48px 32px",
            textAlign: "center",
          }}>
            <h2 style={{
              fontSize: "2rem", fontWeight: 700,
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              marginBottom: "28px",
            }}>
              Our approach to events
            </h2>
            <Image
              src="/Images/OurApproachImg.png"
              width={300}
              height={200}
              alt="Our Approach"
              style={{ objectFit: "contain", width: "100%", maxWidth: "320px" }}
            />
          </div>

          {/* Philosophy points */}
          <div style={{ flex: 1 }}>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "32px" }}>
              We believe events should be attendee-centric, experience-driven, and leverage the most
              innovative technology to ensure day-of excitement lasts long after the event is over.
            </p>

            {[
              { num: "01", text: "Event experiences should be impactful, unforgettable, and exceed expectations." },
              { num: "02", text: "Gatherings should foster community, connection, and collaboration." },
              { num: "03", text: "Events should deliver ROI, drive pipeline, and help accelerate business growth." },
            ].map((point) => (
              <div
                key={point.num}
                className="card-glow"
                style={{
                  display: "flex", alignItems: "center", gap: "24px",
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(96,165,250,0.1)",
                  borderRadius: "14px",
                  padding: "20px 24px",
                  marginBottom: "16px",
                }}
              >
                <span style={{
                  fontSize: "2.5rem", fontWeight: 800, lineHeight: 1,
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  flexShrink: 0, minWidth: "56px",
                }}>
                  {point.num}
                </span>
                <p style={{ color: "#cbd5e1", fontSize: "1rem", lineHeight: 1.6 }}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS LISTING ── */}
      <section style={{
        padding: "80px 24px 100px",
        background: "rgba(15,23,42,0.4)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{
              color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px",
            }}>
              BROWSE
            </p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
              background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Upcoming &amp; On-demand Industry Events
            </h2>
          </div>
          <EventCards dashboard={false} />
        </div>
      </section>

    </div>
  );
}
