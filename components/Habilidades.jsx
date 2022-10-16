import Image from "next/image";
import React from "react";
import HabilidadesCards from "./HabilidadesCards";

const Habilidades = () => {
  return (
    <div id="habilidades" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold">
          HABILIDADES
        </h2>
        <p className="py-4 max-w-lg"></p>
        <div className="grid lg:grid-cols-4 gap-8 ">
            <HabilidadesCards/>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
