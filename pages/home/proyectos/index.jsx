import Head from 'next/head';
import React from 'react'
import Card from '../../components/Card';
import proyect from "../../src/data"

export const getStaticProps = async ()=>{
  const proyectos = proyect
  return{
    props:{proyectos}
  }
}

const Proyectos = ({proyectos}) => {
  return (
    <div id="portfolio" className="w-full">
      <Head>
        <title>Proyectos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-black font-bold pb-16">
        Proyectos
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {
            proyectos.map(({title,src,url},index)=>(
              <Card key={index} href={url} title={title} src={src}  />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Proyectos