import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { MenuData } from '../data/menu'
import { DarkModeProvider } from '../context/DarkModeContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className='font-mono'>
      <DarkModeProvider>
          <NavBar data={MenuData} />
          <Component {...pageProps} />
          <Footer />
      </DarkModeProvider>

    </div>

  )
}

export default MyApp
