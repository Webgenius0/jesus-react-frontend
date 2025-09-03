import StaffUserSVG from "@/Components/Svg/FranchiseeDashboardSVG/StaffUserSVG";
import useGetStaffReportsBottomSectionTab from "@/hook/FranchiseeDashboardHook/StaffReports/list/useGetStaffReportsBottomSectionTab";
import React, { useState } from "react";

const staffReportsBottomSectionTabTrainer = [
  {
    id: 1,
    status: "Session Completed",
    timestamp: "1h ago",
    session_type: "Yoga Training",
    description: "Morning yoga session completed successfully",
    trainer_name: "Emily Clark",
  },
  {
    id: 2,
    status: "Session Scheduled",
    timestamp: "3h ago",
    session_type: "Strength Training",
    description: "Afternoon strength training session scheduled",
    trainer_name: "David Lee",
  },
  {
    id: 3,
    status: "Session In Progress",
    timestamp: "30m ago",
    session_type: "Cardio Training",
    description: "Cardio session currently in progress",
    trainer_name: "Sophia Brown",
  },
];

export default function StaffReportsBottomSectionTab() {
  const [activeTab, setActiveTab] = useState("GM Activity");

  const tabs = ["GM Activity", "Trainer Activity"];

  const { staffReportsBottomSectionTab } = useGetStaffReportsBottomSectionTab();

  return (
    <main>
      <div className="flex gap-4 items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-5  cursor-pointer transition-colors font-medium ${
              activeTab === tab
                ? "text-PrimaryBg border-b-2 border-PrimaryBg"
                : "Bg border-b-2 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "GM Activity" && (
          <div className="grid lg:grid-cols-3 w-full gap-4">
            {staffReportsBottomSectionTab.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-white flex flex-col gap-4"
              >
                <div className="text-[#2F2F2F] flex justify-between">
                  <h1 className="text-xl font-semibold">{item.status}</h1>
                  <p className="text-base text-gray-400">{item.timestamp}</p>
                </div>
                <p className="text-[#757575] text-lg font-light">
                  {item.task_type}
                </p>
                <p className="text-[#757575] text-lg font-light">
                  {item.description}
                </p>
                <p className="text-[#757575] text-lg font-light flex items-center gap-2">
                  <StaffUserSVG />
                  Assigned by: {item.name}
                </p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Trainer Activity" && (
          <div className="flex items-center w-full gap-4">
            <div className="grid lg:grid-cols-3 w-full gap-4">
              {staffReportsBottomSectionTabTrainer.map((item) => (
                <div
                  key={item.id}
                  className="p-8 rounded-2xl bg-white flex flex-col gap-4"
                >
                  <div className="text-[#2F2F2F] flex justify-between">
                    <h1 className="text-xl font-semibold">{item.status}</h1>
                    <p className="text-base text-gray-400">{item.timestamp}</p>
                  </div>
                  <p className="text-[#757575] text-lg font-light">
                    {item.task_type}
                  </p>
                  <p className="text-[#757575] text-lg font-light">
                    {item.description}
                  </p>
                  <p className="text-[#757575] text-lg font-light flex items-center gap-2">
                    <StaffUserSVG />
                    Assigned by: {item.trainer_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
