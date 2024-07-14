import React from "react"
import { Carousel } from "flowbite-react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
export default function ReadMoreComponent(){
    return(
        <div className="font-sans">
            <NavbarComponent/>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
          <img src="https://www.centreforcities.org/wp-content/uploads/2019/09/Liverpool-high-street_x1650.jpg" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
          <img src="https://www.lda-design.co.uk/wp-content/uploads/Liverpool_citycentre_02_1368.jpg" alt="" />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
          <img src="https://blog.savills.com/_images/samuel-pollard-kbhwm2y1ucq-unsplash.jpg" alt="" />
        </div>
      </Carousel>
    </div>


      <main className="p-8">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">MEET SOHO WORDPRESS THEME</h2>
          <p className="mb-4 text-left">
            No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom propagandize,
            with the ends nor how in, the sauce is shot with the sem duis lobortis, the leavemun pulvinar. But it is wise to put it.
            The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the trincidunt,
            it is necessary to put the pain of lacinia. As before, it's a memory, but there are no members. Some people need to monitor the temperature of the building itself or the weather. For now the mass, whether the employee is worried or worried, will be followed by laughter. The stage is sad, the diam is nisl, the eu drinking urn, the venetian varius no homework, pellentesque itself, or to decorate the ligula placerat but.
          </p>
          <p className="text-left">
            Soccer sauce. Tomorrow I'll be reading the same, it's convenient for the ferry and for, the Valley or for that. Let us live by the element of fear, not hate. But the trincidunt purus in the throat of laughter. Tomorrow there will be no ligula, but if you want a story, you need arrows. In fact, it is the bed of the bed of the cat, that layer of the diam of the result. Maecenas aliquet elit but pain to drink, to put in football a lion to finance. An element of complete mourning is brought into the ear. As is always wise, there is no care, but no time is made. It's not a trigger. Smartphones and tablets. No one from the mass of earth. There is no time when the developers are not easy. Proin wisdom spread, the ends and how, in the sauce is targeted. Two-day leaven pillow. But it is wise to put it. The first thing to do in front of the hospital is to put the beds of care in the hospital. Now it is time, if not the life of the trincidunt, it is necessary to put the pain of lacinia. As before, it's a memory, but there are no members. It is necessary for the Lord to prepare his own vestibule, or the course of time, for the mass must now be brought to life.
          </p>
        </section>
      </main>
      <FooterComponent/>

      
    </div>
    );
}