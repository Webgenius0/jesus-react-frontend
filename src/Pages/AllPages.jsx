import { Link } from "react-router-dom";

const AllPages = () => {
  const AllPagesLinks = [
    {
      link: "/auth/login",
      name: "LogIn",
    },
    {
      link: "/auth/sign-up",
      name: "SignUp",
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
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;
