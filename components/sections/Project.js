import Image from "next/image"
import Link from "next/link"
export default function Project() {
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
            name: 'Webpal',
            desc: 'A react app that displays information about webpal company.',
            link: 'https://github.com/Amrit057/practice-website'
        },
        {
            img: '/images/company.jpg',
            name: 'Blog-quiz',
            desc: 'A react app that contains blogs and a quiz game ',
            link: 'https://github.com/Amrit057/blog-quiz'
        }
    ]
    return (
        <div className="p-10 bg-gray-300" id="projects">
            <h1 className="font-extrabold text-4xl  text-center mb-5">Projects</h1>
            <div className="flex gap-4 justify-evenly flex-wrap">
                {projects.map((project, i) => {
                    return (
                        <div className="bg-white w-60 h-68 flex flex-col gap-2 items-center p-2 shadow-2xl rounded-lg" key={i}>
                            <Image className="max-h-24 object-contain" src={project.img} alt="pro-img" width={200} height={200}/>
                            <h1 className="font-bold">{project.name}</h1>
                            <p className="text-center max-h-12 overflow-hidden bg-gray-100">{project.desc}</p>
                            <Link href={`${project.link}`} target='_blank'><button className="bg-slate-400 px-2 py-1 rounded-full">View on github</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}