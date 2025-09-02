import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 30 },
  { day: "Thu", value: 40 },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 60 },
  { day: "Sun", value: 60 },
];

const CustomBarChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full ">
      <h2 className="text-black font-semibold mb-4 flex items-center">
        Labor Perce
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap={40}>
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#000", fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666", fontSize: 12 }}
            ticks={[0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60]}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar
            dataKey="value"
            fill="#E60000"
            radius={[10, 10, 10, 10]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
