import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import PurchaseHistoryTable from "../../components/PurchaseHistoryTable";

const PurchaseHistory = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const orders = [
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
    {
      _id: "HD0001",
      totalAmount: 10000,
      receivedAmount: 12000,
      change: 2000,
      createdAt: "20/10/2021",
      quantity: 2,
    },
  ];

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Đơn hàng đã mua" staff={staff}></Navbar>
        <div className="my-7 text-slate-700">
          <div className="flex gap-x-3 items-center mb-3">
            <span className="font-semibold text-black">Họ và tên:</span>
            <span className="font-semibold">Trần Thị B</span>
          </div>
          <div className="flex gap-x-3 items-center mb-3">
            <span className="font-semibold text-black">Số điện thoại:</span>
            <span className="font-semibold">0123456789</span>
          </div>
          <div className="flex gap-x-3 items-center">
            <span className="font-semibold text-black">Địa chỉ:</span>
            <span className="font-semibold">50 Thành Thái, Q10, TPHCM</span>
          </div>
        </div>
        <div className="w-full bg-white rounded-xl mt-7 border border-slate-200">
          <h3 className="text-center text-2xl font-semibold my-6">
            Lịch sử mua hàng
          </h3>
          <PurchaseHistoryTable orders={orders}></PurchaseHistoryTable>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
