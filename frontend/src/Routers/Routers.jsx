import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Admin/Home";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import StaffManagementPage from "../pages/Admin/StaffManagementPage";
import ProductManagementPage from "../pages/Admin/ProductManagementPage";
import CustomersPage from "../pages/CustomersPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin">
        <Route path="home" element={<Home />} />
        <Route path="staffs" element={<StaffManagementPage />} />
        <Route path="products" element={<ProductManagementPage />} />
      </Route>
      <Route path="/staff"></Route>
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
};

export default Routers;
