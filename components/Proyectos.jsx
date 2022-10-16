import React from "react";
import Button from "./Button";
import Card from "./Card";
import proy from "../src/data"

const Proyectos = () => {
  return (
    <div id="proyectos" className="w-full" >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold" >Proyectos</h2>
        <p className="py-4 max-w-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus doloremque dicta corporis repudiandae, facilis eligendi quis perspiciatis tempore fugit natus tenetur commodi voluptate. Fuga esse sed illum odit praesentium.
        Exercitationem, similique! Incidunt, blanditiis nesciunt veritatis nam distinctio dolorum aut eius iste doloribus quod, harum obcaecati rem quibusdam architecto molestiae quas natus magnam eum aperiam libero maiores, voluptatum ipsum labore?</p>
        <div className="max-w-5xl mx-auto my-5 grid md:grid-cols-2 gap-10">
        {
          proy?.slice(0,2).map(({title,src,url})=>(
              <Card key={title} href={url} title={title} src={src}  />
            ))
          }
        </div>
        <div className="flex items-center justify-center" >
        <Button href={"/proyectos"} text={"ver todos"} />
        </div>
      </div>
    </div>
  );
};


export default Proyectos;
