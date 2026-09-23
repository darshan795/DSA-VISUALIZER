
import {useState,useEffect,useRef,useMemo} from "react";
import {Link} from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb";  
import { PiGreaterThan } from "react-icons/pi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5"



function Navbar(){

    const [isOpen,setOpen]=useState(null);
    const handleDropdown=(name)=>{
        console.log(name);
        setOpen(name);
        console.log(isOpen);



    }

    const  click=useRef(null);
    console.log(click.current);

    useEffect(()=>{

        //this is the code
    const handleOutside=(event)=>{
       if( click.current && !click.current.contains(event.target)){
        console.log("hurray!!");
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
        <div className="dropdowns text-white">
            
                    <div ref={click} className="dropdown1 relative group">
                         

                        <div onClick={()=>{handleDropdown("about")}}   className=" flex   items-center gap-2 justify-center "> About <LuChevronDown className="size-5 translate-y-[2px] text-gray-500" /></div>
                                    
                            


                            <div className={`${isOpen=='about'?'block':'hidden'} container bg-black   rounded-[10px]  w-fit  absolute  top-[30px]   group-hover:block`} >

                                     <div className="info px-4 py-5 hover:bg-zinc-200 hover:rounded-t-[10px]  whitespace-nowrap  flex items-center gap-4  justify-between  w-50  ">
                                         <span className="text-[15px] flex  items-center gap-1"><TbUserSquare  className=" translate-y-[1px] text-[20px]"/> About us</span> <span className="text-gray-400  text-[10px] translate-y-[2px]"><PiGreaterThan /></span> 
                                    </div>
                                     <div className="info px-4 py-5 hover:bg-zinc-200 hover:rounded-t-[10px]  whitespace-nowrap  flex items-center gap-4  justify-between  w-50  ">
                                         <span className="text-[15px] flex  items-center gap-1"><MdOutlineForwardToInbox  className=" translate-y-[1px] text-[20px]"/> Contact us</span> <span className="text-gray-400  text-[10px] translate-y-[2px]"><PiGreaterThan /></span> 
                                    </div>
                                     <div className="info px-4 py-5 hover:bg-zinc-200 hover:rounded-t-[10px]  whitespace-nowrap  flex items-center gap-4  justify-between  w-50  ">
                                         <span className="text-[15px] flex  items-center gap-1"><IoChatbubbleOutline   className=" translate-y-[1px] text-[20px]"/> FAQs</span> <span className="text-gray-400  text-[10px] translate-y-[2px]"><PiGreaterThan /></span> 
                                    </div>


                             </div>
                            
                    </div>

        </div>

    </div>
</div>

    </>

}

export default Navbar;

