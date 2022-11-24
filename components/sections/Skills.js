import Image from "next/image"
export default function Skills() {
    const skills = [
        {
            language: 'Html',
            size: '90%'
        },
        {
            language: 'Css',
            size: '70%'
        },
        {
            language: 'JavaScript',
            size: '60%'
        },
        {
            language: 'React js',
            size: '50%'
        },
        {
            language: 'Next js',
            size: '20%'
        },
        {
            language: 'Tailwind',
            size: '30%'
        },
    ]
    return (
        <div className="p-10 bg-gray-300" id="skills">
            <h1 className="font-extrabold text-4xl mb-5">Skills</h1>
            <div className="flex">
                <div className="w-[60%]">
                    {skills.map((skills, i) => {
                        return (
                            <ul key={`${skills.language}-${i}`}>
                                <li className="font-bold">{skills.language}</li>
                                <div className="bg-gray-100 rounded-full">
                                    <div className={`py-1 w-[${skills.size}] bg-green-300 text-right rounded-full`}>
                                        {skills.size}
                                    </div>
                                </div>
                            </ul>
                        )
                    })}
                </div>
                {/* <div>
                    <Image src="/images/skill.png" alt="skill" width={450} height={100} />
                </div> */}
            </div>
        </div>
    )
}