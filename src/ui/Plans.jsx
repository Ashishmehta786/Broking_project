import React from "react";
import Rupee from "../assets/Rupee.svg";
import Horizontal from "./Horizontal";
import { Link } from "react-router-dom";
export const Plans = ({link, extra,title, pricing, features }) => {
  if(!extra){

  }
  return (
    <Link to={link}>  <div className="border-2 shadow-xl solid-white 
    transform hover:scale-[1.04] bg-white transition-transform duration-500 hover:bg-gray-50 rounded-xl md:w-[400px] h-[500px] flex flex-col items-center p-5 mb-5">
    <div className="text-3xl font-medium  text-gray-700 flex flex-row items-center mb-4">
      {title}
      <div className="text-3xl text-slate-800 flex flex-row items-center ">
        <img className="h-7 w-7 mt-1 " src={Rupee} alt="Rupee Symbol" />
        {pricing} <span className="text-lg text-slate-500 mt-2 ml-2">{extra}</span>
      </div>
    </div>
    <Horizontal />
    <div className="text-2xl font-semibold text-gray-900 mt-4 mr-10">Features:</div>
    <ul className="text-lg text-gray-800 mt-2 mx-2 ">
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
