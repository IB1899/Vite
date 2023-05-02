
import { useLoaderData, useNavigate } from "react-router-dom"

const Data = () => {

    let navigate = useNavigate()

    //* runs only when routing
    let data = useLoaderData() as career[]

    return (
        <div className="Data">

            {data.map((one) => (

                <div className="career" key={one.id} onClick={() => navigate(`${one.id}`)}>
                    <h2>{one.title}</h2>
                    <h2>{one.location}  {one.salary}</h2>
                </div>
            ))}

        </div>
    );
}
export default Data;

export interface career {
    id: number,
    location: string,
    title: string,
    salary: number
}
//* Loader function
export let fetchData = async (): Promise<any[]> => {

    let response = await fetch("http://localhost:8000/careers")

    if (!response.ok) {
        throw Error("Couldn't fetch the data")
    }
    return response.json()
}