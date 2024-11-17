import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import DashboardBoxStaff from "../../components/DashboardBoxStaff";

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
      </div>
    </div>
  );
};

export default HomeStaff;
