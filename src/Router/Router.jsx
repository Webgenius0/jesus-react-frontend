import AuthLayout from "@/Layout/AuthLayout";
import DashboardLayout from "@/Layout/GeneralManagerDashboardLayout";
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import SignUp from "./../Pages/Authpages/SignUp";
import Login from "@/Pages/Authpages/Login";
import SelectYourRole from "@/Pages/Authpages/SelectYourRole";
import ForgetPassword from "@/Pages/Authpages/ForgetPassword";
import ChangePassword from "@/Pages/Authpages/ChangePassword";
import YouVerified from "@/Pages/Authpages/YouVerified";
import AllPages from "@/Pages/AllPages";
import PasswordChangedSuccessfully from "@/Pages/Authpages/PasswordChangedSuccessfully";
import FranchiseeDashboardLayout from "@/Layout/FranchiseeDashboardLayout";
import GeneralManagerDashboardLayout from "@/Layout/GeneralManagerDashboardLayout";
import TrainerDashboardLayout from "@/Layout/TrainerDashboardLayout";
import FranchiseeOverview from "./../Pages/FranchiseeDashboardPages/FranchiseeOverview";
import OtpVerificationPages from "@/Pages/Authpages/OtpVerificationPages";
import AllProducts from "@/Pages/FranchiseeDashboardPages/AllProducts";
import Cart from "@/Pages/FranchiseeDashboardPages/Cart";
import ForgetOtpVerificationPages from "@/Pages/Authpages/ForgetOtpVerificationPages";
import StaffReports from "@/Pages/FranchiseeDashboardPages/StaffReports";
import RoyaltyPayments from "@/Pages/FranchiseeDashboardPages/RoyaltyPayments";

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
        path: "otp-verification",
        element: <OtpVerificationPages />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "forget-otp-verification",
        element: <ForgetOtpVerificationPages />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "verified",
        element: <YouVerified />,
      },
      {
        path: "successfully",
        element: <PasswordChangedSuccessfully />,
      },
    ],
  },
  {
    path: "/franchisee-dashboard",
    element: <FranchiseeDashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <FranchiseeOverview />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "staff-reports",
        element: <StaffReports />,
      },
      {
        path: "royalty-Payments",
        element: <RoyaltyPayments />,
      },
    ],
  },

  {
    path: "/general-manager-dashboard",
    element: <GeneralManagerDashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <div>GeneralManagerDashboardLayout</div>,
      },
    ],
  },

  {
    path: "/trainer-dashboard",
    element: <TrainerDashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <div>TrainerDashboardLayout</div>,
      },
    ],
  },
]);
