import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import G3 from "../assets/G3.jpg";
import G4 from "../assets/G4.jpg";
import G5 from "../assets/G5.jpg";
import G6 from "../assets/G6.jpg";
import G7 from "../assets/G7.jpg";
import G8 from "../assets/G8.jpg";
import G9 from "../assets/G9.jpg";

export default function Carasol() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 2,
      animationDuration: 5000,
      animationTimingFunc: "linear",
      perView: 2,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 9,
        },
        640: {
          perView: 6,
          gap: 10,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative mx-auto w-[390px] lg:max-w-full  ">
        {/* <!-- Slides --> */}
        <div data-glide-el="track" className="">
          <ul className="bg-indigo-100 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full lg:w-[1000px] overflow-hidden p-[5px] lg:p-[20px] items-center">
            <li>
              <img
                src={G1}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain "
              />
            </li>
            <li>
              <img
                src={G6}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G3}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G4}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G5}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain   "
              />
            </li>
            <li>
              <img
                src={G2}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G7}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G8}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
            <li>
              <img
                src={G9}
                className="m-auto  lg:h-[200px] w-[250px] bg-cover object-contain  "
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
