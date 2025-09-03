import React from "react";
import { DollarSign, Percent, Users, Star } from "lucide-react";


import FranchiseeOverviewCharts from "@/Components/Franchisee/FranchiseeOverviewPages/FranchiseeOverviewCharts";
import SalesDataUploadTable from "@/Components/Franchisee/FranchiseeOverviewPages/SalesDataUploadTable";

const overviewMetrics = [
  { id: 1, value: "$2165", label: "Today's Sale", Icon: DollarSign },
  { id: 2, value: "24%", label: "Labor Percentage", Icon: Percent },
  { id: 3, value: 32, label: "Active Staff", Icon: Users },
  { id: 4, value: "8.2/10", label: "Franchise Score", Icon: Star },
];

export default function FranchiseeOverview() {
  return (
    <main className="space-y-8">
      <div className="grid lg:grid-cols-4 gap-4">
        {overviewMetrics.map(({ id, value, label, Icon }) => (
          <div
            key={id}
            className="p-6 rounded-lg  bg-white flex flex-col  gap-4"
          >
            <div className="p-4 rounded-full bg-[#fde6e6] w-fit">
              <Icon className="w-6 h-6 text-PrimaryBg" />
            </div>
            <div className="text-[#2F2F2F]">
              <h1 className="text-3xl font-semibold">{value}</h1>
              <p className="text-xl mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
      <FranchiseeOverviewCharts />
      <SalesDataUploadTable/>
    </main>
  );
}
