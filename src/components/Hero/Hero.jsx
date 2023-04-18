import React from "react";

const Hero = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4">
      {/* overly */}
      <div className=" max-h-[500px] relative">
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex justify-center flex-col">
          <h1 className="p-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-red-900 ">Best</span>
          </h1>
          <h1 className="p-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-red-900 ">Food</span>Delivered
          </h1>
        </div>
        <img
          className=" w-full max-h-[500px] object-cover"
          src="https://i.ibb.co/tqCC432/top-close-up-view-spices-appetizing-pilaf-board-colorful-spices.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
