import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </h1>
        </div>
        <br />

        <p className="text-xl">
          I am an enthusiastic and dedicated student with a strong passion for
          software engineering, I take great pride in my exceptional academic
          track record. My commitment to learning and my ability to grasp
          complex concepts have been key factors in my academic success.
        </p>
        <br />

        <p className="text-xl">
          I am well-versed in data structures, algorithms, and problem-solving.
          I also have hands-on experience with web development technologies,
          such as HTML, CSS, and TailwindCSS. My academic journey has provided
          me with a solid foundation in object-oriented programming which I'm
          eager to apply in real-world projects.I've applied my knowledge and
          skills to create these software projects. These projects not only
          showcase my technical skills but also demonstrate my ability to work
          in collaborative teams and adapt to new challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
