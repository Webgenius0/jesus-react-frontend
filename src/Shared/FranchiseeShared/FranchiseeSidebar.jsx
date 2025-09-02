import { AllImages } from "@/Components/Allimages/AllImages";
import React from "react";
import { Link, NavLink } from "react-router-dom";

import DashboardSVG from "@/Components/Svg/FranchiseeDashboardSVG/DashboardSVG";
import ProductHubSVG from "@/Components/Svg/FranchiseeDashboardSVG/ProductHubSVG";
import StaffReportsSVG from "@/Components/Svg/FranchiseeDashboardSVG/StaffReportsSVG";
import RoyalitySVG from "@/Components/Svg/FranchiseeDashboardSVG/RoyalitySVG";
import BuildoutSVG from "@/Components/Svg/FranchiseeDashboardSVG/BuildoutSVG";
import SettingsSVG from "@/Components/Svg/FranchiseeDashboardSVG/SettingsSVG";

export const NavItems = [
  { to: "/franchisee-dashboard/overview", label: "Dashboard", Icon: DashboardSVG },
  { to: "/dashboard", label: "Product Hub", Icon: ProductHubSVG },
  { to: "/dashboard", label: "Staff Reports", Icon: StaffReportsSVG },
  { to: "/dashboard", label: "Royalty & Payments", Icon: RoyalitySVG },
  { to: "/dashboard", label: "Buildout Tracker", Icon: BuildoutSVG },
  { to: "/dashboard", label: "Settings", Icon: SettingsSVG },
];

const FranchiseeSidebar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link to="/franchisee-dashboard">
          <img
            className="py-6 w-[221px] h-[120px]"
            src={AllImages.Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="px-6 space-y-3">
        {NavItems.map(({ to, label, Icon, index }) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 text-base py-3 px-4 rounded-[8px] font-medium font-plus  ${
                isActive
                  ? "text-white bg-PrimaryBg font-medium"
                  : "text-[#757575] hover:bg-gray-300 hover:text-white"
              }`
            }
          >
            {/* This is where Icon must be used */}
            <Icon
              className="group-hover:[&>path]:fill-black w-6 h-6"
              fillColor="currentColor"
            />
            <p>{label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FranchiseeSidebar;
