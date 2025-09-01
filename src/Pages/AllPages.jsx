import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    {
      link: "/login",
      element: "LogIn",
    },
    {
      link: "/sign-up",
      element: "SignUp",
    },
    {
      link: "/select-your-role",
      element: "Select Your Role",
    },
    {
      link: "/forget-password",
      element: "Forget Password",
    },
    {
      link: "/change-password",
      element: "Change Password",
    },
    {
      link: "/otp-verification",
      element: "otp verification",
    },
    {
      link: "/verified",
      element: "You Verified",
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
