import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import { Button } from "@material-tailwind/react";
import { IoFilter } from "react-icons/io5";
import ProductTableStaff from "../../components/ProductTableStaff";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const ProductMPageStaff = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  const [products, setProducts] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/products").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  return (
    <div className="flex">
      <SidebarStaff />
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Quản lý sản phẩm" staff={staff} />
        <div className="mt-11">
          <h1 className="text-2xl font-semibold">Danh sách</h1>
        </div>
        <div className="w-full bg-white rounded-xl mt-7 border border-slate-200">
          <div className="flex justify-between items-center p-5">
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
                  placeholder="Tìm sản phẩm.."
                  required
                />
              </div>
            </form>
            <div>
              <Button variant="text" size="sm">
                <IoFilter className="text-lg"></IoFilter>
              </Button>
            </div>
          </div>
          <ProductTableStaff products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductMPageStaff;
