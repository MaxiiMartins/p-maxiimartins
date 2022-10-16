import React from 'react'
import Button from './Button'

const SobreMi = () => {
  return (
    <div id='sobre-mi' className='w-full' >
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl mod:text-7xl tracking-wider uppercase text-black font-bold">
          Sobre mi
        </h2>
        <div className="shadow-xl shadow-gray-500 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem corporis veritatis dolores eveniet, natus, non provident ratione facere eligendi totam ut magnam impedit ipsa incidunt modi doloribus repellendus eum.</p>
          <p className="py-4 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem corporis veritatis dolores eveniet, natus, non provident ratione facere eligendi totam ut magnam impedit ipsa incidunt modi doloribus repellendus eum.</p>
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