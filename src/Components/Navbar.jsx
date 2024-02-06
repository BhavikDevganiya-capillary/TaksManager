import React from "react";
import ButtonAtom from "../Atoms/ButtonAtom";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-white w-full h-14 flex items-center sticky top-0">
        <h1 className="text-black font-bold text-2xl w-[20%] flex justify-center">
          YeKarlo
        </h1>
        <ul className="flex w-80 justify-around mx-5 font-bold text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
        <div className="flex w-full justify-end mr-10">
          <ButtonAtom varient="default" text="Sign-in" />
        </div>
      </div>
    </>
  );
}
