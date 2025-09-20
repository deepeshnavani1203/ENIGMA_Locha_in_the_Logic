import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => {
  const siteName = "Sahayak";
  const address = "123 Charity Lane, New Delhi, 110001, India";
  const copyrightText = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-blue-50 text-gray-600 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900 font-sans">
                {siteName}
              </span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connecting communities, creating change.
            </p>
            <p className="text-sm text-gray-600">{address}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/legal"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Subscribe to Our Newsletter
            </h3>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Stay updated on our campaigns and impact.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="newsletter-email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="newsletter-email-address"
                id="newsletter-email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-blue-200 rounded-full py-2 px-4 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors duration-300"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-full py-2 px-4 text-base font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-8 border-t border-blue-100 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-base text-gray-600">{copyrightText}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
            >
              <span className="sr-only">Twitter</span>
              <FiTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
            >
              <span className="sr-only">Facebook</span>
              <FiFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
            >
              <span className="sr-only">Instagram</span>
              <FiInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
