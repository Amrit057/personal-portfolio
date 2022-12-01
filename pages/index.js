import Banner from '../components/sections/Banner'
import Bio from '../components/sections/Bio'
import ContactForm from '../components/sections/ContactForm'
import Education from '../components/sections/Education'
import Project from '../components/sections/Project'
import SideNav from '../components/sections/SideNav'

export default function Home() {
  return (
    <>
      {/* <SideNav /> */}
      <Banner />
      <Bio />
      <Project />
      <Education />
      <ContactForm />
    </>
  )
}
