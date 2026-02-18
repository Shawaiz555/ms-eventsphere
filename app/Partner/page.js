"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Mail } from "../lib/send-mail";
import { toast } from "react-toastify";

const benefits = [
  {
    id: 1,
    title: "Business growth",
    description:
      "Scale your services and land more business with our flexible partnership options. This is your new platform for differentiation.",
    icon: "🌱",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    id: 2,
    title: "Going the extra mile",
    description:
      "When you're a Bizzabo partner, you're an extension of our team so take advantage of exclusive marketing, business development.",
    icon: "📊",
    gradient: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
  },
  {
    id: 3,
    title: "Lasting relationships",
    description:
      "With top NPS and CSAT scores, you can count on Bizzabo for seamless integrations, plus enterprise-grade security and support.",
    icon: "🤝",
    gradient: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
  },
];

const ecosystemCards = [
  {
    img: "/Images/App market partners.png",
    title: "App market partners",
    desc: "Grow your business by building apps that help Event Experience Leaders deliver personalized and immersive experiences for participants.",
    accent: "rgba(59,130,246,0.15)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    img: "/Images/Agency partners.png",
    title: "Agency partners",
    desc: "Our frictionless agency user experience platform provides dedicated business development and support resources, so you can create engagement strategies and unforgettable customer experiences.",
    accent: "rgba(139,92,246,0.15)",
    border: "rgba(139,92,246,0.2)",
  },
  {
    img: "/Images/Go to market partners.png",
    title: "Go-to-market partners",
    desc: "Why go it alone? Expand your portfolio of product offerings to include our end-to-end solution for all kinds of events – while strengthening your relationships and credibility.",
    accent: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    img: "/Images/Solutions & integrations partners.png",
    title: "Solutions & integrations partners",
    desc: "Our frictionless agency user experience platform provides dedicated business development and support resources, so you can create engagement strategies and unforgettable customer experiences.",
    accent: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.2)",
  },
];

