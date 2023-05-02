import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
export const Page = () => {
    return (_jsxs("div", { className: "Page", children: [_jsx("h1", { children: " This is the main Page " }), _jsxs("nav", { children: [_jsx(NavLink, { to: "p1", children: "Page1" }), _jsx(NavLink, { to: "p2", children: "Page2" })] })] }));
};
export const Page1 = () => {
    return (_jsx("div", { className: "Page1", children: _jsx("h1", { children: " This is Page One " }) }));
};
export const Page2 = () => {
    return (_jsx("div", { className: "Page2", children: _jsx("h1", { children: " This is Page two " }) }));
};
