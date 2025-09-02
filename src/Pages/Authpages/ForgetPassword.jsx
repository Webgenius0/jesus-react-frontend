import { AllImages } from "@/Components/Allimages/AllImages";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)

    navigate("/auth/forget-otp-verification");

  };

  return (
    <main className="bg-PrimaryBg min-h-screen relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-[60vh] after:bg-white after:-z-1 py-[30px] flex flex-col justify-center items-center">
      <div className="max-w-[719px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={AllImages.Logo} className="w-[280px] h-[88px]" alt="" />
          <h1 className="text-3xl font-semibold my-3">Forget Your Password?</h1>
          <p className="text-2xl font-light text-center mb-6">
            No worries — let’s help you get back into the conversation.
          </p>
        </div>

        <div className="py-12 px-16 bg-PrimaryBg flex flex-col justify-center items-center  rounded-[48px] fromBox-shadow w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            {/* - */}
            <div className="grid w-full">
              <label className="text-base font-semibold mb-1 text-white w-full">
                Email Address*
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className={`bg-white p-4 rounded-[12px] outline-0 w-full ps-12 ${
                    errors.emailAddress
                      ? "border-2 border-yellow-500"
                      : "border-2 border-transparent"
                  }`}
                  {...register("emailAddress", { required: true })}
                />
                <div className="absolute left-4 top-4.5 text-PrimaryText">
                  <CiMail size={22} />
                </div>
              </div>
            
            </div>

            <div className="flex justify-center my-6">
              <button
                type="submit"
                className="bg-white py-4 px-8  rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
