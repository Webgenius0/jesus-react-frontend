import { AllImages } from "@/Components/Allimages/AllImages";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // 👈 import toast

export default function SelectYourRole() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedRole = watch("role");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Selected Role:", data.role);
    navigate("/auth/sign-up");
  };

  useEffect(() => {
    if (errors.role) {
      toast.error("Please select a role");
    }
  }, [errors.role]);

  return (
    <main className="bg-PrimaryBg min-h-screen relative z-1 after:absolute after:top-0 after:left-0 after:w-full after:h-[50vh] after:bg-white after:-z-1 py-[30px]">
      <div className="max-w-[719px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={AllImages.Logo} className="w-[280px] h-[88px]" alt="" />
          <h1 className="text-3xl font-semibold my-3">Select Your Role</h1>
          <p className="text-2xl font-light text-center mb-6">
            Select the role from below and use dashboard to manage your works
          </p>
        </div>

        <div className="py-12 px-16 bg-PrimaryBg flex flex-col justify-center items-center rounded-[48px] fromBox-shadow w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            {/* Franchisee */}
            <label
              className={`flex justify-center items-center border p-4 rounded-xl cursor-pointer bg-white ${
                selectedRole === "Franchisee"
                  ? "border-3 border-yellow-500"
                  : "border-3 border-transparent"
              }`}
            >
              <h1>Franchisee</h1>
              <input
                type="radio"
                value="Franchisee"
                {...register("role", { required: true })}
                className="hidden"
              />
            </label>

            {/* General Manager */}
            <label
              className={`flex justify-center items-center border p-4 rounded-xl cursor-pointer bg-white ${
                selectedRole === "General Manager"
                  ? "border-3 border-yellow-500"
                  : "border-3 border-transparent"
              }`}
            >
              <h1>General Manager</h1>
              <input
                type="radio"
                value="General Manager"
                {...register("role", { required: true })}
                className="hidden"
              />
            </label>

            {/* Trainer */}
            <label
              className={`flex justify-center items-center border p-4 rounded-xl cursor-pointer bg-white ${
                selectedRole === "Trainer"
                  ? "border-3 border-yellow-500"
                  : "border-3 border-transparent"
              }`}
            >
              <h1>Trainer</h1>
              <input
                type="radio"
                value="Trainer"
                {...register("role", { required: true })}
                className="hidden"
              />
            </label>

            <div className="flex justify-center my-6">
              <button
                type="submit"
                className="bg-white py-3 px-16 rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
