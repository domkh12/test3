import React from "react";

const SerivceCard = ({img, serviceName}) => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex grow gap-5 items-start py-10 pl-9 w-full text-base bg-white shadow-sm rounded-[30px] max-md:mt-10">
        <img
          loading="lazy"
          src={img}
          className="w-12 h-12"
        />
        <div className="flex flex-col grow shrink-0 justify-between pr-3.5 mt-1.5 basis-0 w-fit">
          <div className="text-xl font-medium text-black">
            {serviceName}
          </div>
          <div className="mt-8 text-neutral-600">
            Tortor dignissim convallis aenean et tortor at. Elementum nisi quis
            eleifend quam adipiscing vitae.
          </div>
          <button className="justify-center bg-[#111111] text-white px-6 py-3 mt-8 rounded-md bg-stone-900 max-md:px-5 hover:bg-transparent hover:text-black">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerivceCard;
