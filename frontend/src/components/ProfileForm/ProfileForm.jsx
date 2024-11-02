import { Avatar, Typography, Button, Chip } from "@material-tailwind/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

const ProfileForm = ({ avatar, username, email, fullname }) => {
  return (
    <div className="w-3/4 mx-auto mt-11 flex items-center">
      <div className="w-1/2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar
              src={avatar}
              alt="avatar"
              size="xl"
              withBorder={true}
              className="p-1"
              color="blue"
            />
            <div className="ml-5">
              <h1 className="text-2xl font-semibold">{username}</h1>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>
          <Button
            variant="gradient"
            className="flex items-center gap-3"
            color="blue"
          >
            <FaCloudUploadAlt className="text-lg" />
            Đổi ảnh mới
          </Button>
        </div>
        <form className="mt-9 ">
          <div className="mb-5">
            <Typography variant="h6">Tên đăng nhập</Typography>
            <input
              type="text"
              className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
              value={username}
              disabled
            />
          </div>
          <div className="mb-5">
            <Typography variant="h6">Họ và tên</Typography>
            <input
              type="text"
              className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
              value={fullname}
              disabled
            />
          </div>
          <div className="mb-5">
            <Typography variant="h6">Địa chỉ email</Typography>
            <input
              type="text"
              className="p-3 w-full rounded-lg bg-slate-200 focus:border-[#004AAD] focus:outline-none border-2 mt-2"
              value={email}
              disabled
            />
          </div>
          <div className="flex justify-center mt-14">
            <Button variant="gradient" className="flex items-center gap-3">
              <GrUpdate className="text-lg" />
              Đổi mật khẩu
            </Button>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src="./src/assets/profile-bg.jpg"
          className="mix-blend-multiply"
        ></img>
      </div>
    </div>
  );
};

export default ProfileForm;
