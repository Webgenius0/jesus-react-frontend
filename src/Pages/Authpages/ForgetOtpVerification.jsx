import { AllImages } from "@/Components/Allimages/AllImages";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/Components/ui/input-otp";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgetOtpVerification() {
  const { handleSubmit } = useForm();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!otp || otp.length < 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    // If valid OTP
    toast.success("OTP verified successfully!");
    console.log("Entered OTP:", otp);
    navigate("/auth/change-password");
  };

  return (
    <main className="bg-PrimaryBg min-h-screen relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-[60vh] after:bg-white after:-z-1 py-[30px] flex flex-col justify-center items-center">
      <div className="max-w-[719px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={AllImages.Logo} className="w-[280px] h-[88px]" alt="" />
          <h1 className="text-3xl font-semibold my-3">Enter Your OTP Code</h1>
          <p className="text-2xl font-light text-center mb-6">
            You’re one step from greatness. Type that code — the taco world is
            waiting. 🏆🌮
          </p>
        </div>

        <div className="py-12 px-16 bg-PrimaryBg flex flex-col justify-center items-center rounded-[48px] fromBox-shadow w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="flex flex-col justify-center items-center gap-6">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup className="space-x-2">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="rounded-md bg-[#1B1B1B7A] border-l text-white w-16 h-10 data-[active=true]:ring-yellow-500"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>

              <button
                type="submit"
                className="bg-white py-3 px-16 rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300"
              >
                Verify Now
              </button>
              <button
                type="button"
                className="text-base text-white cursor-pointer"
              >
                Resend Code (60sec)
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
