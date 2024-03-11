import React from "react";
import '../index.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
export const Signup = () => {
  return (<><Navbar/
  ><div className='dark:bg-slate-900 h-screen w-full top-0 '>  <div className="max-w-md mx-auto h-[500px] mt-8 p-9 rounded-lg shadow-lg bg-white text-gray-800 ">
  <h2 className="text-2xl font-semibold mb-6 mt-5">Signup</h2>
  <form className="space-y-10">
    <div>
      <label htmlFor="email" className="my-2 block text-sm font-medium">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="mt-1 block w-full border rounded-md px-3 py-2  placeholder-slate-900   focus:outline-none focus:ring focus:ring-yellow-200 bg-slate-100 "
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium my-2">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="mt-1 block w-full border rounded-md px-3 py-2 placeholder-slate-900  focus:outline-none focus:ring focus:ring-yellow-200 bg-slate-100 "
        placeholder='Enter your password'
      />
    </div>
    <div>
      <button
        type="submit"
        className="w-full py-2 my-3 rounded-md focus:outline-none bg-yellow-500 hover:bg-yellow-600 text-gray-950"
      >
       Signup
      </button>
          <div >
    
    </div>
    </div>

  </form>
</div></div> 

</>
   
  );
};
