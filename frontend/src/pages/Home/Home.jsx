import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DashboardBox from "../../components/DashboardBox/DashboardBox";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar
          heading="Hi, Welcome back 👋"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="./src/assets/user-avatar.png"
        />
        <DashboardBox
          employees={20}
          bills={100}
          income={11000000}
          products={400}
        />
      </div>
    </div>
  );
};

export default Home;
