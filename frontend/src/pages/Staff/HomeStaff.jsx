import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import DashboardBoxStaff from "../../components/DashboardBoxStaff";
import ChartStaff from "../../components/ChartStaff";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeStaff = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const [totalProductByMonth, setTotalProductByMonth] = useState([]);
  const [months, setMonths] = useState([]);
  const [overallStatistics, setOverallStatistics] = useState({
    totalCustomers: 0,
    totalStaff: 0,
    totalOrders: 0,
    totalAmount: 0,
    totalProductsSold: 0,
  });

  useEffect(() => {
    Promise.all([
      axios.get(
        "http://localhost:8080/api/v1/orders/total-product-last-12-months"
      ),
      axios.get("http://localhost:8080/api/v1/orders/overall-statistics"),
    ])
      .then(([totalProductRes, overallStatisticsRes]) => {
        setTotalProductByMonth(totalProductRes.data.totalProductByMonth);
        setMonths(totalProductRes.data.months);
        setOverallStatistics(overallStatisticsRes.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu thống kê!", error);
      });
  }, []);

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Hi, Welcome back 👋" staff={staff} />
        <DashboardBoxStaff
          customers={overallStatistics.totalCustomers}
          bills={overallStatistics.totalOrders}
          income={overallStatistics.totalAmount}
          products={overallStatistics.totalProductsSold}
        />
        <div className="mt-20">
          <div className="flex items-center gap-x-3 justify-end text-slate-500 cursor-pointer mb-3">
            <Link to={"/staff/analys"}>
              {" "}
              <p className="text-sm font-semibold">Đi tới trang thống kê</p>
            </Link>
            <Link to={"/staff/analys"}>
              <FaArrowRightLong />
            </Link>
          </div>

          <ChartStaff
            totalProductByMonth={totalProductByMonth}
            months={months}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeStaff;
