import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import Home from "../pages/Home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routers;
