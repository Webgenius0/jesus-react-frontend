import { AllImages } from "@/Components/Allimages/AllImages";
import VerificationCard from "@/Components/Common/VerificationCard";
import React from "react";

export default function PasswordChangedSuccessfully() {
  return (
    <div>
      <VerificationCard
        image={AllImages.verified}
        title="Password Changed Successfully"
        description="You're all set! Your password has been updated welcome back securely."
        buttonText="Go To Login"
        link="/auth/login"
      />
    </div>
  );
}
