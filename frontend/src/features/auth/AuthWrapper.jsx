import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useGetStaffByIdQuery } from "../staff/staffSlice";
import { setCredentials } from "./authSlice";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../context/AuthProvider";
const AuthWrapper = ({ children }) => {
  const [cookies, , removeCookie] = useCookies(["jwt"]);
  const auth = useContext(AuthContext);
  const token = cookies.jwt;

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    setCredentials({ token });
    const decoded = jwtDecode(token);
    const { id } = decoded;
    console.log("ABC")
    const { data, isLoading, isError, error } = useGetStaffByIdQuery(id, {
      skip: !id,
    });

    if (isLoading) return;

    if (isError) {
      if (error.status === 401) {
        removeCookie("jwt");
        return <Navigate to="/" />;
      }
    }
  } catch (err) {
    console.log(err);
    removeCookie("jwt");
    return <Navigate to="/" />;
  }

  if (!auth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthWrapper;
