import Image from "next/image"
export default function Education() {
    const data = [
        {
            college: 'Sagarmatha College of Science & Technology',
            year: '2074-2079',
            course: 'Bsc.CSIT',
            division: '1st Division'
        },
        {
            college: 'Aroma English Higher Secondary School',
            year: '2072-2074',
            course: '+2, Science',
            division: '1st Division'
        },
        {
            college: 'Shree Bal Bikas English Boarding Secondary School',
            year: '2071',
            course: 'SLC',
            division: 'Distinction'
        },

    ]
    return (
        <div className="p-10 bg-gray-300" id="education">
            <h1 className="font-extrabold text-4xl mb-5">Education</h1>
            <div className="flex gap-20">
                <div>
                    {data.map((datas, i) => {
                        return (
                            <ul key={i}>
                                <li className="font-bold text-xl ">{datas.college}</li>
                                <ul className="mb-3">
                                    <li>{datas.year}</li>
                                    <li>{datas.course}</li>
                                    <li>{datas.division}</li>
                                </ul>
                            </ul>
                        )
                    })}
                </div>
                {/* <div>
                    <Image className="shadow-2xl rounded-xl" src="/images/edu.jpg" alt="edu" width={350} height={100} />
                </div> */}
            </div>

        </div>
    )
}