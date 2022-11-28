import { Link } from "react-scroll"
export default function NavBar() {
    return (
        <div className="flex justify-between p-5 sticky top-0 bg-black text-white border-b-2">
            <div>
                <Link href='/'><h1 className="font-extrabold text-3xl">amrit.</h1></Link>
            </div>
            <div>
                <ul className="font-bold text-xl gap-7 hidden lg:flex">
                    <Link to="bio" spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2">About</li>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2">Skills</li>
                    </Link>
                    <Link to='education' spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2">Education</li>
                    </Link>
                    <Link to='experience' spy={true} smooth={true} offset={-90} duration={500}>
                        <li className="hover:border-b-2">Experience</li>
                    </Link>
                    <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}>
                        <li className="hover:border-b-2">Projects</li>
                    </Link>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <li className="hover:border-b-2">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>

    )
}

