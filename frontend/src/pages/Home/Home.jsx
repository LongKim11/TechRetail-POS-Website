import Sidebar from "../../layouts/Sidebar/sidebar";
import { LuUsers } from "react-icons/lu";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { PiMoneyWavy } from "react-icons/pi";
import { TbDevicesDollar } from "react-icons/tb";
import { FaRegUserCircle, FaFingerprint, FaSignOutAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold ">Hi, Welcome back 👋</h1>
          <div className="flex items-center gap-4">
            <div>
              <Typography variant="h6">Nguyễn Văn A</Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-sm text-slate-600"
              >
                nguyenvan@gmail.com
              </Typography>
            </div>
            <Menu placement="bottom-end">
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  withBorder={true}
                  color="blue"
                  className="cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem className="flex items-center gap-3 mb-2">
                  <FaRegUserCircle className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Thông tin tài khoản
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3 mb-2">
                  <FaFingerprint className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Đổi mật khẩu
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3 mb-2">
                  <MdSettings className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Cài đặt
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-3">
                  <FaSignOutAlt className="text-xl text-red-600" />
                  <Typography
                    variant="small"
                    className="font-medium text-red-600"
                  >
                    Đăng xuất
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          <div className="rounded-md p-5 bg-gradient-to-r from-sky-200 to-cyan-300 flex shadow-lg shadow-gray-200 transition-all duration-700 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
            <div className="w-2/3">
              <h4 className="text-[#33343D] mb-3 font-semibold">
                Nhân viên bán hàng
              </h4>
              <h1 className="text-dark-purple text-3xl font-bold">100</h1>
            </div>
            <LuUsers className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
          </div>
          <div className="rounded-md p-5 bg-gradient-to-r from-yellow-200 to-yellow-400 flex shadow-lg shadow-gray-200 transition-all duration-700 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
            <div className="w-2/3">
              <h4 className="text-[#33343D] mb-3 font-semibold">
                Tổng đơn hàng
              </h4>
              <h1 className="text-dark-purple text-3xl font-bold">326</h1>
            </div>
            <TbDeviceIpadCheck className="text-6xl text-dark-purple ml-5 text-right w-1/3 transition-all duration-500 hover:scale-105" />
          </div>
          <div className="rounded-md p-5 bg-gradient-to-r from-green-200 to-emerald-400 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
            <div className="w-2/3">
              <h4 className="text-[#33343D] mb-3 font-semibold">
                Tổng doanh thu
              </h4>
              <h1 className="text-dark-purple text-3xl font-bold">
                11.000.000
              </h1>
            </div>
            <PiMoneyWavy className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
          </div>
          <div className="rounded-md p-5 bg-gradient-to-r from-purple-200 to-purple-400 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
            <div className="w-2/3">
              <h4 className="text-[#33343D] mb-3 font-semibold">
                Sản phẩm bán ra
              </h4>
              <h1 className="text-dark-purple text-3xl font-bold">459</h1>
            </div>
            <TbDevicesDollar className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
