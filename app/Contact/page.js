import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";

export default function page() {
  return (
    <div className="min-h-screen bg-yellow-400 mt-14 p-6">
      <div>
        <Navbar />
      </div>
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">Contact Us</h1>
        <p className="text-lg text-black mt-2">
          We’d love to hear from you! Reach out to us for any inquiries or
          collaborations.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-black mb-6">Get In Touch</h2>
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
              className="bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-black mb-6">
          Contact Information
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className=" text-lg">
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
          </div>
          <div className=" text-lg">
            <p>
              <strong>Address:</strong>
            </p>
            <p>123 EventPro Street, Cityville, USA</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Find Us on the Map
        </h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            className="w-full rounded-lg"
            height="300"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509457!2d144.95592831531694!3d-37.817209979751704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43a1a0b3af%3A0x1b2a9ad4d998c6a!2sEventPro!5e0!3m2!1sen!2sus!4v1640741512345!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-10">
        <Link href="/">
          <button className="bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-yellow-600 transition">
            <Link href={"./Home"}>Back to Home</Link>
          </button>
        </Link>
      </div>
      <div>
         <Footer/>
      </div>
    </div>
  );
}
