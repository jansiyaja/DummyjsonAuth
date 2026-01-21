import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../layout/PrivateRoute";
import AdminLayout from "../layout/AdminLayout";
import Login from "../pages/Login";
import Product from "../pages/Product";
import User from "../pages/User";
import CosmeticWebsite from "../pages/CosmeticWebsite";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<CosmeticWebsite />} />

      <Route element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
}
