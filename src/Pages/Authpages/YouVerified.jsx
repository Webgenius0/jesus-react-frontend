import { AllImages } from "@/Components/Allimages/AllImages";
import VerificationCard from "@/Components/Common/VerificationCard";
import React from "react";

export default function YouVerified() {
  return (
    <div className="">
      <VerificationCard
        image={AllImages.verified}
        title="You’re Verified!"
        description="Welcome back — you're all set to dive into the latest stories and join the conversation."
        buttonText="Select Role"
        onButtonClick={() => console.log("Select Role clicked")}
        link="/auth/login"
      />
    </div>
  );
}
