import G1 from "../assets/G1.jpg";
import G2 from "../assets/G2.jpg";
import G3 from "../assets/G3.jpg";
import G4 from "../assets/G4.jpg";
import G5 from "../assets/G5.jpg";
import G6 from "../assets/G6.jpg";
import G7 from "../assets/G7.jpg";
import G8 from "../assets/G8.jpg";
import G9 from "../assets/G9.jpg";

export default function Galary() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8  lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-auto ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Recent Photos Here
              </h2>

              <p className="mt-4 text-gray-600 font-bold">
                I want to explore world and take some photos from there.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                See Galarys
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G1}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G6}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G3}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G4}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G5}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G2}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G7}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G8}
                  alt=""
                />
              </a>
              <a
                className=" w-[350px] h-[355px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring flex flex-col mx-auto "
                href="#"
              >
                <img
                  className="w-[350px] h-[320px] bg-cover object-cover"
                  src={G9}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
