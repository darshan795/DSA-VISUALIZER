
import {useState,useEffect,useRef,useMemo} from "react";
import {Link} from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";



function Navbar(){

    const [isOpen,setOpen]=useState(false);

    return <>
    <div className="main bg-blue-300 flex justify-center py-8">
    <div className="Navbar w-220 py-3 px-6 bg-black rounded-[50px] flex items-center gap-10">
        <div className="Logo text-white text-[25px] font-[700] flex gap-2">

                
                <span>DSA</span>
                <span>Visualizer</span>

        </div>
        <div className="Links text-white">
            <Link>Home</Link>
            <Link>Features</Link>
            <Link>Reviews</Link>
            

        </div>
        <div className="dropdowns text-white">
            <div className="dropdown1 relative"><div className=" flex items-center gap-2 justify-center"> About <LuChevronDown className="size-5 translate-y-[2px]" /></div>
            <div className="container bg-white text-black  rounded-[10px]  w-fit  absolute " >
                <div className="info px-2 py-1 hover:bg-zinc-200 hover:rounded-t-[10px]  whitespace-nowrap">
                    About us
                </div>
                 <div className="info px-2 py-1 ">
                    Contact us
                </div>
                 <div className="info px-2 py-1">
                    FAQs
                </div>


            </div>
            </div>

        </div>

    </div>
    </div>

    </>

}

export default Navbar;

