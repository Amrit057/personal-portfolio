import Image from "next/image"

export default function Bio() {
    return (
        <div className="bg-gray-300 p-10" id="bio">
            <div className="flex gap-20 font-bold">
                <div >
                    <Image className="bg-transparent shadow-2xl rounded-xl" src="/../public/images/boy.jpg" alt="port" width={400} height={400} />
                </div>
                <div className="my-auto">
                    <div >
                        <p className="text-3xl">Amrit Pandey</p>
                        <p>Permanent Address: Gaindakot, Nawalpur</p>
                        <p>Current Address: Kritipur, Kathmandu</p>
                        <p>Date of Birth: 28/08/2000</p>
                        <p>Nationality: Nepali</p>
                    </div>
                </div>
 
            </div>
        </div>
    )
}