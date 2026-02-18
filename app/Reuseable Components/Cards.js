"use client";
import { useEffect, useState } from "react";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const statCards = [
  {
    key: "pending",
    label: "Events Pending",
    Icon: PendingActionsIcon,
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.2)",
    iconColor: "#f59e0b",
    trend: "Awaiting review",
  },
  {
    key: "users",
    label: "Total Users",
    Icon: PersonIcon,
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    glow: "rgba(96,165,250,0.15)",
    border: "rgba(96,165,250,0.2)",
    iconColor: "#60a5fa",
    trend: "Registered accounts",
  },
  {
    key: "published",
    label: "Events Published",
    Icon: CheckCircleIcon,
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    glow: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.2)",
    iconColor: "#22c55e",
    trend: "Live on platform",
  },
];

export default function Cards() {
  const [pendingEvents, setPendingEvents] = useState("");
  const [publishedEvents, setPublishedEvents] = useState("");
  const [users, setUsers] = useState("");

  // Fetch events from the API
  const getEvents = async () => {
    const resp = await fetch("/Api/Events", { method: "GET" });
    const data = await resp.json();
    const pending = data["data"].filter((event) => event.status === "Pending");
    setPendingEvents(pending.length);
    const published = data["data"].filter((event) => event.status === "Published");
    setPublishedEvents(published.length);
  };

  // Fetch all users from API
  const getAllUsers = async () => {
    const resp = await fetch("/Api/UserLogin", { method: "GET" });
    const userData = await resp.json();
    const totalUsers = userData["data"];
    setUsers(totalUsers.length);
  };

  useEffect(() => {
    getEvents();
    getAllUsers();
  }, []);

  const values = { pending: pendingEvents, users, published: publishedEvents };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-6 pt-8">
      {statCards.map((card) => {
        const { Icon } = card;
        return (
          <div
            key={card.key}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              background: "linear-gradient(145deg, #0f172a, #1e293b)",
              border: `1px solid ${card.border}`,
              borderRadius: "16px",
              padding: "24px",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 32px ${card.glow}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "2px", background: card.gradient,
            }} />

            {/* Background glow blob */}
            <div style={{
              position: "absolute", top: "-10px", right: "-10px",
              width: "100px", height: "100px", borderRadius: "50%",
              background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Icon box */}
            <div style={{
              width: "56px", height: "56px", borderRadius: "14px", flexShrink: 0,
              background: card.glow,
              border: `1px solid ${card.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon sx={{ fontSize: "1.6rem", color: card.iconColor }} />
            </div>

            {/* Text */}
            <div style={{ minWidth: 0 }}>
              <p style={{
                color: "#94a3b8", fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "4px",
              }}>
                {card.label}
              </p>
              <p style={{
                fontSize: "2.2rem", fontWeight: 800, lineHeight: 1,
                background: card.gradient,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text", marginBottom: "4px",
              }}>
                {values[card.key] !== "" ? values[card.key] : "—"}
              </p>
              <p style={{ color: "#475569", fontSize: "0.72rem" }}>{card.trend}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
