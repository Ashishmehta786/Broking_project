import React from "react";
import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-400 py-10 mt-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-6">
        <div className="col-span-2 sm:col-span-1"></div>
        <div className="col-span-2 sm:col-span-4 flex flex-col sm:flex-row justify-between items-center text-center ">
          <div className="text-xl text-center antialiased mb-4 sm:mb-0">BrokerAbc
          <div className="text-sm mt-4 text-slate-300">A Broking Venture</div>
          </div>

          <div className="text-lg flex flex-col cursor-pointer">
            <div className="mb-2">Contacts</div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-gray-400"
              >
                <img src={insta} alt="Instagram" className="h-6 w-6 filter brightness-150" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-gray-400"
              >
                <img src={facebook} alt="Facebook" className="h-6 w-6 filter brightness-150" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-gray-400"
              >
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6 filter brightness-150" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-50 hover:text-gray-400"
              >
                <img src={github} alt="GitHub" className="h-6 w-6 filter brightness-150" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-center items-center">
          <div className="text-sm text-center">
            <p>&copy; {new Date().getFullYear()} BrokerAbc. All Rights Reserved.</p>
            <p className="mt-2">Designed with ❤️ by Ashish</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
