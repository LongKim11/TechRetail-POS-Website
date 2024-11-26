import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProfileForm from "../../components/ProfileForm";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [admin, setAdmin] = useState({ fullname: "", email: "", username: "" });

  useEffect(() => {
    if (cookies.jwt) {
      const admin = jwtDecode(cookies.jwt);
      setAdmin({
        fullname: admin.fullname,
        email: admin.email,
        username: admin.username,
      });
    }
  }, [cookies.jwt]);

  if (!cookies.jwt) {
    console.log("You are not authenticated");
    return <Navigate to="/" />;
  } else if (cookies.jwt) {
    if (jwtDecode(cookies.jwt).role !== "admin") {
      console.log("You are not authorized to access this resource");
      removeCookie("jwt");
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Thông tin cá nhân" staff={admin}></Navbar>
        <ProfileForm userInfo={admin}></ProfileForm>
      </div>
    </div>
  );
};

export default Profile;
