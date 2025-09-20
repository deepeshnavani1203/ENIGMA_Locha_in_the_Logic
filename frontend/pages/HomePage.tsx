import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button.tsx";
import CampaignCard from "../components/CampaignCard.tsx";
import StatCard from "../components/StatCard.tsx";
import SectionWrapper from "../components/SectionWrapper.tsx";
import { TESTIMONIALS } from "../constants.ts";
import { getPublicCampaigns } from "../services/api.ts";
import type { Campaign } from "../types.ts";
import {
  FaHandHoldingHeart,
  FaUsers,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const HomePage: React.FC = () => {
  const [featuredCampaigns, setFeaturedCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const campaigns = await getPublicCampaigns();
        setFeaturedCampaigns(
          campaigns.filter((c) => c.status === "active").slice(0, 3)
        );
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="bg-white font-sans text-gray-600">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight animate-fade-in-down">
            Support Verified Causes.{" "}
            <span className="text-blue-100">Make an Impact.</span>
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join a community of changemakers. Donate with confidence to
            transparent, high-impact campaigns.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to="/explore"
              variant="primary"
              className="text-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Explore Campaigns
            </Button>
            <Button
              to="/join-us"
              variant="outline"
              className="text-lg border-blue-100 text-blue-100 hover:bg-blue-50/20 hover:text-white transition-all duration-300"
            >
              Join as Donor
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={
                  <FaHandHoldingHeart size={24} className="text-blue-600" />
                }
                value="₹1.2 Cr+"
                label="Total Donations"
                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 rounded-xl"
              />
              <StatCard
                icon={<FaCheckCircle size={24} className="text-blue-600" />}
                value="150+"
                label="Active Campaigns"
                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 rounded-xl"
              />
              <StatCard
                icon={<FaUsers size={24} className="text-blue-600" />}
                value="85+"
                label="Verified NGOs"
                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 rounded-xl"
              />
              <StatCard
                icon={<FaBuilding size={24} className="text-blue-600" />}
                value="20+"
                label="Companies Partnered"
                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 rounded-xl"
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900">
                Featured Campaigns
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Discover campaigns that need your urgent support.
              </p>
            </div>
            {loading ? (
              <div className="text-center py-12 text-gray-600">
                Loading campaigns...
              </div>
            ) : (
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredCampaigns.map((campaign) => (
                  <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 rounded-xl"
                  />
                ))}
              </div>
            )}
            <div className="mt-12 text-center">
              <Button
                to="/explore"
                variant="secondary"
                className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-full"
              >
                View All Campaigns
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900">
                  Why Choose Sahayak?
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  We are committed to building a platform based on trust,
                  transparency, and impact.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiCheck className="h-6 w-6 text-blue-600 bg-blue-100 rounded-full p-1" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Government Compliant
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Fully compliant with all regulations, ensuring secure
                        and legally sound donations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiCheck className="h-6 w-6 text-blue-600 bg-blue-100 rounded-full p-1" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Zero Platform Fees for NGOs
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We ensure maximum funds reach the cause, with a small
                        donor fee for platform upkeep.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <FiCheck className="h-6 w-6 text-blue-600 bg-blue-100 rounded-full p-1" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Verified Campaigns
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Every NGO and campaign is rigorously vetted before going
                        live.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <img
                  src="https://picsum.photos/seed/chooseus/600/500"
                  alt="Team discussing plans"
                  className="object-cover w-full h-full rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-gray-900">
                Voices of Our Community
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                See what donors and partners are saying about us.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100"
                >
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 flex items-center">
                    <img
                      className="h-12 w-12 rounded-full border-2 border-blue-100"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-50">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-sans">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Start your journey of giving today. Explore campaigns, start your
            own, or join our community of passionate donors.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/donate"
              className="inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              Donate Now
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              Start a Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
