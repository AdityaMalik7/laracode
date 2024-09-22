import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-customGray">
        <div className="flex flex-col lg:flex-row justify-around pt-10 lg:pt-20 pb-10 lg:pb-20 px-4 sm:px-8 lg:px-32">
          <p className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left mb-8 lg:mb-0">
            A Laravel <br /> Learning Platform
          </p>
          <p className="lg:pt-20 text-center lg:text-right tracking-wider">
            It’s never been a better time to become a <br />
            Laravel developer.
          </p>
        </div>
      </div>
      <div className="bg-tealBright px-4 sm:px-8 lg:pl-36 text-xl sm:text-2xl lg:text-3xl font-mono tracking-wider">
        <p className="pb-4 text-gray-400">console&gt;</p>
        <p className="pb-4 text-gray-400">console&gt; </p>
        <span className="font-bold tracking-wider">console&gt;</span>
        <span className="ml-4 sm:ml-10 tracking-wider">git clone la</span>
        <span className="text-gray-400 tracking-wider">racode</span>
        <span className="pl-10 sm:pl-20 mt-4 inline-block">
          <button className="border-2 border-black bg-white text-sm px-2 py-2 rounded">
            EXECUTE ;
          </button>
        </span>
        <p className="float-right pr-24 sm:pr-64 lg:pr-96 pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24">
            <path d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z" />
          </svg>
        </p>
        <p className="pt-4 pb-4 text-gray-400">console&gt;</p>
        <p className="text-gray-400">console&gt;</p>
      </div>
    </div>
  );
}
