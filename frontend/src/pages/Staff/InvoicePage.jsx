import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";

const InvoicePage = () => {
  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff
          heading="Xuất hóa đơn"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="./src/assets/user-avatar.png"
        />
      </div>
    </div>
  );
};

export default InvoicePage;
