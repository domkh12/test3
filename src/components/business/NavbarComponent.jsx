import React from "react";
import { MdDarkMode } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <div className="flex flex-col bg-[#111111] justify-center items-center px-16 py-6 w-full text-center text-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1225px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5">
          <img
            loading="lazy"
            src="public/logoHomepage.png"
            className="w-9 h-9"
          />
          <div className="justify-center px-px py-1 my-auto text-md">Showcase</div>
        </div>
        <div>
          <ul className="flex gap-5 justify-between items-center cursor-pointer text-sm">
            <li className="justify-center text-orange-400">About</li>
            <li className="justify-center">Project</li>
            <li className="justify-center">Blog</li>
            <li className="justify-center">Contact</li>
            <MdDarkMode className="flex hover:scale-110 transition-all w-6 h-6" />
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
