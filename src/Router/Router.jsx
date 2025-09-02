import AuthLayout from "@/Layout/AuthLayout";
import DashboardLayout from "@/Layout/DashboardLayout";
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import SignUp from "./../Pages/Authpages/SignUp";
import Login from "@/Pages/Authpages/Login";
import SelectYourRole from "@/Pages/Authpages/SelectYourRole";
import ForgetPassword from "@/Pages/Authpages/ForgetPassword";
import ChangePassword from "@/Pages/Authpages/ChangePassword";
import OtpVerification from "@/Pages/Authpages/OtpVerification";
import YouVerified from "@/Pages/Authpages/YouVerified";
import AllPages from "@/Pages/AllPages";

export const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[200px]">404</h1>
        <Link
          to="/"
          className="bg-secondaryBg  py-3 px-8 rounded-full cursor-pointer font-plus font-semibold"
        >
          Back
        </Link>
      </div>
    ),
  },
  {
    path: "/all-pages",
    element: <AllPages />,
  },
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "select-your-role",
        element: <SelectYourRole />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "otp-verification",
        element: <OtpVerification />,
      },
      {
        path: "verified",
        element: <YouVerified />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div>DashboardLayout</div>,
      },
    ],
  },
]);
