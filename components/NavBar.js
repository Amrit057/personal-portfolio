import { useState } from "react"
import { Link } from "react-scroll"
import Image from "next/image"
import SideNav from "./sections/SideNav"
export default function NavBar() {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show);
    }
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <div className="flex justify-between p-5 sticky top-0 bg-black text-white border-b-2 ">
            <div>
                <Link onClick={scrollToTop}><h1 className="font-extrabold text-3xl cursor-pointer">amrit.</h1></Link>
            </div>
            <div className="flex">
                <ul className="font-bold text-xl gap-7 hidden lg:flex">
                    <Link to="bio" spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">About</li>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">Skills</li>
                    </Link>
                    <Link to='education' spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">Education</li>
                    </Link>
                    <Link to='experience' spy={true} smooth={true} offset={-90} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">Experience</li>
                    </Link>
                    <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">Projects</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="hover:border-b-2 cursor-pointer">Contact</li>
                    </Link>
                </ul>

                {/* Responsive navbar */}

                <div className="flex flex-col justify-evenly cursor-pointer bg-white p-1 hover:bg-blue-300 lg:hidden " onClick={toggle}>
                    {/* <span className="block bg-black w-8 h-1"></span>
                    <span className="block bg-black w-8 h-1"></span>
                    <span className="block bg-black w-8 h-1"></span> */}
                    <Image src='/images/burger.png' width={20} height={20} style={{display: show ? "none" : "block"}}/>
                    <span className="hidden w-[20px] h=[20px] text-center text-black" style={{display: show ? "block" : "none"}}>X</span>
                </div>
                <div style={{ display: show ? "block" : "none"}}>
                    <SideNav />
                </div>
            </div>
        </div>

    )
}

