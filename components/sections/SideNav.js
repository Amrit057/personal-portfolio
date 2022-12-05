import { Link } from "react-scroll"
import { MenuData } from "../../data/menu"
import { DarkModeContext } from "../../context/DarkModeContext"
import { useContext } from "react"
export default function SideNav() {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div className={`h-screen w-60 ${ darkMode ? 'bg-gray-900' : 'bg-gray-400 text-black' } text-white fixed right-0 top-24 z-20 transition ease-in-out delay-150`}>
            <div>
                <ul className="p-5 font-bold text-xl">
                    {MenuData.map(d => {
                        return (
                            <Link to={d.link} spy={true} smooth={true} offset={d.offset} duration={500} key={d.name}>
                                <li className="hover:text-gray-600 active:text-gray-500 cursor-pointer m-2 p-1 w-32 h-7" >{d.name}</li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}