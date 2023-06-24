import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import skills from "../data/skills";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="mx-4 mt-20 overflow-hidden md:mx-16 lg:mx-36 xl:mx-48"
      id="skills"
    >
      <h4
        className="font-semibold text-2xl xl:text-4xl"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        Skills
      </h4>
      <div className="list-projects mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-10 place-items-center">
        <SkillsCard />
      </div>
    </div>
  );
};

export default Skills;
