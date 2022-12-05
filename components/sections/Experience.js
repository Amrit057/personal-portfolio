import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext"
export default function Experience() {
    const {darkMode} = useContext(DarkModeContext);
    const experience = [
        {
            time: "April-July, 2022",
            post: "React Intern",
            company: "Webpal Pvt Ltd."
        },
        {
            time: "21st Nov-present, 2022",
            post: "Frontend Intern",
            company: "Rumsan Pvt Ltd."
        },
    ]
    return (
        <div id="experience">
            <h1 className={`font-extrabold text-4xl mb-5 p-2 ${ darkMode ? 'bg-gray-900' : 'bg-gray-400' }`}>Experience</h1>
            {experience.map(exp => {
                return (
                    <div className="p-2" key={exp.company}>
                        <li className="list-none font-bold text-lg">{exp.company}</li>
                        <p>{exp.time}</p>
                        <p>{exp.post}</p>
                    </div>
                )
            })}

        </div>
    )
}