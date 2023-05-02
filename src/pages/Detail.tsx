
import { useParams, useLoaderData } from "react-router-dom"
import { career } from "./Data";
import { useState } from "react";

const Details = () => {

    // let { id } = useParams();
    // let numericId = parseInt(id!, 10)

    //* runs only when routing
    let one = useLoaderData() as career

    let [check , setCheck] = useState<boolean>(true)

    if(!check){
        throw Error("The App has crashed")
    }
    return (
        <div className="Details">

            <div className="career" >
                <h2 onClick={()=> setCheck(false) }>{one.title}</h2>
                <h2>{one.location}  {one.salary}</h2>
            </div>

        </div>
    );
}
export default Details;

//* Loader function
export let FetchOne = async ({ params }: { params: any }) => {

    //* We can access the id here since we added it in its path. ( path=":id" loader={FetchOne} )
    let { id }: { id: number } = params

    let response = await fetch("http://localhost:8000/careers/" + id)

    if(!response.ok){
        throw Error("The data aren't found")
    }
    return response.json()
}