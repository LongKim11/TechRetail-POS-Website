import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DashboardBox from "../../components/DashboardBox";
import ChartAdmin from "../../components/ChartAdmin";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Hi, Welcome back 👋" staff={staff} />
        <DashboardBox
          employees={20}
          bills={100}
          income={11000000}
          products={400}
        />
        <div className="mt-20">
          <Link to={"/admin/analys"}>
            <div className="flex items-center gap-x-3 justify-end text-slate-500 cursor-pointer mb-3">
              <p className="text-sm font-semibold">Đi tới trang thống kê</p>
              <FaArrowRightLong />
            </div>
          </Link>
          <ChartAdmin />
        </div>
      </div>
    </div>
  );
};

export default Home;
