"use client";

import Navbar from "@/app/Reuseable Components/Navbar";
import Footer from "@/app/Reuseable Components/Footer";

export default function HomeLayout({ children }) {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
