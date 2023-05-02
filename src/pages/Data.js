import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLoaderData, useNavigate } from "react-router-dom";
const Data = () => {
    let navigate = useNavigate();
    //* runs only when routing
    let data = useLoaderData();
    return (_jsx("div", { className: "Data", children: data.map((one) => (_jsxs("div", { className: "career", onClick: () => navigate(`${one.id}`), children: [_jsx("h2", { children: one.title }), _jsxs("h2", { children: [one.location, "  ", one.salary] })] }, one.id))) }));
};
export default Data;
//* Loader function
export let fetchData = async () => {
    let response = await fetch("http://localhost:8000/careers");
    if (!response.ok) {
        throw Error("Couldn't fetch the data");
    }
    return response.json();
};
