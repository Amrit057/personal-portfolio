import { DarkModeContext } from "../../context/DarkModeContext"
import { useContext } from "react"
import Image from "next/image"
import Link from "next/link"
export default function Project() {
    const { darkMode } = useContext(DarkModeContext);
    const projects = [
        {
            img: '/images/travel.jpg',
            name: 'Travel Advisor',
            desc: 'A react app that displays every hotels, restaurants and attractions within the selected area in google map.',
            link: 'https://github.com/Amrit057/Travel-Advisor'
        },
        {
            img: '/images/portfolio.jpg',
            name: 'Portfolio Website',
            desc: 'A next js app that displays my skills, education, experience, projects, etc.',
            link: 'https://github.com/Amrit057/personal-portfolio'
        },
        {
            img: '/images/company.jpg',
            name: 'Website',
            desc: 'A react app that displays information about a company.',
            link: 'https://github.com/Amrit057/practice-website'
        },
        {
            img: '/images/quiz.jpg',
            name: 'Blog-quiz',
            desc: 'A react app that contains blogs and a quiz game ',
            link: 'https://github.com/Amrit057/blog-quiz'
        }
    ]
    return (
        <div className="flex justify-center">
            <div className="p-10 w-[1400px]" id="projects">
                <h1 className={`font-extrabold text-4xl  text-center mb-5 p-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-400'}`}>Projects</h1>
                <div className="flex py-5 justify-evenly flex-wrap">
                    {projects.map((project, i) => {
                        return (
                            <div className="w-60 h-68 flex flex-col gap-2 items-center p-2 shadow-2xl rounded-lg" key={i}>
                                <Image className="max-h-24 object-contain" src={project.img} alt="pro-img" width={200} height={200} />
                                <h1 className="font-bold">{project.name}</h1>
                                <p className="text-center max-h-12 overflow-hidden ">{project.desc}</p>
                                <Link href={`${project.link}`} target='_blank'><button className="bg-slate-400 active:bg-slate-500 px-2 py-1 rounded-full">View on github</button></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}