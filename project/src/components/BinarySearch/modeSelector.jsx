
import React from "react";

function Mode(){
    return <>
    <div className="modes flex gap-2 px-110">
        <button className="border rounded-[5px] border-white px-3 py-2 bg-black text-white text-[15px]">Predefined</button> 
        <button className="border rounded-[5px] border-white px-3 py-2 bg-black text-white text-[15px]">User Defined</button>

    </div>
    </>
}

export default Mode;

