import React from "react";
import { Outlet } from "react-router-dom";

export default function GeneralManagerDashboardLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
