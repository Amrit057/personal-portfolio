import Typewriter from "typewriter-effect"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Banner() {
    return (
        <div className="h-screen flex items-center justify-center border-b-2 border-gray-600" id="banner">
            <div>
                <p className="text-5xl text-center">Hi! I am Amrit Pandey.</p>
                <div className="text-center mb-3 sm:text-left">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "I'm a Learner.",
                                "I'm a Web Developer.",
                            ],
                        }}
                    />
                </div>
                <div className="flex gap-2 justify-center sm:justify-start">
                    <Link href='https://www.facebook.com/' target='_blank'><BsFacebook /></Link>
                    <Link href='https://www.instagram.com/' target='_blank'><BsInstagram /></Link>
                    <Link href='https://www.linkedin.com/' target='_blank'><BsLinkedin /></Link>
                </div>
            </div>
        </div>
    )
}