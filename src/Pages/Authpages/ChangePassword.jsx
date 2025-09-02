import { AllImages } from "@/Components/Allimages/AllImages";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/auth/successfully");

  };

  return (
    <main className="bg-PrimaryBg min-h-screen relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-[60vh] after:bg-white after:-z-1 py-[30px] flex flex-col justify-center items-center">
      <div className="max-w-[719px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={AllImages.Logo} className="w-[280px] h-[88px]" alt="" />
          <h1 className="text-3xl font-semibold my-3">Change Your Password</h1>
          <p className="text-2xl font-light text-center mb-6">
            Time for a fresh start — set a new password to keep your account
            secure.
          </p>
        </div>

        <div className="py-12 px-16 bg-PrimaryBg flex flex-col justify-center items-center  rounded-[48px] fromBox-shadow ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
            {/* - */}
            <div className="grid">
              <label className="text-base font-semibold mb-1 text-white">
                Password*
              </label>
              <div className="relative w-full">
                <input
                  placeholder="*********"
                  type={showPassword ? "text" : "password"}
                  className={`bg-white p-4 rounded-[12px] outline-0 w-full  ${
                    errors.password
                      ? "border-2 border-yellow-500"
                      : "border-2 border-transparent"
                  }`}
                  {...register("password", { required: true })}
                />
                {
                  <div className="absolute right-4 top-4.5 text-PrimaryText cursor-pointer">
                    {!showPassword ? (
                      <PiEyeSlashThin
                        size={22}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <PiEyeThin
                        size={22}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                }
              </div>
            </div>

            {/* - */}
            <div className="grid">
              <label className="text-base font-semibold mb-1 text-white">
                Confirm Password*
              </label>

              <div className="relative w-full">
                <input
                  placeholder="*********"
                  type={showConfirmPassword ? "text" : "password"}
                  className={`bg-white p-4 rounded-[12px] outline-0 w-full  ${
                    errors.confirmPassword
                      ? "border-2 border-yellow-500"
                      : "border-2 border-transparent"
                  }`}
                  {...register("confirmPassword", { required: true })}
                />
                {
                  <div className="absolute right-4 top-4.5 text-PrimaryText cursor-pointer">
                    {!showConfirmPassword ? (
                      <PiEyeSlashThin
                        size={22}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <PiEyeThin
                        size={22}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    )}
                  </div>
                }
              </div>
            </div>

            <div className="flex justify-center my-6">
              <button
                type="submit"
                className="bg-white py-4 px-8  rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
