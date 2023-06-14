import React from "react";
import Button from "./Button";
import Card from "./Card";
import proy from "../src/data"

const Proyectos = () => {
  return (
    <div id="proyectos" className="w-full" >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold" >Proyectos</h2>
        <p className="py-4 max-w-lg" >En esta seccion podras ver los ultimos proyectos realizados y si estas interesado en ver de mis proyectos hacer click en Ver todos </p>
        <div className="max-w-5xl mx-auto my-5 grid md:grid-cols-2 gap-10">
        {
          proy?.slice(0,2).map(({title,src,url})=>(
              <Card key={title} href={url} title={title} src={src}  />
            ))
          }
        </div>
        <div className="flex items-center justify-center" >
        <Button href={"/home/proyectos"} text={"ver todos"} />
        </div>
      </div>
    </div>
  );
};


export default Proyectos;
