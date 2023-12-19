import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full text-center h-screen mx-auto flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold p-2">
            growing with data analytics
          </p>
          <h1 className="uppercase md:text-7xl sm:text-6xl text-4xl font-bold sm:py-6 ">
            grow with data.
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
              Fast, flexible financing for
            </p>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Hero;
