"use client";

import Header from "@/app/Reuseable Components/Header";
import SideBar from "@/app/Reuseable Components/SideBar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => setIsSidebarVisible((prev) => !prev);
  const closeSidebar = () => setIsSidebarVisible(false);

  return (
    <div className="w-full flex overflow-hidden" style={{ background: "var(--color-bg)" }}>
      <div className="w-full flex overflow-hidden min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed w-[78%] sm:w-[60%] md:w-[40%] z-20 transform ${
            isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:static lg:translate-x-0 lg:w-[220px] lg:flex-shrink-0 h-full`}
          style={{ background: "#030712", borderRight: "1px solid rgba(96,165,250,0.1)" }}
        >
          <SideBar closeSidebar={closeSidebar} />
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 w-full ${
            isSidebarVisible ? "overflow-hidden" : ""
          } h-full min-w-0`}
        >
          <Header toggleSidebar={toggleSidebar} />
          <main className="h-full" style={{ background: "var(--color-bg)" }}>{children}</main>
        </div>
      </div>

      {/* Overlay for small devices */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
}