export default function Page() {
  const formRef = useRef(null);
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [detail, setDetail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [loginedUserEmail, setLoginedUserEmail] = useState("");

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    setLoginedUserEmail(signedInUser?.email || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const partnerData = {
      firstName,
      lastName,
      email: loginedUserEmail,
      phoneNo,
      jobTitle,
      partnershipType,
      detail,
    };

    try {
      const response = await fetch("/Api/Partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partnerData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form submitted successfully!");
        setFirstName("");
        setLastName("");
        setPhoneNo("");
        setJobTitle("");
        setPartnershipType("");
        setDetail("");
        setIsChecked(false);
        const fullName = `${firstName} ${lastName}`;
        await Mail({
          to: loginedUserEmail,
          subject: `Thank You for Your Interest in Partnering with Us, ${fullName}!`,
          message: `<p>Dear <strong>${fullName}</strong>,</p>
            <p>I hope this message finds you well.</p>
            <p>Thank you for showing interest in becoming a part of our team. We truly appreciate your enthusiasm and the time you've taken to connect with us. We are currently reviewing all applications and will be in touch with you soon regarding the next steps.</p>
            <p>We look forward to possibly working together and will contact you shortly.</p>
            <p>Best regards, <br>
               <strong>Zain Imran</strong><br>
               <strong>CTO</strong><br>
               <strong>EventSphere</strong><br>
               <strong><a href="mailto:zanmirza3334@gmail.com">zanmirza3334@gmail.com</a></strong>
            </p>`,
        });
      } else {
        toast.error("Form not submitted!!!");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your network.");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(96, 165, 250, 0.2)",
    borderRadius: "10px",
    padding: "12px 16px",
    color: "#f1f5f9",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", minHeight: "55vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden", paddingTop: "90px",
      }}>
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          fill
          alt="Partnership handshake"
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(3,7,18,0.88) 0%, rgba(15,23,42,0.8) 60%, rgba(6,182,212,0.12) 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(6,182,212,0.12)",
            border: "1px solid rgba(6,182,212,0.3)",
            borderRadius: "100px", padding: "6px 18px", marginBottom: "24px",
          }}>
            <span style={{ color: "#06b6d4", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
              PARTNER PROGRAM
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800,
            color: "#f1f5f9", lineHeight: 1.1, marginBottom: "16px",
          }}>
            Join the{" "}
            <span style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Partner Ecosystem
            </span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Scale your business and deliver exceptional event experiences with the MS-EventSphere partner program.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <button
              onClick={scrollToForm}
              className="btn-gradient text-white font-semibold px-10 py-4 rounded-xl tracking-wide"
              style={{ border: "none", cursor: "pointer", fontSize: "1rem" }}
            >
              Become a Partner
            </button>
            <p style={{ color: "#64748b", fontSize: "0.82rem" }}>
              No commitment required • Free to apply
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{
        padding: "40px 24px",
        background: "rgba(15,23,42,0.8)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
        borderBottom: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{
          maxWidth: "900px", margin: "0 auto",
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "48px",
        }}>
          {[
            { value: "500+", label: "Active Partners" },
            { value: "60+", label: "Countries" },
            { value: "$2B+", label: "Partner Revenue Generated" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "2rem", fontWeight: 800,
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.value}</p>
              <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "4px", letterSpacing: "0.06em" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            WHY PARTNER
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Why join the partner program?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="card-glow"
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.12)",
                borderRadius: "18px",
                padding: "36px 28px",
                textAlign: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div style={{ height: "2px", background: benefit.gradient, position: "absolute", top: 0, left: 0, right: 0, borderRadius: "18px 18px 0 0" }} />
              <div style={{
                width: "60px", height: "60px", borderRadius: "16px",
                background: "rgba(96,165,250,0.06)",
                border: "1px solid rgba(96,165,250,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "2rem", margin: "0 auto 20px",
              }}>
                {benefit.icon}
              </div>
              <h3 style={{
                fontWeight: 700, fontSize: "1.1rem",
                background: benefit.gradient,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                marginBottom: "12px",
              }}>
                {benefit.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section style={{
        padding: "80px 24px",
        background: "rgba(15,23,42,0.5)",
        borderTop: "1px solid rgba(96,165,250,0.08)",
      }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
            ECOSYSTEM
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
            background: "linear-gradient(135deg, #f1f5f9, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Our partner program ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {ecosystemCards.map((card, i) => (
            <div
              key={i}
              className="card-glow"
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: `1px solid ${card.border}`,
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "12px",
                  background: card.accent,
                  border: `1px solid ${card.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Image src={card.img} width={30} height={30} alt={card.title} style={{ objectFit: "contain" }} />
                </div>
                <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem" }}>{card.title}</h3>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: 1.7 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PARTNER FORM ── */}
      <section
        ref={formRef}
        style={{
          padding: "100px 24px",
          background: "linear-gradient(180deg, #0f172a 0%, #030712 100%)",
          borderTop: "1px solid rgba(96,165,250,0.08)",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
              GET STARTED
            </p>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700,
              color: "#f1f5f9", marginBottom: "12px",
            }}>
              Join Our Growing Partner Community
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
              Fill in your details and we&apos;ll be in touch shortly.
            </p>
          </div>

          <div style={{
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            border: "1px solid rgba(96,165,250,0.15)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}>
            <div style={{ height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }} />
            <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: "20px" }}>
                {[
                  { label: "First Name*", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: "First name..." },
                  { label: "Last Name*", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: "Last name..." },
                  { label: "Phone Number*", value: phoneNo, onChange: (e) => setPhoneNo(e.target.value), placeholder: "Phone...", type: "tel" },
                  { label: "Job Title*", value: jobTitle, onChange: (e) => setJobTitle(e.target.value), placeholder: "Job Title" },
                ].map((field) => (
                  <div key={field.label}>
                    <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={field.placeholder}
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.2)"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Work Email*
                  </label>
                  <input
                    type="email"
                    value={loginedUserEmail}
                    disabled
                    placeholder="Work email..."
                    required
                    style={{ ...inputStyle, opacity: 0.6, cursor: "not-allowed" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Type of Partnership*
                  </label>
                  <select
                    value={partnershipType}
                    onChange={(e) => setPartnershipType(e.target.value)}
                    required
                    style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#0f172a" }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.2)"; e.target.style.boxShadow = "none"; }}
                  >
                    <option disabled value="" style={{ background: "#0f172a", color: "#94a3b8" }}>Type of Partnership</option>
                    <option style={{ background: "#0f172a", color: "#f1f5f9" }}>App Market Partners</option>
                    <option style={{ background: "#0f172a", color: "#f1f5f9" }}>Agency Partners</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Desired Partnership Details*
                </label>
                <textarea
                  rows="4"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder="Please share details on your desired partnership"
                  required
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "28px" }}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  required
                  style={{
                    marginTop: "2px", flexShrink: 0,
                    width: "16px", height: "16px",
                    accentColor: "#60a5fa",
                  }}
                />
                <label style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  I consent to receive emails from MS-EventSphere about upcoming events and more. I reviewed and agree to{" "}
                  <Link href="/" style={{ color: "#60a5fa" }}>Privacy Policy</Link>
                </label>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="submit"
                  className="btn-gradient text-white font-semibold px-10 py-3 rounded-xl tracking-wide"
                  style={{ border: "none", cursor: "pointer", fontSize: "0.95rem" }}
                >
                  Become a Partner
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
