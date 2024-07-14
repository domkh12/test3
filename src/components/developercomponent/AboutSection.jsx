import React from "react";

export default function AboutSection() {
  return (
    <div className="">
      <p className="text-black flex items-center justify-center">My Intro</p>
      <h1 className="flex justify-center items-center text-6xl font-bold ">
        About
        <span className="text-primary-developer-template ml-5">Me</span>
      </h1>
      <div className="flex items-center justify-center mt-5">
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="container flex  items-center justify-center gap-14">
        <div className="p-5 mt-8 w-[600px]">
          <img src="src\assets\developerimage\aboutme.png" alt="abooutme" />
        </div>
        <div>
          <p>PERSONAL INFO</p>
          <div className=" flex flex-row gap-10">
            <div className="flex flex-row gap-5">
              <p>First-Name:</p>
              <p className="font-light">Elon</p>
            </div>
            <div className="flex flex-row gap-5">
              <p>Address:</p>
              <p className="font-light">Phnom Penh</p>
            </div>
          </div>
          <div className=" flex flex-row gap-10 ">
            <div className="flex flex-row gap-5">
              <p>Last-Name:</p>
              <p className="font-light">Musk</p>
            </div>
            <div className="flex flex-row gap-5">
              <p>Freelance:</p>
              <p className="font-light">Available</p>
            </div>
          </div>
          <div className=" flex flex-row gap-10 ">
            <div className="flex flex-row gap-5">
              <p>Birth-Date:</p>
              <p className="font-light">05-12-2021</p>
            </div>
            <div className="flex flex-row gap-5">
              <p>Language:</p>
              <p className="font-light">Khmer,English</p>
            </div>
          </div>
          <div className=" flex flex-row gap-10 ">
            <div className="flex flex-row gap-5">
              <p>Nationality:</p>
              <p className="font-light">Khmer</p>
            </div>
            <div className="flex flex-row gap-5">
              <p>Experience:</p>
              <p className="font-light">5 years</p>
            </div>
          </div>
          <button
            type="button"
            class="text-white bg-primary-developer-template hover:bg-primary-developer-template-hover focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
