import { Card, Typography, Tooltip } from "@material-tailwind/react";
import { BsInfoCircle } from "react-icons/bs";

const TABLE_HEAD = [
  "Barcode",
  "Tên sản phẩm",
  "Giá bán lẻ",
  "Loại sản phẩm",
  "Ngày tạo",
  "Thao tác",
];

const ProductTableStaff = ({ TABLE_ROWS }) => {
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
            ({ barcode, name, retail_price, category, createdAt }, index) => {
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

export default ProductTableStaff;
