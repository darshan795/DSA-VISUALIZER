
import {useState,useEffect,useRef,useMemo} from "react";
import {Link} from "react-router-dom";
import DropDown from "./Navbar/DropDown";


function Navbar(){
  const [isOpen,setOpen]=useState(null);
   const handleDropdown=(name)=>{
        setOpen(name);
        }
    
   


    return <>
    <div className="main bg-blue-300 flex justify-center py-8">
    <div className="Navbar w-220 py-3 px-6 bg-black rounded-[50px] flex items-center justify-between">
        <div className="Logo text-white text-[25px] font-[700] flex gap-2">

                
                <span>DSA</span>
                <span>Visualizer</span>

        </div>

        <div className="Links text-white flex  gap-2 ">
                 <Link>Home</Link>
                <Link>Features</Link>
                <Link>Reviews</Link>
            

        </div>
        <div className="dropdowns text-white flex gap-4">
                 <DropDown />
                 <DropDown/>
        </div>

    </div>
</div>


    </>

}

export default Navbar;

