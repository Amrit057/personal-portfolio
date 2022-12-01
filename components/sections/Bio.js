import Image from "next/image"
import Skills from "./Skills"

export default function Bio() {
    return (
        <div className="flex justify-center bg-gray-300" id="bio">
            <div className="flex gap-20 my-5 flex-wrap justify-evenly" >
                <div className="font-bold w-64 md:w-96">
                    <div >
                        <Image className="bg-transparent shadow-2xl rounded-xl" src="/images/boy.jpg" alt="port" width={400} height={400} />
                    </div>
                    <div>
                        <div className="text-center">
                            <p className="text-3xl">Amrit Pandey</p>
                            <p>Gaindakot, Nawalpur</p>
                            <p>Date of Birth: 28/08/2000</p>
                            <p>Nationality: Nepali</p>
                        </div>
                    </div>
                </div>
                <Skills />
            </div>
        </div>

    )
}