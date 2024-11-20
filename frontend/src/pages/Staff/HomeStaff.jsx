import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import DashboardBoxStaff from "../../components/DashboardBoxStaff";
import ChartStaff from "../../components/ChartStaff";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeStaff = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Hi, Welcome back 👋" staff={staff} />
        <DashboardBoxStaff
          employees={20}
          bills={100}
          income={11000000}
          products={400}
        />
        <div className="mt-20">
          <Link to={"/staff/analys"}>
            <div className="flex items-center gap-x-3 justify-end text-slate-500 cursor-pointer mb-3">
              <p className="text-sm font-semibold">Đi tới trang thống kê</p>
              <FaArrowRightLong />
            </div>
          </Link>
          <ChartStaff />
        </div>
      </div>
    </div>
  );
};

export default HomeStaff;
