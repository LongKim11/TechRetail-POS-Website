import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProfileForm from "../../components/ProfileForm";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useCookies } from "react-cookie";
// import { setCredentials } from "../../features/auth/authSlice";
// import { useGetAdminInfoQuery } from "../../features/admin/adminSlice";

const Profile = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  // const dispatch = useDispatch();
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  // if (!cookies.jwt) {
  //   console.log("No cookie found");
  //   navigate("/");
  // }
  // dispatch(setCredentials({ token: cookies.jwt }));
  // const { data, isLoading, isFetching, isError, isSuccess } =
  //   useGetAdminInfoQuery("LIST");

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching data</div>;

  // let admin = {
  //   fullname: data.fullname,
  //   email: data.email,
  //   username: data.account.username,
  // };

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Thông tin cá nhân" staff={staff}></Navbar>
        <ProfileForm
          avatar="./src/assets/user-avatar.png"
          username="Username"
          email="nguyenvana@gmail.com"
          fullname="Nguyễn Văn A"
        ></ProfileForm>
      </div>
    </div>
  );
};

export default Profile;
