export default function NavBar() {
    return (
        <div className="text-white bg-sun bg-no-repeat bg-cover h-screen flex flex-col p-5">
            <div className="flex justify-between p-5">
                <div>
                    <h1 className="font-extrabold text-3xl">amrit.</h1>
                </div>
                <div>
                    <ul className="font-bold text-xl flex gap-7">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="h-screen font-bold items-center flex flex-col justify-center">
                <p className="text-5xl">Hi! I am Amrit Pandey.</p>
                <p className="text-2xl">A Learner</p>
            </div>
            <div>
                
            </div>

        </div>

    )
}

