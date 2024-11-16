import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import ChangePasswordForm from "../../components/ChangePasswordForm";

const ChangePasswordStaff = () => {
  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff
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

export default ChangePasswordStaff;
