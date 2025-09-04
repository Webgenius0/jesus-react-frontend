import ProjectTimeline from "@/Components/Franchisee/BuildOutTrackerPages/ProjectTimeline";
import BrowseFilesSVG from "@/Components/Svg/FranchiseeDashboardSVG/BrowseFilesSVG";
import ProgressSVG from "@/Components/Svg/FranchiseeDashboardSVG/ProgressSVG";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { CiClock2, CiMedicalCross } from "react-icons/ci";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const vendors = [
  {
    id: 1,
    name: "Vendor Company 1",
    category: "Furniture & Fixtures",
    hasProfileImage: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bright Lights Co.",
    category: "Lighting Solutions",
    hasProfileImage: false,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Eco Paint Supplies",
    category: "Paint & Finishes",
    hasProfileImage: true,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Communication = [
  {
    id: 1,
    name: "Communication",
    title: "Submitted site plan on June 5",
    submitted: "Submitted 2h ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "Corporate",
    title: "Reviewed — waiting on contractor confirmation.",
    submitted: "Submitted 2h ago",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

export default function BuildOutTracker() {
  const [files, setFiles] = useState([
    {
      name: "Permits-scan.pdf",
      status: "Approved by Corporate",
      icon: "approved",
    },
    { name: "Site Plan.jpg", status: "Pending review", icon: "pending" },
  ]);

  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      status: "Pending review",
      icon: "pending",
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white px-6 py-4 rounded-2xl">
        <div>
          <h1 className="text-2xl font-semibold">Downtown TacoSpot</h1>
          <p className="text-[#5E5E5E] mt-1">Target Opening 22 June, 2025</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-2xl flex justify-center items-center gap-2 cursor-pointer">
          <ProgressSVG /> In Progress - Permits Phase
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-8">
        <div>
          <ProjectTimeline />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">
            Current Step: Permits Submitted
          </h1>

          {/* File upload */}
          <div className="mt-6">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="border border-dashed border-[#E5E5E5] px-4 bg-white rounded-2xl flex justify-center items-center gap-2 cursor-pointer flex-col py-6 space-y-2"
            >
              <BrowseFilesSVG />
              <p>Drag and drop files here or</p>
              <span className="bg-PrimaryBg text-white px-4 py-2 rounded-2xl cursor-pointer">
                Browse Files
              </span>
            </label>
          </div>

          {/* File list */}

          <div className="h-[200px] overflow-y-scroll custom-scrollbar my-4 ">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-4  bg-white p-4 rounded-2xl border mr-4"
              >
                <div className="flex flex-col">
                  <h1 className="text-xl font-light">{file.name}</h1>
                  <p
                    className={`text-base ${
                      file.icon === "approved"
                        ? "text-[#22C55E]"
                        : "text-[#E27100]"
                    }`}
                  >
                    {file.status}
                  </p>
                </div>
                {file.icon === "approved" ? (
                  <IoIosCheckmarkCircle size={24} className="text-green-500" />
                ) : (
                  <CiClock2 size={24} className="text-[#E27100]" />
                )}
              </div>
            ))}
          </div>

          {/* Approved Vendor */}

          <div className="mb-8 ">
            <h1 className="text-2xl font-semibold">Approved Vendor</h1>

            <div className="space-y-4 mt-6">
              {vendors.map((item) => (
                <div
                  onClick={() => setSelectedVendor(item)}
                  className="flex items-center gap-4 bg-white p-4 border rounded-2xl cursor-pointer"
                >
                  <img
                    src={item.avatar}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <div className="">
                    <h1 className="text-xl font-light text-black mb-1">
                      {item.name}
                    </h1>
                    <p className="text-base text-[#454545]">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Modal for vendor details */}
            {selectedVendor && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
                <div className="bg-white rounded-2xl p-6 w-[500px] relative">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={selectedVendor.avatar}
                      className="w-18 h-18 rounded-full"
                      alt={selectedVendor.name}
                    />
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">
                        {selectedVendor.name}
                      </h2>
                      <p className=" bg-[#FFD500] p-2 rounded-full flex justify-center">
                        {selectedVendor.category}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-black" />
                      <h1>John Smith</h1>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-black" />
                      <h1>+123 456 789</h1>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-black" />
                      <h1>vendor@gmail.com</h1>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center mt-4">
                    <p className="bg-[#E8E8E8] p-2 rounded-full text-[#5A5C5F]">
                      Contract
                    </p>
                    <p className="bg-[#E8E8E8] p-2 rounded-full text-[#5A5C5F]">
                      Certification
                    </p>
                  </div>

                  <div className="w-full mt-4">
                    <button className="px-4 py-2 bg-black text-white rounded-lg w-full cursor-pointer">
                      Contract
                    </button>
                  </div>

                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setSelectedVendor(null)}
                      className=" cursor-pointer"
                    >
                      <IoCloseOutline size={26} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Communication Thread */}
          <div className="mb-8 bg-white p-4 rounded-2xl">
            <h1 className="text-2xl font-semibold">Communication Thread</h1>

            <div className="space-y-4 mt-6">
              {Communication.map((item) => (
                <div className="flex items-center gap-4 bg-white p-4 border rounded-2xl ">
                  <img
                    src={item.avatar}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <div className="">
                    <h1 className="text-xl  text-black mb-1">{item.name}</h1>
                    <p className="text-base text-[#454545] font-light">
                      {item.title}
                    </p>
                    <p className="text-base text-[#A3A3A3] font-light">
                      {item.submitted}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-4 items-center mt-4">
              <input
                type="text"
                placeholder="Type your message"
                className="w-full px-4 py-3 border rounded-full bg-white outline-0 "
              />
              <IoIosSend size={34} className="text-PrimaryBg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
