import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "./header";
import Visualization from "./visualization";

import Mode from "./modeSelector";
function  BinarySearch(){

    return <>
    <div className="nav w-full flex justify-center py-5"> <Navbar/></div>
    <div className="header w-full flex justify-center py-10"><Header/></div>
    <Mode/>
   <Visualization/>



   
    </>
}
export default BinarySearch;
