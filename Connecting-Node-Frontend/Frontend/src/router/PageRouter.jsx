import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Auth from "../pages/Auth/Auth";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

export default function PageRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}
