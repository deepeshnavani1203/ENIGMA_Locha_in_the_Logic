import React from "react";
import SectionWrapper from "../components/SectionWrapper.tsx";
import { TEAM_MEMBERS } from "../constants.ts";

const MissionPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-fade-in-down">
            Our Mission
          </h1>
          <p
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Connecting generosity with impact through transparency and trust.
          </p>
          <a
            href="#mission-details"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 hover:scale-105 transition-transform duration-300"
          >
            Discover Our Vision
          </a>
        </div>
      </div>

      {/* Mission Details */}
      <SectionWrapper className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                At Sahayak, our mission is to revolutionize philanthropy by
                creating a transparent and secure platform that empowers donors
                to make a lasting impact. Founded in 2023, we strive to bridge
                the gap between generous individuals and impactful causes.
              </p>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Every campaign is rigorously vetted, every donation is tracked,
                and every impact is reported clearly, ensuring your
                contributions create meaningful change.
              </p>
            </div>
            <div className="relative group">
              <img
                src="https://picsum.photos/seed/mission-impact/600/400"
                alt="Making a difference"
                className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
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
              Your generosity fuels transformative change. See how we’re making
              a difference.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Campaigns Supported
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">500+</p>
              <p className="mt-2 text-sm text-gray-600">
                Fully vetted initiatives driving real change.
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Donors Empowered
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">10,000+</p>
              <p className="mt-2 text-sm text-gray-600">
                Individuals and organizations making an impact.
              </p>
            </div>
            <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Funds Tracked
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-600">100%</p>
              <p className="mt-2 text-sm text-gray-600">
                Every rupee is accounted for with clear reporting.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-base text-gray-600">
              The dedicated individuals behind our mission.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  className="mx-auto h-28 w-28 rounded-full object-cover border-2 border-blue-100 group-hover:scale-110 transition-transform duration-300"
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

export default MissionPage;
