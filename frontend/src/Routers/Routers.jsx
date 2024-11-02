import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/changepassword" element={<ChangePassword />}></Route>
    </Routes>
  );
};

export default Routers;
