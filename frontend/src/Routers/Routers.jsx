import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default Routers;
