import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Admin/Home";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import StaffManagementPage from "../pages/Admin/StaffManagementPage";
import ProductManagementPage from "../pages/Admin/ProductManagementPage";

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
