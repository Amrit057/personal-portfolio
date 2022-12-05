import { useContext, useState } from "react"
import { Link } from "react-scroll"
import { DarkModeContext } from "../context/DarkModeContext"
import Image from "next/image"
import SideNav from "./sections/SideNav"
import { BsSun, BsMoon } from "react-icons/bs"

export default function NavBar({ data = [] }) {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show);
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    const { darkMode, toggleDarkMode, toggleLightMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? `navBar dark` : `navBar light`}>
            <div>
                <Link to="/" onClick={scrollToTop}><h1 className="font-extrabold text-3xl cursor-pointer">amrit.</h1></Link>
            </div>
            <div className="flex flex-row-reverse items-center lg:flex-row">
                
                <ul className="font-bold text-xl gap-7 hidden lg:flex">
                    {data.map((d) => {
                        return (
                            <Link to={d.link} spy={true} smooth={true} offset={d.offset} duration={500} key={d.name}>
                                <li className={`hover:border-b-2 h-7 cursor-pointer ${darkMode ? 'border-white' : 'border-black'}`}>{d.name}</li>
                            </Link>
                        )
                    })}
                </ul>

                {/* Responsive navbar */}

                <div className="cursor-pointer bg-white p-1 hover:bg-gray-300 lg:hidden " onClick={toggle}>
                    <Image src='/images/burger.png' alt="burger" width={20} height={20} style={{ display: show ? "none" : "block" }} />
                    <span className="hidden w-[20px] h-[20px] text-center text-black" style={{ display: show ? "block" : "none" }}>X</span>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <SideNav />
                </div>

                <div className= "mr-3 lg:ml-3">
                    <div className={`p-1 border-2 rounded-t-full cursor-pointer ${darkMode ? 'bg-orange-500' : 'bg-inherit border-black'}`} onClick={toggleDarkMode}><BsMoon /></div>
                    <div className={`p-1 border-2 border-t-0 rounded-b-full cursor-pointer ${darkMode ? 'bg-inherit' : 'bg-yellow-500 border-black'}`} onClick={toggleLightMode}><BsSun/></div>
                </div>
            </div>
        </div>

    )
}

