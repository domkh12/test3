import React from "react"
import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";
export default function ProjectComponent() {
    return(
        <div className="min-h-screen bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url('https://i.pinimg.com/originals/d8/37/40/d83740b7b6cf9fb1166e3c25eb1cced4.jpg')` }}>
           <NavbarComponent/>
        <div className="bg-white bg-opacity-60 min-h-screen flex flex-col items-center py-20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-red-500">Projects</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://wallpapercave.com/wp/wp13163582.png"
                alt="Project 1"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://i.pinimg.com/originals/f5/e0/72/f5e0726a9f05eaca6e4f0232a801ac46.jpg"
                alt="Project 2"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/818/549/desktop-wallpaper-5-winter-scene-winter-snow-scenes.jpg"
                alt="Project 3"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://wallpapers.com/images/hd/1080p-winter-background-1920-x-1080-9q4ax6gitgut2uyi.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://wallpapers.com/images/hd/beautiful-winter-nv82nvz4vtcfpkqg.jpg"
                alt="Project 5"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://st2.depositphotos.com/1005145/8929/i/450/depositphotos_89295988-stock-photo-winter-dawn-in-the-mountain.jpg"
                alt="Project 6"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://st3.depositphotos.com/8837670/13681/i/450/depositphotos_136815866-stock-photo-vibrant-sunset-over-snow-covered.jpg"
                alt="Project 7"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://img.freepik.com/free-photo/3d-view-sun-sky-during-winter_23-2150953553.jpg"
                alt="Project 8"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
            <div className="relative group" style={{ width: '270px', height: '355px' }}>
              <img
                src="https://img.freepik.com/premium-photo/capturing-beauty-winter-sunset-frozen-lake-generative-by-ai_960080-5581.jpg"
                alt="Project 9"
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              />
            </div>
          </div>
        </div>
        <FooterComponent/>
       </div> 
    );
}