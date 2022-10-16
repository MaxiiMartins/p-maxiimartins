import Image from "next/image";
import Link from "next/link";
import React from "react";
import me from "../public/assets/yo.jpg";
import Button from "./Button";

const HomePage = () => {
  return (
    <div id="inicio" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 sm:h-36 sm:w-36 mx-auto overflow-hidden rounded-xl">
          <Image src={me} alt="yo" />
        </div>
        <h1 className="uppercase font-bold text-black text-7xl sm:text-5xl">
          FULL STACK WEB DEVELOPER
        </h1>
        <p className=" text-gray-600 text-xl max-w-sm max-auto sm:text-base ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          adipisci non error cupiditate id nisi voluptatum accusantium in neque
          veniam recusandae, unde vel. Autem possimus quidem, labore excepturi
          nesciunt illum!
        </p>
        <Button href={"/#sobre-mi"} text={"saber mas"} />
      </div>
    </div>
  );
};

export default HomePage;
