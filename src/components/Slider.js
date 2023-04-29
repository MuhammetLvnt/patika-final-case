import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const ref = useRef();

  const slides = [
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/ch-24-slide-desktop_623c54c6.jpeg",
      caption: "The greatest teacher, failure is.",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/ahsoka-slide-desktop_c52e516b.jpeg",
      caption: "Ashoka",
    },
    {
      image:
        "https://lumiere-a.akamaihd.net/v1/images/swjs-interview--slide-desktop_503a6511.jpeg",
      caption: "Starwars jedi survivor",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const slides = ref.current.querySelectorAll(".slide");
    const total = slides.length;
    let timeout;

    const imageSlider = () => {
      slides[currentSlide].classList.add("hidden");
      setCurrentSlide(currentSlide === total - 1 ? 0 : currentSlide + 1);
      slides[currentSlide].classList.remove("hidden");
      timeout = setTimeout(imageSlider, 3000);
    };

    timeout = setTimeout(imageSlider, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  return (
    <div
      ref={ref}
      className="max-w-[1200px] h-[500px] md:w-full w-[350px] md:m-auto px-4 relative group mr-5"
    >
      {slides?.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute w-full h-full rounded-xl duration-500 border ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <img src={slide.image} alt="" className="w-full h-full rounded-xl" />
          <div className="absolute md:right-5 md:top-5 bg-white bg-opacity-50 py-2 px-4 rounded-xl top-0 right-0">
            <p className="text-xl font-medium font-bruno">{slide.caption}</p>
          </div>
        </div>
      ))}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-gray-400 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-gray-400 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <RxDotFilled
            key={index}
            size={20}
            color={index === currentSlide ? "#0000FF" : "#c4c4c4"}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
