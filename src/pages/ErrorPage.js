import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouteError, Link } from "react-router-dom";
//* This page will render in the errorElement whenever that route throws an error
const ErrorPage = () => {
    //* We'll have access to the error because it's connected to the same Route
    let error = useRouteError();
    return (_jsxs("div", { className: "ErrorPage", children: [_jsx("h1", { children: "Error" }), _jsxs("h2", { children: [" ", error.message, " "] }), _jsx(Link, { to: "/", children: "Return to Home page" })] }));
};
export default ErrorPage;
