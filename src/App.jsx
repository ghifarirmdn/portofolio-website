import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Section />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
