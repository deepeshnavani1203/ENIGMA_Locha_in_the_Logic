import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper.tsx";
import Button from "../components/Button.tsx";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useToast } from "../context/ToastContext.tsx";

const ContactPage: React.FC = () => {
  const { addToast } = useToast();
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Basic client-side validation
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Valid email is required";
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      addToast("Please fill out all required fields correctly.", "error");
      return;
    }

    setFormErrors({});
    addToast(
      "Message sent successfully! We will get back to you soon.",
      "success"
    );
    form.reset();
  };

  return (
    <div className="bg-white font-sans min-h-screen">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white font-sans animate-fade-in-down">
            Get In Touch
          </h1>
          <p
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We'd love to hear from you. Whether you have a question, feedback,
            or a partnership inquiry, please reach out.
          </p>
        </div>
      </div>

      <SectionWrapper className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 font-sans mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Full name"
                    className={`block w-full py-3 px-4 border ${
                      formErrors.name ? "border-red-300" : "border-blue-200"
                    } bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 rounded-lg transition-all duration-300`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className={`block w-full py-3 px-4 border ${
                      formErrors.email ? "border-red-300" : "border-blue-200"
                    } bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 rounded-lg transition-all duration-300`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-600">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className={`block w-full py-3 px-4 border ${
                      formErrors.subject ? "border-red-300" : "border-blue-200"
                    } bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 rounded-lg transition-all duration-300`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-red-600">
                      {formErrors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message"
                    className={`block w-full py-3 px-4 border ${
                      formErrors.message ? "border-red-300" : "border-blue-200"
                    } bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 rounded-lg transition-all duration-300`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-red-600">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 font-sans mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-base text-gray-600">
                  <p className="flex items-center">
                    <FiMapPin className="flex-shrink-0 mr-3 h-6 w-6 text-blue-600" />
                    <span>123 Charity Lane, New Delhi, 110001, India</span>
                  </p>
                  <p className="flex items-center">
                    <FiPhone className="flex-shrink-0 mr-3 h-6 w-6 text-blue-600" />
                    <span>+91 11 4567 8901</span>
                  </p>
                  <p className="flex items-center">
                    <FiMail className="flex-shrink-0 mr-3 h-6 w-6 text-blue-600" />
                    <span>contact@Sahayak.org</span>
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 font-sans mb-4">
                  Our Location
                </h3>
                <div className="w-full h-64 bg-blue-50 rounded-lg flex items-center justify-center text-gray-600 border border-blue-100">
                  Google Maps Embed Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPage;
