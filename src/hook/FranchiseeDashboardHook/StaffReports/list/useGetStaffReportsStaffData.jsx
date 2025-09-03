import React from "react";

export default function useGetStaffReportsStaffData() {
  const staffReportsStaffData = [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?img=1",
      name: "John Doe",
      role: "Cashier",
      scheduleDay: "Monday",
      scheduledTime: "8 hour",
    },
    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?img=2",
      name: "Sarah Smith",
      role: "Manager",
      scheduleDay: "Tuesday",
      scheduledTime: "12 hour",
    },
    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?img=3",
      name: "Michael Brown",
      role: "Chef",
      scheduleDay: "Wednesday",
      scheduledTime: "6 hour",
    },
    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?img=4",
      name: "Emily Johnson",
      role: "Waiter",
      scheduleDay: "Thursday",
      scheduledTime: "2 hour",
    },
    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?img=4",
      name: "Emily Johnson",
      role: "Waiter",
      scheduleDay: "Thursday",
      scheduledTime: "2 hour",
    },
    {
      id: "6",
      avatar: "https://i.pravatar.cc/150?img=4",
      name: "Emily Johnson",
      role: "Waiter",
      scheduleDay: "Thursday",
      scheduledTime: "2 hour",
    },
  ];

  return { staffReportsStaffData };
}
