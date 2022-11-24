import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-mono'>
      <NavBar />
      <Component {...pageProps} />
      <Footer />

    </div>

  )
}

export default MyApp
