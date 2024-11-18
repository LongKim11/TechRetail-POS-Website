import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { FaSearch } from "react-icons/fa";
import AnalystTable from "../../components/AnalysTable";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { TbDevicesDollar } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

const AnalysPageStaff = () => {
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
      customer_name: "Nguyễn Văn A",
      totalAmount: 10000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      customer_name: "Nguyễn Văn A",
      totalAmount: 10000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      customer_name: "Nguyễn Văn A",
      totalAmount: 10000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      customer_name: "Nguyễn Văn A",
      totalAmount: 10000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      customer_name: "Nguyễn Văn A",
      totalAmount: 10000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
  ];

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Trang phân tích và thống kê" staff={staff} />
        <div className="flex mt-7 mb-11 items-center gap-x-20">
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
              <div className="rounded-md p-5 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer bg-white w-1/3">
                <TbDeviceIpadCheck className="text-6xl text-orange-500" />
                <div className="w-2/3 text-right">
                  <h1 className="text-dark-purple text-3xl font-bold">123</h1>
                  <h4 className="text-[#33343D] font-semibold">
                    Tổng đơn hàng
                  </h4>
                </div>
              </div>
              <div className="rounded-md p-5 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer bg-white w-1/3">
                <GrMoney className="text-6xl text-green-700" />
                <div className="w-2/3 text-right">
                  <h1 className="text-dark-purple text-3xl font-bold">
                    111111111
                  </h1>
                  <h4 className="text-[#33343D] mb-3 font-semibold">
                    Tổng doanh thu
                  </h4>
                </div>
              </div>
              <div className="rounded-md p-5 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer bg-white w-1/3">
                <TbDevicesDollar className="text-6xl text-purple-700" />
                <div className="w-2/3 text-right">
                  <h1 className="text-dark-purple text-3xl font-bold">200</h1>
                  <h4 className="text-[#33343D] mb-3 font-semibold">
                    Sản phẩm bán ra
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl border border-slate-200">
          <h3 className="text-center text-2xl font-semibold my-5">
            Danh sách hóa đơn
          </h3>
          <AnalystTable orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default AnalysPageStaff;
