import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { api } from "../../app/api/api";

const ChangePassword = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [admin, setAdmin] = useState({ fullname: "", email: "", username: "" });

  useEffect(() => {
    if (cookies.jwt) {
      const id = jwtDecode(cookies.jwt).id;

      const handleLoadInfo = (id) => {
        api
          .get(`/staffs/${id}`, {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
          })
          .then((res) => {
            const { data } = res.data;
            setAdmin(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      handleLoadInfo(id);
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
      <Sidebar />
      <div className="flex-1 p-7 bg-slate-100">
        <Navbar heading="Tài khoản" staff={admin} />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePassword;
