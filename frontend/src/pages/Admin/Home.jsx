import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DashboardBox from "../../components/DashboardBox";
import ChartAdmin from "../../components/ChartAdmin";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [admin, setAdmin] = useState({ fullname: "", email: "", username: "" });

  const [totalAmountByMonth, setTotalAmountByMonth] = useState([]);
  const [months, setMonths] = useState([]);
  const [overallStatistics, setOverallStatistics] = useState({
    totalCustomers: 0,
    totalStaff: 0,
    totalOrders: 0,
    totalAmount: 0,
    totalProductsSold: 0,
  });

  useEffect(() => {
    if (cookies.jwt) {
      const admin = jwtDecode(cookies.jwt);
      setAdmin({
        fullname: admin.fullname,
        email: admin.email,
        username: admin.username,
      });
    }

    Promise.all([
      axios.get(
        "http://localhost:8080/api/v1/orders/total-amount-last-12-months",
        { headers: { Authorization: `Bearer ${cookies.jwt}` } }
      ),
      axios.get("http://localhost:8080/api/v1/orders/overall-statistics", {
        headers: { Authorization: `Bearer ${cookies.jwt}` },
      }),
    ])
      .then(([totalAmountRes, overallStatisticsRes]) => {
        setTotalAmountByMonth(totalAmountRes.data.totalAmountByMonth);
        setMonths(totalAmountRes.data.months);
        setOverallStatistics(overallStatisticsRes.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu thống kê!", error);
      });
  }, [cookies.jwt]);

  if (!cookies.jwt) {
    console.log("You are not authenticated");
    return <Navigate to="/" />;
  } else if (cookies.jwt) {
    if (jwtDecode(cookies.jwt).role !== "admin") {
      console.log("You are not authorized to access this resource");
      removeCookie("jwt");
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Hi, Welcome back 👋" staff={admin} />
        <DashboardBox
          employees={overallStatistics.totalStaff}
          bills={overallStatistics.totalOrders}
          income={overallStatistics.totalAmount}
          products={overallStatistics.totalProductsSold}
        />
        <div className="mt-6">
          <div className="flex items-center gap-x-3 justify-end text-slate-500 cursor-pointer mb-3">
            <Link to={"/admin/analys"}>
              <p className="text-sm font-semibold">Đi tới trang thống kê</p>
            </Link>
            <Link to={"/admin/analys"}>
              <FaArrowRightLong />
            </Link>
          </div>
          <ChartAdmin totalAmountByMonth={totalAmountByMonth} months={months} />
        </div>
      </div>
    </div>
  );
};

export default Home;
