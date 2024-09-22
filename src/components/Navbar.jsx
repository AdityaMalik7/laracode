import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-12 pb-10 px-4 sm:px-8 lg:px-32">
        <div className="flex justify-between items-start font-mono font-bold">
          <p className="text-tealBright">lara</p>code
        </div>
        <div className="w-full lg:flex lg:w-auto lg:order-1 font-mono mt-6 lg:mt-0">
          <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <li className="text-tealBright">home</li>
            <li>curriculum</li>
            <li>faq</li>
            <li>contact</li>
          </ul>
        </div>
        <div className="flex items-center lg:order-2 mt-6 lg:mt-0">
          <button className="border-2 border-black rounded-md px-3 py-2 bg-tealBright font-bold font-mono text-sm">
            join today
          </button>
        </div>
      </div>
    </>
  );
}
