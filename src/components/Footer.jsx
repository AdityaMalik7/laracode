import React from "react";
import tesla from "/Users/aditya/laracode/src/assets/tesla-9-logo-svgrepo-com.png";
import apple from "/Users/aditya/laracode/src/assets/apple-logo-svgrepo-com.png";
import airbnb from "/Users/aditya/laracode/src/assets/[CITYPNG.COM]HD Gray Airbnb Official Logo Brand PNG Image - 3000x3000.png";
import spotify from "/Users/aditya/laracode/src/assets/pngwing.com.png";
import stripe from "/Users/aditya/laracode/src/assets/Stripe wordmark - white (small).png";
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
        </div>
      </footer>
    </>
  );
}
