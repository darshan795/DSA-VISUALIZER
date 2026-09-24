import React from "react";
import  {useState,useEffect,useRef} from "react";
import { LuChevronDown } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb"; 
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5"
import { PiGreaterThan } from "react-icons/pi";
const dropdown1=[
    {id:1,
    name:"About us",
    icon:<TbUserSquare  className=" translate-y-[1px] text-[20px]"/>
    

    },
     {id:2,
    name:"Contact us",
    icon:<MdOutlineForwardToInbox  className=" translate-y-[1px] text-[20px]"/>
    

    }, {id:3,
    name:"FAQs",
    icon:<IoChatbubbleOutline   className=" translate-y-[1px] text-[20px]"/>
    

    }
    
]
function DropDown(){
     const [isOpen,setOpen]=useState(null);
    
    const handleDropdown=(name)=>{
        setOpen(name);
        }

    const  click=useRef(null);


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





    return <> <div ref={click} className="dropdown1 relative group">
                             
    
                            <div onClick={()=>{handleDropdown("about")}}   className=" flex   items-center gap-2 justify-center "> About <LuChevronDown className="size-5 translate-y-[2px] text-gray-500" /></div>
                                        
                                
    
    
                                <div className={`${isOpen=='about'?'block':'hidden'} container bg-black   rounded-[10px]  w-fit  absolute  top-[30px]   group-hover:block`} >
    
                                        {dropdown1.map((data)=>{

                                            return <>  
                                            { <div className="info px-4 py-5 hover:bg-zinc-200 hover:rounded-t-[10px]  whitespace-nowrap  flex items-center gap-4  justify-between  w-50  ">
                                             <span className="text-[15px] flex  items-center gap-1">{data.icon} {data.name}</span> <span className="text-gray-400  text-[10px] translate-y-[2px]"><PiGreaterThan /></span> 
                                        </div>}
                                            
                                            </>
                                             })}
    
    
                                 </div>
                                
                        </div></>





}
export default DropDown;
