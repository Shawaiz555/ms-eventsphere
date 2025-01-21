<<<<<<< HEAD
"use client";

export default function page() {
  return (
    <div >
      <div className="min-h-screen bg-[#fff000] mt-16 px-6 py-7">
        {/* Header Section */}
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
          <p className="text-lg text-black mt-2">
            We’d love to hear from you! Reach out to us for any inquiries or
            collaborations.
          </p>
        </div>

        <div className="w-full flex gap-5 flex-col lg:flex-row justify-around px-5">
          {/* Contact Info */}
          <section className="w-full lg:w-[55%] mt-16 lg:mt-32 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Contact Information
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="text-lg">
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
              <div className="text-lg">
                <p>
                  <strong>Address:</strong>
                </p>
                <p>123 EventPro Street, Cityville, USA</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <div className="w-full lg:w-[45%] mx-auto bg-white rounded-2xl shadow-lg py-20 px-10">
            <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block  font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block  font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block  font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-black text-white font-medium py-3 px-10 rounded-xl hover:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
"use client";

import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export default function Page() {
  const [fullName, setFullName] = useState("");

  const [Email, setEmail] = useState("");

  const [message, setMessege] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ContactData = {
      fullName,
      email: Email,
      message,
    };

    const response = await fetch("/API/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ContactData),
    });

    const result = await response.json();

    if (result.success) {
      setAlertMessage("Form submitted successfully!");
      setAlertSeverity("success");
      setFullName("");
      setEmail("");

      setMessege("");
      setOpen(true);
    } else {
      setAlertMessage("Submission failed. Please try again.");
      setAlertSeverity("warning");
      setOpen(true);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-[#fff000] mt-16 px-6 py-7">
        {/* Header Section */}
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
          <p className="text-lg text-black mt-2">
            We’d love to hear from you! Reach out to us for any inquiries or
            collaborations.
          </p>
        </div>

        <div className="w-full flex gap-5 flex-col lg:flex-row justify-around px-5">
          {/* Contact Info */}
          <section className="w-full lg:w-[55%] mt-16 lg:mt-28 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Contact Information
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="text-lg">
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
                <p>
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
              <div className="text-lg">
                <p>
                  <strong>Address:</strong>
                </p>
                <p>123 EventPro Street, Cityville, USA</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <div className="w-full lg:w-[45%] mx-auto bg-white rounded-2xl shadow-lg py-12 px-10">
            <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block  font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block  font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block  font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  value={message}
                  onChange={(e) => {
                    setMessege(e.target.value);
                  }}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-black text-white font-medium py-3 px-10 rounded-xl hover:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={alertSeverity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {alertMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 8acb7ab6efaeec0bd2c1772e61b544c5dde57c23
