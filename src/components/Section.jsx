import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import github from "../assets/icon/github-white.svg";
import ghifari from "../assets/image/ghifari2.png";

function Section() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      className="flex flex-col justify-center items-center mt-24 mx-4 gap-10 overflow-hidden md:flex-row-reverse md:mt-60 md:mx-16 lg:mx-36 xl:mx-48 xl:mt-72 2xl:mx-56"
      id="section"
    >
      <img
        src={ghifari}
        alt=""
        className="w-7/8 h-7/8"
        data-aos="fade-left"
        data-aos-duration="2000"
      />
      <div
        className="section-text flex flex-col items-center gap-6 md:items-start"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h4 className="font-normal text-black md:text-lg lg:text-2xl">
          IT Student | Frontend Developer
        </h4>
        <h2 className="font-bold text-3xl lg:text-5xl">
          Hi, I'm <span className="text-primary">Ghifari</span>
        </h2>
        <p className="text-center md:w-3/4 md:text-start lg:w-3/5 xl:text-lg xl:w-2/3 2xl:w-1/2">
          Dive into a world of captivating interfaces, where every click opens
          the door to a seamless fusion of creativity and functionality.
        </p>
        <div className="mt-5 w-full flex justify-center md:flex-col">
          <a
            href="https://github.com/ghifarirmdn"
            className="bg-primary text-white w-2/3 text-center rounded-md px-5 py-2 flex items-center justify-center gap-5 hover:bg-dark hover:text-white xl:w-1/3"
          >
            <img src={github} alt="" className="w-8 h-8" />
            Go to My Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
