"use client";
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishIcon from "@mui/icons-material/Publish";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import Loader from "./Loader";

const inputSx = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    background: "rgba(15, 23, 42, 0.8)",
    borderRadius: "10px",
    "& fieldset": { borderColor: "rgba(96, 165, 250, 0.2)" },
    "&:hover fieldset": { borderColor: "rgba(96, 165, 250, 0.4)" },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(96, 165, 250, 0.6)",
      boxShadow: "0 0 0 3px rgba(96, 165, 250, 0.1)",
    },
  },
  "& .MuiInputBase-input": { color: "#f1f5f9" },
  "& .MuiInputLabel-root": { color: "#94a3b8" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#60a5fa" },
};

const statusConfig = {
  Published: { color: "#22c55e", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.25)" },
  Pending: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.25)" },
  UnPublished: { color: "#ef4444", bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.25)" },
};

export default function EventCards({ dashboard }) {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // For editing
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [editedEvent, setEditedEvent] = useState({}); // Edited event details

  // Fetch events from the API
  const getEvents = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch("/Api/Events", { method: "GET" });
      const data = await resp.json();
      setEvents(data["data"]);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Open modal for editing
  const handleEdit = (event) => {
    setSelectedEvent(event);
    setEditedEvent(event);
    setIsModalOpen(true);
  };

  // Handle event update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const resp = await fetch(`/Api/Events/?id=${selectedEvent._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedEvent),
    });

    if (resp.ok) {
      setEvents((prev) =>
        prev.map((event) =>
          event._id === selectedEvent._id ? { ...event, ...editedEvent } : event
        )
      );
      setIsModalOpen(false);
    }
    getEvents();
  };

  // Delete event
  const handleDelete = async (id) => {
    const resp = await fetch(`/Api/Events/?id=${id}`, { method: "DELETE" });
    if (resp.ok) {
      setEvents((prev) => prev.filter((event) => event._id !== id));
    }
    getEvents();
  };

  // Publish event
  const handlePublish = async (id) => {
    const resp = await fetch(`/Api/Events?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Published" }),
    });

    if (resp.ok) {
      toast.success("Event published Successfully!");
      setEvents((prev) =>
        prev.map((event) =>
          event._id === id ? { ...event, status: "Published" } : event
        )
      );
    }
    getEvents();
  };

  const handleUnPublish = async (id) => {
    const resp = await fetch(`/Api/Events?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "UnPublished" }),
    });

    if (resp.ok) {
      toast.success("Event UnPublished Successfully!");
      setEvents((prev) =>
        prev.map((event) =>
          event._id === id ? { ...event, status: "UnPublished" } : event
        )
      );
    }
    getEvents();
  };

  const filteredEvents = events.filter((event) =>
    dashboard ? true : event.status === "Published"
  );

  // Show loader while fetching
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Loader key={i} variant="skeleton" size="lg" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {filteredEvents.map((event, index) => {
          const status = event.status || "Pending";
          const statusStyle = statusConfig[status] || statusConfig["Pending"];

          return (
            <div
              key={index}
              className="card-glow"
              style={{
                background: "linear-gradient(145deg, #0f172a, #1e293b)",
                border: "1px solid rgba(96,165,250,0.12)",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Gradient top accent */}
              <div style={{
                height: "2px",
                background: `linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)`,
              }} />

              {/* Event Image */}
              <div style={{ position: "relative", height: "330px", overflow: "hidden" }}>
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.eventTitle}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%",
                    background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>No image</span>
                  </div>
                )}
                {/* Image gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 50%)",
                }} />

                {/* Status badge */}
                {dashboard && (
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: statusStyle.bg,
                    border: `1px solid ${statusStyle.border}`,
                    borderRadius: "100px",
                    padding: "3px 12px",
                    fontSize: "0.72rem", fontWeight: 600,
                    color: statusStyle.color,
                    letterSpacing: "0.05em",
                  }}>
                    {status}
                  </div>
                )}

                {/* Event number */}
                <div style={{
                  position: "absolute", top: "12px", left: "12px",
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.75rem", fontWeight: 700, color: "#fff",
                }}>
                  {index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: "20px 20px 0", flex: 1 }}>
                {/* Title & Date */}
                <h3 style={{
                  color: "#f1f5f9", fontWeight: 700,
                  fontSize: "1rem", lineHeight: 1.3,
                  marginBottom: "6px",
                }}>
                  {event.eventTitle}
                </h3>

                {/* Meta chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    background: "rgba(96,165,250,0.08)",
                    border: "1px solid rgba(96,165,250,0.15)",
                    borderRadius: "100px", padding: "2px 10px",
                  }}>
                    <CalendarTodayIcon sx={{ fontSize: "0.7rem", color: "#60a5fa" }} />
                    <span style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{event.eventDate}</span>
                  </div>
                  {event.eventLocation && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      background: "rgba(6,182,212,0.08)",
                      border: "1px solid rgba(6,182,212,0.15)",
                      borderRadius: "100px", padding: "2px 10px",
                    }}>
                      <LocationOnIcon sx={{ fontSize: "0.7rem", color: "#06b6d4" }} />
                      <span style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{event.eventLocation}</span>
                    </div>
                  )}
                  {event.noOfPerson && (
                    <div style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.15)",
                      borderRadius: "100px", padding: "2px 10px",
                    }}>
                      <PeopleIcon sx={{ fontSize: "0.7rem", color: "#8b5cf6" }} />
                      <span style={{ color: "#94a3b8", fontSize: "0.72rem" }}>{event.noOfPerson}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p style={{
                  color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.6,
                  marginBottom: "12px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {event.eventDescription}
                </p>

                {/* Time row */}
                <div style={{
                  display: "flex", gap: "12px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(96,165,250,0.08)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <AccessTimeIcon sx={{ fontSize: "0.8rem", color: "#60a5fa" }} />
                    <span style={{ color: "#94a3b8", fontSize: "0.78rem" }}>
                      {event.eventStartingTime} – {event.eventEndingTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons (dashboard only) */}
              {dashboard && (
                <div style={{
                  padding: "14px 20px",
                  display: "flex", gap: "8px", flexWrap: "wrap",
                }}>
                  <button
                    onClick={() => handleEdit(event)}
                    style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      background: "rgba(34,197,94,0.12)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      color: "#22c55e",
                      borderRadius: "8px", padding: "6px 14px",
                      fontSize: "0.78rem", fontWeight: 600,
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(34,197,94,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(34,197,94,0.12)")}
                  >
                    <EditIcon sx={{ fontSize: "0.85rem" }} /> Edit
                  </button>

                  <button
                    onClick={() => handleDelete(event._id)}
                    style={{
                      display: "flex", alignItems: "center", gap: "4px",
                      background: "rgba(239,68,68,0.12)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      color: "#ef4444",
                      borderRadius: "8px", padding: "6px 14px",
                      fontSize: "0.78rem", fontWeight: 600,
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.12)")}
                  >
                    <DeleteIcon sx={{ fontSize: "0.85rem" }} /> Delete
                  </button>

                  {event.status === "Pending" && (
                    <button
                      onClick={() => handlePublish(event._id)}
                      disabled={event.status === "Published"}
                      style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))",
                        border: "1px solid rgba(96,165,250,0.3)",
                        color: "#60a5fa",
                        borderRadius: "8px", padding: "6px 14px",
                        fontSize: "0.78rem", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.25))")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))")}
                    >
                      <PublishIcon sx={{ fontSize: "0.85rem" }} /> Publish
                    </button>
                  )}

                  {event.status === "Published" && (
                    <button
                      onClick={() => handleUnPublish(event._id)}
                      style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        background: "rgba(245,158,11,0.12)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        color: "#f59e0b",
                        borderRadius: "8px", padding: "6px 14px",
                        fontSize: "0.78rem", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245,158,11,0.2)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(245,158,11,0.12)")}
                    >
                      <UnpublishedIcon sx={{ fontSize: "0.85rem" }} /> UnPublish
                    </button>
                  )}

                  {event.status === "UnPublished" && (
                    <button
                      onClick={() => handlePublish(event._id)}
                      disabled={event.status === "Published"}
                      style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))",
                        border: "1px solid rgba(96,165,250,0.3)",
                        color: "#60a5fa",
                        borderRadius: "8px", padding: "6px 14px",
                        fontSize: "0.78rem", fontWeight: 600,
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.25))")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15))")}
                    >
                      <PublishIcon sx={{ fontSize: "0.85rem" }} /> Publish
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {filteredEvents.length === 0 && (
          <div
            className="col-span-full"
            style={{
              textAlign: "center", padding: "80px 24px",
              color: "#64748b",
            }}
          >
            <p style={{ fontSize: "3rem", marginBottom: "16px" }}>🎪</p>
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}>
              No events available
            </p>
            <p style={{ fontSize: "0.875rem" }}>Check back soon for upcoming events.</p>
          </div>
        )}
      </div>

      {/* ── EDIT MODAL ── */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(540px, 95vw)",
          background: "linear-gradient(145deg, #0f172a, #1e293b)",
          border: "1px solid rgba(96,165,250,0.2)",
          borderRadius: "20px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
          padding: "36px",
          outline: "none",
          maxHeight: "90vh",
          overflowY: "auto",
        }}>
          {/* Modal header */}
          <div style={{
            height: "2px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
            borderRadius: "1px",
            marginBottom: "24px",
            margin: "-36px -36px 24px",
          }} />

          <h2 style={{
            color: "#f1f5f9", fontWeight: 700, fontSize: "1.3rem",
            marginBottom: "24px",
          }}>
            Edit Event
          </h2>

          <form onSubmit={handleUpdate}>
            <TextField
              label="Event Title"
              fullWidth
              variant="outlined"
              sx={inputSx}
              value={editedEvent.eventTitle || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, eventTitle: e.target.value })}
              required
            />
            <TextField
              label="Event Description"
              fullWidth
              variant="outlined"
              sx={inputSx}
              value={editedEvent.eventDescription || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, eventDescription: e.target.value })}
              required
            />
            <TextField
              label="Starting Time"
              fullWidth
              type="time"
              variant="outlined"
              sx={inputSx}
              value={editedEvent.eventStartingTime || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, eventStartingTime: e.target.value })}
              required
            />
            <TextField
              label="Ending Time"
              type="time"
              fullWidth
              variant="outlined"
              sx={inputSx}
              value={editedEvent.eventEndingTime || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, eventEndingTime: e.target.value })}
              required
            />
            <TextField
              label="Location"
              fullWidth
              variant="outlined"
              sx={inputSx}
              value={editedEvent.eventLocation || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, eventLocation: e.target.value })}
              required
            />
            <TextField
              label="Number of Persons"
              fullWidth
              type="number"
              variant="outlined"
              sx={inputSx}
              value={editedEvent.noOfPerson || ""}
              onChange={(e) => setEditedEvent({ ...editedEvent, noOfPerson: e.target.value })}
              required
            />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "8px" }}>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: "rgba(96,165,250,0.08)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  color: "#94a3b8",
                  borderRadius: "10px", padding: "10px 24px",
                  fontSize: "0.875rem", fontWeight: 600,
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-gradient"
                style={{
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px", padding: "10px 24px",
                  fontSize: "0.875rem", fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
