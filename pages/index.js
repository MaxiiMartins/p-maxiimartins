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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title"              content="Maxi Martins" />
        <meta property="description"           content="Desarrollo de Paginas Web | Diseño de Paginas Web en Buenos Aires - Zona Sur | Diseño Pagina Web." />
        <meta property='keywords'              content='diseño web, diseño de paginas web, paginas web, diseño de pagina web, creacion web, diseñador de paginas web, paginas web en zona norte, paginas web en buenos aires, diseño web en capital federal, diseño web en zona sur, diseño web en buenos aires, armado de paginas web, maxi martins,maxii martins, maximartins' />
        <meta property="og:description"        content="Sitios Profesionales y de Diseño Elegante. Adaptables 100% a Dispositivos Móviles" />
	      <meta property="og:image"              content="https://maxiimartins.vercel.app/favicon.ico" />
      </Head>
      <HomePage/>
      <Proyectos/>
      <Habilidades/>
      <SobreMi/>
      <Contactos/>
    </div>
  )
}

