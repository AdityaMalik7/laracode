import React from "react";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl pt-12 pb-10 ">
          <div className="flex justify-between items-start pl-32 font-mono font-bold">
            <p className="text-tealBright">lara</p>code
          </div>
          <div className="justify-center items-center w-full lg:flex lg:w-auto lg:order-1 font-mono">
            <ul className="flex justify-center items-center gap-10  ml-5">
              <li className="text-tealBright">home</li>
              <li>curriculum</li>
              <li>faq</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2 pr-10">
            <button className="border-2 border-black rounded-md px-1 py-2 bg-tealBright font-bold font-mono text-sm mr-24">
              join today
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
