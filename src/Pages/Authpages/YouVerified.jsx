import { AllImages } from "@/Components/Allimages/AllImages";
import React from "react";
import { useForm } from "react-hook-form";

export default function YouVerified() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const selectedRole = watch("role");

  const onSubmit = (data) => {
    console.log("Selected Role:", data.role);
  };

  return (
   <main className="bg-PrimaryBg min-h-screen relative z-1 
  after:absolute after:top-0 after:left-0 after:w-full after:h-[50vh] after:bg-white after:-z-1 
  py-[30px] flex justify-center items-center">
  <div className="max-w-[719px] mx-auto flex flex-col justify-center items-center bg-black/20 backdrop-blur-[12px] p-16 rounded-[48px]">
    <img src={AllImages.verified} className="w-[360px] h-[260px]" alt="" />
    <p className="text-[40px] font-medium text-white mt-6">You’re Verified!</p>
    <p className="text-base text-center text-white font-normal">
      Welcome back — you're all set to dive into the latest stories and join
      the conversation.
    </p>
    <div className="flex justify-center my-6">
      <button
        type="submit"
        className="bg-white py-3 px-16 rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300 font-semibold"
      >
        Select Role
      </button>
    </div>
  </div>
</main>

  );
}
