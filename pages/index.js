import Banner from '../components/sections/Banner'
import Bio from '../components/sections/Bio'
import ContactForm from '../components/sections/ContactForm'
import Education from '../components/sections/Education'
import Project from '../components/sections/Project'
import Head from 'next/head'
import { DarkModeContext } from '../context/DarkModeContext'
import { useContext } from 'react'

export default function Home() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${ darkMode ? 'bg-gray-800 text-white' : 'bg-gray-300'  }`}>
        <Banner />
        <Bio />
        <Project />
        <Education />
        <ContactForm />
      </div>

    </>
  )
}
