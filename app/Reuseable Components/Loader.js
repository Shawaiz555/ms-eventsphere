"use client";
import React from "react";

/**
 * Professional themed loader component matching Deep Space Dark theme
 *
 * Variants:
 * - "page" (default): Full-page overlay loader for route transitions
 * - "spinner": Inline spinning loader for local loading states
 * - "dots": Pulsing dots loader for subtle loading indication
 * - "skeleton": Shimmer skeleton for content placeholders
 */
export default function Loader({
  variant = "page",
  size = "md",
  message = "Loading...",
  fullscreen = true
}) {

  // ── PAGE LOADER (Full overlay with logo animation) ──
  if (variant === "page") {
    return (
      <div style={{
        position: fullscreen ? "fixed" : "absolute",
        inset: 0,
        background: "rgba(3, 7, 18, 0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
      }}>
        {/* Animated rings */}
        <div style={{ position: "relative", width: "120px", height: "120px" }}>
          {/* Outer ring */}
          <div className="loader-ring-outer" style={{
            position: "absolute",
            inset: 0,
            border: "3px solid transparent",
            borderTopColor: "#60a5fa",
            borderRightColor: "#06b6d4",
            borderRadius: "50%",
            animation: "spin 1.5s linear infinite",
          }} />

          {/* Middle ring */}
          <div className="loader-ring-middle" style={{
            position: "absolute",
            inset: "12px",
            border: "3px solid transparent",
            borderTopColor: "#8b5cf6",
            borderBottomColor: "#06b6d4",
            borderRadius: "50%",
            animation: "spin 2s linear infinite reverse",
          }} />

          {/* Inner glow */}
          <div style={{
            position: "absolute",
            inset: "24px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.3), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }} />

          {/* Center logo or icon */}
          <div style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#fff",
          }}>
            🎪
          </div>
        </div>

        {/* Loading text */}
        <div style={{ textAlign: "center" }}>
          <p style={{
            color: "#f1f5f9",
            fontSize: "1.1rem",
            fontWeight: 600,
            marginBottom: "8px",
          }}>
            {message}
          </p>

          {/* Animated dots */}
          <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#60a5fa",
                  animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── SPINNER LOADER (Inline circular spinner) ──
  if (variant === "spinner") {
    const sizes = {
      sm: { ring: 24, border: 2, fontSize: "0.75rem" },
      md: { ring: 40, border: 3, fontSize: "0.875rem" },
      lg: { ring: 60, border: 4, fontSize: "1rem" },
    };
    const s = sizes[size] || sizes.md;

    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        padding: "20px",
      }}>
        <div style={{
          width: `${s.ring}px`,
          height: `${s.ring}px`,
          border: `${s.border}px solid rgba(96,165,250,0.15)`,
          borderTopColor: "#60a5fa",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }} />
        {message && (
          <p style={{
            color: "#94a3b8",
            fontSize: s.fontSize,
            fontWeight: 500,
          }}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // ── DOTS LOADER (Pulsing dots) ──
  if (variant === "dots") {
    const sizes = {
      sm: { dot: 7, gap: 5 },
      md: { dot: 9, gap: 6 },
      lg: { dot: 11, gap: 8 },
    };
    const s = sizes[size] || sizes.md;

    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: `${s.gap}px`,
        padding: "4px 0",
      }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: `${s.dot}px`,
              height: `${s.dot}px`,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 0 8px rgba(255,255,255,0.5)",
              animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    );
  }

  // ── SKELETON LOADER (Shimmer effect) ──
  if (variant === "skeleton") {
    return (
      <div style={{
        width: "100%",
        height: size === "sm" ? "40px" : size === "lg" ? "120px" : "80px",
        background: "linear-gradient(90deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.8) 50%, rgba(15,23,42,0.8) 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 2s ease-in-out infinite",
        borderRadius: "12px",
        border: "1px solid rgba(96,165,250,0.1)",
      }} />
    );
  }

  return null;
}

// ── CSS ANIMATIONS (Add to globals.css or use inline style tag) ──
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    @keyframes bounce {
      0%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  if (!document.querySelector('#loader-animations')) {
    styleSheet.id = 'loader-animations';
    document.head.appendChild(styleSheet);
  }
}
