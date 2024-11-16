import React from "react";

export default function Diff() {
  return (
    <div className="diff aspect-[16/8] w-[390px] md:w-[800] lg:w-[1200px] h-[200px] mx-auto">
      <div className="diff-item-1">
        <div className="bg-indigo-400 text-primary-content grid place-content-center text-4xl lg:text-8xl font-black">
          SHOMRAT SHAIHAN
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-slate-600 grid place-content-center text-4xl lg:text-8xl font-black">
          SHOMRAT SHAIHAN
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}
