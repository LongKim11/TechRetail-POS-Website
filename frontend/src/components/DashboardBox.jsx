import { LuUsers } from "react-icons/lu";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { PiMoneyWavy } from "react-icons/pi";
import { TbDevicesDollar } from "react-icons/tb";

const DashboardBox = ({ employees, bills, income, products }) => {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
      <div className="rounded-md p-5 bg-gradient-to-r from-cyan-100 to-cyan-200 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
        <div className="w-2/3">
          <h4 className="text-[#33343D] mb-3 font-semibold">
            Nhân viên bán hàng
          </h4>
          <h1 className="text-dark-purple text-3xl font-bold">{employees}</h1>
        </div>
        <LuUsers className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
      </div>
      <div className="rounded-md p-5 bg-gradient-to-r from-yellow-200 to-yellow-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
        <div className="w-2/3">
          <h4 className="text-[#33343D] mb-3 font-semibold">Tổng đơn hàng</h4>
          <h1 className="text-dark-purple text-3xl font-bold">{bills}</h1>
        </div>
        <TbDeviceIpadCheck className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
      </div>
      <div className="rounded-md p-5 bg-gradient-to-r from-green-200 to-emerald-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
        <div className="w-2/3">
          <h4 className="text-[#33343D] mb-3 font-semibold">Tổng doanh thu</h4>
          <h1 className="text-dark-purple text-3xl font-bold">{income}</h1>
        </div>
        <PiMoneyWavy className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
      </div>
      <div className="rounded-md p-5 bg-gradient-to-r from-purple-200 to-purple-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
        <div className="w-2/3">
          <h4 className="text-[#33343D] mb-3 font-semibold">Sản phẩm bán ra</h4>
          <h1 className="text-dark-purple text-3xl font-bold">{products}</h1>
        </div>
        <TbDevicesDollar className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
      </div>
    </div>
  );
};

export default DashboardBox;
