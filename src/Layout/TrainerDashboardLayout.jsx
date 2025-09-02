import React from "react";
import { Outlet } from "react-router-dom";

export default function TrainerDashboardLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
