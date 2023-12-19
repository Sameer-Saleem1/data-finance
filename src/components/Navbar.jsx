import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between h-24 max-w-[900px]  mx-auto px-4 items-center">
      <h1 className="w-full font-bold text-3xl text-[#00df9a]">React.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home </li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]"
              : " fixed left-[-100%] ease-in-out duration-500 "
          }
        >
          <h1 className="w-full font-bold text-3xl text-[#00df9a] m-4">
            React.
          </h1>

          <ul className=" p-3 uppercase">
            <li className="p-4 border-b border-b-gray-600 ">Home</li>
            <li className="p-4 border-b border-b-gray-600 ">Company</li>
            <li className="p-4 border-b border-b-gray-600 ">Resources</li>
            <li className="p-4 border-b border-b-gray-600 ">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
