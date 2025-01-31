import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-cyan-600",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-cyan-700",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the skills I'm working on</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {skills.map((item) => (
            <div
              key={item.id}
              className={
                "rounded-lg shadow-md hover:scale-105 duration-200 py-2" +
                " " +
                item.style
              }
            >
              <img
                className="mx-auto md:w-25 md:h-40"
                src={item.src}
                alt=""
              ></img>
              <p className="mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
