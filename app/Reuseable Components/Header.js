"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { toast } from "react-toastify";

export default function Header({ toggleSidebar }) {
  const [signedInUser, setSignedInUser] = useState(null);
  const route = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("signedInUser");
    setSignedInUser(null);
    toast.success("Admin logged out successfully!");
    route.push("/");
  };

  useEffect(() => {
    // Access localStorage inside useEffect
    const user = JSON.parse(localStorage.getItem("signedInUser"));
    if (user) {
      setSignedInUser(user);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(96, 165, 250, 0.1)",
        gap: "16px",
      }}
    >
      {/* Left: Toggle + Search */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1 }}>
        {/* Sidebar toggle (mobile) */}
        <button
          onClick={toggleSidebar}
          style={{
            padding: "9px",
            background: "rgba(96,165,250,0.08)",
            border: "1px solid rgba(96,165,250,0.15)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#60a5fa",
            alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
          className="flex lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="3" width="16" height="2" rx="1" fill="currentColor"/>
            <rect x="1" y="8" width="16" height="2" rx="1" fill="currentColor"/>
            <rect x="1" y="13" width="16" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>

        {/* Search */}
        <div style={{ position: "relative", maxWidth: "360px", flex: 1 }}>
          <SearchIcon
            sx={{
              position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
              color: "#64748b", fontSize: "1.1rem",
            }}
          />
          <input
            type="text"
            placeholder="Search..."
            name="search"
            style={{
              width: "100%",
              background: "rgba(3, 7, 18, 0.6)",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: "10px",
              padding: "9px 16px 9px 38px",
              color: "#f1f5f9",
              fontSize: "0.875rem",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(96,165,250,0.15)")}
          />
        </div>
      </div>

      {/* Right: User info — hidden on mobile (shown in sidebar instead) */}
      <div className="hidden lg:flex" style={{ alignItems: "center" }}>
        {signedInUser ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "rgba(96,165,250,0.06)",
              border: "1px solid rgba(96,165,250,0.12)",
              borderRadius: "8px", padding: "7px 14px",
            }}>
              <PersonOutlineIcon sx={{ color: "#60a5fa", fontSize: "1rem" }} />
              <span style={{ color: "#94a3b8", fontSize: "0.8rem", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {signedInUser.email || "Admin"}
              </span>
            </div>
            <button
              onClick={handleLogout}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                border: "none",
                borderRadius: "8px", padding: "8px 16px",
                color: "#fff", fontSize: "0.8rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #2563eb, #0891b2)";
                e.currentTarget.style.boxShadow = "0 0 12px rgba(96,165,250,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6, #06b6d4)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <LogoutIcon sx={{ fontSize: "0.9rem" }} />
              Logout
            </button>
          </div>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "rgba(96,165,250,0.04)",
            border: "1px solid rgba(96,165,250,0.1)",
            borderRadius: "8px", padding: "7px 14px",
          }}>
            <PersonOutlineIcon sx={{ color: "#64748b", fontSize: "1rem" }} />
            <span style={{ color: "#64748b", fontSize: "0.8rem" }}>No Admin Signed In</span>
          </div>
        )}
      </div>
    </div>
  );
}
