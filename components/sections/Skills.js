import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"
export default function Skills() {
    const {darkMode} = useContext(DarkModeContext);
    const skills = [
        {
            language: 'Html',
            size: '90%',
        },
        {
            language: 'Css',
            size: '70%',
        },
        {
            language: 'JavaScript',
            size: '60%',
        },
        {
            language: 'React js',
            size: '50%'
        },
        {
            language: 'Next js',
            size: '20%'
        },
        {
            language: 'Tailwind',
            size: '30%'
        },
    ]
    return (
        <div className="p-10" id="skills">
            <h1 className={`font-extrabold text-4xl mb-5 p-2 ${ darkMode ? 'bg-gray-900' : 'bg-gray-400' }`}>Skills</h1>
            <div>
                <ul className="flex flex-col w-64 md:w-96 p-2">
                    {
                        skills.map((skill, i) => {
                            return (
                                <li key={i}>
                                    <h1 className="font-bold list-none" >{skill.language}</h1>
                                    <div className="bg-gray-100 w-full rounded-full p-1">
                                        <div className={`w-[${skill.size}] bg-green-500 text-right rounded-full`}>
                                            {skill.size}
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}