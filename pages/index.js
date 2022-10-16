import Head from 'next/head'
import Habilidades from '../components/Habilidades'
import HomePage from '../components/HomePage'
import SobreMi from '../components/SobreMi'
import Proyectos from '../components/Proyectos'
import Contactos from '../components/Contactos'


export default function Home() {
  return (
    <div className='text-gray-600'>
      <Head>
        <title>Maxi Martins</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage/>
      <Proyectos/>
      <Habilidades/>
      <SobreMi/>
      <Contactos/>
    </div>
  )
}

