import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const App = () => {
    //* This gives us the current location of the user
    let location = useLocation();
    return (_jsxs("div", { className: "app", children: [_jsxs("header", { className: " flex space-x-20 justify-center ", children: [_jsx("h2", { className: "", children: "React Router" }), _jsxs("nav", { children: [_jsx(NavLink, { to: "/", children: "Home" }), _jsx(NavLink, { to: "/about", children: "About" }), _jsx(NavLink, { to: "/menu", children: "Menu" }), _jsx(NavLink, { to: "/data", children: "Data" }), _jsx(NavLink, { to: "/contact", children: "Contact" }), _jsx(NavLink, { to: "/uploadImages", children: "uploadImages" })] })] }), _jsx(Outlet, {})] }));
};
export default App;
