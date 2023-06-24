import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import line from "../assets/icon/line.png";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section
        className="about mx-5 mt-40 overflow-hidden md:mx-16 lg:mx-36 xl:mx-48 xl:mt-60"
        id="about"
      >
        <h4
          className="font-semibold text-2xl xl:text-4xl"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          About Me
        </h4>
        <div
          className="flex gap-4 h-1/3 mt-2"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src={line} alt="" className="h-24 lg:h-auto" />
          <p className="text-base">
            I am an undergraduate Informatics Engineering student looking for
            opportunities as a frontend developer. I am fluent in React-Js,
            Flutter, and Agile methods. I have proven to build, and maintain
            communication, and collaboration with customers. Skilled in
            problem-solving, repair, and preventive maintenance application or
            software development. I embrace the challenge of crafting visually
            appealing and user-friendly interfaces. I am dedicated to staying
            updated with the latest web development trends and frameworks,
            allowing me to create efficient and responsive websites that deliver
            exceptional user experiences. I am an easygoing person who enjoys
            working in a team and individually.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
