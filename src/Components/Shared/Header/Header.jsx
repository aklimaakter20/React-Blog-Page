import React, { useState } from "react";
import logo from "../../../assets/log.jpg";
import { FaTelegramPlane } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-xl bg-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-5 lg:px-24">
        
        {/* Logo */}
        <img className="w-36" src={logo} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Success Story</a>
          <a href="#">Contact</a>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 bg-[#FD5672] text-white py-2 px-4 rounded-md cursor-pointer">
              <FaTelegramPlane />
              <p>Join Now</p>
            </div>

            <div className="flex items-center gap-5 text-2xl">
              <CiSearch className="cursor-pointer" />
              <FaCartPlus className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl lg:hidden"
        >
          {open ? <IoClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md px-5 py-4">
          <div className="flex flex-col gap-5 text-center gap-y-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Success Story</a>
            <a href="#">Contact</a>

            <div className="flex items-center gap-5 text-xl">
              <CiSearch />
              <FaCartPlus />
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#FD5672] text-white py-2 rounded-md">
              <FaTelegramPlane />
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;