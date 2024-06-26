import { CaretLeft, CaretRight } from "phosphor-react";
import React, { useEffect, useState } from "react";

const imageData = [
  { imageUrl: "/Imgs/img1.jpg", altText: "img1.jpg" },
  { imageUrl: "/Imgs/img2.jpg", altText: "img2.jpg" },
  { imageUrl: "/Imgs/img3.jpg", altText: "img3.jpg" },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((currentIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((currentIndex - 1 + imageData.length) % imageData.length);
  };

  return (
    <div className="carousel relative overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageData.map((image, index) => (
          <div key={index} className={`carousel-item w-full flex-shrink-0`}>
            <img
              className="h-screen w-full bg-cover bg-center"
              src={image.imageUrl}
              alt={image.altText}
            />
            <div className="absolute z-1 top-1/2 px-16 lg:pl-[200px] w-full">
              <h1 className="text-3xl lg:text-6xl font-bold text-white">
                Welcome To
                <span className="block text-blue-800">
                  Gopal Metal Industries
                </span>
              </h1>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-2 bg-blue-800 text-white rounded-full ml-4"
        onClick={prevSlide}
      >
        <CaretLeft />
      </button>
      <button
        className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-2 bg-blue-800 text-white rounded-full mr-4"
        onClick={nextSlide}
      >
        <CaretRight />
      </button>
    </div>
  );
};

export default Hero;
