import React from "react";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-blue flex items-center px-24 py-12 justify-center">
      <div className="flex items-center justify-between w-[1100px] px-4">
        <span className="text-1xl text-orange capitalize">
          &copy; 2023 GAMEZONE. All rights reserved
        </span>

        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-1xl uppercase text-white mr-[0.5rem]">
            Follow on
          </h1>
          <a
            href="https://www.linkedin.com/in/abhishek-katkam-988744231/"
            className="hover:animate-pulse"
            target="_blank"
            noreferrer="true"
          >
            <img src={linkedIn} alt="linkedin" className="w-[50px] h-[50px]" />
          </a>
          <a
            href="https://github.com/Abiekatkam"
            className="hover:animate-pulse"
            target="_blank"
            noreferrer="true"
          >
            <img src={github} alt="github" className="w-[50px] h-[50px]" />
          </a>
          <a
            href="https://www.instagram.com/_abie._/"
            className="hover:animate-pulse"
            target="_blank"
            noreferrer="true"
          >
            <img src={instagram} alt="github" className="w-[50px] h-[50px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
