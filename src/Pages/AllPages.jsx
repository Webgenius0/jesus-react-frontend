import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    {
      link: "/auth/login",
      element: "LogIn",
    },
    {
      link: "/auth/sign-up",
      element: "SignUp",
    },
    {
      link: "/auth/select-your-role",
      element: "Select Your Role",
    },
    {
      link: "/auth/forget-password",
      element: "Forget Password",
    },
    {
      link: "/auth/forget-otp-verification",
      element: "Forge otp verification",
    },
    {
      link: "/auth/change-password",
      element: "Change Password",
    },
    {
      link: "/auth/otp-verification",
      element: "otp verification",
    },
    {
      link: "/auth/verified",
      element: "You Verified",
    },
    {
      link: "/franchisee-dashboard/overview",
      element: "Franchisee Dashboard Overview",
    },
    {
      link: "/franchisee-dashboard/all-products",
      element: "All products",
    },
    {
      link: "/franchisee-dashboard/cart",
      element: "cart",
    },
    {
      link: "/franchisee-dashboard/staff-reports",
      element: "Staff reports",
    },
    {
      link: "/franchisee-dashboard/royalty-payments",
      element: "Royalty Payments",
    },
    {
      link: "/franchisee-dashboard/build-out-tracker",
      element: "Build Out Tracker",
    },
  ];

  return (
    <div className="py-28 px-20">
      <h1 className="text-4xl font-bold mb-10">All Pages</h1>
      <ul className="text-xl flex flex-col gap-4">
        {AllPagesLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              target="_blank"
              className="text-black duration-300"
            >
              {item.element}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;
