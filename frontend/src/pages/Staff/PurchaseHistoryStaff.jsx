import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import PurchaseHistoryTable from "../../components/PurchaseHistoryTable";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const PurchaseHistoryStaff = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [staff, setStaff] = useState({ fullname: "", email: "", username: "" });

  useEffect(() => {
    if (cookies.jwt) {
      const staff = jwtDecode(cookies.jwt);
      setStaff({
        fullname: staff.fullname,
        email: staff.email,
        username: staff.username,
      });
    }
  }, [cookies.jwt]);

  const [orders, setOrders] = useState([]);
  const { customerId } = useParams();
  const location = useLocation();
  const { name, phone, address } = location.state || {};

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/customers/${customerId}/orders`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      })
      .then((res) => {
        setOrders(res.data.data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi lấy dữ liệu đơn hàng!", error);
      });
  }, [customerId, cookies.jwt]);

  if (!cookies.jwt) {
    console.log("You are not authenticated");
    return <Navigate to="/" />;
  } else if (cookies.jwt) {
    if (jwtDecode(cookies.jwt).role !== "staff") {
      console.log("You are not authorized to access this resource");
      removeCookie("jwt");
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="flex">
      <SidebarStaff></SidebarStaff>
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Đơn hàng đã mua" staff={staff}></NavbarStaff>
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

export default PurchaseHistoryStaff;
