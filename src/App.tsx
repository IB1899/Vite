
import { FC } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"

const App: FC = () => {

    //* This gives us the current location of the user
    let location = useLocation()


    return (
        <div className="app">


            {/* Will appear in every page  */}
            <header className=" flex space-x-20 justify-center ">
                <h2 className="">React Router</h2>

                <nav>
                    <NavLink to={"/"} >Home</NavLink>
                    <NavLink to={"/about"} >About</NavLink>
                    <NavLink to={"/menu"} >Menu</NavLink>
                    <NavLink to={"/data"} >Data</NavLink>
                    <NavLink to={"/contact"} >Contact</NavLink>
                    <NavLink to={"/uploadImages"} >uploadImages</NavLink>
                </nav>
            </header>

            {/* Each page here will only appear at its route  */}
            <Outlet />

        </div>
    )
}
export default App

