import SidebarStaff from "../../components/SidebarStaff";
import NavbarStaff from "../../components/NavbarStaff";
import ProfileForm from "../../components/ProfileForm";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
const ProfileStaff = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [staff, setStaff] = useState({ fullname: "", email: "", username: "" });

  useEffect(() => {
    if (cookies.jwt) {
      const staff = jwtDecode(cookies.jwt);
      setStaff({
        fullname: staff.fullname,
        email: staff.email,
        username: staff.username,
      });
    }
  }, [cookies.jwt]);

  if (!cookies.jwt) {
    console.log("You are not authenticated");
    return <Navigate to="/" />;
  } else if (cookies.jwt) {
    if (jwtDecode(cookies.jwt).role !== "staff") {
      console.log("You are not authorized to access this resource");
      removeCookie("jwt");
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="flex">
      <SidebarStaff></SidebarStaff>
      <div className="flex-1 p-7 bg-slate-100">
        <NavbarStaff heading="Thông tin cá nhân" staff={staff}></NavbarStaff>
        <ProfileForm
          avatar="./src/assets/user-avatar.png"
          userInfo={staff}
        ></ProfileForm>
      </div>
    </div>
  );
};

export default ProfileStaff;
