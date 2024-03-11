import React from 'react';
import Navbar from './Navbar';

export const Contact= () => {
  return (<><Navbar/> <div className=' flex flex-col items-center justify-center '>
  <div className=" mt-10 flex flex-col bg-yellow-50  p-6 md:p-10 rounded-xl shadow-lg w-[700px] ">
      <h2 className="text-3xl font-medium text-slate-900 mb-6">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500  py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white hover:bg-yellow-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
    </div></>
   
  
  );
};


