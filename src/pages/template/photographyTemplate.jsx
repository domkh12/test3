import { Button } from "flowbite-react";
// import Project from "../../components/photography/Project";
import NavbarComponent from "../../components/photography/Navbar";
import HomepageComponent from "../../components/photography/Homepage";
import FooterComponent from "../../components/photography/Footer";
import React from 'react'

const PhotographyTemplate = () => {
  return (
    <div>
      <NavbarComponent/>
      <HomepageComponent/>
      <FooterComponent/>
    </div>
  )
}

export default PhotographyTemplate

