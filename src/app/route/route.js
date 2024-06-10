import Admin from "../admin/Admin";
import Login from "../auth/Login";
import ForgotPassword from "../auth/ForgotPassword";
import Register from "../auth/Register";
import Home from "../home/Home";
export const publicRouter = [
  {
    element: Home,
    path: "/",
  },
  {
    element: Login,
    path: "/login",
  },
  {
    element: Register,
    path: "/register",
  },
  {
    element: ForgotPassword,
    path: "/forgot_password",
  },
  {
    element: Admin,
    path: "/admin/:slug",
  },
];
export const adminRouter = [];
