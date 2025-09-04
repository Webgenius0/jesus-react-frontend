import {
  EditIcon,
  UserIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ProfileInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "Jahirul",
    lastName: "Islam",
    emailAddress: "jahirulislamrayhan07@gmail.com",
    phoneNumber: "+44 77700 900123",
    location: "22 King St, Manchester, UK",
    franchiseStatus: "Active",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const onSubmit = (data) => {
    // Here you can post `data` to your API
    console.log("Form Data:", data);
    setUser(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset(user); // Reset the form to current user data
    setIsEditing(false);
  };

  const profileFields = [
    { label: "First Name", key: "firstName", icon: UserIcon },
    { label: "Last Name", key: "lastName", icon: UserIcon },
    { label: "Email Address", key: "emailAddress", icon: MailIcon },
    { label: "Phone Number", key: "phoneNumber", icon: PhoneIcon },
    { label: "Location", key: "location", icon: MapPinIcon },
    { label: "Franchise Status", key: "franchiseStatus", icon: ShieldCheckIcon },
  ];
  const profileFields2 = [
    { label: "First Name", key: "firstName", icon: UserIcon },
    { label: "Last Name", key: "lastName", icon: UserIcon },
    { label: "Email Address", key: "emailAddress", icon: MailIcon },
    { label: "Phone Number", key: "phoneNumber", icon: PhoneIcon },
    { label: "Location", key: "location", icon: MapPinIcon },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Profile Information</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="text-lg text-black cursor-pointer flex items-center gap-2"
        >
          <EditIcon size={20} /> Edit
        </button>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-3 gap-6 mt-5 text-gray-800">
        {profileFields.map((field, idx) => {
          const Icon = field.icon;
          return (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon className="text-[#FFD500]" size={18} />
                <h1 className="text-sm font-light text-[#5E5E5E]">{field.label}</h1>
              </div>
              <p className="text-lg">{user[field.key]}</p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[600px] relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Edit Information</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
              {profileFields2.map((field, idx) => {
                const Icon = field.icon;
                return (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="text-[#FFD500]" size={18} />
                      <h1 className="text-sm font-medium  text-[#5E5E5E] ">{field.label}</h1>
                    </div>
                    <input
                      type={field.key === "emailAddress" ? "email" : "text"}
                      {...register(field.key, { required: true })}
                      className="border rounded-md py-3 px-4 bg-gray-200"
                    />
                    {errors[field.key] && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                  </div>
                );
              })}

              <div className="flex justify-between gap-2 mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="p-3 cursor-pointer border text-black rounded-md w-full "
                >
                  Cancel
                </button>
                <button type="submit" className="p-3 cursor-pointer bg-PrimaryBg text-white rounded-md w-full">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
