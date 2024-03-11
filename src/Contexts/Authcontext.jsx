import React,{createContext, useState} from "react";
import {details} from '../Data/Models/details';
export const Authcontext=createContext(null);
export const Authprovider=(props)=>{
   const [logged,setlogged] =useState(false);
   const {username,email,password}=details;
    return(<Authcontext.Provider value={{logged,setlogged,username,email,password}}>
        {props.children}
     </Authcontext.Provider>
        )
}