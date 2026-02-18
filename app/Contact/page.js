"use client";
import { useEffect, useState } from "react";
import { Mail } from "../lib/send-mail";
import { toast } from "react-toastify";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Page() {
  const [fullName, setFullName] = useState("");
  const [message, setMessege] = useState("");
  const [loginedUserEmail, setLoginedUserEmail] = useState("");

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    setLoginedUserEmail(signedInUser?.email || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ContactData = {
      fullName,
      email: loginedUserEmail,
      message,
    };
    console.log(ContactData.loginedUserEmail);
    const response = await fetch("/Api/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ContactData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Form submitted successfully!");
      setFullName("");
      setMessege("");
      await Mail({
        to: loginedUserEmail,
        subject: ` Thank You for Reaching Out, ${fullName}!`,
        message: `<h1>Hello ${fullName},</h1>
          <p>Thank you for getting in touch with us. We have received your message:</p>
          <p>"${message}"</p>
          <p>Our team will review it shortly. We'll get back to you as soon as possible with a response.</p>
          <p>If you have any additional details to share or urgent concerns, feel free to reply to this email. We're here to assist you!</p>
          <p>Best regards,</p>
          <p><strong>The EventSpher Team</strong></p>
          `,
      });
    } else {
      toast.error(result.message);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(15, 23, 42, 0.8)",
    border: "1px solid rgba(96, 165, 250, 0.2)",
    borderRadius: "10px",
    padding: "14px 16px",
    color: "#f1f5f9",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  };

  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        textAlign: "center",
        background: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(59,130,246,0.1)",
          border: "1px solid rgba(96,165,250,0.25)",
          borderRadius: "100px", padding: "6px 18px",
          marginBottom: "24px",
        }}>
          <span style={{ color: "#60a5fa", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em" }}>
            CONTACT US
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800,
          color: "#f1f5f9", marginBottom: "16px",
        }}>
          Get in{" "}
          <span style={{
            background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Touch
          </span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          We&apos;d love to hear from you. Reach out to us for any inquiries or collaborations.
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: "80px 24px 100px", background: "rgba(15,23,42,0.4)" }}>
        <div
          className="flex flex-col lg:flex-row gap-12"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {/* Contact info cards */}
          <div style={{ flex: "0 0 auto", width: "min(100%, 360px)" }}>
            <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.4rem", marginBottom: "32px" }}>
              Contact Information
            </h2>

            {[
              {
                icon: <PhoneIcon sx={{ fontSize: "1.2rem", color: "#60a5fa" }} />,
                label: "Phone",
                value: "+92 343 3326500",
                gradient: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.08))",
                border: "rgba(96,165,250,0.15)",
              },
              {
                icon: <EmailIcon sx={{ fontSize: "1.2rem", color: "#06b6d4" }} />,
                label: "Email",
                value: "Shawaizbutt555@gmail.com",
                gradient: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(139,92,246,0.08))",
                border: "rgba(6,182,212,0.15)",
              },
              {
                icon: <LocationOnIcon sx={{ fontSize: "1.2rem", color: "#8b5cf6" }} />,
                label: "Address",
                value: "Jalal Pur Jattan, Gujrat",
                gradient: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.08))",
                border: "rgba(139,92,246,0.15)",
              },
            ].map((info, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: info.gradient,
                  border: `1px solid ${info.border}`,
                  borderRadius: "14px",
                  padding: "20px 24px",
                  marginBottom: "16px",
                }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "10px",
                  background: "rgba(15,23,42,0.8)",
                  border: `1px solid ${info.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{ color: "#94a3b8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
                    {info.label}
                  </p>
                  <p style={{ color: "#f1f5f9", fontSize: "0.9rem", fontWeight: 500 }}>{info.value}</p>
                </div>
              </div>
            ))}

            {/* Working hours card */}
            <div style={{
              marginTop: "24px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))",
              border: "1px solid rgba(96,165,250,0.12)",
              borderRadius: "14px",
              padding: "20px 24px",
            }}>
              <p style={{ color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
                Working Hours
              </p>
              <p style={{ color: "#f1f5f9", fontSize: "0.875rem", marginBottom: "6px" }}>
                Mon – Fri: <span style={{ color: "#60a5fa" }}>9:00 AM – 6:00 PM</span>
              </p>
              <p style={{ color: "#f1f5f9", fontSize: "0.875rem" }}>
                Sat – Sun: <span style={{ color: "#94a3b8" }}>Closed</span>
              </p>
            </div>

            {/* Response indicator */}
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                background: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                display: "inline-block",
              }} />
              <p style={{ color: "#94a3b8", fontSize: "0.82rem" }}>
                Average response time: <span style={{ color: "#f1f5f9", fontWeight: 600 }}>under 2 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ flex: 1 }}>
            <div style={{
              background: "linear-gradient(145deg, #0f172a, #1e293b)",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
            }}>
              {/* Gradient top accent */}
              <div style={{ height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }} />

              <div style={{ padding: "40px" }}>
                <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.3rem", marginBottom: "28px" }}>
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        style={inputStyle}
                        placeholder="Enter your full name"
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(96,165,250,0.6)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(96,165,250,0.2)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={loginedUserEmail}
                        disabled
                        style={{ ...inputStyle, opacity: 0.6, cursor: "not-allowed" }}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "28px" }}>
                    <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Message
                    </label>
                    <textarea
                      rows="6"
                      value={message}
                      onChange={(e) => setMessege(e.target.value)}
                      style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="Write your message here"
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(96,165,250,0.6)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(96,165,250,0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      type="submit"
                      className="btn-gradient text-white font-semibold px-10 py-3 rounded-xl tracking-wide"
                      style={{ border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
