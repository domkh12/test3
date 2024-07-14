import { Navbar } from "flowbite-react";
import PrimaryButton from "./ButtonPrimary";
import { useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar fluid rounded className="bg-tranparent">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Marketing</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <PrimaryButton text="Get Started"/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      <Navbar.Link href="/marketing" className={`nav-link hover:text-red-500 ${isActive("/marketing") ? "active" : ""}`}>Home</Navbar.Link>
      <Navbar.Link href="/marketing-about" className={`hover:text-red-500 ${isActive("/marketing-about") ? "active" : ""}`}>About</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Service</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Blog</Navbar.Link>
        <Navbar.Link href="#" className="hover:text-red-500">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
