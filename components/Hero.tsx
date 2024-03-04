"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Discover and rent a car quickly!</h1>

        <p className="hero__subtitle">
          Simplify the process of renting a car with our easy and streamlined
          booking system.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          // containerStyles="bg-custom-brown text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />

     
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
