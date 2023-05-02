
import { FC, useState, FormEvent, ChangeEvent } from "react";
//* This Component won't load until the loader has finished 
const Home: FC = () => {

    //! User's email & password
    let [email, setEmail] = useState<string>("");
    let [password, setPassword] = useState<string>("");

    //TODO onSubmit run this function
    let Post = async (e: FormEvent) => {
        e.preventDefault();

        console.log(email,password);

        let playing = await fetch("https://restcountries.com/v3.1/all")
        console.log(playing);
        
        let play = await playing.json()

        console.log(play);
        

        let response = await fetch("https://social-media-app-backend-bv7l.onrender.com/log-in", {
            method: "Post", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        console.log(response);

        let result = await response.json();

        console.log(result);
    }

    return (
        <div className="Home">
            <h1> The users data aaaaaaa</h1>

            <form onSubmit={Post}>
                <label htmlFor="email">Email</label>
                <input className="input" type="email" name="email" required maxLength={30} value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />

                <label htmlFor="email">Password</label>

                <input className="input" type="number" required maxLength={20} value={[password]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />

                <button type="submit">submit</button>
            </form>

        </div>
    )
}
export default Home;
