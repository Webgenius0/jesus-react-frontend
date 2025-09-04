import React from "react";
import {
  CheckCircle,
  FileText,
  Calendar,
  Hammer,
  Search,
  Home,
  Flag,
} from "lucide-react";
import SiteSecuredSVG from "@/Components/Svg/FranchiseeDashboardSVG/SiteSecuredSVG";
import LeaseAgreementSVG from "@/Components/Svg/FranchiseeDashboardSVG/LeaseAgreementSVG";
import PermitsSubmissionSVG from "@/Components/Svg/FranchiseeDashboardSVG/PermitsSubmissionSVG";
import ConstructionSVG from "@/Components/Svg/FranchiseeDashboardSVG/ConstructionSVG";
import InspectionsSVG from "@/Components/Svg/FranchiseeDashboardSVG/InspectionsSVG";
import InteriorSetupSVG from "@/Components/Svg/FranchiseeDashboardSVG/InteriorSetupSVG";
import FinalWalkthroughSVG from "@/Components/Svg/FranchiseeDashboardSVG/FinalWalkthroughSVG";
import SoftLaunchSVG from "@/Components/Svg/FranchiseeDashboardSVG/SoftLaunchSVG";

const ProjectTimeline = () => {
  const timelineItems = [
    {
      id: 1,
      title: "Site Secured",
      status: "completed",
      date: "May 1, 2025",
      icon: SiteSecuredSVG,
      progress: 100,
    },
    {
      id: 2,
      title: "Lease Agreement",
      status: "completed",
      date: "May 15, 2025",
      icon: LeaseAgreementSVG,
      progress: 100,
    },
    {
      id: 3,
      title: "Permits Submission",
      status: "in-progress",
      date: "June 10, 2025",
      icon: PermitsSubmissionSVG,
      progress: 75,
    },
    {
      id: 4,
      title: "Construction",
      status: "pending",
      date: "Pending",
      icon: ConstructionSVG,
      progress: 0,
    },
    {
      id: 5,
      title: "Inspections",
      status: "pending",
      date: "Pending",
      icon: InspectionsSVG,
      progress: 0,
    },
    {
      id: 6,
      title: "Interior Setup",
      status: "pending",
      date: "Pending",
      icon: InteriorSetupSVG,
      progress: 0,
    },
    {
      id: 7,
      title: "Final Walkthrough",
      status: "pending",
      date: "Pending",
      icon: FinalWalkthroughSVG,
      progress: 0,
    },
    {
      id: 8,
      title: "Soft Launch",
      status: "scheduled",
      date: "August 12, 2025",
      icon: SoftLaunchSVG,
      progress: 0,
    },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return {
          container: "bg-white border-l-4 border-l-green-500",
          icon: "text-green-600 bg-green-50",
          checkmark: "text-green-600 bg-green-100",
          progress: "bg-green-500",
          progressBg: "bg-green-100",
        };
      case "in-progress":
        return {
          container: "bg-yellow-50 border-l-4 border-l-yellow-500",
          icon: "text-yellow-700 bg-yellow-100",
          checkmark: null,
          progress: "bg-gray-800",
          progressBg: "bg-gray-200",
        };
      case "scheduled":
        return {
          container: "bg-gray-100 border-l-4 border-l-gray-400",
          icon: "text-gray-600 bg-gray-200 ",
          checkmark: null,
          progress: "bg-gray-400",
          progressBg: "bg-gray-200",
        };
      default: // pending
        return {
          container: "bg-gray-100 border-l-4 border-l-gray-300",
          icon: "text-gray-500 bg-gray-200",
          checkmark: null,
          progress: "bg-gray-400",
          progressBg: "bg-gray-200",
        };
    }
  };

  const getStatusText = (status, date) => {
    switch (status) {
      case "completed":
        return `Completed: ${date}`;
      case "in-progress":
        return `In Progress: Due ${date}`;
      case "scheduled":
        return `Scheduled: ${date}`;
      default:
        return `Pending: ${date}`;
    }
  };

  return (
    <div className=" mx-auto p-8 bg-white  rounded-2xl">
      <div className="space-y-4">
        {timelineItems.map((item) => {
          const styles = getStatusStyles(item.status);
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className={`${styles.container} rounded-lg p-6 shadow-sm transition-all hover:shadow-md`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${styles.icon}`}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {getStatusText(item.status, item.date)}
                    </p>
                  </div>
                </div>

                {styles.checkmark && (
                  <div className={`p-2 rounded-full ${styles.checkmark}`}>
                    <CheckCircle size={20} />
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div
                className={`mt-4 w-full ${styles.progressBg} rounded-full h-2`}
              >
                <div
                  className={`${styles.progress} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTimeline;
