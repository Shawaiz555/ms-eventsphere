"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";
const benefits = [
  {
    id: 1,
    title: "Business growth",
    description:
      "Scale your services and land more business with our flexible partnership options. This is your new platform for differentiation.",
    icon: "🌱💰",
  },
  {
    id: 2,
    title: "Going the extra mile",
    description:
      "When you’re a Bizzabo partner, you’re an extension of our team so take advantage of exclusive marketing, business development.",
    icon: "📊❤️",
  },
  {
    id: 3,
    title: "Lasting relationships",
    description:
      "With top NPS and CSAT scores, you can count on Bizzabo for seamless integrations, plus enterprise-grade security and support.",
    icon: "🤝💬",
  },
];

export default function Page() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div>
        <Navbar />
      </div>
      {/* <div className=" px-6 py-16 bg-white">
        <h6 className="text-sm text-gray-500 mb-2">Partner program</h6>
        <h1 className="text-5xl font-bold leading-tight">Become a</h1>
        <h1 className="text-5xl font-bold leading-tight">partner</h1>
        <p className="mt-6 text-lg">
          At Bizzabo, we believe {"we’re"} better together. That’s why we’re
          committed to building and enabling a partner program that helps
          clients create impactful and rewarding experiences, while transforming
          events into their business growth engine.
        </p>
        <button
          className="mt-6 px-6 py-3 text-lg  bg-yellow-500 rounded-lg hover:bg-black hover:text-yellow-500"
          onClick={scrollToForm}
        >
          Become a Partner
        </button>
      </div> */}
      {/* why join */}
      <div className=" bg-[#fff000] px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why join the Bizzabo partner program?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-lg shadow-xl p-8 py-16 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ecosystem */}
      <div className="py-10 px-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Our partner program ecosystem
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg shadow-2xl p-6">
            <div className="flex items-center mb-4">
              <Image
                width={"29"}
                height={"20"}
                src="/Images/App market partners.png"
                alt="App Market"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-xl font-semibold">App market partners</h2>
            </div>
            <p className="text-gray-600">
              Grow your business by building apps that help Event Experience
              Leaders deliver personalized and immersive experiences for
              participants.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg shadow-2xl p-6">
            <div className="flex items-center mb-4">
              <Image
                width={"29"}
                height={"20"}
                src="/Images/Agency partners.png"
                alt="Agency Partners"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-xl font-semibold">Agency partners</h2>
            </div>
            <p className="text-gray-600">
              Our frictionless agency user experience platform provides
              dedicated business development and support resources, so you can
              create engagement strategies and unforgettable customer
              experiences.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-2xl p-6">
            <div className="flex items-center mb-4">
              <Image
                width={"29"}
                height={"20"}
                src="/Images/Go to market partners.png"
                alt="App Market"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-xl font-semibold">Go-to-market partners</h2>
            </div>
            <p className="text-gray-600">
              Why go it alone? Expand your portfolio of product offerings to
              include our end-to-end solution for all kinds of events – while
              strengthening your relationships and credibility
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-2xl p-6">
            <div className="flex items-center mb-4">
              <Image
                width={"29"}
                height={"20"}
                src="/Images/Solutions & integrations partners.png"
                alt="App Market"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-xl font-semibold">
                Solutions & integrations partners
              </h2>
            </div>
            <p className="text-gray-600">
              Our frictionless agency user experience platform provides
              dedicated business development and support resources, so you can
              create engagement strategies and unforgettable customer
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <div
        ref={formRef}
        className="min-h-screen flex items-center justify-center bg-[#fff000] p-6"
      >
        <div className="w-full max-w-3xl bg-transparent">
          <h1 className="text-center text-3xl font-bold text-black mb-8">
            Join Our Growing Partner Community
          </h1>
          <form className="space-y-6 bg-white rounded-xl px-10 py-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-black font-medium mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="First name..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="Last Name..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              {/* Work Email */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Work Email*
                </label>
                <input
                  type="email"
                  placeholder="Work email..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="Phone..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              {/* Job Title */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Job Title*
                </label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              {/* Type of Partnership */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Type of Partnership*
                </label>
                <select
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                >
                  <option>Type of Partnership</option>
                  <option>App Market Partners</option>
                  <option>Agency Partners</option>
                </select>
              </div>
            </div>
            {/* Desired Partnership Details */}
            <div>
              <label className="block text-black font-medium mb-2">
                Desired partnership details*
              </label>
              <textarea
                rows="3"
                placeholder="Please share details on your desired partnership"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                required
              />
              <label className="ml-2 text-black text-sm">
                I consent to receive emails from Bizzabo about upcoming events
                and more. I reviewed and agree to mz_eventsphere
                <Link href={"/"} className="text-blue-500 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white font-medium py-3 px-7 rounded-xl hover:scale-95"
              >
                Become a Partner
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
