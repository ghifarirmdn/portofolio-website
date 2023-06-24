import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import js from "../assets/image/js.png";
import react from "../assets/image/react.png";
import tailwind from "../assets/image/tailwind.png";
import bootstrap from "../assets/image/bootstrap.png";
import php from "../assets/image/php.png";
import laravel from "../assets/image/laravel.png";
import flutter from "../assets/image/flutter.jpg";

const SkillsCard = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={html} alt="" />
        <h4 className="text-center font-semibold">HTML</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={css} alt="" />
        <h4 className="text-center font-semibold">CSS</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={js} alt="" />
        <h4 className="text-center font-semibold">JS</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={react} alt="" />
        <h4 className="text-center font-semibold">React</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={tailwind} alt="" />
        <h4 className="text-center font-semibold">Tailwind</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={bootstrap} alt="" />
        <h4 className="text-center font-semibold">Bootstrap</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={php} alt="" />
        <h4 className="text-center font-semibold">Php</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={laravel} alt="" />
        <h4 className="text-center font-semibold">Laravel</h4>
      </div>
      <div
        className="skills-card w-1/2 overflow-hidden"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img src={flutter} alt="" />
        <h4 className="text-center font-semibold">Flutter</h4>
      </div>
    </>
  );
};

export default SkillsCard;
