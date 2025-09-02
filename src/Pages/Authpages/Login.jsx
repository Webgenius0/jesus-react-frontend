import { AllImages } from "@/Components/Allimages/AllImages";
import { Separator } from "@/Components/ui/separator";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { PiEyeThin } from "react-icons/pi";
import { PiEyeSlashThin } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    toast.success("Successfully login In !");
    navigate("/franchisee-dashboard/overview");

  };

  return (
    <main className="bg-PrimaryBg min-h-screen relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-[50vh] after:bg-white after:-z-1 py-[30px] flex flex-col justify-center items-center">
      <div className="max-w-[719px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={AllImages.Logo} className="w-[280px] h-[88px]" alt="" />
          <h1 className="text-3xl font-semibold my-3">Log in</h1>
          <p className="text-2xl font-light text-center mb-6">
            Welcome back. Let’s get to work and build something delicious. 🌮🔥
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
                  placeholder="Enter your email address"
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

            {/* - */}
            <div className="grid">
              <label className="text-base font-semibold mb-1 text-white">
                Password*
              </label>
              <div className="relative w-full">
                <input
                  placeholder="*********"
                  type={showPassword ? "text" : "password"}
                  className={`bg-white p-4 rounded-[12px] outline-0 w-full ${
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
            <Link to={"/auth/forget-password"} className="text-white flex justify-end duration-300 cursor-pointer hover:underline">
              Forgot Password
            </Link>

            <div className="flex justify-center my-6">
              <button
                type="submit"
                className="bg-white py-4 px-8 font-semibold text-PrimaryBg rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 hover:scale-105 duration-300"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="relative  flex items-center justify-center overflow-hidden w-full">
            <Separator />
            <div className="px-2 text-center text-white text-base">OR</div>
            <Separator />
          </div>

          <div className="text-white">Create account with</div>

          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <button className="bg-white py-3 px-12  rounded-xl text-center w-fit cursor-pointer flex justify-center items-center gap-2 text-base font-medium hover:scale-105 duration-300 ">
              <SiApple size={24} /> Apple
            </button>
            <button className="bg-white py-3 px-12  rounded-xl text-center w-fit cursor-pointer flex justify-center items-center gap-2 text-base font-medium hover:scale-105 duration-300 ">
              <FaGoogle size={24} /> Google
            </button>
          </div>

          <div className="mt-4 text-white">
            Didn’t have an account? <Link to={"/auth/select-your-role"}>Sign up</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
