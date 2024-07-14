import React from "react"
import { useNavigate } from "react-router-dom";
export default function NavbarComponent(){
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/photography")
  }
  const handleAboutClick = () => {
    navigate("/photography/about")
  }
  const handleProjectClick = () => {
    navigate("/photography/project")
  }
  const handleBlogClick = () => {
    navigate("/photography/blog")
  }
  const handleContactClick = () => {
    navigate("/photography/contact")
  }

    return ( 
      <div className="font-sans antialiased text-gray-800">
      <header class="bg-yellow-500 text-white py-4 px-6 shadow-md">
  <nav class="flex justify-between items-center">
    <a href="#" class="text-2xl font-bold">KIM NAMWOON</a>
    <ul class="flex space-x-4">
      <li>
        <a onClick={handleHomeClick} class="text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">HOME</a>
      </li>
      <li>
        <a onClick={handleAboutClick} class="text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">ABOUT</a>
      </li>
      <li>
        <a onClick={handleProjectClick} class="text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">PROJECT</a>
      </li>
      <li>
        <a onClick={handleBlogClick} class="text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">BLOG</a>
      </li>
      <li>
        <a onClick={handleContactClick}  class="text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">CONTACT</a>
      </li>
    </ul>
  </nav>
  </header>
  </div>
  
);
}