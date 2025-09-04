import { FaDollarSign, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function RoyaltyPaymentsTopSection() {
  const royaltyPaymentsTopSectiondata = [
    {
      id: 1,
      label: "Total Royalties Paid",
      amount: <div className="text-3xl text-PrimaryBg">$1,000,000</div>,
      Icon: FaDollarSign,
    },
    {
      id: 2,
      label: "Last Payment Date",
      amount: "July 07, 2025",
      Icon: FaCalendarAlt,
    },
    {
      id: 3,
      label: "Next Payment Date",
      amount: "August 07, 2025",
      Icon: FaClock,
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {royaltyPaymentsTopSectiondata.map((item) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={item.id}
            className="p-6 rounded-lg bg-white flex flex-col gap-4"
          >
            <div className="p-4 rounded-full bg-[#fde6e6] w-fit">
              <IconComponent className="w-6 h-6 text-PrimaryBg" />
            </div>
            <div className="text-[#2F2F2F]">
              <h1 className="text-3xl font-semibold">{item.amount}</h1>
              <p className="text-xl mt-1">{item.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
