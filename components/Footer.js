import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Footer() {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <div className={`text-center p-4 border-t-2 border-gray-600 ${ darkMode ? 'bg-gray-900 text-white' : 'bg-slate-500' }`}>
            <p>Copyright ©️ 2022. All rights reserved.</p>
        </div>
    )
}