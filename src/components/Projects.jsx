import { React, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="mx-4 mt-20 overflow-hidden md:mx-16 lg:mx-36 xl:mx-48"
        id="projects"
      >
        <h4
          className="font-semibold text-2xl text-center xl:text-4xl"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          Projects
        </h4>
        <div className="list-projects md:grid md:grid-cols-2 md:gap-10 place-items-center">
          <ProjectsCard />
        </div>
      </div>
    </>
  );
};

export default Projects;
