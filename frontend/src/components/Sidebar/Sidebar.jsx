import { useState } from "react";

import { FaTachometerAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <FaTachometerAlt /> },
    { title: "Profile", src: <FaRegCircleUser /> },
    { title: "Staffs", src: <FaUserPlus />, gap: true },
    { title: "Products", src: <PiDevicesFill /> },
    { title: "Customers", src: <FaUsers /> },
    { title: "Analys", src: <FaChartLine /> },
    { title: "Log out", src: <FiLogOut />, gap: true },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo-yellow-bg.png"
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }  w-[40px] h-[40px]`}
        />
        <h1
          className={`text-yellow-300 origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          CaesarPOS
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <span className="text-2xl text-white">{Menu.src}</span>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
