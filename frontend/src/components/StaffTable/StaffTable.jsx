import {
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";
import { IoIosMail } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { MdLockPerson } from "react-icons/md";

const TABLE_HEAD = [
  "Họ và tên",
  "Ngày tạo",
  "Trạng thái",
  "Khóa",
  "Gửi lại email",
  "Thao tác",
];

const StaffTable = ({ TABLE_ROWS }) => {
  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left table-auto">
        <thead>
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
            ({ img, name, createdAt, status, is_locked }, index) => {
              return (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-x-3">
                      <Avatar
                        src={img}
                        alt={name}
                        size="md"
                        className="border object-contain p-1"
                      />
                      <Typography variant="small" className="font-semibold">
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" className="font-semibold">
                      {createdAt}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className="w-max">
                      <Chip
                        size="lg"
                        variant="ghost"
                        value={status}
                        color={status == "Active" ? "green" : "amber"}
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="w-max">
                      <Chip
                        size="lg"
                        variant="ghost"
                        value={is_locked}
                        color={is_locked == "true" ? "red" : "cyan"}
                      />
                    </div>
                  </td>
                  <td className="p-4">
                    <Button
                      className="flex items-center gap-3"
                      size="sm"
                      color="blue"
                    >
                      <IoIosMail className="text-xl text-white" />
                      Gửi
                    </Button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-x-5">
                      <a href="#">
                        <BsInfoCircle className="text-2xl text-green-600" />
                      </a>
                      <a href="#">
                        <MdLockPerson className="text-2xl text-red-600" />
                      </a>
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

export default StaffTable;
