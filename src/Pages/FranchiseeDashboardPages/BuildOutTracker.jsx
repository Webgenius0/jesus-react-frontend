import ProjectTimeline from "@/Components/Franchisee/BuildOutTrackerPages/ProjectTimeline";
import ProgressSVG from "@/Components/Svg/FranchiseeDashboardSVG/ProgressSVG";
import React from "react";

export default function BuildOutTracker() {
  return (
    <div>
      <div className="flex justify-between items-center bg-white px-6 py-4 rounded-2xl">
        <div className="">
          <h1 className="text-2xl font-semibold">Downtown TacoSpot</h1>
          <p className="text-[#5E5E5E] mt-1">Target Opening 22 June, 2025</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-2xl flex justify-center items-center gap-2 cursor-pointer">
          {" "}
          <ProgressSVG /> In Progress - Permits Phase
        </button>
      </div>{" "}
      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div className="">
          <ProjectTimeline />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
