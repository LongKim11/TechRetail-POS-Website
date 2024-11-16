import { Card, Typography, Tooltip } from "@material-tailwind/react";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const TABLE_HEAD = [
  "Barcode",
  "Tên sản phẩm",
  "Giá nhập",
  "Giá bán lẻ",
  "Loại sản phẩm",
  "Ngày tạo",
  "Thao tác",
];

const ProductTable = ({ TABLE_ROWS }) => {
  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto">
        <thead className="">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="p-4 bg-gray-100">
                <Typography variant="h6" color="black">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            (
              {
                barcode,
                name,
                import_price,
                retail_price,
                category,
                createdAt,
              },
              index
            ) => {
              return (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="p-4 text-center">
                    <Typography
                      variant="mmedium"
                      className="font-semibold text-orange-600"
                    >
                      {barcode}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="medium"
                      className="font-semibold text-blue-700"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="medium"
                      className="font-semibold text-green-500"
                    >
                      {import_price}$
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="medium"
                      className="font-semibold text-green-500"
                    >
                      {retail_price}$
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="medium"
                      className="font-semibold text-pink-500"
                    >
                      {category.type}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="medium"
                      className="font-semibold text-slate-500"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className="p-4 flex justify-center">
                    <div className="flex items-center gap-x-5">
                      <Tooltip
                        content="Xem chi tiết"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#">
                          <BsInfoCircle className="text-2xl text-green-600" />
                        </a>
                      </Tooltip>
                      <Tooltip
                        content="Chỉnh sửa"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#">
                          <AiOutlineEdit className="text-2xl text-yellow-600" />
                        </a>
                      </Tooltip>
                      <Tooltip
                        content="Xóa sản phẩm"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#">
                          <MdOutlineDelete className="text-2xl text-red-600" />
                        </a>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default ProductTable;
