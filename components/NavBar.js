import Link from "next/link";

export default function NavBar() {
    return (
        <div className="text-white bg-gray-600 h-screen flex flex-col p-5">
            <div className="flex justify-between p-5">
                <div>
                    <Link href='/'><h1 className="font-extrabold text-3xl">amrit.</h1></Link>
                </div>
                <div>
                    <ul className="font-bold text-xl gap-7 hidden lg:flex">
                        <Link href="#bio"><li>About</li></Link>
                        <Link href="#skills"><li>Skills</li></Link>
                        <Link href='#education'><li>Education</li></Link>
                        <Link href='#experience'><li>Experience</li></Link>
                        <Link href='#projects'><li>Projects</li></Link>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="h-screen font-bold items-center flex flex-col justify-center">
                <p className="text-5xl">Hi! I am Amrit Pandey.</p>
                <p className="text-2xl">A Learner</p>
            </div>
        </div>

    )
}

