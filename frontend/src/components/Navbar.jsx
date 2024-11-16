import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { FaRegUserCircle, FaFingerprint, FaSignOutAlt } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import UserAvatar from "../assets/user-avatar.png";
import { Link } from "react-router-dom";

const Navbar = ({ heading, username, fullname, email, avatar }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold ">{heading}</h1>
      <div className="flex items-center gap-4">
        <Typography variant="h6">{username}</Typography>
        <Menu placement="bottom-end">
          <MenuHandler>
            <Avatar
              variant="circular"
              alt="tania andrew"
              withBorder={true}
              color="blue"
              className="cursor-pointer"
              src={UserAvatar}
            />
          </MenuHandler>
          <MenuList>
            <MenuItem className="cursor-default">
              <Typography variant="h6">{fullname}</Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-sm text-slate-600"
              >
                {email}
              </Typography>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50" />
            <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
              <FaRegUserCircle className="text-xl" />
              <Link to={"/admin/profile"}>
                <Typography variant="small" className="font-medium">
                  Thông tin tài khoản
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
              <FaFingerprint className="text-xl" />
              <Link to={"/admin/change-password"}>
                <Typography variant="small" className="font-medium">
                  Đổi mật khẩu
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem className="flex items-center gap-3 mb-2 hover:bg-gray-200">
              <MdSettings className="text-xl" />
              <Typography variant="small" className="font-medium">
                Cài đặt
              </Typography>
            </MenuItem>
            <hr className="my-2 border-blue-gray-50" />
            <a href="/login">
              <MenuItem className="flex items-center gap-3 hover:bg-gray-200">
                <FaSignOutAlt className="text-xl text-red-600" />
                <Typography
                  variant="small"
                  className="font-medium text-red-600"
                >
                  Đăng xuất
                </Typography>
              </MenuItem>
            </a>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
