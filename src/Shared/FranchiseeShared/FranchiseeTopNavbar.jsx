import { AllImages } from "@/Components/Allimages/AllImages";
import CartSVG from "@/Components/Svg/TopNavbar/CartSVG";
import NotificationSVG from "@/Components/Svg/TopNavbar/NotificationSVG";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

export default function FranchiseeTopNavbar() {
  const location = useLocation();

  const titles = {
    "/franchisee-dashboard/overview": "Overview",
    "/franchisee-dashboard/all-products": "Product Hub",
    "/franchisee-dashboard/cart": "Cart",
    "/franchisee-dashboard/staff-reports": "Staff Reports",
    "/franchisee-dashboard/royalty-payments": "Royalty & Payments",
    "/franchisee-dashboard/build-out-tracker": "Staff Reports",
  };

  const title = titles[location.pathname] || "Dashboard";

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="w-full">
        <h1 className="text-[32px] font-black">{title}</h1>
      </div>
      <div className="relative w-full">
        <input
          type="text"
          className="w-full px-4 pr-10 py-3 border rounded-full bg-SecondaryBg outline-0"
          placeholder="Search here..."
        />
        <CiSearch className="text-2xl absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
      </div>

      <div className="w-full flex gap-6 justify-end">
        <div className="bg-SecondaryBg rounded-2xl p-4">
          <CartSVG />
        </div>
        <div className="bg-SecondaryBg rounded-2xl p-4">
          <NotificationSVG />
        </div>
        <div className="flex items-center gap-6">
          <img src={AllImages.Avatar} alt="" />
          <div>
            <h1>Jane</h1>
            <p className="text-sm text-gray-500">Franchisee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
