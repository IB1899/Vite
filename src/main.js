import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./style/style.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from "react-router-dom";
//* Pages
import Home from "./pages/Home";
import About from "./pages/About";
import { Page, Page1, Page2 } from './pages/Page';
import Data, { fetchData } from './pages/Data';
import Details, { FetchOne } from './pages/Detail';
import Undefined from './pages/404';
import ErrorPage from './pages/ErrorPage';
import Contact, { publish } from './pages/Contact';
//*  Using lazy lading with react-router-dom 6.4+
let ImageUpload = lazy(() => import('./pages/ImageUpload'));
let OneImage = lazy(() => import('./pages/OneImage'));
import { fetchImages } from './pages/ImageUpload';
//* Root Layout
import App from "./App";
let Router = createBrowserRouter(createRoutesFromElements(
//* What is in the '<App />' will appear in all pages
_jsxs(Route, { path: "/", element: _jsx(App, {}), children: [_jsx(Route, { path: '', element: _jsx(Outlet, {}), errorElement: _jsx(ErrorPage, {}), children: _jsx(Route, { index: true, element: _jsx(Home, {}) }) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsxs(Route, { path: 'menu', element: _jsx(Outlet, {}), children: [_jsx(Route, { index: true, element: _jsx(Page, {}) }), _jsx(Route, { path: 'p1', element: _jsx(Page1, {}) }), _jsx(Route, { path: 'p2', element: _jsx(Page2, {}) })] }), _jsxs(Route, { path: 'data', element: _jsx(Outlet, {}), errorElement: _jsx(ErrorPage, {}), children: [_jsx(Route, { index: true, element: _jsx(Data, {}), loader: fetchData }), _jsx(Route, { path: ':id', element: _jsx(Details, {}), loader: FetchOne })] }), _jsx(Route, { path: 'contact', errorElement: _jsx(ErrorPage, {}), action: publish, element: _jsx(Contact, {}) }), _jsxs(Route, { path: 'uploadImages', errorElement: _jsx(ErrorPage, {}), element: _jsxs(Suspense, { fallback: _jsx("h1", { children: " loading... " }), children: [" ", _jsx(Outlet, {}), " "] }), children: [_jsx(Route, { index: true, element: _jsx(ImageUpload, {}), loader: fetchImages }), _jsx(Route, { path: ':id', element: _jsx(OneImage, {}) })] }), _jsx(Route, { path: '*', element: _jsx(Undefined, {}) })] })));
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: Router }) }));
