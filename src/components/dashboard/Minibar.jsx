
import { IoSearchOutline } from "react-icons/io5";
import { Button, Navbar } from "flowbite-react";

export function Minibar() {
  
  return (
    <div>
        <ul className="flex justify-center items-center">
            <li className="bg-purple-800 px-6 py-1 text-white rounded-md mr-4">All</li>
            <li className="border-solid border-2 border-purple-800 px-6 py-1 rounded-md mr-4">Developer</li>
            <li className="border-solid border-2 border-purple-800 px-6 py-1 rounded-md mr-4">Marketing</li>
            <li className="border-solid border-2 border-purple-800 px-6 py-1 rounded-md mr-4">Photography</li>
            <li className="border-solid border-2 border-purple-800 px-6 py-1 rounded-md mr-4">Business</li>
            <li className=" flex border-solid border-2 border-gray-200 px-8 py-1 rounded-md mr-4 ml-64" >
              <IoSearchOutline className="mr-3 mt-1"/>
              Search Templete</li>
        </ul>
    </div>
    
    // <Navbar fluid rounded>
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
    //     {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
    //   </Navbar.Brand>
    //   <div className="flex md:order-2">
    //     <Button>Search Templates</Button>
    //     <Navbar.Toggle />
    //   </div>
    //   <Navbar.Collapse>
    //     {/* <Navbar.Link href="#" active>
    //       Home
    //     </Navbar.Link> */}
    //     <Navbar.Link href="#" className=" bg-purple-800 text-white ">
    //         All
    //     </Navbar.Link>
    //     <Navbar.Link href="#" className="">Developer</Navbar.Link>
    //     <Navbar.Link href="#">Marketing</Navbar.Link>
    //     <Navbar.Link href="#">Photography</Navbar.Link>
    //     <Navbar.Link href="#">Business</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    
  );
}
