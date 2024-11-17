import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ChangePasswordForm from "../../components/ChangePasswordForm";

const ChangePassword = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Tài khoản" staff={staff} />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
