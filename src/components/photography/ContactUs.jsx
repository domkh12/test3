import React from "react"
import FooterComponent from "./Footer";
import NavbarComponent from "./Navbar";
export default function ContactUsComponent(){
    return(
    <div className="font-sans">
        <NavbarComponent/>
        {/* Hero Section */}
        <section className="relative">
          <img
            src="https://i.pinimg.com/originals/d8/37/40/d83740b7b6cf9fb1166e3c25eb1cced4.jpg" // Replace this with your own image link
            alt="Cityscape"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold">CONTACT US</h1>
          </div>
        </section>
  
        {/* Contact Section */}
        <section className="container mx-auto py-16 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="md:w-1/2 space-y-4">
              <p className="text-xl">Hello,</p>
              <p className="text-xl">Get in touch!</p>
              <p className="text-xl">Press inquiries, personal inquiries, commissions or collaborations...</p>
              <p className="text-xl">We are happy to hear from you!</p>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" />
                <input type="email" placeholder="Email*" className="w-full p-3 border border-gray-300 rounded" />
                <textarea placeholder="Message*" className="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-black text-white rounded shadow-md hover:bg-gray-800"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className='text-center py-10'>
        <p>This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
        <p>Kim Namwoon</p>
        </section>
        <FooterComponent/>
    </div>

    );
}