import React from "react";
import { TiHeart } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="fixed left-0 right-0 bg-gray-100 border-b border-black">
      <div className="flex flex-row justify-end items-center">
        <h1 className="text-1xl px-1">made w spite</h1>
        <TiHeart></TiHeart>
      </div>
    </footer>
  );
};

export default Footer;
