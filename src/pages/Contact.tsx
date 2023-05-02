import { Form, useActionData } from "react-router-dom";

//! Form & Action
const Contact = () => {

    let ActionData = useActionData() as { id: number, title: string, message: string }[]

    return (
        <div className="Contact">

            {/* The action will look for any action on that route and execute it when submitting */}
            <Form method="post" action="/contact">

                <label htmlFor="">title</label>
                <input type="text" name="title" required />

                <label htmlFor="">message</label>
                <textarea name="message" required cols={30} rows={10}></textarea>

                <button>submit</button>

            </Form>

            {/* Accessing the returned data from the action method */}
            <div className="data">

                {ActionData && ActionData.map((one) => (

                    <div className="piece" key={one.id}>
                        <h2> {one.title} </h2>
                        <p> {one.message} </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

let array: { id: number, title: string, message: string }[] = []

//* Action method
export let publish = async ({ request }: { request: Request }) => {

    let id = Math.floor(Math.random() * 100000)

    //* Contains the form data, instead of using the old way of states
    let data = await request.formData()

    let holder = { id, title: data.get('title') as string, message: data.get("message") as string }

    array = [...array, holder]

    return array;
}
export default Contact;
