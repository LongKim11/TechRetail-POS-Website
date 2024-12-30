import { FaTachometerAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import Control from "../assets/control.png";
import YellowLogo from "../assets/logo-yellow-bg.png";
import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { useCookies } from "react-cookie";
import { api } from "../app/api/api";

const SidebarStaff = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const handleLogout = () => {
    api
      .post("/auth/logout", {})
      .then((res) => {
        console.log(res);
        removeCookie("jwt");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-20 lg:w-64 bg-dark-purple min-h-screen p-5 pt-8 relative">
      <Link to={"/staff/home"}>
        <div className="flex gap-x-4 items-center">
          <img src={YellowLogo} className="cursor-pointer w-[40px] h-[40px]" />
          <h1 className="hidden lg:flex text-yellow-300 font-medium text-xl">
            CaesarPOS
          </h1>
        </div>
      </Link>
      <ul className="pt-12">
        <Link to={"/staff/home"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5">
            <span className="text-2xl text-white">
              <FaTachometerAlt></FaTachometerAlt>
            </span>
            <span className="hidden lg:flex">Dashboard</span>
          </li>
        </Link>
        <Link to={"/staff/profile"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5">
            <span className="text-2xl text-white">
              <FaRegCircleUser></FaRegCircleUser>
            </span>
            <span className="hidden lg:flex">Profile</span>
          </li>
        </Link>
        <Link to={"/staff/transaction"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-12">
            <span className="text-2xl text-white">
              <GrTransaction></GrTransaction>
            </span>
            <span className="hidden lg:flex">Transaction</span>
          </li>
        </Link>
        <Link to={"/staff/products"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5">
            <span className="text-2xl text-white">
              <PiDevicesFill></PiDevicesFill>
            </span>
            <span className="hidden lg:flex">Products</span>
          </li>
        </Link>
        <Link to={"/staff/customers"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5">
            <span className="text-2xl text-white">
              <FaUsers></FaUsers>
            </span>
            <span className="hidden lg:flex">Customers</span>
          </li>
        </Link>
        <Link to={"/staff/analys"}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-5">
            <span className="text-2xl text-white">
              <FaChartLine></FaChartLine>
            </span>
            <span className="hidden lg:flex">Analys</span>
          </li>
        </Link>
        <a onClick={handleLogout}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-12">
            <span className="text-2xl text-white">
              <FiLogOut></FiLogOut>
            </span>
            <span className="hidden lg:flex">Log Out</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SidebarStaff;
