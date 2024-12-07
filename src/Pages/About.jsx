import React from "react";
import About from "../assets/About.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] lg:flex lg:justify-between mx-auto w-[390px] md:w-[800px] lg:w-[1200px] bg-amber-100  text-black p-[25px] ">
        <div className="flex flex-col justify-center items-center w-[390] md:w-[400px] lg:w-[550px]">
          <h1 className="font-bold text-3xl mb-[30px]">About Me</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, aliquam
            minima eligendi fugit ipsam autem tenetur quae voluptate assumenda
            dolor similique dignissimos debitis corporis laboriosam dolorem sint
            et eos inventore quaerat exercitationem veniam? Rerum ipsa
            aspernatur libero delectus, eos ut porro fugiat nostrum perferendis
            nulla consequatur reprehenderit facere reiciendis excepturi natus?
            Sunt neque id voluptate, esse maxime tenetur assumenda beatae fugit
            nulla deleniti autem mollitia vitae ducimus harum magni vero
            suscipit facere, voluptates earum sint pariatur! Voluptatum quia
            obcaecati error ex voluptates! Nesciunt, commodi? Consequuntur
            repellendus natus officiis molestias similique provident labore unde
            quidem, soluta, eos inventore ducimus in minus?
          </p>
        </div>
        <div>
          <img
            className="w-[390] md:w-[400px] lg:w-[550px] bg-cover object-cover"
            src={About}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
