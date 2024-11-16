import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Admin/Home";
import HomeStaff from "../pages/Staff/HomeStaff";
import Profile from "../pages/Admin/Profile";
import ProfileStaff from "../pages/Staff/ProfileStaff";
import ChangePassword from "../pages/Admin/ChangePassword";
import ChangePasswordStaff from "../pages/Staff/ChangePasswordStaff";
import StaffManagementPage from "../pages/Admin/StaffManagementPage";
import ProductManagementPage from "../pages/Admin/ProductManagementPage";
import ProductMPageStaff from "../pages/Staff/ProductMPageStaff";
import CustomersPage from "../pages/Admin/CustomersPage";
import CustomersPageStaff from "../pages/Staff/CustomerPageStaff";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/admin">
        <Route path="home" element={<Home />} />
        <Route path="staffs" element={<StaffManagementPage />} />
        <Route path="products" element={<ProductManagementPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

      <Route path="/staff">
        <Route path="home" element={<HomeStaff />} />
        <Route path="transaction"/>
        <Route path="products" element={<ProductMPageStaff />} />
        <Route path="customers" element={<CustomersPageStaff />}/>
        <Route path="profile" element={<ProfileStaff/>} />
        <Route path="change-password" element={<ChangePasswordStaff/>}/>
      </Route>
    </Routes>
  );
};

export default Routers;
