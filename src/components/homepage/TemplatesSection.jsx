import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function TemplatesSection() {
  const [slidesToShow, setSlidesToShow] = useState(3); // Initial value
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust the number of slides based on window width
      if (windowWidth < 640) {
        setSlidesToShow(1);
      } else if (windowWidth < 768) {
        setSlidesToShow(1);
      } else if (windowWidth < 800) {
        setSlidesToShow(1.2);
      } else if (windowWidth < 950) {
        setSlidesToShow(1.3);
      } else if (windowWidth < 1024) {
        setSlidesToShow(1.5);
      } else if (windowWidth < 1280) {
        setSlidesToShow(1.7);
      } else if (windowWidth < 1350) {
        setSlidesToShow(2.1);
      } else if (windowWidth < 1536) {
        setSlidesToShow(2.2);
      } else if (windowWidth < 1650) {
        setSlidesToShow(2.5);
      } else if (windowWidth > 1650) {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow, // Dynamically set based on state
  };

  const templateData = [
    { type: "Developer", image: "homepageImg/developerImg.png" },
    { type: "Marketing", image: "homepageImg/marketingImg.png" },
    { type: "Business", image: "homepageImg/businessImg.png" },
    { type: "Photography", image: "homepageImg/photographyImg.png" },
  ];
  return (
    <section
      className="sm:py-10 bg-[#F7F7F7] dark:bg-gray-800 font-sans section"
      name="template"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="xl:text-4xl text-primary font-semibold sm:text-2xl">
          Transform your work into art with our templates
        </h2>
        <p className="text-lg dark:text-gray-100">Our popular templates!</p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>

      <div className="slider-container mt-10 mx-20">
        <Slider {...settings}>
          {templateData.map((template) => (
            <Link key={template.type} to="/register">
              <CardTemplate {...template} />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TemplatesSection;
