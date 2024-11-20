import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PurchaseHistoryTable from "../../components/PurchaseHistoryTable";
import axios from "axios";

const PurchaseHistory = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const [orders, setOrders] = useState([]);
  const { customerId } = useParams();
  const location = useLocation();
  const { name, phone, address } = location.state || {};

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/customers/${customerId}/orders`)
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu đơn hàng!", error);
      });
  }, [customerId]);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Đơn hàng đã mua" staff={staff}></Navbar>
        <div className="my-7 text-slate-700">
          <div className="flex gap-x-3 items-center mb-3">
            <span className="font-semibold text-black">Họ và tên:</span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="flex gap-x-3 items-center mb-3">
            <span className="font-semibold text-black">Số điện thoại:</span>
            <span className="font-semibold">{phone}</span>
          </div>
          <div className="flex gap-x-3 items-center">
            <span className="font-semibold text-black">Địa chỉ:</span>
            <span className="font-semibold">{address}</span>
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
