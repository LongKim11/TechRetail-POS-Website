import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const ConfirmTransaction = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const location = useLocation();
  const { addedProduct } = location.state || { addedProduct: [] };
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/staff/invoice", {
      state: {
        addedProduct,
        totalAmount,
        receivedAmount,
        change,
        phone,
        customerInfo,
      },
    });
  };

  const [receivedAmount, setReceivedAmount] = useState(0);
  const [change, setChange] = useState(0);
  const [phone, setPhone] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    fullname: "",
    address: "",
  });
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleReceivedAmount = (e) => {
    setReceivedAmount(e.target.value);
    setChange(parseFloat(e.target.value) - totalAmount);
  };

  const totalAmount = addedProduct.reduce(
    (total, product) => total + parseFloat(product.subTotal),
    0
  );

  const handleSearchCustomer = () => {
    axios
      .get(`http://localhost:8080/api/v1/customers?phone=${phone}`)
      .then((res) => {
        if (res.data.data) {
          const customer = res.data.data;
          setCustomerInfo({
            fullname: customer.fullname,
            address: customer.address,
          });
        } else {
          setCustomerInfo({ fullname: "", address: "" });
          setIsInputDisabled(false);
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi tìm kiếm khách hàng!", error);
        setCustomerInfo({ fullname: "", address: "" });
        setIsInputDisabled(false);
      });
  };

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Trang xác nhận mua hàng" staff={staff} />
        <div className="flex gap-x-5 mt-11">
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Thông tin thanh toán
              </h3>
              <hr></hr>
            </div>
            <table className="w-full min-w-max table-auto">
              <thead className="">
                <tr>
                  <th className="p-4">
                    <Typography variant="h6" className="text-orange-500">
                      Mô tả
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" className="text-orange-500">
                      Thông tin
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Tiền cần thanh toán
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-green-500">
                      {totalAmount}$
                    </Typography>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Tiền nhận được
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <input
                      type="text"
                      className="text-center font-semibold text-green-500 border border-gray-300 focus:border-green-500 focus:outline-none rounded-md p-2"
                      name="receivedAmount"
                      onChange={handleReceivedAmount}
                      value={receivedAmount}
                    ></input>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Tiền thừa
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-green-500">
                      {change}$
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <div className="flex gap-x-3 items-center justify-center">
                <h3 className="text-xl font-semibold my-3">
                  Thông tin khách hàng
                </h3>
                <button
                  className="bg-white px-3 py-2 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold rounded-lg border border-blue-500 transition-all"
                  onClick={handleSearchCustomer}
                >
                  <FaSearch />
                </button>
              </div>
              <hr></hr>
              <div className="flex my-4 items-center p-2">
                <span className="font-semibold w-1/3">Số điện thoại</span>
                <input
                  type="text"
                  className="w-2/3 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md p-2"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
              <div className="flex mb-4 items-center p-2">
                <span className="font-semibold w-1/3">Họ và tên</span>
                <input
                  type="text"
                  className="w-2/3 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md p-2"
                  name="fullname"
                  value={customerInfo.fullname}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      fullname: e.target.value,
                    })
                  }
                  disabled={isInputDisabled}
                ></input>
              </div>
              <div className="flex mb-4 items-center p-2">
                <span className="font-semibold w-1/3">Địa chỉ</span>
                <input
                  type="text"
                  className="w-2/3 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md p-2"
                  name="address"
                  value={customerInfo.address}
                  disabled={isInputDisabled}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      address: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Thông tin hóa đơn
              </h3>
              <hr></hr>
            </div>
            <table className="w-full min-w-max table-auto">
              <thead className="">
                <tr>
                  <th className="p-4">
                    <Typography variant="h6" className="text-orange-500">
                      Mô tả
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" className="text-orange-500">
                      Thông tin
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Nhân viên xử lý giao dịch
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-slate-500">
                      Nguyễn Văn A
                    </Typography>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Phương thức thanh toán
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-slate-500">
                      Tiền mặt
                    </Typography>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 text-center ">
                    <Typography className="font-semibold text-blue-700">
                      Ngày thực hiện giao dịch
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-slate-500">
                      {format(new Date(), "dd-MM-yyyy")}
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-11">
          <Button
            variant="outlined"
            className="flex items-center gap-3"
            color="blue"
            onClick={handleConfirm}
          >
            Xác nhận
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
