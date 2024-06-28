import { React, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import contendance from "../assets/image/contendance.jpg";
import bobus from "../assets/image/bobus.jpg";
import otak from "../assets/image/otak kanan.jpg";
import contenDashboard from "../assets/image/contendance-dashboard.jpg";
import findjob from "../assets/image/findjobid.jpg";
import moviein from "../assets/image/movie-in.jpg";
import vuemeal from "../assets/image/vuemeal.png";
import website from "../assets/image/this-website.jpg";

const ProjectsCard = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={contendance}
            alt="contendance"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Contendance</div>
          <p className="text-gray-700 text-base">
            contendance is an attendance application for students using low
            energy bluetooth ibeacon technology, this application was developed
            with flutter framework and with agile methodology.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Flutter
          </span>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.contendance"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img className="w-4/5 xl:w-3/4 rounded-md" src={bobus} alt="bobus" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Bobus</div>
          <p className="text-gray-700 text-base">
            This website was created to book bus tickets with React Js
            technology. The features of this application are choosing a route,
            choosing a seat, payment gateaway using midtrans and getting a
            ticket after successful payment. NOTE: this website was developed
            specifically for mobile display
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            target="_blank"
            href="https://bobis.netlify.app/"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={otak}
            alt="otak kanan"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Employee Attendance</div>
          <p className="text-gray-700 text-base">
            This website is my project during my internship at PT Otak Kanan,
            its features are authentication, attendance with face, attendance
            recap and admin. this website was developed with laravel.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Laravel
          </span>
          <a
            target="_blank"
            href="https://github.com/ghifarirmdn/absen-magang"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={contenDashboard}
            alt="contendance dashboard"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Contendance Dashboard</div>
          <p className="text-gray-700 text-base">
            This website is made for the admin of the contendance application,
            its features are adding users, adding rooms, adding beacons, adding
            schedules, etc. This website is built with React Js and has been
            integrated with the API.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            target="_blank"
            href="https://github.com/ContendanceApp/contendance-dashboard"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={findjob}
            alt="findjobid"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">findjobid</div>
          <p className="text-gray-700 text-base">
            This website was the first time I learned to use React Js. The
            feature on this website displays job vacancies obtained from the
            backend API.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            target="_blank"
            href="https://findjobid.netlify.app/"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={moviein}
            alt="findjobid"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Movie In</div>
          <p className="text-gray-700 text-base">
            This website was the first time I learned to use React Js. The
            feature on this website displays job vacancies obtained from the
            backend API.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            target="_blank"
            href="https://themoviein.netlify.app/"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md h-80"
            src={vuemeal}
            alt="findjobid"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Vuemeal</div>
          <p className="text-gray-700 text-base">
            Vuemeal is a website that lists food from all over the world.
            Features of this website are search by food name and food letter.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            target="_blank"
            href="https://vuemeal.vercel.app/"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
      <div
        className="rounded shadow-xl my-10 xl:w-3/4 xl:h-7/8 hover:transition hover:ease-in-out hover:scale-110"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className="flex justify-center mt-6">
          <img
            className="w-4/5 xl:w-3/4 rounded-md"
            src={website}
            alt="this website"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">This Website</div>
          <p className="text-gray-700 text-base">
            This website is my first portfolio website, this website is built
            with React Js technology.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">
          <span className="inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            React Js
          </span>
          <a
            href="#"
            className="inline-block bg-white text-primary border rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-white"
          >
            Visit Link
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
