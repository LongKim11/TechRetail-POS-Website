import { Card, Typography, Button } from "@material-tailwind/react";
import { BiSolidPurchaseTag } from "react-icons/bi";

const TABLE_HEAD = [
  "Họ và tên",
  "Địa chỉ",
  "Số điện thoại",
  "Ngày tạo",
  "Thao tác",
];

const CustomerTable = ({ TABLE_ROWS }) => {
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
          {TABLE_ROWS.map(({ fullname, address, phone, createdAt }, index) => {
            return (
              <tr key={index} className="hover:bg-slate-50">
                <td className="p-4 text-center">
                  <Typography
                    variant="mmedium"
                    className="font-semibold text-blue-700"
                  >
                    {fullname}
                  </Typography>
                </td>
                <td className="p-4 text-center">
                  <Typography
                    variant="medium"
                    className="font-semibold text-slate-600"
                  >
                    {address}
                  </Typography>
                </td>
                <td className="p-4 text-center">
                  <Typography
                    variant="medium"
                    className="font-semibold text-slate-600"
                  >
                    {phone}
                  </Typography>
                </td>
                <td className="p-4 text-center">
                  <Typography
                    variant="medium"
                    className="font-semibold text-slate-600"
                  >
                    {createdAt}
                  </Typography>
                </td>
                <td className="p-4 flex justify-center">
                  <Button
                    color="blue"
                    className="flex items-center gap-3 text-white"
                  >
                    <BiSolidPurchaseTag className="text-lg" />
                    Lịch sử mua hàng
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default CustomerTable;
