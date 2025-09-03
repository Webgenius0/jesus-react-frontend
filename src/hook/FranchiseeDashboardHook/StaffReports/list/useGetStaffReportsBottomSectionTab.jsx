export default function useGetStaffReportsBottomSectionTab() {
  const staffReportsBottomSectionTab = [
    {
      id: 1,
      status: "Task Completed",
      timestamp: "2h",
      task_type: "Maintenance Check",
      description: "Equipment maintenance completed as scheduled",
      name: "John Smith",
    },
    {
      id: 2,
      status: "Task Pending",
      timestamp: "4h",
      task_type: "Safety Inspection",
      description: "Monthly safety inspection due today",
      name: "Sarah Johnson",
    },
    {
      id: 3,
      status: "Task In Progress",
      timestamp: "1h",
      task_type: "System Update",
      description: "Software system update in progress",
      name: "Mike Davis",
    },
  ];

  return { staffReportsBottomSectionTab };
}
