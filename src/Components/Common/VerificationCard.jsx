import React from "react";
import { Link } from "react-router-dom";

export default function VerificationCard({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  link,
}) {
  return (
    <main
      className="bg-PrimaryBg min-h-screen relative z-1 
      after:absolute after:top-0 after:left-0 after:w-full after:h-[50vh] after:bg-white after:-z-1 
      py-[30px] flex justify-center items-center"
    >
      <div className="max-w-[719px] mx-auto flex flex-col justify-center items-center bg-black/20 backdrop-blur-[12px] p-16 rounded-[48px] text-center">
        {image && (
          <img src={image} className="w-[360px] h-[260px]" alt="verification" />
        )}

        {title && (
          <p className="text-[40px] font-medium text-white mt-6">{title}</p>
        )}

        {description && (
          <p className="text-base text-center text-white font-normal mt-2">
            {description}
          </p>
        )}

        {buttonText && (
          <div className="flex justify-center my-6">
            <Link
            to={link}
              onClick={onButtonClick}
              className="bg-white py-3 px-16 rounded-xl text-center w-fit cursor-pointer hover:bg-gray-100 duration-300 font-semibold text-PrimaryBg"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
