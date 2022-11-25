export default function ContactForm() {
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        fetch('api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }
    return (
        <div className="p-10 bg-gray-300">
            <h1 className="font-extrabold text-4xl mb-5">Contact</h1>
            <form method="post" onSubmit={handleOnSubmit} className="flex flex-col gap-2">
                <label htmlFor="name">Name:</label>
                <input className="outline-0 w-96" type="text" name="name" />
                <label htmlFor="email">Email:</label>
                <input className="outline-0 w-96" type="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea className="outline-0 w-96" rows={5} name="message" />
                <button className="bg-slate-400 rounded-full px-2 py-1 w-20" type="submit">Submit</button>
            </form>


        </div>
    )
}