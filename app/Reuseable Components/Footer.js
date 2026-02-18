"use client";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Mail } from "../lib/send-mail";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Footer() {
  const [loginedUserEmail, setLoginedUserEmail] = useState("");

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    setLoginedUserEmail(signedInUser?.email || "");
  }, []);

  const sendMail = async (e) => {
    e.preventDefault();

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
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #030712 100%)",
        borderTop: "1px solid rgba(96, 165, 250, 0.12)",
      }}
    >
      {/* Top gradient accent */}
      <div
        style={{
          height: "2px",
          background: "linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #8b5cf6, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex justify-center items-center">
                <Image
                  src="/Icons/ProjectLogo.png"
                  width={160}
                  height={64}
                  alt="MS-EventSphere Logo"
                  className="w-24 h-24"
                />
              </div>
            </div>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.7" }}>
              The professional platform for all your B2B event management needs. Plan, promote, and produce
              world-class events with ease.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 mt-6">
              <Link href="https://facebook.com">
                <IconButton
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  sx={{
                    border: "1px solid rgba(96, 165, 250, 0.15)",
                    color: "#94a3b8",
                    width: "38px",
                    height: "38px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#60a5fa",
                      borderColor: "rgba(96, 165, 250, 0.5)",
                      background: "rgba(96, 165, 250, 0.08)",
                      boxShadow: "0 0 12px rgba(96, 165, 250, 0.2)",
                    },
                  }}
                >
                  <Facebook sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Link>
              <Link href="https://instagram.com">
                <IconButton
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{
                    border: "1px solid rgba(96, 165, 250, 0.15)",
                    color: "#94a3b8",
                    width: "38px",
                    height: "38px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#E4405F",
                      borderColor: "rgba(228, 64, 95, 0.5)",
                      background: "rgba(228, 64, 95, 0.08)",
                      boxShadow: "0 0 12px rgba(228, 64, 95, 0.2)",
                    },
                  }}
                >
                  <Instagram sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Link>
              <Link href="https://twitter.com">
                <IconButton
                  component="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  sx={{
                    border: "1px solid rgba(96, 165, 250, 0.15)",
                    color: "#94a3b8",
                    width: "38px",
                    height: "38px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#1DA1F2",
                      borderColor: "rgba(29, 161, 242, 0.5)",
                      background: "rgba(29, 161, 242, 0.08)",
                      boxShadow: "0 0 12px rgba(29, 161, 242, 0.2)",
                    },
                  }}
                >
                  <Twitter sx={{ fontSize: "1.1rem" }} />
                </IconButton>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                color: "#f1f5f9",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/Home" },
                { label: "About Us", href: "/About" },
                { label: "Events", href: "/Events" },
                { label: "Contact", href: "/Contact" },
                { label: "Login", href: "/Login" },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "0.6rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#94a3b8",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "all 0.2s ease",
                    }}
                    className="hover:text-primary group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#60a5fa";
                      e.currentTarget.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                color: "#f1f5f9",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Event Planning", "Partner Program", "Analytics", "Event Dashboard", "B2B Events"].map(
                (service) => (
                  <li key={service} style={{ marginBottom: "0.6rem" }}>
                    <span
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.875rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              style={{
                color: "#f1f5f9",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Newsletter
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              Get the latest event insights and platform updates delivered to your inbox.
            </p>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Your email address"
                className="w-full input-glow rounded-xl px-4 py-3 text-sm"
                value={loginedUserEmail}
                disabled
              />
            </div>
            <button
              onClick={sendMail}
              className="btn-gradient w-full text-white font-semibold py-3 rounded-xl mt-3 text-sm tracking-wide"
              style={{ border: "none", cursor: "pointer" }}
            >
              Get Demo
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.2), transparent)",
            marginBottom: "1.5rem",
          }}
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ color: "#64748b", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} MS-EventSphere. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <span
                key={item}
                style={{
                  color: "#64748b",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
