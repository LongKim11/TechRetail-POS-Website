import Sidebar from "../../layouts/Sidebar/sidebar";
import { FaRegUserCircle, FaFingerprint, FaSignOutAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const Profile = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold ">Thông tin cá nhân</h1>
          <div className="flex items-center gap-4">
            <Typography variant="h6">Username </Typography>
            <Menu placement="bottom-end">
              <MenuHandler>
                <Avatar
                  variant="circular"
                  alt="tania andrew"
                  withBorder={true}
                  color="blue"
                  className="cursor-pointer"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
              </MenuHandler>
              <MenuList>
                <MenuItem className="cursor-default">
                  <Typography variant="h6">Nguyễn Văn A</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="text-sm text-slate-600"
                  >
                    nguyenvan@gmail.com
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
                  <FaRegUserCircle className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Thông tin tài khoản
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
                  <FaFingerprint className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Đổi mật khẩu
                  </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
                  <MdSettings className="text-xl" />
                  <Typography variant="small" className="font-medium">
                    Cài đặt
                  </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-3 hover:bg-gray-200">
                  <FaSignOutAlt className="text-xl text-red-600" />
                  <Typography
                    variant="small"
                    className="font-medium text-red-600"
                  >
                    Đăng xuất
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="w-2/3 mx-auto">
          <div className="flex justify-between mt-7 items-center">
            <div className="flex items-center">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
                size="xl"
              />
              <div className="ml-5">
                <h1 className="text-2xl font-semibold">Username</h1>
                <p className="text-gray-500">nguyenvana@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <Button
                variant="gradient"
                className="flex items-center gap-3"
                color="blue"
              >
                <FaCloudUploadAlt className="text-lg" />
                Đổi ảnh mới
              </Button>
              <Chip variant="gradient" value="Active" color="green" />
            </div>
          </div>
          <form className="mt-9 ">
            <div className="mb-5">
              <Typography variant="h6">Tên đăng nhập</Typography>
              <input
                type="text"
                className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
                value="nguyenvana"
                disabled
              />
            </div>
            <div className="mb-5">
              <Typography variant="h6">Họ và tên</Typography>
              <input
                type="text"
                className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
                value="Nguyễn Văn A"
                disabled
              />
            </div>
            <div className="mb-5">
              <Typography variant="h6">Địa chỉ email</Typography>
              <input
                type="text"
                className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
                value="nguyenvana@gmail.com"
                disabled
              />
            </div>
            <div className="flex justify-center mt-14">
              <Button variant="gradient" className="flex items-center gap-3">
                <GrUpdate className="text-lg" />
                Sửa thông tin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
