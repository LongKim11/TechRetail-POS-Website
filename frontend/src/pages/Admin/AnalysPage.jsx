import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { FaSearch } from "react-icons/fa";
import AnalystTable from "../../components/AnalysTable";

import { LuUsers } from "react-icons/lu";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { TbDevicesDollar } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

const AnalysPage = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const orders = [
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Trang phân tích và thống kê" staff={staff} />
        <div className="flex mt-7 mb-5 items-center">
          <div className="flex w-1/3 flex-col gap-y-3">
            <div className="flex gap-x-3 items-center">
              <h3 className="font-semibold text-xl text-center">
                Chọn thời điểm
              </h3>
              <button className="bg-white px-3 py-2 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold rounded-lg border border-blue-500 transition-all">
                <FaSearch />
              </button>
            </div>
            <Datepicker
              displayFormat="DD/MM/YYYY"
              primaryColor={"sky"}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              inputClassName="w-full border border-slate-400 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-0 font-normal placeholder:text-slate-500 text-dark px-3 py-2"
            />
          </div>
          <div className="w-2/3">
            <div className="flex gap-x-7 justify-end">
              <div className="rounded-md p-5 bg-gradient-to-r from-yellow-200 to-yellow-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-3 font-semibold">
                    Tổng đơn hàng
                  </h4>
                  <h1 className="text-dark-purple text-3xl font-bold"></h1>
                </div>
                <TbDeviceIpadCheck className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
              </div>
              <div className="rounded-md p-5 bg-gradient-to-r from-green-200 to-emerald-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-3 font-semibold">
                    Tổng doanh thu
                  </h4>
                  <h1 className="text-dark-purple text-3xl font-bold"></h1>
                </div>
                <GrMoney className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
              </div>
              <div className="rounded-md p-5 bg-gradient-to-r from-purple-200 to-purple-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-3 font-semibold">
                    Sản phẩm bán ra
                  </h4>
                  <h1 className="text-dark-purple text-3xl font-bold"></h1>
                </div>
                <TbDevicesDollar className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl mt-7 border border-slate-200">
          <h3 className="text-center text-2xl font-semibold my-5">
            Danh sách hóa đơn
          </h3>
          <AnalystTable orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default AnalysPage;
