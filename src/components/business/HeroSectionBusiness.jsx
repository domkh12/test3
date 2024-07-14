import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSectionBusiness = () => {
  return (
    <div className="flex justify-center items-center w-full bg-[#111111] max-md:pl-5 max-md:max-w-full">
      <div className="flex max-w-[1300px] justify-center gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-between pr-7 my-auto text-base font-medium text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl text-orange-400 max-md:max-w-full max-md:text-4xl">
              Strategy and growth
              <br />
              solutions for <br />
              <span className="text-orange-400">business</span>
            </div>
            <div className="mt-10 max-md:max-w-full">
              At augue eget arcu dictum. Maecenas ultricies mi eget mauris
              pharetra et. Erat imperdiet sed euismod nisi porta lorem mollis
              aliquam ut. Mattis nunc sed blandit libero. At consectetur lorem
              donec massa sapien.
            </div>
            <button className="flex flex-col justify-center px-12 py-5 mt-9 max-w-full font-semibold text-center bg-orange-400 rounded-md w-[230px] max-md:px-5">
              <div className="flex items-center gap-3">
                Learn more
                <FaArrowRightLong />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full justify-center">
          <div className="max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col">
                <img
                  loading="lazy"
                  src="public/businessImg/herosection.png"
                  className="rounded-md h-[600px] w-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBusiness;
