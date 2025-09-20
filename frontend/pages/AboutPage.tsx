import React from "react";
import SectionWrapper from "../components/SectionWrapper.tsx";
import { TEAM_MEMBERS } from "../constants.ts";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-in-down">
            About Sahayak
          </h1>
          <p
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transparency, Trust, and Transformation
          </p>
          <a
            href="mission"
            className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 hover:scale-105 transition-transform duration-300 shadow-sm"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Mission and Story */}
      <SectionWrapper className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <img
                src="https://picsum.photos/seed/mission/600/400"
                alt="Community working together"
                className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Founded in 2023, Sahayak was created to bridge the gap
                between generous donors and impactful causes. Our platform
                leverages technology to ensure transparency, security, and ease
                in philanthropy.
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                We meticulously vet every campaign, track every donation, and
                provide detailed impact reports, empowering you to make a
                difference with confidence.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Impact Section */}
      <SectionWrapper className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
              Your support drives change. Discover the impact of our collective
              efforts.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Campaigns Supported
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">500+</p>
              <p className="mt-2 text-sm text-gray-600">
                Vetted initiatives creating real change.
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Donors Engaged
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">10,000+</p>
              <p className="mt-2 text-sm text-gray-600">
                Individuals and organizations empowered.
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Funds Tracked
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">100%</p>
              <p className="mt-2 text-sm text-gray-600">
                Every donation fully accounted for.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Legal & Transparency Statement */}
      <SectionWrapper className="bg-blue-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Commitment to Transparency
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Sahayak is registered under the Societies Registration Act,
              1860, with 80G and 12A certifications for tax-deductible
              donations. Our CSR registration enables corporate partnerships.
              All legal documents are publicly accessible for full transparency.
            </p>
            <a
              href="#documents"
              className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              View Legal Documents
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-base text-gray-600">
              The passionate team driving our vision forward.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group text-center bg-blue-50/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  className="mx-auto h-24 w-24 rounded-full object-cover border-2 border-blue-100 group-hover:scale-110 transition-transform duration-300"
                  src={member.imageUrl}
                  alt={member.name}
                />
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
