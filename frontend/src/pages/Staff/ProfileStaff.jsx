import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import ProfileForm from "../../components/ProfileForm";
// import { useCookies } from "react-cookie";
// import { useGetStaffByIdQuery } from "../../features/staff/staffSlice";
// import { setCredentials } from "../../features/auth/authSlice";
// import { jwtDecode } from "jwt-decode";
// import { Navigate, useNavigate } from "react-router-dom";
const ProfileStaff = () => {
  const staff = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    username: "Username",
  };

  // const navigate = useNavigate();
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  // let staff = {};

  // if (!cookies.jwt) {
  //   navigate("/");
  // }

  // setCredentials({ token: cookies.jwt });
  // let decoded;
  // try {
  //   decoded = jwtDecode(cookies.jwt);
  // } catch (err) {
  //   removeCookie("jwt");
  //   return <Navigate to="/" />;
  // }
  // const { id } = decoded;
  // const { data, isLoading, isSuccess, isError, error } = useGetStaffByIdQuery(
  //   id,
  //   "Staff"
  // );

  // if (isLoading) return <div>Loading...</div>;

  // if (isError) {
  //   if (error.status === 401) {
  //     removeCookie("jwt");
  //     return <Navigate to="/" />;
  //   } else {
  //     return <p>{error.data.message}</p>;
  //   }
  // }
  // staff = {
  //   fullname: data.staff.fullname,
  //   email: data.staff.email,
  //   username: data.staff.account.username,
  // };

  return (
    <div className="flex">
      <SidebarStaff></SidebarStaff>
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Thông tin cá nhân" staff={staff}></NavbarStaff>
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

export default ProfileStaff;
