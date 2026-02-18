"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const statCards = [
  {
    key: "pending",
    label: "Events Pending",
    icon: "/Icons/TicketsIcon.png",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    glow: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    key: "users",
    label: "Total Users",
    icon: "/Icons/UserIcon.png",
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    glow: "rgba(96,165,250,0.15)",
    border: "rgba(96,165,250,0.2)",
  },
  {
    key: "published",
    label: "Events Published",
    icon: "/Icons/BalanceIcon.png",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    glow: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.2)",
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
    <div className="w-full flex flex-col lg:flex-row gap-5 px-6 pt-8">
      {statCards.map((card) => (
        <div
          key={card.key}
          className="card-glow"
          style={{
            flex: "1 1 0",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            border: `1px solid ${card.border}`,
            borderRadius: "16px",
            padding: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "120px", height: "120px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* Icon */}
          <div style={{
            width: "60px", height: "60px", borderRadius: "14px", flexShrink: 0,
            background: card.glow,
            border: `1px solid ${card.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Image
              src={card.icon}
              width={36}
              height={36}
              alt={card.label}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Text */}
          <div>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
              {card.label}
            </p>
            <p style={{
              fontSize: "2rem", fontWeight: 800, lineHeight: 1,
              background: card.gradient,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              {values[card.key] !== "" ? values[card.key] : "—"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
