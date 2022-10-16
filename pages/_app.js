import Navbar from '../components/Navbar'
import '../styles/globals.css'
import EnDesarrollo from './../components/EnDesarrollo';

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
