import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function CardTemplate({ type, image }) {
  return (
    <div className="font-sans">
      <div className="bg-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all w-[500px]  rounded-md h-auto p-4 flex flex-col justify-between gap-3 group dark:bg-gray-900">
        <div className="w-auto rounded-md h-72">
          <img
            src={image}
            className="rounded-md object-cover w-full h-full"
            alt="Developer"
          />
        </div>
        <div className="flex justify-between bg-white py-3 rounded-md items-center px-4 dark:bg-gray-700 dark:text-gray-100">
          <div className="relative h-8 w-auto overflow-hidden">
            <p className="text-2xl font-medium group-hover:translate-y-[-100%] transform transition-transform duration-300 ease-in-out">
              {type}
            </p>
            <p className="absolute bottom-0 text-2xl font-medium group-hover:translate-y-[-20%] transform translate-y-14 transition-transform duration-300 ease-in-out">
              {type}
            </p>
          </div>
          <FaArrowRightLong className="w-7 h-7 transform transition-transform duration-300 ease-in-out group-hover:-rotate-45" />
        </div>
      </div>
    </div>
  );
}

export default CardTemplate;
