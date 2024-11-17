import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import Logo from "../../assets/logo-vector.png";
import { Typography } from "@material-tailwind/react";

const InvoicePage = () => {
  const TABLE_HEAD = ["Tên sản phẩm", "Số lượng", "Đơn giá", "Tổng tiền"];

  const PRODUCTS_ROWS = [
    {
      name: "Iphone 13 Pro Max",
      retail_price: "2500",
      quantity: "1",
      total_price: "2500",
    },
    {
      name: "Iphone 13 Pro Max",
      retail_price: "2500",
      quantity: "1",
      total_price: "2500",
    },
    {
      name: "Iphone 13 Pro Max",
      retail_price: "2500",
      quantity: "1",
      total_price: "2500",
    },
    {
      name: "Iphone 13 Pro Max",
      retail_price: "2500",
      quantity: "1",
      total_price: "2500",
    },
    {
      name: "Iphone 13 Pro Max",
      retail_price: "2500",
      quantity: "1",
      total_price: "2500",
    },
  ];

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
        <div className="mx-auto bg-white rounded-lg w-1/2 p-5 mt-11 border-slate-200 border shadow-md">
          <div className="flex items-center justify-center gap-x-5">
            <div>
              <img src={Logo} alt="logo" className="w-[80px] h-[80px]" />
            </div>
            <h1 className="text-2xl font-bold text-dark-purple">
              Caesar POS Website
            </h1>
          </div>
          <div className="flex justify-between mt-11">
            <div className="flex gap-x-3">
              <p className="font-semibold">Nhân viên:</p>
              <p>Nguyễn Văn A</p>
            </div>
            <div className="flex gap-x-3">
              <p className="font-semibold">Ngày:</p>
              <p>30/11/2024</p>
            </div>
          </div>
          <hr className="mb-5 mt-3 border-slate-300"></hr>
          <h1 className="text-2xl font-semibold mb-5 text-dark-purple">
            Thông tin khách hàng
          </h1>
          <div className="flex justify-between my-3">
            <h3 className="font-semibold">Họ và tên</h3>
            <p>Nguyễn Văn A</p>
          </div>
          <div className="flex justify-between my-3">
            <h3 className="font-semibold">Số điện thoại</h3>
            <p>0123456789</p>
          </div>
          <div className="flex justify-between my-3">
            <h3 className="font-semibold">Địa chỉ</h3>
            <p>30 Thành Thái, Q10, TPHCM</p>
          </div>
          <hr className="mb-5 mt-3 border-slate-300"></hr>
          <h1 className="text-2xl font-semibold mb-5 text-dark-purple">
            Danh sách sản phẩm
          </h1>
          <table className="w-full min-w-max table-auto">
            <thead className="">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4">
                    <Typography variant="h6" color="black">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRODUCTS_ROWS.map(
                ({ name, retail_price, quantity, total_price }, index) => {
                  return (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {quantity}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {retail_price}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {total_price}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <hr className="mb-5 mt-3 border-slate-300"></hr>
          <div className="mr-16">
            <div className="flex">
              <h3 className="text-end w-5/6 font-semibold">
                Tổng tiền hóa đơn:
              </h3>
              <p className="w-1/6 text-end">10000</p>
            </div>

            <div className="flex">
              <h3 className="text-end w-5/6 font-semibold">Tiền nhận được:</h3>
              <p className="w-1/6 text-end">12000</p>
            </div>
            <div className="flex">
              <h3 className="text-end w-5/6 font-semibold">Tiền thừa:</h3>
              <p className="w-1/6 text-end">2000</p>
            </div>
          </div>
          <hr className="mb-5 mt-3 border-slate-300"></hr>
          <h3 className="text-center text-slate-500">
            Trân trọng cảm ơn quý khách đã mua hàng tại Ceasar POS Website
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
