import RoyaltyPaymentsTable from "@/Components/Franchisee/FranchiseeRoyaltyPaymentsPages/RoyaltyPaymentsTable";
import RoyaltyPaymentsTopSection from "@/Components/Franchisee/FranchiseeRoyaltyPaymentsPages/RoyaltyPaymentsTopSection";
import React from "react";

export default function RoyaltyPayments() {
  return (
    <div className="space-y-12">
      <RoyaltyPaymentsTopSection />
      <RoyaltyPaymentsTable />
    </div>
  );
}
