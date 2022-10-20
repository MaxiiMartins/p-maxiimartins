import Image from 'next/image'
import React from 'react'
import Button from './Button'
import me from "../public/assets/yo.jpg";


const SobreMi = () => {
  return (
    <div id='sobre-mi' className='w-full' >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold">
          Sobre mi
        </h2>
        <div className="shadow-xl shadow-gray-500 my-8 px-8">
        <div className="xs:w-96 xs:h-96 sm:h-40 sm:w-40 md:h-56 md:w-56 mx-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500">
          <Image src={me} alt="yo" />
        </div>
          <p className="py-6 max-w-2xl mx-auto text-center text-lg leading-loose">¡ Hola ! 👋
            <br/> Mi nombre es Maximiliano, vivo en Buenos Aires - Argentina. Me encanta descubrir nuevas tecnologías, buscar soluciones de programación y formar parte de un equipo de trabajo. Encontré mi pasión por la programación en 2018 y en 2022 me uní a una academia de programación con una metodología de bootcamp. En este momento estoy perfeccionando mis habilidades en el área de front-end, pero también me siento cómodo trabajando en el área de back-end.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Button href={"/resume.pdf"} text={"CV"} target={true}/>
          <Button href={"/proyectos"} text={"mis proyectos"} />
        </div>
      </div>
    </div>
  )
}

export default SobreMi