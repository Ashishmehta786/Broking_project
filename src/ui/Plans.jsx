import React from "react";
import Rupee from "../assets/Rupee.svg";
import Horizontal from "./Horizontal";
import { Link } from "react-router-dom";

export const Plans = ({ link, extra, title, pricing, features }) => {
  if (!extra) {
  }
  return (
    <Link to={link}>   <div className="border-2 shadow-xl solid-white hover:z-10 transform hover:scale-[1.04] bg-white transition-transform duration-500 hover:bg-gray-50 rounded-xl md:w-[400px]  sm:w-[400px] w-[340px] h-[500px] flex flex-col items-center xl:p-5 mb-5">
    <div className="text-3xl font-medium  text-gray-700 flex flex-col md:flex-row items-center mb-4 pt-4">
      {title}
      <div className="text-3xl text-slate-800 flex flex-row items-center ">
        <img className="md:h-7 md:w-7 h-5 w-5  mt-1 " src={Rupee} alt="Rupee Symbol" />
        {pricing} <span className="md:text-lg text-sm text-slate-600 mt-2 md:ml-2 ml-1">{extra}</span>
      </div>
    </div>
    <Horizontal />
    <div className="text-2xl font-semibold text-gray-900 mt-4 md:mr-10">Features:</div>
    <ul className="text-lg text-gray-800 mt-2 md:mx-2 mx-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="h-6 w-6 text-green-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div></Link>
 
  );
};

export const PlansCarousel = () => {
  const plans = [
    {
      title: "Basic Plan",
      pricing: "0",
      features: ["Unlimited Trades", "Summary of Day", "Technical Analysis", "Fundamental Analysis", "Daily News"]
    },
    {
      link: "/Plusplan",
      title: "Plus Plan",
      pricing: "400/year",
      features: ["Unlimited Trades", "Summary of Day", "Technical Analysis", "Fundamental Analysis", "Daily News", "No Brokerage F&O Trades"]
    },
    {
      link: "/Proplan",
      title: "Pro Plan",
      extra: "(Lifetime)",
      pricing: "1000",
      features: ["Unlimited Trades", "Summary of Day", "Technical Analysis", "Fundamental Analysis", "Daily News", "No Brokerage in F&O", "No Brokerage in Intraday", "Stock Recommendations", "Resources available for Trading", "Regular Workshops"]
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-12">
      {plans.map((plan, index) => (
        <Plans key={index} {...plan} />
      ))}
    </div>
  );
};
