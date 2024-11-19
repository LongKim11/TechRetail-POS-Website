import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { FaBarcode } from "react-icons/fa6";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionPage = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const searchProductResult = [
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
      name: "Xiaomi Redmi Note 10 Pro 128GB",
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

  const [addedProduct, setAddedProduct] = useState([]);
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    product.quantity = 1;
    product.subTotal = product.retail_price;
    console.log(product);
    setAddedProduct([...addedProduct, product]);
  };

  const handleRemoveProduct = (index) => {
    setAddedProduct(addedProduct.filter((product, i) => i !== index));
  };

  const handleIncreaseQuantity = (index) => {
    const updatedProduct = [...addedProduct];
    updatedProduct[index].quantity += 1;
    updatedProduct[index].subTotal =
      updatedProduct[index].quantity * updatedProduct[index].retail_price;
    setAddedProduct(updatedProduct);
  };

  const handleDecreaseQuantity = (index) => {
    if (addedProduct[index].quantity === 1) {
      return;
    }
    const updatedProduct = [...addedProduct];
    updatedProduct[index].quantity -= 1;
    updatedProduct[index].subTotal =
      updatedProduct[index].quantity * updatedProduct[index].retail_price;
    setAddedProduct(updatedProduct);
  };

  const handleNext = () => {
    navigate("/staff/confirm-transaction", { state: { addedProduct } });
  };

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Trang xử lý mua hàng" staff={staff} />
        <div className="flex gap-x-5 mt-11">
          <div className="w-3/5 bg-white rounded-lg shadow-md">
            <div className="flex gap-x-3 items-center p-3">
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
                    className="block w-full px-3 py-2 ps-10 text-sm border border-gray-300 rounded-lg  focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 "
                    placeholder="Tên sản phẩm.."
                    name="search-name"
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
                    className="block w-full px-3 py-2 ps-10 text-sm border border-gray-300 rounded-lg  focus:ring-blue-500 focus:outline-none focus:ring-1 focus:border-blue-500 "
                    placeholder="Mã barcode.."
                    name="search-barcode"
                  />
                </div>
              </form>
              <button
                className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:bg-blue-700"
                type="button"
              >
                Tìm kiếm
              </button>
            </div>
            <table className="w-full min-w-max table-auto">
              <thead className="">
                <tr>
                  <th className="p-4 bg-gray-100">
                    <Typography variant="h6" color="black">
                      Barcode
                    </Typography>
                  </th>
                  <th className="p-4 bg-gray-100">
                    <Typography variant="h6" color="black">
                      Tên sản phẩm
                    </Typography>
                  </th>
                  <th className="p-4 bg-gray-100">
                    <Typography variant="h6" color="black">
                      Giá bán lẻ
                    </Typography>
                  </th>
                  <th className="p-4 bg-gray-100">
                    <Typography variant="h6" color="black">
                      Thao tác
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchProductResult.map((product, index) => {
                  return (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-orange-600">
                          {product.barcode}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-blue-700">
                          {product.name}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-green-500">
                          {product.retail_price}$
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          className="bg-white hover:bg-green-500 hover:text-white text-green-500 font-semibold py-2 px-4 rounded-md border border-green-500 transition-all"
                          onClick={() => handleAddProduct(product)}
                        >
                          Thêm +
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-2/5 bg-white rounded-lg shadow-md">
            <div className="p-3">
              <h3 className="text-xl font-semibold my-3 text-center">
                Sản phẩm được mua
              </h3>
              <hr></hr>
            </div>
            <table className="w-full min-w-max table-auto">
              <thead className="">
                <tr>
                  <th className="p-4">
                    <Typography variant="h6" color="black">
                      Tên sản phẩm
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" color="black">
                      Số lượng
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" color="black">
                      Đơn giá
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" color="black">
                      Tổng tiền
                    </Typography>
                  </th>
                  <th className="p-4">
                    <Typography variant="h6" color="black">
                      Thao tác
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {addedProduct.map((product, index) => {
                  return (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {product.name}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          <button
                            className="text-red-500 text-lg font-bold"
                            onClick={() => handleDecreaseQuantity(index)}
                          >
                            -
                          </button>{" "}
                          {product.quantity}{" "}
                          <button
                            className="text-green-500 text-lg font-bold"
                            onClick={() => handleIncreaseQuantity(index)}
                          >
                            +
                          </button>
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {product.retail_price}
                        </Typography>
                      </td>
                      <td className="p-4 text-center">
                        <Typography className="font-semibold text-slate-500">
                          {product.subTotal}
                        </Typography>
                      </td>
                      <td className="p-4 flex justify-center">
                        <button onClick={() => handleRemoveProduct(index)}>
                          <MdOutlineDelete className="text-2xl text-red-600" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end mt-11">
          <Button
            variant="outlined"
            className="flex items-center gap-3"
            color="blue"
            onClick={handleNext}
          >
            Tiếp theo
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
