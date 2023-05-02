import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import "./style/style.css"

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Outlet } from "react-router-dom"

//* Pages
import Home from "./pages/Home"
import About from "./pages/About"
import { Page, Page1, Page2 } from './pages/Page'
import Data, { fetchData } from './pages/Data'
import Details, { FetchOne } from './pages/Detail'
import Undefined from './pages/404'
import ErrorPage from './pages/ErrorPage'
import Contact, { publish } from './pages/Contact'

//*  Using lazy lading with react-router-dom 6.4+
let ImageUpload = lazy(() => import('./pages/ImageUpload'))
let OneImage = lazy(() => import('./pages/OneImage'))
import { fetchImages } from './pages/ImageUpload'

//* Root Layout
import App from "./App"

let Router = createBrowserRouter(

  createRoutesFromElements(
    //* What is in the '<App />' will appear in all pages
    <Route path="/" element={<App />} >

      {/* //! This Is the Outlet(Children) of the App */}
      <Route path='' element={<Outlet />} errorElement={<ErrorPage />}>

        <Route index element={<Home />}  />

      </Route>
      
      <Route path="about" element={<About />} />

      {/* This is a route that has nested routes */}
      <Route path='menu' element={<Outlet />}>

        {/* //! This Is the Outlet(children) of the Menu */}
        <Route index element={<Page />} />
        <Route path='p1' element={<Page1 />} />
        <Route path='p2' element={<Page2 />} />

      </Route>

      {/* Route Parameter */}
      <Route path='data' element={<Outlet />} errorElement={<ErrorPage />}>

        {/* If any child throws an error the errorElement will intercept and render whatever inside it  */}
        <Route index element={<Data />} loader={fetchData} />
        <Route path=':id' element={<Details />} loader={FetchOne} />

      </Route>

      <Route path='contact' errorElement={<ErrorPage />} action={publish} element={<Contact />} />

      {/* //! Uploading & fetching images */}
      <Route path='uploadImages' errorElement={<ErrorPage />}
        element={<Suspense fallback={<h1> loading... </h1>}> <Outlet /> </Suspense>}
      >
        <Route index element={<ImageUpload />} loader={fetchImages} />
        <Route path=':id' element={<OneImage />} />

      </Route>

      {/* If didn't catch all the above pages render this */}
      <Route path='*' element={<Undefined />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
