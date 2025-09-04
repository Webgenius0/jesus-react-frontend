import { AllImages } from "@/Components/Allimages/AllImages";
import AccountSettings from "@/Components/Franchisee/FranchiseeSettings/AccountSettings";
import ProfileInformation from "@/Components/Franchisee/FranchiseeSettings/ProfileInformation";
import React from "react";

export default function FranchiseeSettings() {
  return (
    <div className="space-y-12">
      <div className="flex gap-6 items-center">
        <img src={AllImages.Avatar} alt="" />

        <div className="flex flex-col">
          <div className="flex gap-4">
            <h1 className="text-2xl font-semibold text-black">Jane Johnson</h1>
            <p className="text-lg text-[#757575]">FR-#0305</p>
          </div>
          <div className="flex gap-4">
            <li className="text-[#1DB435]">Active</li>
            <p className="text-sm text-[#757575]">Member since Jan 15, 2023</p>
          </div>
        </div>
      </div>
      <ProfileInformation />
      <AccountSettings />
    </div>
  );
}
