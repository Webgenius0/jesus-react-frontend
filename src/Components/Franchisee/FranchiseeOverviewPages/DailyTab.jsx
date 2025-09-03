import React from "react";

const DailyTab = () => {
  // Sample data points for the chart
  const data = [
    { day: "09. Mo.", value: 2000, x: 50 },
    { day: "10. Tue.", value: 15000, x: 120 },
    { day: "11. Wed.", value: 19000, x: 190 },
    { day: "12. Thu.", value: 8000, x: 260 },
    { day: "13. Fri.", value: 3000, x: 330 },
    { day: "14. Sat.", value: 5000, x: 400 },
    { day: "15. Sun.", value: 6000, x: 470 },
  ];

  // Convert values to y coordinates (inverted for SVG)
  const maxValue = 20000;
  const chartHeight = 200;
  const convertToY = (value) =>
    chartHeight - (value / maxValue) * chartHeight + 20;

  // Generate SVG path for the line
  const generatePath = () => {
    return data
      .map((point, index) => {
        const command = index === 0 ? "M" : "L";
        return `${command} ${point.x} ${convertToY(point.value)}`;
      })
      .join(" ");
  };

  // Y-axis labels
  const yAxisLabels = ["0k", "5k", "10k", "15k", "20k"];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales Trend</h2>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative">
        <svg width="520" height="240" className="overflow-visible">
          {/* Horizontal grid lines */}
          {yAxisLabels.map((label, index) => (
            <g key={index}>
              <line
                x1="40"
                y1={chartHeight - index * (chartHeight / 4) + 20}
                x2="700"
                y2={chartHeight - index * (chartHeight / 4) + 20}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
              <text
                x="30"
                y={chartHeight - index * (chartHeight / 4) + 25}
                className="fill-gray-400 text-xs"
                textAnchor="end"
              >
                {label}
              </text>
            </g>
          ))}

          {/* Chart line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="#dc2626"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={convertToY(point.value)}
              r="4"
              fill="#dc2626"
              stroke="white"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
          ))}

          {/* Highlight Thursday point */}
          <circle
            cx={260}
            cy={convertToY(8000)}
            r="6"
            fill="#dc2626"
            stroke="white"
            strokeWidth="3"
            className="drop-shadow-md"
          />

          {/* Vertical dashed line for Thursday */}
          <line
            x1="260"
            y1={convertToY(8000)}
            x2="260"
            y2="240"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
        </svg>

        {/* Tooltip for Thursday */}
        <div className="absolute" style={{ left: "220px", top: "40px" }}>
          <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg">
            <div className="font-semibold text-gray-900">$3,241.00</div>
            <div className="text-xs text-gray-500">Thursday 12th May 2020</div>
          </div>
          {/* Tooltip arrow */}
          <div className="absolute left-8 -bottom-1 w-2 h-2 bg-white border-b border-r border-gray-200 rotate-45"></div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between mt-4 px-12">
          {data.map((point, index) => (
            <span key={index} className="text-xs text-gray-400">
              {point.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTab;
