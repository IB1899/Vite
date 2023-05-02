import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, useLoaderData, useParams } from "react-router-dom";
const User = () => {
    let navigate = useNavigate();
    let user = useLoaderData();
    let { id } = useParams();
    let deleteUser = async () => {
        let response = await fetch(`api/user/${id}`, { method: "Delete" });
        let message = await response.json();
        if (message.acknowledged) {
            return navigate("/");
        }
    };
    let CreateUser = async () => {
        let object = { name, age, job, country };
        let response = await fetch("api/user", {
            method: "post", headers: { "Content-type": "application/json" },
            body: JSON.stringify(object)
        });
        let message = await response.json();
        if (message.success) {
            return navigate("/");
        }
    };
    let updateUser = async () => {
        let object = { name: nameUP, age: ageUP, job: jobUP, country: countryUP };
        let response = await fetch(`api/update/${id}`, {
            method: "put", headers: { "Content-Type": "application/json" },
            body: JSON.stringify(object)
        });
        let message = await response.json();
        if (message.acknowledged) {
            return navigate("/");
        }
    };
    let [create, setCreate] = useState(false);
    let [update, setUpdate] = useState(false);
    //! Updating
    let [nameUP, setNameUP] = useState(user.name);
    let [ageUP, setAgeUP] = useState(user.age);
    let [jobUP, setJobUP] = useState(user.job);
    let [countryUP, setCountryUP] = useState(user.country);
    //! Creating
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    let [job, setJob] = useState("");
    let [country, setCountry] = useState("");
    return (_jsxs("div", { className: "User", children: [_jsxs("div", { className: "user", children: [_jsxs("span", { children: [" ", user._id, " "] }), _jsxs("h2", { children: [" ", user.name, " ", user.age, " "] }), _jsxs("h3", { children: [" ", user.job, " , ", user.country, " "] })] }), _jsxs("div", { className: "operations", children: [_jsx("button", { onClick: deleteUser, children: "Delete" }), _jsx("button", { onClick: () => setUpdate(!update), children: "Update" }), _jsx("button", { onClick: () => setCreate(!create), children: "Create" })] }), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); CreateUser(); }, className: create ? "create" : "none", children: [_jsx("input", { type: "text", name: "name", required: true, placeholder: "name", value: name, onChange: (e) => setName(e.target.value) }), _jsx("input", { type: "number", name: "age", required: true, placeholder: "age", value: age, onChange: (e) => setAge(e.target.value) }), _jsx("input", { type: "text", name: "job", required: true, placeholder: "job", value: job, onChange: (e) => setJob(e.target.value) }), _jsx("input", { type: "text", name: "country", required: true, placeholder: "country", value: country, onChange: (e) => setCountry(e.target.value) }), _jsx("button", { children: "submit" })] }), _jsxs("form", { onSubmit: (e) => { e.preventDefault(); updateUser(); }, className: update ? "update" : "none", children: [_jsx("input", { type: "text", name: "name", required: true, placeholder: "name", value: nameUP, onChange: (e) => setNameUP(e.target.value) }), _jsx("input", { type: "number", name: "age", required: true, placeholder: "age", value: ageUP, onChange: (e) => setAgeUP(e.target.value) }), _jsx("input", { type: "text", name: "job", required: true, placeholder: "job", value: jobUP, onChange: (e) => setJobUP(e.target.value) }), _jsx("input", { type: "text", name: "country", required: true, placeholder: "country", value: countryUP, onChange: (e) => setCountryUP(e.target.value) }), _jsx("button", { children: "submit" })] })] }));
};
export default User;
//* Loader runs before rendering the component
export let fetchUser = async ({ params }) => {
    let { id } = params;
    let response = await fetch(`api/user/${id}`);
    return response.json();
};
