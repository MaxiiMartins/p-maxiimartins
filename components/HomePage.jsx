import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import me from "../public/assets/yo.jpg";
import Button from "./Button";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Back-End Developer", "FullStack Developer"],
    loop: 0
  });
  return (
    <div id="inicio" className="h-screen w-full text-center bg-transparent"  >
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <h1 className="uppercase font-bold text-black md:text-7xl sm:text-5xl text-5xl">
          {text}
          <Cursor />
        </h1>
        <p className=" text-gray-600 w-screen text-center text-xl max-w-[450px] max-auto sm:text-lg ">
          Soy un desarrollador que disfruta la creación de proyectos. Siempre en movimiento para mejorar las buenas prácticas. Me oriento más hacia el Front-End y busco el conseguir más experiencia y aprender nuevas tecnologías para mejorar más en esta parte del mundo IT.
        </p>
        <Button href={"/#sobre-mi"} text={"saber mas"} />
      </div>
    </div>
  );
};

export default HomePage;
