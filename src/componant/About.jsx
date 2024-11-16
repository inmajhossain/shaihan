import React from "react";
import About from "../assets/About.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] lg:flex lg:justify-between mx-auto w-[390px] md:w-[800px] lg:w-[1200px] bg-amber-100  text-black p-[25px] ">
        <div className="flex flex-col justify-center items-center w-[390] md:w-[400px] lg:w-[550px]">
          <h1 className="font-bold text-3xl mb-[30px]">About Me</h1>
          <p className="text-center">
            He is still now single Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Odio illo beatae quod voluptas exercitationem vero
            officia, labore magnam reprehenderit, minus veniam cumque. Nobis,
            quaerat velit delectus architecto est quod dolores officia cumque
            exercitationem doloremque ut nisi ipsum dignissimos at sed numquam
            labore ad culpa iste facere animi voluptas molestias doloribus. Quae
            doloremque ducimus perferendis blanditiis molestiae magnam veniam!
            Itaque ullam at rem, nostrum cupiditate officia reprehenderit labore
            omnis mollitia quas neque reiciendis doloribus ratione iste,
            corporis qui inventore, sequi ducimus sit aliquid enim culpa
            exercitationem? Animi consectetur a, sint ea, libero expedita, nisi
            nam nobis molestias amet corporis odio provident.
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
