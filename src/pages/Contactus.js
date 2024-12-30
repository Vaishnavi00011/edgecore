import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />

      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-center text-gray-800">Get In Touch</h1>
          <p className="text-lg text-center text-gray-600 mt-3 mb-8">
            We would love to hear from you! Please drop us a message, and we’ll get back to you soon.
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Contact Form */}
            <div>
              <form
                action="https://formspree.io/f/mgvvenop"                  method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-6 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="6"
                    required
                  />
                </div>

                {/* Hidden Input for Formspree */}
                <input type="hidden" name="_next" value="http://yourwebsite.com/thank-you" /> {/* Redirect after submission */}
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div className="mt-8 lg:mt-0">
              <div className="relative h-[400px] w-full rounded-lg shadow-lg">
                <iframe
                  title="Location Map"
                  className="rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.1453350548037!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168be149bb97%3A0x4c825b23b1b38b1d!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1634746347898!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
