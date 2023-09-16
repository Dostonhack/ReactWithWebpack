import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// render - login
const AuthLogin = Loadable(lazy(() => import("../views/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("../views/authentication/Register"))
);
const LoginRoutes = {
  path: "/login",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
