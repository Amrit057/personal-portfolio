// import Image from "next/image"
export default function Skills() {
    const skills = [
        {
            language: 'Html',
            size: 90
        },
        {
            language: 'Css',
            size: 70
        },
        {
            language: 'JavaScript',
            size: 60
        },
        {
            language: 'React js',
            size: 50
        },
        {
            language: 'Next js',
            size: 20
        },
        {
            language: 'Tailwind',
            size: 30
        },
    ]
    return (
        <div className="p-10" id="skills">
            <h1 className="font-extrabold text-4xl mb-5 bg-blue-300">Skills</h1>
            <div className="flex flex-col w-64 md:w-96">
                {
                    skills.map(skill=>{
                        return(
                            <>
                            <li className="font-bold list-none">{skill.language}</li>
                            <div className="bg-gray-100 w-full rounded-full p-1">
                                <div className={`py-1 w-[${skill.size}%] bg-green-300 text-right rounded-full`}>
                                    {skill.size}%
                                </div>
                            </div>
                            </>
                        )
                    })
                }
               </div>
        </div>
    )
}