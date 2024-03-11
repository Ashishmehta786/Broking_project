import React,{useContext} from "react";
import { Authcontext } from "../../Contexts/Authcontext";
import board from "../../ui/Dashboard";
export const Dashboard=()=>{
    return(Authcontext.logged?<board/>:<Login/>)
}
