import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
//* This Component won't load until the loader has finished 
const Home = () => {
    //! User's email & password
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    //TODO onSubmit run this function
    let Post = async (e) => {
        e.preventDefault();
        console.log(email, password);
        let playing = await fetch("https://restcountries.com/v3.1/all");
        console.log(playing);
        let play = await playing.json();
        console.log(play);
        let response = await fetch("https://social-media-app-backend-bv7l.onrender.com/log-in", {
            method: "Post", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        console.log(response);
        let result = await response.json();
        console.log(result);
    };
    return (_jsxs("div", { className: "Home", children: [_jsx("h1", { children: " The users data aaaaaaa" }), _jsxs("form", { onSubmit: Post, children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { className: "input", type: "email", name: "email", required: true, maxLength: 30, value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("label", { htmlFor: "email", children: "Password" }), _jsx("input", { className: "input", type: "number", required: true, maxLength: 20, value: [password], onChange: (e) => setPassword(e.target.value) }), _jsx("button", { type: "submit", children: "submit" })] })] }));
};
export default Home;
