import React from "react";
import SectionWrapper from "../components/SectionWrapper.tsx";
import Button from "../components/Button.tsx";
import { FiUsers, FiBriefcase, FiHeart, FiCheck } from "react-icons/fi";

const BenefitCard = ({
  icon,
  title,
  description,
  benefits,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}) => (
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-blue-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="text-blue-600 bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-sans text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 text-base leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3 mb-8 flex-grow">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-start">
          <FiCheck className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{benefit}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto">
      <Button
        fullWidth
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-lg"
      >
        Create Account
      </Button>
    </div>
  </div>
);

const JoinUsPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16">
        <div className="absolute inset-0 bg-blue-600/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-sans animate-fade-in-down">
            Join Our Community
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto text-lg text-blue-100 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Whether you're an NGO, a company, or a passionate donor, you have a
            place here.
          </p>
        </div>
      </div>

      <div className="py-20 bg-blue-50">
        <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <BenefitCard
              icon={<FiUsers size={24} className="text-blue-600" />}
              title="For NGOs"
              description="Amplify your reach and connect with a dedicated community of supporters."
              benefits={[
                "List your campaigns for free.",
                "Access a wide network of donors and corporate partners.",
                "Easy-to-use dashboard for campaign management.",
                "Transparent reporting and fund disbursement.",
              ]}
            />
            <BenefitCard
              icon={<FiBriefcase size={24} className="text-blue-600" />}
              title="For Companies"
              description="Fulfill your Corporate Social Responsibility (CSR) goals with trusted, impactful projects."
              benefits={[
                "Find verified NGOs and projects for your CSR initiatives.",
                "Track the impact of your company's contributions.",
                "Receive detailed reports for compliance and marketing.",
                "Enhance your brand's social value.",
              ]}
            />
            <BenefitCard
              icon={<FiHeart size={24} className="text-blue-600" />}
              title="For Donors"
              description="Give with confidence and see the real-world impact of your generosity."
              benefits={[
                "Discover and donate to verified campaigns.",
                "Receive tax benefits under 80G for eligible donations.",
                "Get regular updates from the campaigns you support.",
                "Join a community of like-minded changemakers.",
              ]}
            />
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default JoinUsPage;
