import React from "react"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
export default function FooterComponent(){
    return(
        <div className="font-sans antialiased text-gray-800">
             <footer className="bg-yellow-600 text-white p-20 mt-8 ">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-sm">© 2019 Lift Media. All rights reserved.</p>
          <div className=" flex space-x-4 ">
            <a href="#" className="hover:text-gray-300"><i className="fa-brands fa-facebook"></i><FaFacebook className='w-[30px]'/></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-envelope"></i><IoMdMail /></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i><FaYoutube /></a>
          </div>
        </div>
             </footer>

        </div>

    );
}