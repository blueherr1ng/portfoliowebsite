import React from "react";
import { useState } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "@tanstack/react-router";

interface Slide {
  title: string;
  subtext: string;
  description: string;
  gifPath: string;
  gifPathHover: string;
  linkTo: string;
}

const galleryData: Slide[] = [
  {
    title: "art projects",
    subtext: "i am passionate about...",
    description: "i have worked in xyz media...",
    gifPath: "public/assets/coding_hover_highres.gif",
    gifPathHover: "public/assets/rat.gif",
    linkTo: "/art",
  },
  {
    title: "programming work",
    subtext: "i am passionate about...",
    description: "i have worked on this kind of project...",
    gifPath: "public/assets/coding_hover_highres.gif",
    gifPathHover: "public/assets/coding_idle_highres.gif",
    linkTo: "/coding",
  },
  {
    title: "personal hobbies",
    subtext: "i am passionate about...",
    description: "i love this stuff!",
    gifPath: "public/assets/coding_hover_highres.gif",
    gifPathHover: "public/assets/rat.gif",
    linkTo: "string",
  },
];

const ProfileGallery: React.FC = () => {
  const galleryLength = galleryData.length;
  const lastIndex = galleryLength - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRightClick = () => {
    if (activeIndex < lastIndex) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(lastIndex);
    }
  };

  const [isHoverLeft, setIsHoverLeft] = useState(false);
  const [isHoverRight, setIsHoverRight] = useState(false);

  const [isHoverImage, setIsHoverImage] = useState(false);

  const currentSlide = galleryData[activeIndex];
  return (
    <div className="flex items-center gap-16 border-2 bg-white/20 border-white px-10 py-10 rounded-[100px]">
      <button
        onClick={handleLeftClick}
        onMouseEnter={() => setIsHoverLeft(true)}
        onMouseLeave={() => setIsHoverLeft(false)}
        className="flex-col items-center px-1 cursor-pointer text-white text-2xl"
      >
        {isHoverLeft ? (
          <BsArrowLeftSquareFill></BsArrowLeftSquareFill>
        ) : (
          <BsArrowLeftSquare></BsArrowLeftSquare>
        )}
      </button>
      <div className="flex items-center w-200 gap-5">
        <div className="flex-col text-center items-center w-120 gap-4 text-white [text-shadow:2px_2px_3px_#4a4a4a]">
          <div className="pb-10">
            <p className="flex text-xl justify-center ">
              {" "}
              {currentSlide.title}
            </p>
            <hr className="color-white py-2"></hr>
            <p> {currentSlide.subtext}</p>
            <p> {currentSlide.description}</p>
          </div>
          <div className="justify-center">
            <Link
              to={currentSlide.linkTo}
              className="px-8 py-6 bg-white text-black font-bold [text-shadow:none] rounded-full"
            >
              see more!
            </Link>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsHoverImage(true)}
          onMouseLeave={() => setIsHoverImage(false)}
          className="cursor-progress"
        >
          {isHoverImage ? (
            <img
              src={currentSlide.gifPath}
              alt={currentSlide.title}
              className="w-75 h-160 object-cover rounded-full"
            />
          ) : (
            <img
              src={currentSlide.gifPathHover}
              alt={currentSlide.title}
              className="w-75 h-160 object-cover rounded-full"
            />
          )}
        </div>
      </div>
      <button
        onClick={handleRightClick}
        onMouseEnter={() => setIsHoverRight(true)}
        onMouseLeave={() => setIsHoverRight(false)}
        className="flex-col items-center px-1 cursor-pointer  text-white text-2xl"
      >
        {isHoverRight ? (
          <BsArrowRightSquareFill></BsArrowRightSquareFill>
        ) : (
          <BsArrowRightSquare></BsArrowRightSquare>
        )}
      </button>
    </div>
  );
};

export default ProfileGallery;
