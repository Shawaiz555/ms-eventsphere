// page.js
"use client";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import ImageUpload from "../Reuseable Components/ImageUpload";
import { Mail } from "../lib/send-mail";
import { toast } from "react-toastify";

const inputSx = {
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
  "& .MuiInputBase-input.Mui-disabled": { color: "#475569", WebkitTextFillColor: "#475569" },
};

export default function Page() {
  const [event, setEvent] = useState({
    Name: "",
    EventTitle: "",
    Date: "",
    StartingTime: "",
    EndingTime: "",
    NumOfPerson: "",
    Location: "",
    Description: "",
    Status: "Pending",
  });
  const [imageFile, setImageFile] = useState([]);
  const [loginedUserEmail, setLoginedUserEmail] = useState("");

  const handleImageUpload = (file) => {
    setImageFile(file);
  };

  useEffect(() => {
    const signedInUser = JSON.parse(localStorage.getItem("signedInUser"));
    setLoginedUserEmail(signedInUser?.email || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      event.Name &&
      event.EventTitle &&
      event.StartingTime &&
      event.Date &&
      event.EndingTime &&
      event.NumOfPerson &&
      event.Location &&
      event.Description
    ) {
      try {
        const formData = new FormData();
        formData.append("name", event.Name);
        formData.append("email", loginedUserEmail);
        formData.append("eventTitle", event.EventTitle);
        formData.append("eventDate", event.Date);
        formData.append("eventStartingTime", event.StartingTime);
        formData.append("eventEndingTime", event.EndingTime);
        formData.append("noOfPerson", event.NumOfPerson);
        formData.append("eventLocation", event.Location);
        formData.append("eventDescription", event.Description);
        formData.append("status", event.Status); // Append status here

        if (imageFile) {
          formData.append("image", imageFile);
        }

        console.log(formData);

        const response = await fetch("/Api/Events", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (response.ok) {
          toast.success("Event Submitted successfully!");
          setEvent({
            Name: "",
            EventTitle: "",
            Date: "",
            StartingTime: "",
            EndingTime: "",
            NumOfPerson: "",
            Location: "",
            Description: "",
            Status: "Pending",
          });
          setImageFile(null);
          document.querySelector('input[type="file"]').value = null;

          try {
            await Mail({
              to: loginedUserEmail,
              subject: `Thank You for Submitting Your Event, ${event.Name}! 🎉`,
              message: `<p>Dear ${event.Name},</p>
                <p>We appreciate you taking the time to share your event, "<strong>${event.EventTitle}</strong>", with us on EventSpher.</p>
                <p>Our team has received the details and will review them shortly. Once approved, your event will be published on our platform, making it accessible to our community of event enthusiasts.</p>
                <p>Thank you for choosing EventSpher to showcase your event. We're excited to help you reach a wider audience and make your event a success!</p>
                <p>Best regards,</p>
                <p><strong>The EventSpher Team</strong></p>`,
            });
          } catch (mailError) {
            console.error("Error sending mail:", mailError);
            toast.error("Event submitted but email notification failed.");
          }
        } else {
          console.error(result);
          toast.error("Failed to create event");
        }
      } catch (error) {
        console.error("Error submitting event:", error);
        toast.error("An error occurred while creating the event");
      }
    }
  };

  return (
    <div style={{ background: "var(--color-bg)" }}>

      {/* ── HEADER SECTION ── */}
      <section style={{
        position: "relative",
        minHeight: "42vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        paddingTop: "90px",
      }}>
        <Image
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80"
          fill
          alt="Event planning"
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(180deg, rgba(3,7,18,0.92) 0%, rgba(3,7,18,0.78) 60%, rgba(3,7,18,0.92) 100%)",
        }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 24px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(59,130,246,0.12)",
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
              CREATE EVENT
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800,
            marginBottom: "16px", textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}>
            <span style={{ color: "#f8fafc" }}>Create an Event</span>{" "}
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #06b6d4)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              of Your Choice
            </span>
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "1.05rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Fill in the details below and submit your event for review. Once approved, it will be published on our platform.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section style={{
        padding: "60px 24px 100px",
        background: "rgba(15,23,42,0.4)",
      }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            border: "1px solid rgba(96,165,250,0.15)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
          }}>
            {/* Gradient top accent */}
            <div style={{ height: "2px", background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }} />

            <form onSubmit={handleSubmit} style={{ padding: "48px 40px" }}>
              <h2 style={{
                color: "#f1f5f9", fontWeight: 700, fontSize: "1.4rem",
                marginBottom: "36px", textAlign: "center",
              }}>
                Event Form
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: "24px" }}>
                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Name
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    value={event.Name}
                    placeholder="Enter your name"
                    onChange={(e) => setEvent({ ...event, Name: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Email
                  </label>
                  <TextField
                    id="outlined-basic"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={loginedUserEmail}
                    placeholder="Enter your email"
                    disabled
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Event Title
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    value={event.EventTitle}
                    placeholder="Enter your event title"
                    onChange={(e) => setEvent({ ...event, EventTitle: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Date
                  </label>
                  <TextField
                    id="outlined-basic"
                    type="date"
                    fullWidth
                    variant="outlined"
                    value={event.Date}
                    onChange={(e) => setEvent({ ...event, Date: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Starting Time
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    type="time"
                    value={event.StartingTime}
                    onChange={(e) => setEvent({ ...event, StartingTime: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Ending Time
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    type="time"
                    value={event.EndingTime}
                    onChange={(e) => setEvent({ ...event, EndingTime: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Number of Persons
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    type="number"
                    value={event.NumOfPerson}
                    placeholder="Enter number of persons"
                    onChange={(e) => setEvent({ ...event, NumOfPerson: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Location
                  </label>
                  <TextField
                    id="outlined-basic"
                    fullWidth
                    variant="outlined"
                    value={event.Location}
                    placeholder="Enter event location"
                    onChange={(e) => setEvent({ ...event, Location: e.target.value })}
                    required
                    sx={inputSx}
                  />
                </div>

                <div>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Event Image
                  </label>
                  <div style={{
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(96,165,250,0.2)",
                    borderRadius: "10px",
                    padding: "16px",
                  }}>
                    <ImageUpload onUpload={handleImageUpload} />
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <label style={{ display: "block", color: "#94a3b8", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Event Description
                </label>
                <textarea
                  rows="5"
                  placeholder="Describe your event..."
                  value={event.Description}
                  style={{
                    width: "100%",
                    background: "rgba(15,23,42,0.8)",
                    border: "1px solid rgba(96,165,250,0.2)",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    color: "#f1f5f9",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onChange={(e) => setEvent({ ...event, Description: e.target.value })}
                  required
                  onFocus={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.6)"; e.target.style.boxShadow = "0 0 0 3px rgba(96,165,250,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(96,165,250,0.2)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="submit"
                  className="btn-gradient text-white font-semibold px-10 py-3 rounded-xl tracking-wide"
                  style={{ border: "none", cursor: "pointer", fontSize: "0.95rem" }}
                >
                  Submit Event
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
