import  {useState,useEffect,useRef} from "react";
import { LuChevronDown } from "react-icons/lu";
import { TbUserSquare } from "react-icons/tb"; 
import { MdOutlineForwardToInbox } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5"
import { PiGreaterThan } from "react-icons/pi";

const dropdownData = [
  {
    id: 1,
    name: "About",
    items: [
      {
        id: 1,
        name: "About us",
        icon: <TbUserSquare />
      },
      {
        id: 2,
        name: "Contact us",
        icon: <MdOutlineForwardToInbox />
      },
      {
        id: 3,
        name: "FAQs",
        icon: <IoChatbubbleOutline />
      }
    ]
  },

  {
    id: 2,
    name: "Services",
    items: [
      {
        id: 1,
        name: "Algos",
        icon: <TbUserSquare />
      },
      {
        id: 2,
        name: "Visualization",
        icon:<MdOutlineForwardToInbox />
      },
      {
        id: 3,
        name: "Blogs",
        icon: <IoChatbubbleOutline />
      }
    ]
  }
];

export default dropdownData;