import { Link } from "react-scroll"
export default function SideNav() {
    return (
        <div className="h-screen w-60 bg-slate-800 text-white fixed right-0 top-[78px] z-10 transition ease-in-out delay-150">
            <div>
                <ul className="p-5 font-bold text-xl gap-7">
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
            </div>
        </div>
    )
}