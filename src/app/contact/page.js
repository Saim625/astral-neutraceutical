"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Error sending email:", error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            Get in Touch
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            We’d love to hear from you. Reach out for inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-green-600 font-semibold">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info Section */}
          <div className="bg-blue-100 rounded-2xl py-12 px-8 md:px-10 shadow-lg relative flex flex-col justify-between min-h-[520px] overflow-hidden">
            {/* Decorative Accent Circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 opacity-30 rounded-full blur-2xl z-0" />

            {/* Content Wrapper */}
            <div className="relative z-10 space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-bold text-blue-800">
                  Contact Information
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  Reach out to our team for inquiries or support.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <FiPhone className="text-xl text-orange-500" />
                  <p className="text-gray-800 text-base">+92 300 1234567</p>
                </div>
                <div className="flex items-center gap-4">
                  <FiMail className="text-xl text-orange-500" />
                  <p className="text-gray-800 text-base">
                    info@astralneutra.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FiMapPin className="text-xl text-orange-500" />
                  <p className="text-gray-800 text-base">Multan, Pakistan</p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-6">
                <a
                  href="https://www.facebook.com/sultan.saleem.7545/?locale=sr_RS&amp;paipv=0&amp;eav=AfaDMo3Jx74AZPylIieC8ZjVKgRTdhHaGBDt6HmfQJJ04NAgw0tEI5eWOk-_dVQ2RBs&amp;_rdr"
                  className="bg-white text-blue-800 p-2 rounded-full shadow hover:bg-orange-100 transition"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://wa.me/923067311786"
                  className="bg-white text-blue-800 p-2 rounded-full shadow hover:bg-orange-100 transition"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
