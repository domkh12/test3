import React from "react";
import SerivceCard from "./ServiceCard";


const ServiceSectionBusiness = () => {
  return (
    <div className="flex flex-col items-center px-20 mt-48 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="text-base font-medium text-center text-black max-md:max-w-full">
        OUR SERVICES
      </div>
      <div className="mt-9 text-4xl font-bold text-black max-md:max-w-full">
        Explore What We Offer
      </div>
      <div className="mt-16 w-full max-w-[1241px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SerivceCard img={"public/businessImg/Vector.png"} serviceName={"Strategic Block"}/>
          <SerivceCard img={"public/businessImg/Service2.png"} serviceName={"Strategic Block"}/>
          <SerivceCard img={"public/businessImg/Service3.png"} serviceName={"Strategic Block"}/>
        </div>
      </div>
      <div className="w-full max-w-[1241px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <SerivceCard img={"public/businessImg/Service4.png"} serviceName={"Strategic Block"}/>
          <SerivceCard img={"public/businessImg/Service5.png"} serviceName={"Strategic Block"}/>
          <SerivceCard img={"public/businessImg/Service6.png"} serviceName={"Strategic Block"}/>
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionBusiness;
