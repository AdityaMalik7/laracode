import React from "react";
import tesla from "../assets/tesla-9-logo-svgrepo-com.png";

import apple from "../assets/apple-logo-svgrepo-com.png";
import airbnb from "../assets/airbnb-logo.png";
import spotify from "../assets/spotify-logo.png";
import stripe from "../assets/stripe-logo.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-customGrey pt-10 pb-10">
          {" "}
          <ul className="flex justify-between items-center pl-36 pr-36">
            <li>
              {" "}
              <img src={tesla} className="h-24 w-24" />
            </li>
            <li>
              {" "}
              <img src={apple} className="h-10 w-10" />
            </li>
            <li>
              {" "}
              <img src={airbnb} className="h-24 w-24" />
            </li>
            <li>
              {" "}
              <img src={spotify} className="h-11 w-11" />
            </li>
            <li>
              {" "}
              <img src={stripe} className="h-14 w-fit " />
            </li>
          </ul>
          <div className="pt-8 flex justify-center items-center text-customGray font-mono">
            <p className="tracking-wider">Made with ♡ in 🇮🇳 by Aditya Malik </p>
          </div>
        </div>
      </footer>
    </>
  );
}
