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
