import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DashboardBox from "../../components/DashboardBox";
import ChartAdmin from "../../components/ChartAdmin";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useGetAdminInfoQuery } from "../../features/admin/adminSlice";
// import { useDispatch } from "react-redux";
// import { useCookies } from "react-cookie";
// import { setCredentials } from "../../features/auth/authSlice";
// import { useNavigate } from "react-router-dom";
const Home = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  // if (!cookies.jwt) {
  //   console.log("No cookie found");
  //   navigate("/");
  // }
  // dispatch(setCredentials({ token: cookies.jwt }));
  // const { data, isLoading, isFetching, isError, isSuccess } =
  //   useGetAdminInfoQuery("LIST");

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching data</div>;

  // let admin = {
  //   fullname: data.fullname,
  //   email: data.email,
  //   username: data.account.username,
  // };

  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

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
    Promise.all([
      axios.get(
        "http://localhost:8080/api/v1/orders/total-amount-last-12-months"
      ),
      axios.get("http://localhost:8080/api/v1/orders/overall-statistics"),
    ])
      .then(([totalAmountRes, overallStatisticsRes]) => {
        setTotalAmountByMonth(totalAmountRes.data.totalAmountByMonth);
        setMonths(totalAmountRes.data.months);
        setOverallStatistics(overallStatisticsRes.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu thống kê!", error);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Hi, Welcome back 👋" staff={staff} />
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
