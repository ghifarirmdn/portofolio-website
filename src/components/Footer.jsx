import React from "react";
import { Link } from "react-scroll";
import wa from "../assets/icon/wa.png";
import gmail from "../assets/icon/gmail.png";
import linkedin from "../assets/icon/linkedin.png";
import github from "../assets/icon/github.png";

const Footer = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="mt-40 pt-10 flex justify-between mx-4 text-sm  md:justify-around md:mx-52">
        <div className="whatsapp grid place-items-center">
          <img src={wa} alt="" />
          <a
            href="https://api.whatsapp.com/send/?phone=6289613925248&text&type=phone_number&app_absent=0"
            className="hover:text-primary"
          >
            Whatsapp
          </a>
        </div>
        <div className="gmail grid place-items-center">
          <img src={gmail} alt="" />
          <a
            href="mailto:ghifariramadhan2001@gmail.com"
            className="hover:text-primary"
            target="_blank"
          >
            Email
          </a>
        </div>
        <div className="linkedin grid place-items-center">
          <img src={linkedin} alt="" />
          <a
            href="https://www.linkedin.com/in/ghifarirmdn/"
            className="hover:text-primary"
          >
            Linkedin
          </a>
        </div>
        <div className="github grid place-items-center">
          <img src={github} alt="" />
          <a
            href="https://github.com/ghifarirmdn"
            className="hover:text-primary"
          >
            Github
          </a>
        </div>
      </div>

      <div className="flex justify-center gap-20 mt-14">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="hover:text-primary cursor-pointer"
        >
          Projects
        </Link>
        <a
          href="https://api.whatsapp.com/send/?phone=6289613925248&text&type=phone_number&app_absent=0"
          className="hover:text-primary"
        >
          Contacts
        </a>
      </div>

      <h4 className="text-center mt-14 pb-10 ">&copy; GHIFARI RAMADHAN 2023</h4>
    </div>
  );
};

export default Footer;
