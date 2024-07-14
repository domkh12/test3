import React from "react";
import NavBarComponent from "../../components/developercomponent/Navbar";
import HeroSection from "../../components/developercomponent/HeroSection";
import AboutSection from "../../components/developercomponent/AboutSection";
const DeveloperTemplate = () => {
  return (
    <div className="w-full h-auto">
      <NavBarComponent />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default DeveloperTemplate;
