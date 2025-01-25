"use client";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Mail } from "../lib/send-mail";
export default function Page() {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessege] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const emailValidation = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(email); // Update email state
    if (emailPattern.test(email)) {
      setEmailError("Email is valid");
      setIsEmailValid(true);
    } else {
      setEmailError("Email is Invalid");
      setIsEmailValid(false);
    }
  };
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
      email,
      message,
    };
    if (emailError === "Email is valid") {
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
        setEmailError("");
        setMessege("");
        setOpen(true);
        const resp = await Mail({
          to: email,
          subject: ` Thank You for Reaching Out, ${fullName}!`,
          message: `<h1>Hello ${fullName},</h1>
          <p>Thank you for getting in touch with us. We have received your message and our team will review it shortly. We’ll get back to you as soon as possible with a response.</p>
          <p>If you have any additional details to share or urgent concerns, feel free to reply to this email. We're here to assist you!</p>
          <p>Best regards,</p>
          <p><strong>The EventSpher Team</strong></p>`,
        });
      } else {
        setAlertMessage("Submission failed. Please try again.");
        setAlertSeverity("warning");
        setOpen(true);
      }
      console.log(resp);
    }
    else{
      alert("First enter a valid email")
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
          <div className="w-full lg:w-[45%] mx-auto bg-white rounded-2xl shadow-lg py-16 px-10">
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
                    value={email}
                    onChange={(e) => emailValidation(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter your email address"
                  />
                  <p
                  className={`text-md tracking-wider font-serif ${isEmailValid === true ? "text-green-500" : isEmailValid === false ? "text-red-500" : ""}`}
                >
                  {emailError}
                </p>
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
