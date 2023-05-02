import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
const Details = () => {
    // let { id } = useParams();
    // let numericId = parseInt(id!, 10)
    //* runs only when routing
    let one = useLoaderData();
    let [check, setCheck] = useState(true);
    if (!check) {
        throw Error("The App has crashed");
    }
    return (_jsx("div", { className: "Details", children: _jsxs("div", { className: "career", children: [_jsx("h2", { onClick: () => setCheck(false), children: one.title }), _jsxs("h2", { children: [one.location, "  ", one.salary] })] }) }));
};
export default Details;
//* Loader function
export let FetchOne = async ({ params }) => {
    //* We can access the id here since we added it in its path. ( path=":id" loader={FetchOne} )
    let { id } = params;
    let response = await fetch("http://localhost:8000/careers/" + id);
    if (!response.ok) {
        throw Error("The data aren't found");
    }
    return response.json();
};
