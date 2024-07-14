import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";

export default function NavBarComponent() {
  const navigate = useNavigate();

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleGetStartClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <motion.nav    
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu flex flex-wrap items-center justify-between px-20 lg-max:px-10 py-4 fixed top-0 z-10 w-full drop-shadow-md font-sans dark:bg-gray-900 dark:text-gray-100 bg-white"
    >
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          width="30px"
          height="30px"
          src="logoHomepage.png"
          alt="logoHomepage"
        />
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-100">
          Showcase
        </p>
      </Link>
      <ul
        className={`flex-col md:flex-row lg:flex items-center w-full lg:w-auto lg:mx-4 lg:space-x-4 lg-max:hidden`}
      >
        <li className="px-3 py-2 lg:py-0 cursor-pointer">
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Template
          </Link>
        </li>
        <li className="px-3 py-2 lg:py-0 cursor-pointer">
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Features
          </Link>
        </li>
        <li className="px-3 py-2 lg:py-0 cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li className="px-3 py-2 lg:py-0 cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-1 lg:flex sm-max:hidden sm:hidden">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
        >
          {isDarkMode ? <FaSun className="w-7 h-7" /> : <MdDarkMode className="w-7 h-7" />}
        </button>
        <button
          onClick={handleLoginClick}
          className="px-6 py-2 dark:text-gray-100 text-gray-900 hover:bg-primary hover:text-gray-100 md:rounded"
        >
          Login
        </button>

        <button
          onClick={handleGetStartClick}
          className="px-4 py-2 bg-primary hover:bg-primary-hover text-white md:rounded"
        >
          Get Started
        </button>
      </div>

      <div className="lg:hidden flex justify-center items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
        >
          {isDarkMode ? <FaSun className="w-7 h-7" /> : <MdDarkMode className="w-7 h-7" />}
        </button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoIosClose className="h-6 w-6 bg-gray-400 rounded-md" />
          ) : (
            <div className="h-9 w-20 rounded-md flex justify-center items-center bg-primary">
            <IoMenu className="h-6 w-6 text-gray-100" />
            </div>
          )}
        </motion.button>
      </div>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className={`flex-col lg:flex-row items-center w-full lg:hidden lg:w-auto ${
          isOpen ? "flex" : "hidden"
        } lg:mx-4 lg:space-x-4`}
        onClick={isOpen ? toggleMenu : undefined}
      >
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Template
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Features
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-blue-500"
          >
            Contact
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="lg:hidden px-3 py-2 lg:py-0"
        >
          <button
            onClick={handleLoginClick}
            className=" lg:w-auto px-6 py-2 w-36 dark:text-gray-100 text-gray-900 hover:bg-primary hover:text-gray-100 hover:2xl-max:rounded-md"
          >
            Login
          </button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="lg:hidden px-3 py-2 lg:py-0"
        >
          <button
            onClick={handleGetStartClick}
            className="px-6 py-2 w-36 bg-primary hover:bg-primary-hover text-white 2xl-max:rounded-md"
          >
            Get Started
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
