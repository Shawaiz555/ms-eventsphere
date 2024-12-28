"use client";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";

export default function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-10">
        <h1>About Page</h1>
      </div>
      <div className="w-full flex justify-center py-10 px-1 md:py-12 md:px-10">
        <Footer />
      </div>

    </div>
  )
}
