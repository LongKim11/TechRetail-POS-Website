import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
