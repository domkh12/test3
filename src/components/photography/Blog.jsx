import React from "react"
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import { useNavigate } from "react-router-dom";
export default function BlogComponent() {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    navigate("/photography/blog/blog-detail")
  }
    return(
      <div className="bg-gray-100 text-gray-900">
        <NavbarComponent/>

        {/* Main Content */}
        <main className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-400">BLOG</h1>
      
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="lg:flex">
              <div className="lg:w-1/3 overflow-hidden">
                <img
                  src="https://st2.depositphotos.com/2008763/5810/v/600/depositphotos_58106257-stock-video-pink-sunset-in-the-snowy.jpg"
                  alt="City"
                  className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <h2 className="text-xl font-bold text-red-400">MEET SOHO WORDPRESS THEME</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize, with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavenum pulvinar. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the tincidunt, it is necessary to put the pain of laicinia. As before, it's a memory, but there are no members. Some people need to monitor the temperature of the building itself or the weather. For now the mass, whether it be an employee or a concern, will be followed by a sad phase of laughter.
                </p>
                <button onClick={handleReadMoreClick} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
      
          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="lg:flex">
              <div className="lg:w-1/3 overflow-hidden">
                <img
                  src="https://st2.depositphotos.com/2008763/11495/v/600/depositphotos_114959894-stock-video-sunset-over-a-misty-valley.jpg"
                
                  alt="News"
                  className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <h2 className="text-xl font-bold text-red-400">10 MOST ANTICIPATED EVENTS OF 2023</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Now it is time, if not the life of the tincidunt, it is necessary to put the pain of laicinia. As before, but the head, the members and none. Some of them need to be monitored by the owner himself or by the timing of the course. For now the mass, whether the employee is worried or worried, will be followed by laughter. The sad phase of the diam nisl, eu drinkendum urn, venenatis varius. No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize, with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavenum pulvinar needs. But it is wise to put it. The first thing he did was in the hospital.
                </p>
                <button onClick={handleReadMoreClick} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
      
          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="lg:flex">
              <div className="lg:w-1/3 overflow-hidden">
                <img
                  src="https://st2.depositphotos.com/2008763/10870/v/600/depositphotos_108708652-stock-video-sunrise-on-an-alien-planet.jpg"
                  alt="People"
                  className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <h2 className="text-xl font-bold text-red-400">UNDERGROUND WALLS</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  In front of him, the first thing in the throat of the doctor is grief and anger. Some of them need to be monitored by the owner himself or by the timing of the course. For now the mass, whether the employee is worried or worried, will be followed by laughter. The sad phase of the diam nisl, eu drinkendum urn, venenatis varius. No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize, with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavenum pulvinar needs. However, it is wise to put the lore of the vestibule before the very first in the throats of the orc of mourning and utricle. Some people need the very door.
                </p>
                <button onClick={handleReadMoreClick} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
      
          {/* Blog Post 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="lg:flex">
              <div className="lg:w-1/3 overflow-hidden">
                <img
                  src="https://wallpapercave.com/wp/wp13163582.png"
                  alt="People"
                  className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <h2 className="text-xl font-bold text-red-400">MONUMENT STATION OPENED</h2>
                </div>
                <p className="text-gray-700 mb-4">
                It is important for me to be able to express my feelings or to decorate the bed, but I am happy to be able to express my thoughts and feelings. In complete fear, said the vehicles of the vestibule, the vehicles at the land. Until that is my pillow. In fact, Lacinia needs the eros of the Pellentesque. Soccer sauce. Tomorrow I'll be reading the same, it's convenient for the ferry and, for the Valley or for that. Let us live by the element of fear, not hate. But the tincidunt purus in the throat of laughter. Tomorrow there will be no ligula, but if you want a story, you need arrows. In fact, he chose the bed of the cat, that is the layer of the garden and the curtains of the truck.
                </p>
                <button onClick={handleReadMoreClick} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
      
          {/* Blog Post 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="lg:flex">
              <div className="lg:w-1/3 overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/30/2c/ae/302caed8064de360c746c519be72723e.jpg"
                  alt="People"
                  className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                />
              </div>
              <div className="lg:w-2/3 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <h2 className="text-xl font-bold text-red-400">MEET SOHO WORDPRESS THEME</h2>
                </div>
                <p className="text-gray-700 mb-4">
                As is always wise, there is no care, but no time is made. It's not a trigger. Smartphones and tablets. No one from the mass of earth. There is no time when the developers are not easy. Proin sapien propagandize, with the ends and not as in, the sauce of the target salad. A double-sided pillowcase. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the tincidunt, it is necessary to put the pain of lacinia. As before, but the head, the members and none. Some of them need the god's very vestibule or the timing of the course.
                </p>
                <button onClick={handleReadMoreClick} className="px-4 py-2 bg-gray-800 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </main>
        <FooterComponent/>
      
        {/* Tailwind CSS Custom Styles */}
        <style jsx>{`
          .hover-shadow-zoom:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            
          }
        `}</style>
        </div>

    );
}