
import {useState,useEffect,useRef,useMemo} from "react";
import {Link} from "react-router-dom";
import DropDown from "./Navbar/DropDown";
import { CiUser } from "react-icons/ci";

import dropdownData from "./Navbar/dropdownData";

import { CiDark } from "react-icons/ci";


function Navbar(){
  const [isOpen,setOpen]=useState(null);
    const  click=useRef(null);
   const handleDropdown=(name)=>{
        setOpen(name);
        }
    console.log(dropdownData);


      useEffect(()=>{
        const handleOutside=(event)=>{
              if( click.current && !click.current.contains(event.target)){
    
                setOpen(null);
           }
    
        }
        
        document.addEventListener("click",handleOutside);
    
        return ()=>{
            document.removeEventListener("click",handleOutside);
    
        }
    
    
        },[])
    
    
   


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
        <div  ref={click} className="dropdowns text-white flex gap-2">
                 <DropDown  name={dropdownData[0].name} items={dropdownData[0].items}  isOpen={isOpen} handleDropdown={handleDropdown}  setOpen={setOpen} />
                 <DropDown   name={dropdownData[1].name} items={dropdownData[1].items}  isOpen={isOpen} handleDropdown={handleDropdown}  setOpen={setOpen} />
                 
        </div>
        <div className="login part text-white">
            <button className="flex items-center gap-2 bg-[#1556F4]  px-3 py-[5px] rounded-[50px]"><span><CiUser className="translate-y-[2px]" /></span><span>Login/Signup</span></button>
        </div>
        <div className="theme text-white text-[20px]  rounded-[50%] px-1 py-1 hover:bg-white/30  backdrop-blur-lg  transition-all duration-300">
            
        <CiDark  className="font-bold"/>
        </div>

    </div>
</div>


    </>

}

export default Navbar;

