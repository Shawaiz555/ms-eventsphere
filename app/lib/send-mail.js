"use server";
import nodemailer from "nodemailer";
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
console.log(SMTP_SERVER_PASSWORD,SMTP_SERVER_USERNAME)

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});
export async function Mail({ to, subject, message }) {
  try {
    const isVerified = await transporter.verify();
    console.log("SMTP server verified:", isVerified);
  } catch (error) {
    console.error(
      "Something went wrong during SMTP verification:",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: to,
      subject: subject,
      html: message,
    });

    console.log("Message Sent:", info.messageId);
    console.log("Mail sent to:", to);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
