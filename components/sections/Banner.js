import Typewriter from "typewriter-effect"

export default function Banner() {
    return (
        <div className="bg-black h-screen text-white flex items-center justify-center">
            <div>
                <p className="text-5xl">Hi! I am Amrit Pandey.</p>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "I'm a Learner.",
                            "I'm a Web Developer.",
                        ],
                    }} />
            </div>
        </div>
    )
}