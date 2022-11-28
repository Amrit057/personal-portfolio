import Image from "next/image"
import Skills from "./Skills"

export default function Bio() {
    return (
        <div className="bg-gray-300 p-10 flex gap-4 flex-wrap justify-evenly items-center" id="bio">
            <div className="font-bold">
                <div >
                    <Image className="bg-transparent shadow-2xl rounded-xl" src="/images/boy.jpg" alt="port" width={400} height={400} />
                </div>
                <div>
                    <div className="text-center">
                        <p className="text-3xl">Amrit Pandey</p>
                        <p>Gaindakot, Nawalpur</p>
                        {/* <p>Current Address: Kritipur, Kathmandu</p> */}
                        <p>Date of Birth: 28/08/2000</p>
                        <p>Nationality: Nepali</p>
                    </div>
                </div>
            </div>
            <Skills/>
        </div>
    )
}