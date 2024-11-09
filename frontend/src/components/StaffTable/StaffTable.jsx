import {
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { MdLockPerson } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLockPerson } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";

const TABLE_HEAD = [
  "Họ và tên",
  "Ngày tạo",
  "Trạng thái",
  "Khóa",
  "Gửi lại mail",
  "Thao tác",
];

const StaffTable = ({ TABLE_ROWS }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
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
            ({ img, name, createdAt, status, is_locked }, index) => {
              return (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-x-3">
                      <Avatar
                        src={img}
                        alt={name}
                        size="md"
                        withBorder={true}
                        color="blue"
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
                      variant="outlined"
                    >
                      <IoIosMail className="text-xl text-blue-500" />
                      Gửi
                    </Button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-x-5">
                      <Tooltip
                        content="Xem chi tiết"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#" onClick={handleOpen}>
                          <BsInfoCircle className="text-2xl text-green-600" />
                        </a>
                      </Tooltip>
                      <Tooltip
                        content="Xem thông tin bán hàng"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#">
                          <RiBillLine className="text-2xl text-blue-600" />
                        </a>
                      </Tooltip>
                      <Tooltip
                        content="Khóa tài khoản"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <a href="#">
                          <MdLockPerson className="text-2xl text-red-600" />
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
      <Dialog open={open} handler={handleOpen} size="sm">
        <DialogHeader className="relative m-0 block">
          <div>
            <Typography variant="h3">Chi tiết nhân viên</Typography>
          </div>
          <Typography className="mt-1 font-normal text-gray-600">
            Mã nhân viên: 6kqh183j8qcnqm7160
          </Typography>
        </DialogHeader>
        <DialogBody>
          <div className="mb-6">
            <div className="flex gap-x-2 items-center">
              <FaRegUser className="text-lg" />
              <Typography variant="h6">Họ và tên</Typography>
            </div>
            <input
              value="Nguyễn Văn A"
              className="p-2 rounded-md w-full mt-2 border border-gray-100"
              disabled
            ></input>
          </div>
          <div className="mb-6">
            <div className="flex gap-x-2 items-center">
              <MdWorkOutline className="text-lg" />
              <Typography variant="h6">Tên đăng nhập</Typography>
            </div>
            <input
              value="nguyenvana"
              className="p-2 rounded-md w-full mt-2 border border-gray-100"
              disabled
            ></input>
          </div>
          <div className="flex gap-x-6 justify-between mb-6">
            <div className="w-1/2">
              <div className="flex gap-x-2 items-center">
                <MdOutlineSignalWifiStatusbarNull className="text-lg" />
                <Typography variant="h6">Trạng thái</Typography>
              </div>
              <input
                value="Active"
                className="p-2 rounded-md w-full mt-2 border border-gray-100"
                disabled
              ></input>
            </div>
            <div className="w-1/2">
              <div className="flex gap-x-2 items-center">
                <MdOutlineLockPerson className="text-xl" />
                <Typography variant="h6">Khóa</Typography>
              </div>
              <input
                value="false"
                className="p-2 rounded-md w-full mt-2 border border-gray-100"
                disabled
              ></input>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex gap-x-2 items-center">
              <MdMailOutline className="text-xl" />
              <Typography variant="h6">Địa chỉ email</Typography>
            </div>
            <input
              value="nguyenvana@gmail.com"
              className="p-2 rounded-md w-full mt-2 border border-gray-100"
              disabled
            ></input>
          </div>
          <div className="mb-6">
            <div className="flex gap-x-2 items-center">
              <MdOutlineDateRange className="text-xl" />
              <Typography variant="h6">Ngày tạo</Typography>
            </div>
            <input
              value="22/2/2023"
              className="p-2 rounded-md w-full mt-2 border border-gray-100"
              disabled
            ></input>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={handleOpen}>
            <span>Đóng</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
};

export default StaffTable;
