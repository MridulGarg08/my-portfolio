import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Social />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
