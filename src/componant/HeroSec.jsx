import React from "react";
import Hero from "../assets/Hero.jpg";

export default function HeroSec() {
  return (
    <>
      <div className="w-[390px] md:w-[800px] lg:w-[1200px] mx-auto h-[390px] md:h-[500px] flex justify-center ">
        <img
          className="bg-cover object-cover lg:w-[1200px]"
          src={Hero}
          alt=""
        />
      </div>
    </>
  );
}
