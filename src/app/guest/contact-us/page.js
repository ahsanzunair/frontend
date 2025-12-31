'use client'
import { useState } from "react";
import { FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contactus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent successfully!`);
    setFormData({ name: "", email: "", course: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen pb-10 pt-32 px-4 md:px-10 flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">
            Contact <span className="text-blue-700">Us</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Get in touch with us! Fill the form or reach us directly via WhatsApp, phone, or social media.
          </p>
        </section>

        {/* Form + Contact + Map */}
        <section className="flex flex-col lg:flex-row gap-10">

          {/* Contact Form */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#1A4767] hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="flex-1 bg-white p-6 rounded-lg mb-10 shadow-lg flex flex-col">
            <h2 className="font-semibold text-black text-3xl mb-4 sm:mb-5">Get In Touch</h2>

            <div className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-center gap-4 text-lg">
                <IoMdMail className="text-blue-600 text-2xl" />
                <div className="flex flex-col">
                  <p>Email:</p>
                  <p className="text-gray-600">info@craftdigitalhub.com</p>
                </div>
              </div>

              {/* Whatsapp */}
              <div className="flex items-center gap-4 text-lg">
                <IoLogoWhatsapp className="text-green-400 text-2xl" />
                <div className="flex flex-col">
                  <p>Whatsapp:</p>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 text-lg mb-10">
                <FaClock className="text-yellow-400 text-2xl" />
                <div className="flex flex-col">
                  <p>Working Hours:</p>
                  <p className="text-gray-600">Mon–Fri: 9:00am to 6:00pm</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.505179071937!2d74.32392324999999!3d31.48463845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904106691c4c7%3A0xfb24ddaf1e7bc6c2!2sModel%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1764402238185!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="rounded-lg border-0 min-h-[300px] md:min-h-[400px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>

        </section>
      </main>
    </div>
  );
};

export default Contactus;
