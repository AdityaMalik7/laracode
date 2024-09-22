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
          <ul className="flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-8 lg:px-36 gap-2">
            <li className="mb-6 sm:mb-0">
              <img
                src={tesla}
                className="h-20 w-20 sm:h-24 sm:w-24"
                alt="Tesla"
              />
            </li>
            <li className="mb-6 sm:mb-0">
              <img
                src={apple}
                className="h-8 w-8 sm:h-10 sm:w-10"
                alt="Apple"
              />
            </li>
            <li className="mb-6 sm:mb-0">
              <img
                src={airbnb}
                className="h-20 w-20 sm:h-24 sm:w-24"
                alt="Airbnb"
              />
            </li>
            <li className="mb-6 sm:mb-0">
              <img
                src={spotify}
                className="h-10 w-10 sm:h-11 sm:w-11"
                alt="Spotify"
              />
            </li>
            <li className="mb-6 sm:mb-0">
              <img src={stripe} className="h-12 w-auto sm:h-14" alt="Stripe" />
            </li>
          </ul>
          <div className="pt-8 flex justify-center items-center text-customGray font-mono">
            <p className="tracking-wider text-center">
              Made with ♡ in 🇮🇳 by Aditya Malik
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
