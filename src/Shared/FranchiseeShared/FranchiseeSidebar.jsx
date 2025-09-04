import { useState } from "react";
import { AllImages } from "@/Components/Allimages/AllImages";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import DashboardSVG from "@/Components/Svg/FranchiseeDashboardSVG/DashboardSVG";
import ProductHubSVG from "@/Components/Svg/FranchiseeDashboardSVG/ProductHubSVG";
import StaffReportsSVG from "@/Components/Svg/FranchiseeDashboardSVG/StaffReportsSVG";
import RoyalitySVG from "@/Components/Svg/FranchiseeDashboardSVG/RoyalitySVG";
import BuildoutSVG from "@/Components/Svg/FranchiseeDashboardSVG/BuildoutSVG";
import SettingsSVG from "@/Components/Svg/FranchiseeDashboardSVG/SettingsSVG";
import { IoIosArrowDown } from "react-icons/io";

export const NavItems = [
  {
    to: "/franchisee-dashboard/overview",
    label: "Dashboard",
    Icon: DashboardSVG,
  },
  {
    to: "/franchisee-dashboard",
    label: "Product Hub",
    Icon: ProductHubSVG,
    children: [
      { to: "/franchisee-dashboard/all-products", label: "All Products" },
      { to: "/franchisee-dashboard/cart", label: "Cart" },
    ],
  },
  {
    to: "/franchisee-dashboard/staff-reports",
    label: "Staff Reports",
    Icon: StaffReportsSVG,
  },
  {
    to: "/franchisee-dashboard/royalty-Payments",
    label: "Royalty & Payments",
    Icon: RoyalitySVG,
  },
  {
    to: "/franchisee-dashboard/buildout",
    label: "Buildout Tracker",
    Icon: BuildoutSVG,
  },
  {
    to: "/franchisee-dashboard/settings",
    label: "Settings",
    Icon: SettingsSVG,
  },
];

const FranchiseeSidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

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
        {NavItems.map(({ to, label, Icon, children }) => {
          const isParentActive =
            location.pathname === to ||
            (children &&
              children.some((c) => location.pathname.startsWith(c.to)));

          return (
            <div key={label}>
              <NavLink
                end
                to={to}
                onClick={(e) => {
                  if (children) {
                    e.preventDefault();
                    toggleMenu(label);
                  }
                }}
                className={`flex items-center justify-between text-base py-3 px-4 rounded-[8px] font-medium font-plus ${
                  isParentActive
                    ? "text-white bg-PrimaryBg"
                    : "text-[#757575] hover:bg-gray-300 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-6 h-6" fillColor="currentColor" />
                  <p>{label}</p>
                </div>
                {children && (
                  <span>
                    {openMenu === label ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowDown className="rotate-180" />
                    )}
                  </span>
                )}
              </NavLink>

              {children && openMenu === label && (
                <div className="ml-10 mt-2 space-y-2">
                  {children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-md ${
                          isActive
                            ? " text-PrimaryBg"
                            : "text-[#757575] hover:bg-gray-300 hover:text-white"
                        }`
                      }
                    >
                      <li>{child.label}</li>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FranchiseeSidebar;
