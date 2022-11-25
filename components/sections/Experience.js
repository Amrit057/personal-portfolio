export default function Experience() {
    const experience = [
        {
            time: "April-July, 2022",
            post: "React Intern",
            company: "Webpal Pvt Ltd."
        },
        {
            time: "21st Nov-present, 2022",
            post: "Frontend Intern",
            company: "Rumsan Pvt Ltd."
        },
    ]
    return (
        <div id="experience">
            <h1 className="font-extrabold text-4xl mb-5">Experience</h1>
            {experience.map((exp, i) => {
                return (
                    <div key={i}>
                        <li className="list-none font-bold text-lg">{exp.company}</li>
                        <p>{exp.time}</p>
                        <p>{exp.post}</p>
                    </div>
                )
            })}

        </div>
    )
}