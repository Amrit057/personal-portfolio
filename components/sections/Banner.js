import Typewriter from "typewriter-effect"

export default function Banner() {
    return (
        <div className="h-screen flex items-center justify-center border-b-2 border-gray-600" id="banner">
            <div>
                <p className="text-5xl text-center">Hi! I am Amrit Pandey.</p>
                <div className="text-center sm:text-left">
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
            </div>
        </div>
    )
}