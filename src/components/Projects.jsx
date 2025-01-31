import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import readhaven from "../assets/portfolio/readhaven.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import portfolio from "../assets/portfolio/portfolio.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: readhaven,
    },
    {
      id: 2,
      src: portfolio,
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen md:pt-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {project.map((item) => (
            <div
              key={item.id}
              className="-mx-2 shadow-md  shadow-gray-600 rounded-lg hover:scale-105 duration-500"
            >
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={item.src}
                alt=""
              ></img>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-500 hover:rounded-md">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gray-500 hover:rounded-md">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
