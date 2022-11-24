import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Bio from '../components/sections/Bio'
import Skills from '../components/sections/Skills'
import Education from '../components/sections/Education'

export default function Home() {
  return (
    <>
      <Bio/>
      <Skills/>
      <Education/>
    </>
  )
}
