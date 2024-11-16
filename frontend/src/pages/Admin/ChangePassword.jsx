import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ChangePasswordForm from "../../components/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar
          heading="Tài khoản"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="./src/assets/user-avatar.png"
        />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
