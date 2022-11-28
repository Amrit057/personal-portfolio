export default function TestNetlifyForm(){
    return(
        <form name="contact1" data-netlify="true" onSubmit="submit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button type="submit">Submit</button>
        </form>
    )
}