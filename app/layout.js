"use client";
import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Reuseable Components/Header";
import SideBar from "./Reuseable Components/SideBar";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <div>
          <Navbar />
        </div> */}
        <div className="w-full h-full flex overflow-hidden">
        {/* Sidebar */}
        <div
            className={`fixed w-[70%] sm:w-[50%] h-full bg-white z-20 transform ${isSidebarVisible ? "translate-x-0" : "-translate-x-full" }
              } transition-transform lg:static lg:translate-x-0 lg:w-[16%]`}
          >
            <SideBar closeSidebar={closeSidebar} />
          </div>

        {/* Main Content */}
        <div
            className={`flex-1 w-full bg-gray-100 ${isSidebarVisible ? "overflow-hidden" : ""
              } lg:w-[84%]`}
          >
            <Header toggleSidebar={toggleSidebar} />
            <main className="h-full bg-gray-100 rounded-tl-xl">{children}</main>
          </div>

        {/* Overlay for small devices when sidebar is open */}
        {isSidebarVisible && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
              onClick={closeSidebar}
            ></div>
          )}
        </div>
        {/* <div>
          {children}
        </div> */}
        {/* <div className="w-full flex justify-center py-10 px-1 md:py-12 md:px-10">
            <Footer />
        </div> */}
      </body>
    </html>
  );
}
