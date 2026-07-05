import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-linear-to-r from-[#5A84FA] to-[#FD5672] py-2 text-white">
      <div className="flex items-center justify-center lg:justify-between container mx-auto px-24">
        <div className="flex items-center gap-x-6">
          <FaFacebookF />
          <FaInstagramSquare />
          <FaYoutube />
          <FaTelegram />
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-x-8">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Success Story</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
