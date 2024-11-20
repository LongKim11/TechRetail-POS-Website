import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { FaSearch } from "react-icons/fa";
import AnalystTable from "../../components/AnalysTable";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { TbDevicesDollar } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import axios from "axios";
import { format } from "date-fns";

const AnalysPage = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const [value, setValue] = useState({
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  });

  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalAmountOrders, setTotalAmountOrders] = useState(0);
  const [totalQuantityOrders, setTotalQuantityOrders] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/orders/statistics", {
        params: {
          startDate: value.startDate,
          endDate: value.endDate,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          return;
        }
        console.log(res.data);
        setOrders(res.data.orders);
        setTotalOrders(res.data.totalOrders);
        setTotalAmountOrders(res.data.totalAmountOrders);
        setTotalQuantityOrders(res.data.totalQuantityOrders);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu thống kê!", error);
      });
  }, []);

  const handleSearch = () => {
    axios
      .get("http://localhost:8080/api/v1/orders/statistics", {
        params: {
          startDate: format(value.startDate, "yyyy-MM-dd"),
          endDate: format(value.endDate, "yyyy-MM-dd"),
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
        setTotalOrders(res.data.totalOrders);
        setTotalAmountOrders(res.data.totalAmountOrders);
        setTotalQuantityOrders(res.data.totalQuantityOrders);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu thống kê!", error);
      });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Trang phân tích và thống kê" staff={staff} />
        <div className="flex mt-7 mb-11 items-center gap-x-20">
          <div className="flex w-1/3 flex-col gap-y-3">
            <div className="flex gap-x-3 items-center">
              <h3 className="font-semibold text-xl text-center">
                Chọn thời điểm
              </h3>
              <button
                className="bg-white px-3 py-2 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold rounded-lg border border-blue-500 transition-all"
                onClick={handleSearch}
              >
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
              <div className="rounded-md p-5 bg-gradient-to-r from-yellow-200 to-yellow-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer w-1/3">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-1 font-semibold">
                    Tổng đơn hàng
                  </h4>
                  <h1 className="text-dark-purple text-3xl font-bold">
                    {totalOrders}
                  </h1>
                </div>
                <TbDeviceIpadCheck className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
              </div>
              <div className="rounded-md p-5 bg-gradient-to-r from-green-300 to-emerald-400 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer w-1/3">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-1 font-semibold">
                    Tổng doanh thu
                  </h4>
                  <h1 className="text-dark-purple text-2xl font-bold">
                    {totalAmountOrders}
                  </h1>
                </div>
                <GrMoney className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
              </div>
              <div className="rounded-md p-5 bg-gradient-to-r from-pink-200 to-pink-300 flex shadow-lg shadow-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-gray-400 cursor-pointer w-1/3">
                <div className="w-2/3">
                  <h4 className="text-[#33343D] mb-1 font-semibold">
                    Sản phẩm bán ra
                  </h4>
                  <h1 className="text-dark-purple text-2xl font-bold">
                    {totalQuantityOrders}
                  </h1>
                </div>
                <TbDevicesDollar className="text-6xl text-dark-purple ml-5 text-right w-1/3" />
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

export default AnalysPage;
