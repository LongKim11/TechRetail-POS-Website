import {
  Avatar,
  Typography,
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { GrUpdate } from "react-icons/gr";
import { useState } from "react";
import { PiNumpad } from "react-icons/pi";
import ProfileBG from "../assets/profile-bg.jpg";

const ProfileForm = ({ avatar, username, email, fullname }) => {
  const [openCPModal, setOpenCPModal] = useState(false);
  const [openCAModal, setOpenCAModal] = useState(false);

  const handleOpenCPModal = () => setOpenCPModal((cur) => !cur);
  const handleOpenCAModal = () => setOpenCAModal((cur) => !cur);
  return (
    <div className="px-11 mx-auto mt-11 flex items-center">
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
            onClick={handleOpenCAModal}
          >
            <GrUpdate className="text-lg" />
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
            <Button
              variant="gradient"
              className="flex items-center gap-3"
              onClick={handleOpenCPModal}
            >
              <PiNumpad className="text-lg" />
              Đổi mật khẩu
            </Button>
            <Dialog
              size="sm"
              open={openCPModal}
              handler={handleOpenCPModal}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[28rem]">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Đổi mật khẩu mới
                  </Typography>
                  <Typography
                    className="font-normal text-slate-400"
                    variant="paragraph"
                  >
                    Mật khẩu cần ít nhất 6 kí tự.
                  </Typography>
                  <Typography className="" variant="h6">
                    Mật khẩu cũ
                  </Typography>
                  <input
                    type="password"
                    className="border border-slate-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                  ></input>
                  <Typography className="" variant="h6">
                    Mật khẩu mới
                  </Typography>
                  <input
                    type="password"
                    className="border border-slate-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                  ></input>
                  <Typography className="" variant="h6">
                    Nhập lại mật khẩu mới
                  </Typography>
                  <input
                    type="password"
                    className="border border-slate-300 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                  ></input>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    onClick={handleOpenCPModal}
                    fullWidth
                  >
                    Đổi mật khẩu
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
            <Dialog
              size="sm"
              open={openCAModal}
              handler={handleOpenCAModal}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[28rem]">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Cập nhật ảnh đại diện
                  </Typography>
                  <Typography
                    className="font-normal text-slate-400"
                    variant="paragraph"
                  >
                    Ảnh phải thuộc định dạng JPG, PNG.
                  </Typography>
                  <Typography className="" variant="h6">
                    Tải ảnh lên
                  </Typography>
                  <input
                    type="file"
                    className="font-semibold file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                  ></input>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    onClick={handleOpenCAModal}
                    fullWidth
                  >
                    Lưu ảnh đại diện
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img src={ProfileBG} className="mix-blend-multiply"></img>
      </div>
    </div>
  );
};

export default ProfileForm;
