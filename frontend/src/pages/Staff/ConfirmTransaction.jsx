import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";

const ConfirmTransaction = () => {
  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff
          heading="Trang xác nhận mua hàng"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="./src/assets/user-avatar.png"
        />
        <div className="flex gap-x-5 mt-11">
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
                      Tiền cần thanh toán
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography className="font-semibold text-green-500">
                      5000$
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
                    <Typography className="font-semibold text-green-500">
                      5000$
                    </Typography>
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
                      5000$
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Thông tin khách hàng
              </h3>
              <hr></hr>
              <div className="flex my-4 items-center p-2">
                <span className="font-semibold w-1/3">Số điện thoại</span>
                <input
                  type="text"
                  className="w-2/3 border focus:border-blue-500 focus:outline-none rounded-md p-2"
                ></input>
              </div>
              <div className="flex mb-4 items-center p-2">
                <span className="font-semibold w-1/3">Họ và tên</span>
                <input
                  type="text"
                  className="w-2/3 border focus:border-blue-500 focus:outline-none rounded-md p-2"
                ></input>
              </div>
              <div className="flex mb-4 items-center p-2">
                <span className="font-semibold w-1/3">Địa chỉ</span>
                <input
                  type="text"
                  className="w-2/3 border focus:border-blue-500 focus:outline-none rounded-md p-2"
                ></input>
              </div>
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Thông tin chung
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
                      30/12/2024
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-11">
          <Link to={"/staff/invoice"}>
            <Button
              variant="outlined"
              className="flex items-center gap-3"
              color="blue"
            >
              Xác nhận
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTransaction;
