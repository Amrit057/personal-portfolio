import {useForm} from "react-hook-form"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handle = () => {
        alert("Submitted");
    }
    return (
        <div className="p-10 bg-green-100 bg-no-repeat bg-contain flex flex-col items-center justify-center" id="contact">
            <h1 className="font-extrabold text-4xl mb-5">Contact</h1>
            <div>
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit(handle)} data-netlify-honeypot="bot-field" className="flex flex-col gap-2">
                    <input name="bot-field" type="hidden"/>

                    <label for="name">Name:</label>
                    <input className="outline-0 w-96" id="name" {...register('name', {required: true})}/>
                    {errors.name && <p className="text-red-700">Please enter your name.</p>}

                    <label for="email">Email:</label>
                    <input className="outline-0 w-96" id="email" {...register('email', {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}, {required: true})}/>
                    {errors.email && <p className="text-red-700">Please enter valid email.</p> }

                    <label for="message">Message:</label>
                    <textarea className="outline-0 w-96" rows={5} id="message" {...register('message', {required: true})}/>
                    {errors.message && <p className="text-red-700">Please enter your message.</p>}

                    <button className="bg-slate-400 rounded-full px-2 py-1 w-20" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}