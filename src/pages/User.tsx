import { FC, useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
import { user } from "./Home";

const User: FC = () => {

    let navigate = useNavigate()
    let user = useLoaderData() as user;
    let { id } = useParams()

    let deleteUser = async () => {

        let response = await fetch(`api/user/${id}`, { method: "Delete" })
        let message = await response.json()

        if (message.acknowledged) {
            return navigate("/")
        }
    }
    let CreateUser = async () => {

        let object = { name, age, job, country }

        let response = await fetch("api/user", {
            method: "post", headers: { "Content-type": "application/json" },
            body: JSON.stringify(object)
        })

        let message = await response.json();

        if (message.success) {
            return navigate("/")
        }

    }
    let updateUser = async () => {

        let object = { name: nameUP, age: ageUP, job: jobUP, country: countryUP }

        let response = await fetch(`api/update/${id}`, {
            method: "put", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        })

        let message = await response.json()

        if (message.acknowledged) {
            return navigate("/")
        }
    }

    let [create, setCreate] = useState(false);
    let [update, setUpdate] = useState(false);

    //! Updating
    let [nameUP, setNameUP] = useState(user.name)
    let [ageUP, setAgeUP] = useState<string | number>(user.age);
    let [jobUP, setJobUP] = useState(user.job)
    let [countryUP, setCountryUP] = useState(user.country)

    //! Creating
    let [name, setName] = useState("")
    let [age, setAge] = useState<string | number>(0);
    let [job, setJob] = useState("")
    let [country, setCountry] = useState("")

    return (
        <div className="User">

            <div className="user">

                <span> {user._id} </span>
                <h2> {user.name} {user.age} </h2>
                <h3> {user.job} , {user.country} </h3>

            </div>

            <div className="operations">

                <button onClick={deleteUser} >Delete</button>
                <button onClick={() => setUpdate(!update)} >Update</button>
                <button onClick={() => setCreate(!create)}>Create</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); CreateUser() }} className={create ? "create" : "none"}>

                <input type="text" name="name" required placeholder="name" value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="number" name="age" required placeholder="age" value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="text" name="job" required placeholder="job" value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
                <input type="text" name="country" required placeholder="country" value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <button>submit</button>

            </form>

            <form onSubmit={(e) => { e.preventDefault(); updateUser() }} className={update ? "update" : "none"}>

                <input type="text" name="name" required placeholder="name" value={nameUP}
                    onChange={(e) => setNameUP(e.target.value)}
                />
                <input type="number" name="age" required placeholder="age" value={ageUP}
                    onChange={(e) => setAgeUP(e.target.value)}
                />
                <input type="text" name="job" required placeholder="job" value={jobUP}
                    onChange={(e) => setJobUP(e.target.value)}
                />
                <input type="text" name="country" required placeholder="country" value={countryUP}
                    onChange={(e) => setCountryUP(e.target.value)}
                />
                <button>submit</button>

            </form>
        </div>
    );
}
export default User;

//* Loader runs before rendering the component
export let fetchUser = async ({ params }: { params: any }) => {

    let { id } = params
    let response = await fetch(`api/user/${id}`)
    return response.json()
}