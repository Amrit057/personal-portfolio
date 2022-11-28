export default function ContactForm() {
    // async function handleOnSubmit(e) {
    //     e.preventDefault();
    //     const formData = {}
    //     Array.from(e.currentTarget.elements).forEach(field => {
    //         if (!field.name) return;
    //         formData[field.name] = field.value;
    //     });
    //     fetch('api/mail', {
    //         method: 'post',
    //         body: JSON.stringify(formData)
    //     })
    //     console.log(formData)
    // }
    return (
        <div className="p-10 bg-green-100 bg-no-repeat bg-contain flex justify-center" id="contact">
            <div>
                <h1 className="font-extrabold text-4xl mb-5">Contact</h1>
                <form name="contact" method="POST" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field" className="flex flex-col gap-2">
                    <input name="bot-field" type="hidden"/>
                    <label for="name">Name:</label>
                    <input className="outline-0 w-96" type="text" id="name" name="name"/>
                    <label for="email">Email:</label>
                    <input className="outline-0 w-96" type="email" id="name" name="email" />
                    <label for="message">Message:</label>
                    <textarea className="outline-0 w-96" rows={5} id="message" name="message" />
                    <button className="bg-slate-400 rounded-full px-2 py-1 w-20" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}