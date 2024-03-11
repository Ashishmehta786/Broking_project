import React, { useState } from "react";
import '../index.css';
import fabars from '../assets/fabars.svg';
import times from '../assets/times.svg';

import {Link, NavLink} from "react-router-dom";
const Navbar=()=>{

    const [isLogged,SetLogged]= useState(false);
  
 

    const [mobileView,SetMobileView]=useState(true);
    const toggleview=()=>{
        SetMobileView(!mobileView);
    }
return(<>
<div className=" bg-white sticky top-0 flex  z-10 flex-row items-center justify-between p-3 md:px-[200px]" >
<h1  className="text-3xl text-gray-950">BrokerABC</h1>
<div className="flex  flex-row items-center justify-between cursor-pointer text-lg ">
    <NavLink to="/" className=" text-slate-950 hover:text-slate-600 hidden  md:block p-3 m-1 ">Home</NavLink>
    <NavLink to="/About"   className="p-3 m-1 text-slate-950 hover:text-slate-600 hidden  md:block"> About </NavLink>
    <NavLink  to="/Stocks"  className="p-3 m-1 text-slate-950 hover:text-slate-600 hidden  md:block">Stocks</NavLink>
    <NavLink  to="/Holdings"  className="p-3 m-1 text-slate-950 hover:text-slate-600 hidden  md:block ">Holdings</NavLink>
    {!isLogged &&
    <Link to="/Login"> <button  className="bg-yellow-300 hover:bg-opacity-70 hover:text-slate-800 text-slate-900 m-0 p-[8px] px-[12px] ">Login</button></Link>
   }
   <div className=" m-1 p-1 md:hidden flex text-slate-500 scale-[1.09] hover:scale-[1.09] transition-transform all duration-400 ease-in-out" onClick={toggleview}>{mobileView ?<img src={fabars} />:<img src={times} />}</div>{!mobileView && <div className="absolute bg-white w-[99%] left-0 top-[70px] h-screen  text-slate-900    "> 
   <div className="m-0 my-6 text-xl  "><NavLink to="/" className={({isActive})=>{
    console.log(isActive);
return(isActive ?"text-slate-900 py-2 p-[10px] pl-4 bg-slate-100  w-screen inline-block ":"hover:bg-slate-100 inline-block w-screen pl-4 py-2 p-[10px]")}}>Home</NavLink></div>  
 <div className="m-0 my-4 text-xl  "><NavLink to="/About" className={({isActive})=>{
    console.log(isActive);
return(isActive ?"text-slate-900 py-2 p-[10px] pl-4 bg-slate-100  w-screen inline-block ":"hover:bg-slate-100 inline-block w-screen pl-4 py-2 p-[10px]")}}>About</NavLink></div>
 <div className="m-0 my-6 text-xl  "><NavLink to="/Holdings" className={({isActive})=>{
    console.log(isActive);
return(isActive ?"text-slate-900 py-2 p-[10px] pl-4 bg-slate-100  w-screen inline-block ":"hover:bg-slate-100 inline-block w-screen pl-4 py-2 p-[10px]")}}>Holdings</NavLink></div>
 <div className="m-0 my-6 text-xl  "><NavLink to="/Stocks" className={({isActive})=>{
    console.log(isActive);
return(isActive ?"text-slate-900 py-2 p-[10px] pl-4 bg-slate-100  w-screen inline-block ":"hover:bg-slate-100 inline-block w-screen pl-4 py-2 p-[10px]")}}>Stocks</NavLink></div>
    </div>}

</div>



</div>
</>
);
}
export default Navbar;