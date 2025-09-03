import React, { useState } from "react";

import CustomBarChart from "./CustomBarChart";
import DailyTab from "./DailyTab";


export default function FranchiseeOverviewCharts() {
  const [activeTab, setActiveTab] = useState("Daily");

  const tabs = ["Daily", "Weekly", "Monthly"];

  return (
    <main>
      <div className="flex gap-4 items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-5 rounded-xl cursor-pointer transition-colors ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "Daily" && (
          <div className="flex items-center w-full gap-4">
            <DailyTab />
            <CustomBarChart />
          </div>
        )}
        {activeTab === "Weekly" && (
          <div className="flex items-center w-full gap-4">
            <DailyTab />
            <CustomBarChart />
          </div>
        )}
        {activeTab === "Monthly" && (
          <div className="flex items-center w-full gap-4">
            <DailyTab />
            <CustomBarChart />
          </div>
        )}
      </div>
    </main>
  );
}
