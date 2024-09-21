import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-customGray">
        <div className="flex justify-around pt-20 pb-20  ">
          <p className="text-6xl font-bold leading-tight pl-14 ">
            A Laravel <br /> Learning Platform
          </p>
          <p className="pt-20 pr-32 tracking-wider">
            It’s never been a better time to become a <br />
            Laravel developer.
          </p>
        </div>
      </div>
      <div className="bg-tealBright pl-36 text-3xl  font-mono tracking-wider">
        {" "}
        <p className="pb-4 text-gray-400">console&gt;</p>
        <p className="pb-4  text-gray-400">console&gt; </p>
        <span className="font-bold  tracking-wider">console&gt;</span>
        <span className="ml-10 tracking-wider">git clone la</span>
        <span className=" text-gray-400 tracking-wider">racode</span>
        <span className="pl-20">
          <button className="border-2 border-black bg-white text-sm px-1 py-2 rounded">
            EXECUTE ;
          </button>
        </span>
        <p className="float-right pr-96 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24">
            <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z" />
          </svg>
        </p>
        <p className="pt-4 pb-4  text-gray-400">console&gt;</p>
        <p className=" text-gray-400"> console&gt;</p>
      </div>
    </div>
  );
}
