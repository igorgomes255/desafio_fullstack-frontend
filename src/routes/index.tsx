import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}></Route>
      <Route path="/contacts" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
