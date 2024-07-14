import React from "react";
import { MdDarkMode } from "react-icons/md";
export default function HeroSection() {
  return (
    <div className="w-full h-[930px] flex justify-center relative">
      <div className="absolute top-4 right-4">
        <div className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-gray-500 hover:scale-110 transition-all cursor-pointer mr-12">
          <MdDarkMode className="w-8 h-8" />
        </div>
      </div>
      <div className="container h-auto flex justify-center items-center gap-24">
        <div className="w-[500px]">
          <img src="src/assets/developerimage/Frame 3629.png" alt="elonmusk" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[18px] font-light ">INTRODUCTION</p>
          <h1 className="flex items-center text-7xl font-bold ">
            Hi, I'm
            <span className="text-primary-developer-template ml-5">
              Elon Musk
            </span>
          </h1>
          <p className="mt-2 text-7xl font-bold">
            A
            <span className="text-primary-developer-template ml-5">
              Developer
            </span>
          </p>
          <p>
            CEO and Chief engineer of SpaceX, a private aerospace manufacturer
          </p>
        </div>
      </div>
    </div>
  );
}
