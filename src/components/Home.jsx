import React from "react";
import hero from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-32 pb-8 w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ml-auto">
          <h2 className="text-4xl sm:text-6xl text-white font-bold max-w-md">
            Hi, I am Mridul Garg
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Aspiring Software Engineer Seeking To Craft Innovative Solutions . .
            .
          </p>
          <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className="group text-white cursor-pointer w-fit px-6 py-3 rounded-md flex items-center bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-full h-auto my-auto w-3/5 mx-auto md:w-3/5 sm:w-1/3"
            src={hero}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
