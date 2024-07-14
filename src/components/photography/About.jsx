import React from "react"
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
export default function AboutComponent() {
    return(

        <div className="font-sans antialiased text-gray-800">
        <NavbarComponent/>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-center text-2xl font-bold mb-8 text-gray-700">ABOUT MY WORK</h1>

        <section class="flex justify-center items-center">
          <div class="grid grid-cols-2 gap-8  max-w-4xl">

          <div className="text-center mb-8 mt-20">
          <h2 className="text-4xl font-bold mb-2">Hello! I'm Namwoon</h2>
          <h3 className="text-2xl  text-gray-500 italic mb-4">A PhotoPraphy</h3>
          <a href="#" className="bg-yellow-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-orange-600">Let's Talk</a>
        </div>
        
           
        <div className="text-center mb-8">
          <img src="https://p1.hiclipart.com/preview/359/957/100/face-icon-user-profile-user-account-avatar-icon-design-head-silhouette-neck-png-clipart.jpg" alt="Profile Picture" className="mx-auto rounded-full border-4 border-orange-500 w-421 h-423" />
        </div>
        </div>
        </section> 

        <div className="text-center space-y-4 text-gray-600">
          <p>I've always loved observing the world around me. Photography allows me to capture the beauty I see in the world and share it with others.</p>
          <p>I am currently exploring thoughts about ways that interior experiences inevitably become part of the exterior. This is as true with our own thoughts as it is with the interior experiences of social groups, historic movements, and momentous events. That which is unseen will find a way to be seen.</p>
          <p>Take time to explore my work and let me know what you think. Follow me on social media or sign up for my newsletter to hear updates about what I am working on and where you can see my art in person.</p>
        </div>
      </main>
      <FooterComponent/>

        </div>
    );
}