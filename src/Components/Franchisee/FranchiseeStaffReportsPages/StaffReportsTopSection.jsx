import React from "react";
import { UserCheck, Clock, CheckCircle } from "lucide-react";

export default function StaffReportsTopSection() {
  const staffReportsTopSectionMetrics = [
    { id: 1, value: "38/32", label: "Staff Attendance", Icon: UserCheck },
    { id: 2, value: "134", label: "Work Hours/ week", Icon: Clock },
    { id: 3, value: "58/75", label: "Completed Task", Icon: CheckCircle },
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        {staffReportsTopSectionMetrics.map(({ id, value, label, Icon }) => (
          <div
            key={id}
            className="p-6 rounded-lg bg-white flex flex-col gap-4"
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
    </div>
  );
}
