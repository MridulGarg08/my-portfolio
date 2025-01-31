import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex bg-black text-white px-4 py-4 items-center justify-between w-full h-20 fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2"> Mridul</h1>
      </div>
      <ul className="hidden md:flex justify-">
        {links.map((item) => (
          <li
            key={item.id}
            className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
            <Link to={item.link} smooth duration={500}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 md:hidden"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-500 w-full h-screen text-gray-500 absolute top-0 left-0">
          {links.map((item) => (
            <li
              key={item.id}
              className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 hover:text-white duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={item.link}
                smooth
                duration={500}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
