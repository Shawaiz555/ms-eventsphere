"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import HomeIcon from "@mui/icons-material/Home";

const navItems = [
  { href: "/Dashboard", label: "Dashboard", Icon: DashboardIcon },
  { href: "/Analytics", label: "Analytics", Icon: BarChartIcon },
];

export default function SideBar({ closeSidebar }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #030712 0%, #0a0f1e 100%)",
      }}
    >
      {/* ── Brand area ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 16px 16px",
          borderBottom: "1px solid rgba(96,165,250,0.1)",
          gap: "8px",
        }}
      >
        <Image
          src="/Icons/ProjectLogo.png"
          width={160}
          height={64}
          alt="MS-EventSphere Logo"
          className="w-24 h-24"
        />
        <p
          style={{
            fontSize: "0.65rem",
            color: "#64748b",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Admin Panel
        </p>
      </div>

      {/* ── Section label ── */}
      <div style={{ padding: "20px 20px 8px" }}>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.67rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Main Menu
        </p>
      </div>

      {/* ── Nav Links ── */}
      <nav style={{ flex: 1, padding: "4px 12px" }}>
        {navItems.map(({ href, label, Icon }) => {
          const isActive = pathname === href || pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={closeSidebar}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "11px 14px",
                borderRadius: "10px",
                marginBottom: "4px",
                color: isActive ? "#60a5fa" : "#94a3b8",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: isActive ? 600 : 500,
                background: isActive
                  ? "rgba(96,165,250,0.1)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(96,165,250,0.2)"
                  : "1px solid transparent",
                transition: "all 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#60a5fa";
                  e.currentTarget.style.background = "rgba(96,165,250,0.07)";
                  e.currentTarget.style.borderColor = "rgba(96,165,250,0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              {/* Active left bar indicator */}
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "20%",
                    height: "60%",
                    width: "3px",
                    borderRadius: "0 3px 3px 0",
                    background: "linear-gradient(180deg, #3b82f6, #06b6d4)",
                  }}
                />
              )}
              <Icon
                sx={{
                  fontSize: "1.1rem",
                  color: isActive ? "#60a5fa" : "#64748b",
                  flexShrink: 0,
                }}
              />
              <span>{label}</span>
              {isActive && (
                <span
                  style={{
                    marginLeft: "auto",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#60a5fa",
                    boxShadow: "0 0 8px rgba(96,165,250,0.7)",
                    flexShrink: 0,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background: "rgba(96,165,250,0.08)",
          margin: "0 12px",
        }}
      />

      {/* ── Bottom: Back to site ── */}
      <div style={{ padding: "12px 12px 20px" }}>
        <Link
          href="/Home"
          onClick={closeSidebar}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "11px 14px",
            borderRadius: "10px",
            color: "#64748b",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 500,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#64748b";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <HomeIcon sx={{ fontSize: "1.1rem", color: "inherit", flexShrink: 0 }} />
          <span>Back to Site</span>
        </Link>
      </div>
    </div>
  );
}
