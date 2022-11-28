import Banner from '../components/sections/Banner'
import Bio from '../components/sections/Bio'
import ContactForm from '../components/sections/ContactForm'
import Education from '../components/sections/Education'
import Project from '../components/sections/Project'
import TestNetlifyForm from '../components/sections/TestNetlifyForm'

export default function Home() {
  return (
    <>
      <Banner />
      <Bio />
      <Project />
      <Education />
      <ContactForm />
      <TestNetlifyForm/>
    </>
  )
}
