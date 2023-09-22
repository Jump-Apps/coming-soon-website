import React from "react";

const Hero = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:justify-between lg:gap-14 gap-5 min-h-full items-center">
      <div className="flex flex-col max-w-fit lg:max-w-[40vw] lg:mt-0 gap-4">
        <h2 className="uppercase text-xl gradient-text text-center lg:text-left font-sans fade-in">
          Coming Soon
        </h2>
        <h1 className="lg:text-5xl text-3xl text-center lg:text-left leading-auto lg:leading-[2em] fade-in">
          Apps with a purpose...
        </h1>
      </div>
      <img
        className="lg:max-w-[30vw] max-w-[70vw] hero-anim"
        src="/img/HeroArt.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
