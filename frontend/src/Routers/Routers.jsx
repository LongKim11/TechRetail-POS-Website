import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import StaffManagementPage from "../pages/StaffMangementPage/StaffManagementPage";
import ProductManagementPage from "../pages/ProductManagementPage/ProductManagementPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/changepassword" element={<ChangePassword />}></Route>
      <Route path="/staffmanagement" element={<StaffManagementPage />}></Route>
      <Route
        path="/productmanagement"
        element={<ProductManagementPage />}
      ></Route>
    </Routes>
  );
};

export default Routers;
