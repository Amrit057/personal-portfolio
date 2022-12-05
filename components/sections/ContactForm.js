import { useForm } from "react-hook-form"
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function ContactForm() {

    const { darkMode } = useContext(DarkModeContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handle = (data) => {

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(data)
        })
        alert('Form Successfully Submitted.')
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-[1400px] p-10" id="contact">
                <h1 className={`font-extrabold mb-5 text-4xl w-full text-center p-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-400'}`}>Contact</h1>
                <div className={`p-2 w-80 mb-5 border-2 rounded-lg ${darkMode ? 'border-gray-400' : 'border-gray-600'} sm:w-96`}>
                    <form method="POST" onSubmit={handleSubmit(handle)} className="flex flex-col gap-2">

                        <label htmlFor="name">Name:</label>
                        <input
                            className="outline-0"
                            id="name"
                            name="name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-700">Please enter your name.</p>}

                        <label htmlFor="email">Email:</label>
                        <input
                            className="outline-0"
                            id="email"
                            name="email"
                            {...register('email', { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }, { required: true })}
                        />
                        {errors.email && <p className="text-red-700">Please enter valid email.</p>}

                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="outline-0"
                            rows={5}
                            id="message"
                            name="message"
                            {...register('message', { required: true })}
                        />
                        {errors.message && <p className="text-red-700">Please enter your message.</p>}

                        <button
                            className="bg-slate-400 active:bg-slate-500 rounded-full px-2 py-1 w-20"
                            type="submit"
                        >Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}