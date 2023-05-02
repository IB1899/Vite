import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, useActionData } from "react-router-dom";
//! Form & Action
const Contact = () => {
    let ActionData = useActionData();
    return (_jsxs("div", { className: "Contact", children: [_jsxs(Form, { method: "post", action: "/contact", children: [_jsx("label", { htmlFor: "", children: "title" }), _jsx("input", { type: "text", name: "title", required: true }), _jsx("label", { htmlFor: "", children: "message" }), _jsx("textarea", { name: "message", required: true, cols: 30, rows: 10 }), _jsx("button", { children: "submit" })] }), _jsx("div", { className: "data", children: ActionData && ActionData.map((one) => (_jsxs("div", { className: "piece", children: [_jsxs("h2", { children: [" ", one.title, " "] }), _jsxs("p", { children: [" ", one.message, " "] })] }, one.id))) })] }));
};
let array = [];
//* Action method
export let publish = async ({ request }) => {
    let id = Math.floor(Math.random() * 100000);
    //* Contains the form data, instead of using the old way of states
    let data = await request.formData();
    let holder = { id, title: data.get('title'), message: data.get("message") };
    array = [...array, holder];
    return array;
};
export default Contact;
