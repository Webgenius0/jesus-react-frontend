import FranchiseeSidebar from "@/Shared/FranchiseeShared/FranchiseeSidebar";
import FranchiseeTopNavbar from "@/Shared/FranchiseeShared/FranchiseeTopNavbar";
import React from "react";
import { Outlet } from "react-router-dom";

const FranchiseeDashboardLayout = () => {
  return (
    <main className="w-full h-screen flex relative ">
      <div className="xl:w-[280px] h-screen   bg-white">
        <FranchiseeSidebar />
      </div>
      {/* Main Content */}
      <div className="flex flex-col w-full xl:w-[calc(100%-280px)] h-screen overflow-hidden  ">
        <div className="w-full xl:h-[80px] flex flex-col justify-center  px-8 py-5  ">
          <FranchiseeTopNavbar />
        </div>
        <div className="w-full h-[calc(100%-80px)] overflow-auto custom-scrollbar py-6 bg-[#fcf9f4] px-9">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default FranchiseeDashboardLayout;
