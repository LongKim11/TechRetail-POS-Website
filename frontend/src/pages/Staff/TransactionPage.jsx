import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { FaBarcode } from "react-icons/fa6";
import ProductSearchTransaction from "../../components/ProductSearchTransaction";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const TransactionPage = () => {
  const TABLE_HEAD = ["Tên sản phẩm", "Số lượng", "Đơn giá", "Tổng tiền"];

  const TABLE_ROWS = [
    {
      barcode: "P000001",
      name: "Iphone 13 Pro Max 256GB",
      retail_price: "2500",
      category: { name: "phone", type: "smartphone" },
      createdAt: "2021-10-10",
    },
    {
      barcode: "P000001",
      name: "Sạc Smartphone Samsung 25W",
      retail_price: "2500",
      category: { name: "accessories", type: "charging" },
      createdAt: "2021-10-10",
    },
    {
      barcode: "P000001",
      name: "Xiomi Redmi Note 10 Pro 128GB",
      retail_price: "2500",
      category: { name: "phone", type: "smartphone" },
      createdAt: "2021-10-10",
    },
    {
      barcode: "P000001",
      name: "Apple Watch Series 7 44mm",
      retail_price: "2500",
      category: { name: "accessories", type: "watch" },
      createdAt: "2021-10-10",
    },
    {
      barcode: "P000001",
      name: "Iphone 13 Pro Max 256GB",
      retail_price: "2500",
      category: { name: "phone", type: "smartphone" },
      createdAt: "2021-10-10",
    },
  ];

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
          heading="Trang xử lý mua hàng"
          username="Username"
          fullname="Nguyễn Văn A"
          email="nguyenvana@gmail.com"
          avatar="./src/assets/user-avatar.png"
        />
        <div className="flex gap-x-5 mt-11">
          <div className="w-2/3 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center p-3">
              <h3 className="text-xl font-semibold ml-5">Thêm sản phẩm</h3>
              <div className="flex gap-x-3">
                <form>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-slate-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="block w-full p-3 ps-10 text-sm border border-gray-300 rounded-lg  focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 "
                      placeholder="Tên sản phẩm.."
                      required
                    />
                  </div>
                </form>
                <form>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FaBarcode className="text-slate-400"></FaBarcode>
                    </div>
                    <input
                      type="search"
                      className="block w-full p-3 ps-10 text-sm border border-gray-300 rounded-lg  focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 "
                      placeholder="Mã barcode.."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
            <ProductSearchTransaction TABLE_ROWS={TABLE_ROWS} />
          </div>
          <div className="w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Sản phẩm được mua
              </h3>
              <hr></hr>
            </div>
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
          </div>
        </div>
        <div className="flex justify-end mt-11">
          <Link to={"/staff/confirm-transaction"}>
            <Button
              variant="outlined"
              className="flex items-center gap-3"
              color="blue"
            >
              Tiếp theo
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
